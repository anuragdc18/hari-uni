import nodemailer from "nodemailer";

/**
 * SMTP transport configured entirely from environment variables
 * (set in Hostinger → Environment Variables; never committed).
 */
export function getTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = (process.env.SMTP_SECURE ?? String(port === 465)) === "true";
  return nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
}

export async function sendFormMail({ subject, body, replyTo }: { subject: string; body: string; replyTo?: string }) {
  const transport = getTransport();
  if (!transport) throw new Error("SMTP is not configured");
  const to = (process.env.MAIL_TO ?? process.env.SMTP_USER ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  const from = process.env.MAIL_FROM ?? process.env.SMTP_USER!;
  await transport.sendMail({ from, to, subject, text: body, replyTo });
}
