"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type FieldDef =
  | { type: "text" | "email" | "tel" | "number"; name: string; label: string; required?: boolean; placeholder?: string; autoComplete?: string; half?: boolean; hint?: string }
  | { type: "select"; name: string; label: string; required?: boolean; options: readonly string[]; placeholder?: string; half?: boolean }
  | { type: "textarea"; name: string; label: string; required?: boolean; placeholder?: string; rows?: number }
  | { type: "radio"; name: string; label: string; required?: boolean; options: readonly string[] }
  | { type: "checkbox"; name: string; label: string; required?: boolean };

interface FormProps {
  kind: "contact" | "apply" | "udaan";
  fields: FieldDef[];
  submitLabel: string;
  extra?: Record<string, string>;
  className?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Accessible, progressively enhanced form. Validates on the server (zod) and shows
 * field-level errors; a honeypot field ("company") mirrors the legacy spam check.
 */
export function Form({ kind, fields, submitLabel, extra, className }: FormProps) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const payload: Record<string, unknown> = { ...extra };
    for (const f of fields) {
      const v = fd.get(f.name);
      payload[f.name] = f.type === "checkbox" ? v === "on" : typeof v === "string" ? v : "";
    }
    payload.company = fd.get("company") ?? "";
    setStatus("submitting");
    setErrors({});
    try {
      const res = await fetch(`/api/forms/${kind}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const json = (await res.json()) as { ok: boolean; message: string; errors?: Record<string, string> };
      if (json.ok) {
        setStatus("success");
        setMessage(json.message);
        formEl.reset();
      } else {
        setStatus("error");
        setMessage(json.message);
        setErrors(json.errors ?? {});
      }
    } catch {
      setStatus("error");
      setMessage("Could not send the form right now. Please WhatsApp or call HARI.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className={cn("rounded-2xl border border-forest-100 bg-forest-50 p-8", className)}>
        <p className="font-display text-2xl text-forest-800">Thank you</p>
        <p className="mt-2 text-forest-800/90">{message}</p>
        <Button type="button" variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn("grid gap-5 sm:grid-cols-2", className)} aria-describedby={status === "error" ? `${id}-status` : undefined}>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {fields.map((f) => {
        const fid = `${id}-${f.name}`;
        const err = errors[f.name];
        const wide = f.type === "textarea" || f.type === "radio" || f.type === "checkbox" || !("half" in f && f.half);
        const common = { id: fid, name: f.name, required: f.required, "aria-invalid": err ? true : undefined, "aria-describedby": err ? `${fid}-err` : undefined };
        return (
          <div key={f.name} className={cn(wide ? "sm:col-span-2" : "")}>
            {f.type === "checkbox" ? (
              <label htmlFor={fid} className="flex items-start gap-3 text-sm text-stone-700">
                <input {...common} type="checkbox" className="mt-1 h-4 w-4 rounded border-stone-300 text-terracotta-600 focus:ring-terracotta-500" />
                <span>{f.label}{f.required && <span aria-hidden="true"> *</span>}</span>
              </label>
            ) : f.type === "radio" ? (
              <fieldset>
                <legend className="field-label">{f.label}{f.required && <span aria-hidden="true"> *</span>}</legend>
                <div className="flex flex-wrap gap-3">
                  {f.options.map((o) => (
                    <label key={o} className="flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm has-[:checked]:border-ink-900 has-[:checked]:bg-ink-900 has-[:checked]:text-white">
                      <input type="radio" name={f.name} value={o} required={f.required} className="sr-only" />
                      {o}
                    </label>
                  ))}
                </div>
              </fieldset>
            ) : (
              <>
                <label htmlFor={fid} className="field-label">{f.label}{f.required && <span aria-hidden="true"> *</span>}</label>
                {f.type === "select" ? (
                  <select {...common} className="field" defaultValue="">
                    <option value="" disabled>{f.placeholder ?? "Select an option"}</option>
                    {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : f.type === "textarea" ? (
                  <textarea {...common} rows={f.rows ?? 4} placeholder={f.placeholder} className="field" />
                ) : (
                  <input {...common} type={f.type} placeholder={f.placeholder} autoComplete={f.autoComplete} inputMode={f.type === "tel" ? "tel" : f.type === "number" ? "numeric" : undefined} className="field" />
                )}
                {"hint" in f && f.hint && !err && <p className="mt-1.5 text-xs text-stone-500">{f.hint}</p>}
              </>
            )}
            {err && <p id={`${fid}-err`} className="mt-1.5 text-sm text-terracotta-700">{err}</p>}
          </div>
        );
      })}
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "submitting"} aria-busy={status === "submitting"}>
          {status === "submitting" ? "Sending…" : submitLabel}
        </Button>
        {status === "error" && (
          <p id={`${id}-status`} role="alert" className="text-sm text-terracotta-700">{message}</p>
        )}
      </div>
    </form>
  );
}
