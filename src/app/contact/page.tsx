import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/section";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Quantrex - Get in Touch",
  description:
    "Contact Quantrex to discuss IT support, field engineering, custom software, or SaaS product development. Based in Melbourne, Australia.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="py-12 sm:py-16">
        <SectionIntro
          eyebrow="Contact"
          title="Start the conversation."
          description="If you need IT support, field engineering, custom software, or want to discuss a SaaS idea, Quantrex is ready to talk."
        />
      </section>

      <section className="pb-20 pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <ContactForm />

          <div className="space-y-4">
            {[
              {
                icon: Mail,
                title: "Email",
                content: (
                  <div className="mt-1 space-y-1 text-sm text-[var(--muted)]">
                    <a href="mailto:naveen@quantrex.com.au" className="block hover:text-[var(--text)]">
                      naveen@quantrex.com.au
                    </a>
                    <a href="mailto:supriya@quantrex.com.au" className="block hover:text-[var(--text)]">
                      supriya@quantrex.com.au
                    </a>
                  </div>
                ),
              },
              {
                icon: Phone,
                title: "Phone",
                content: (
                  <a href="tel:+61466300421" className="mt-1 block text-sm text-[var(--muted)] hover:text-[var(--text)]">
                    0466 300 421
                  </a>
                ),
              },
              {
                icon: MapPin,
                title: "Location",
                content: <div className="mt-1 text-sm text-[var(--muted)]">Melbourne, VIC, Australia</div>,
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div className="flex items-start gap-4">
                  <item.icon className="mt-1 h-5 w-5 text-[var(--accent-strong)]" />
                  <div>
                    <div className="text-sm font-semibold">{item.title}</div>
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
            <div className="card bg-[var(--accent-soft)] p-6">
              <p className="panel-label text-[var(--text)]">Response time</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Usually within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
