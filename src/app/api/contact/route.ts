import { Resend } from "resend";
import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { contactSchema, flattenErrors } from "@/lib/contact-schema";
import { escapeHtml, singleLine } from "@/lib/escape-html";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 20_000;
// Resend's shared sandbox sender works without a verified domain, but it can only
// deliver to the email address that owns the Resend account.
const FALLBACK_FROM = `${siteConfig.name} Website <onboarding@resend.dev>`;

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "unknown").trim();
}

export async function POST(req: Request) {
  const limited = rateLimit(`contact:${clientIp(req)}`, { limit: 5, windowMs: 10 * 60 * 1000 });
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many messages from your connection. Please wait a few minutes and try again." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfterSeconds) } },
    );
  }

  const declared = Number(req.headers.get("content-length") ?? 0);
  if (declared > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "That message is too large to send." }, { status: 413 });
  }

  let raw: unknown;
  try {
    const text = await req.text();
    if (text.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "That message is too large to send." }, { status: 413 });
    }
    raw = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "We could not read that request. Please try again." }, { status: 400 });
  }

  // Honeypot: bots fill every field. Pretend it worked and drop it silently.
  if (typeof raw === "object" && raw !== null && "website" in raw && String((raw as { website: unknown }).website ?? "") !== "") {
    return NextResponse.json({ success: true });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the highlighted fields.", fieldErrors: flattenErrors(parsed.error) },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: `Messages cannot be sent right now. Please email ${siteConfig.contactEmail} instead.` },
      { status: 503 },
    );
  }

  const { name, email, phone, service, message } = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.contactEmail;
  const from = process.env.CONTACT_FROM_EMAIL || FALLBACK_FROM;

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 16px 6px 0;color:#64748b;vertical-align:top;">${label}</td><td style="padding:6px 0;">${value}</td></tr>`;

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;color:#0f172a;">
      <h2 style="margin:0 0 4px;">New enquiry via ${escapeHtml(siteConfig.domain)}</h2>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
      <table style="border-collapse:collapse;">
        ${row("Name", `<strong>${escapeHtml(name)}</strong>`)}
        ${row("Email", escapeHtml(email))}
        ${phone ? row("Phone", escapeHtml(phone)) : ""}
        ${service ? row("Interested in", escapeHtml(service)) : ""}
      </table>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
      <p style="color:#64748b;margin:0 0 8px;">Message</p>
      <p style="white-space:pre-wrap;line-height:1.6;margin:0;">${escapeHtml(message)}</p>
    </div>`;

  const text = [
    `New enquiry via ${siteConfig.domain}`,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    service ? `Interested in: ${service}` : null,
    "",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: singleLine(`New enquiry from ${name}${service ? `: ${service}` : ""}`).slice(0, 200),
      html,
      text,
    });

    if (error) {
      console.error("Contact form: Resend rejected the email:", error);
      return NextResponse.json(
        { error: `We could not send your message. Please email ${siteConfig.contactEmail} instead.` },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form: unexpected error:", err);
    return NextResponse.json(
      { error: `Something went wrong sending your message. Please email ${siteConfig.contactEmail} instead.` },
      { status: 500 },
    );
  }
}
