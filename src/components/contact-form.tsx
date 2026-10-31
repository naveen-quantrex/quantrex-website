"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  contactSchema,
  flattenErrors,
  serviceOptions,
  type ContactFieldErrors,
  type ContactInput,
} from "@/lib/contact-schema";

type Status = "idle" | "sending" | "sent" | "error";

const empty: ContactInput = { name: "", email: "", phone: "", service: "", message: "", website: "" };

const inputClass =
  "mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-muted/70 aria-[invalid=true]:border-red-600 dark:aria-[invalid=true]:border-red-400";

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

  const set = (key: keyof ContactInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    const check = contactSchema.safeParse(values);
    if (!check.success) {
      setErrors(flattenErrors(check.error));
      setFormError("Please check the highlighted fields.");
      requestAnimationFrame(() => errorRef.current?.focus());
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus("sent");
        return;
      }

      const data = (await res.json().catch(() => ({}))) as { error?: string; fieldErrors?: ContactFieldErrors };
      if (data.fieldErrors) setErrors(data.fieldErrors);
      setFormError(data.error ?? `Something went wrong. Please email ${siteConfig.contactEmail} instead.`);
      setStatus("error");
      requestAnimationFrame(() => errorRef.current?.focus());
    } catch {
      setFormError(`We could not reach the server. Please check your connection or email ${siteConfig.contactEmail}.`);
      setStatus("error");
      requestAnimationFrame(() => errorRef.current?.focus());
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="card flex flex-col items-start gap-4 p-8 sm:p-10">
        <CheckCircle2 className="h-9 w-9 text-accent" aria-hidden="true" />
        <h2 className="h-section">Thanks, message sent.</h2>
        <p className="lead">
          I will reply to <span className="font-medium text-ink">{values.email}</span> as soon as I can.
        </p>
      </div>
    );
  }

  const field = (key: keyof ContactInput) => ({
    "aria-invalid": errors[key] ? (true as const) : undefined,
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });
  const err = (key: keyof ContactInput) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-1.5 text-sm text-red-700 dark:text-red-300">
        {errors[key]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name <span aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required value={values.name} onChange={set("name")} className={inputClass} {...field("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email <span aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required value={values.email} onChange={set("email")} className={inputClass} {...field("email")} />
          {err("email")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium">
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} className={inputClass} {...field("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium">
            What do you need? <span className="font-normal text-muted">(optional)</span>
          </label>
          <div className="relative">
            <select id="service" name="service" value={values.service} onChange={set("service")} className={`${inputClass} appearance-none pr-10`} {...field("service")}>
              <option value="">Choose one</option>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
          </div>
          {err("service")}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Tell me about the problem <span aria-hidden="true">*</span>
          <span className="sr-only"> (required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={set("message")}
          placeholder="What are you trying to fix or build, and who will use it?"
          className={`${inputClass} resize-y`}
          {...field("message")}
        />
        {err("message")}
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
      </div>

      {formError ? (
        <p ref={errorRef} tabIndex={-1} role="alert" className="rounded-xl border border-red-600/40 bg-red-600/10 px-4 py-3 text-sm text-red-800 dark:text-red-200">
          {formError}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send message"}
          {status !== "sending" ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
        </button>
        <p className="text-sm text-muted">
          Prefer email?{" "}
          <a className="font-medium text-accent underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
        </p>
      </div>
    </form>
  );
}
