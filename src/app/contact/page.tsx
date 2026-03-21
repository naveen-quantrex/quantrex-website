import { Mail, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/section";
import { ContactForm } from "@/components/contact-form";

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
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <ContactForm />

          <div className="space-y-4">
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-(--accent)" />
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <a href="mailto:hello@quantrex.com.au" className="mt-1 block text-sm text-(--muted) hover:text-foreground transition-colors">
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
                  <a href="tel:+61466300421" className="mt-1 block text-sm text-(--muted) hover:text-foreground transition-colors">
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
            <div className="card p-6">
              <p className="text-sm font-semibold">Response time</p>
              <p className="mt-1 text-sm text-(--muted)">Within 1 business day</p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
