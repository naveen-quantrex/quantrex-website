import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/contact-form";
import { Container, PageHeader } from "@/components/section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Contact",
  description: `Tell ${siteConfig.name} about your project. Custom software, AI automation and IT support in Melbourne.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell me what you are trying to fix or build"
        description="A few sentences is plenty. I will reply by email and, if it looks like a fit, suggest a short call."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <aside aria-label="Other ways to reach us" className="space-y-4" data-stagger>
            <div className="card flex items-start gap-4 p-6" data-spot>
              <Mail className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <h2 className="font-semibold">Email</h2>
                <a href={`mailto:${siteConfig.contactEmail}`} className="link-u break-all text-muted hover:text-ink">
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>
            {siteConfig.phone ? (
              <div className="card flex items-start gap-4 p-6" data-spot>
                <Phone className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold">Phone</h2>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-muted hover:text-ink">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            ) : null}
            <div className="card flex items-start gap-4 p-6" data-spot>
              <MapPin className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <h2 className="font-semibold">Location</h2>
                <p className="text-muted">{siteConfig.location}</p>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
