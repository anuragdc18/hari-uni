import { NextResponse, type NextRequest } from "next/server";
import { formMeta, formSchemas, isFormKind, labelize } from "@/lib/forms";
import { sendFormMail } from "@/lib/mailer";

export const runtime = "nodejs";

/** Very small in-memory rate limit (per server instance): 5 submissions per IP per 10 minutes. */
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(request: NextRequest, ctx: RouteContext<"/api/forms/[form]">) {
  const { form } = await ctx.params;
  if (!isFormKind(form)) return NextResponse.json({ ok: false, message: "Invalid form." }, { status: 404 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ ok: false, message: "Too many submissions. Please try again later." }, { status: 429 });

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Honeypot (legacy field name "company"): silently accept bot submissions.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return NextResponse.json({ ok: true, message: formMeta[form].success });
  }

  const parsed = formSchemas[form].safeParse(payload);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!errors[key]) errors[key] = issue.message;
    }
    return NextResponse.json({ ok: false, message: "Please check the highlighted fields.", errors }, { status: 422 });
  }

  const data = parsed.data as Record<string, unknown>;
  const lines = [
    `Form: ${formMeta[form].name}`,
    `Page: ${request.headers.get("referer") ?? ""}`,
    `Submitted: ${new Date().toISOString()}`,
    "",
    "Details:",
    ...Object.entries(data).map(([k, v]) => `${labelize(k)}: ${Array.isArray(v) ? v.join(", ") : String(v ?? "")}`),
  ];
  const replyTo = (data.email ?? data.gmail) as string | undefined;

  try {
    await sendFormMail({ subject: formMeta[form].subject, body: lines.join("\n"), replyTo });
  } catch (err) {
    console.error(`[forms:${form}]`, err);
    return NextResponse.json({ ok: false, message: "Could not send the form right now. Please WhatsApp or call HARI." }, { status: 500 });
  }
  return NextResponse.json({ ok: true, message: formMeta[form].success });
}
