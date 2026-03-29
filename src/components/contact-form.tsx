"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center justify-center gap-4 p-8 text-center sm:p-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--green-light)]">
          <CheckCircle2 className="h-7 w-7 text-[var(--green)]" />
        </div>
        <h2 className="text-xl font-semibold">Message received</h2>
        <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
          Thanks for reaching out. Naveen will get back to you shortly at{" "}
          <span className="text-[var(--text)]">{formData.email}</span>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-5 sm:p-8">
      <div>
        <p className="panel-label">Project details</p>
        <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">
          Share a little context about your support needs, onsite work, or software project and
          we&apos;ll come back with the most relevant next step.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-medium">
            Full name <span className="text-[var(--accent-strong)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted-2)] outline-none transition-colors focus:border-[var(--accent)]"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium">
            Email address <span className="text-[var(--accent-strong)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted-2)] outline-none transition-colors focus:border-[var(--accent)]"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone <span className="font-normal text-[var(--muted-2)]">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0400 000 000"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted-2)] outline-none transition-colors focus:border-[var(--accent)]"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="service" className="block text-sm font-medium">
            What do you need?
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
          >
            <option value="">Select a service</option>
            <option value="IT Support">IT Support</option>
            <option value="Field Engineering">Field Engineering</option>
            <option value="Custom Software">Custom Software</option>
            <option value="SaaS Product">SaaS Product</option>
            <option value="General enquiry">General enquiry</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-medium">
          Message <span className="text-[var(--accent-strong)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you need help with, what systems are involved, and any relevant context..."
          className="w-full resize-none rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted-2)] outline-none transition-colors focus:border-[var(--accent)]"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-[var(--accent-strong)]">
          Something went wrong. Please email us directly at naveen@quantrex.com.au
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Send message"}
        {status !== "loading" && <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}
