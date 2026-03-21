import { Mail, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/section";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="py-20 sm:py-24">
        <SectionIntro
          eyebrow="Contact"
          title="Start the conversation."
          description="If you need IT support, field engineering, custom software, or want to discuss a SaaS idea, Quantrex is ready to talk."
        />
      </section>

      <section className="border-t border-(--border) py-20">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-8">
            <h2 className="text-2xl font-semibold">What to send us</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-(--muted)">
              <p>Tell us what you need help with, what systems or environments are involved, and whether you need support, onsite work, or software delivery.</p>
              <p>If you already have a project scope, product idea, or business problem mapped out, include that too. A short summary is enough to get started.</p>
            </div>
            <a href="mailto:hello@quantrex.com.au" className="btn-primary mt-8">
              Email Quantrex
            </a>
          </div>

          <div className="space-y-4">
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-(--accent)" />
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <a href="mailto:hello@quantrex.com.au" className="mt-1 block text-sm text-(--muted) hover:text-foreground">
                    hello@quantrex.com.au
                  </a>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-(--accent)" />
                <div>
                  <div className="text-sm font-semibold">Phone</div>
                  <a href="tel:+61466300421" className="mt-1 block text-sm text-(--muted) hover:text-foreground">
                    0466 300 421
                  </a>
                </div>
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-(--accent)" />
                <div>
                  <div className="text-sm font-semibold">Location</div>
                  <div className="mt-1 text-sm text-(--muted)">Melbourne, VIC, Australia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
