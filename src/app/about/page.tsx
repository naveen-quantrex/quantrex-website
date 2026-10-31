import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Linkedin, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { aboutText } from "@/config/content";
import { Container, PageHeader } from "@/components/section";
import { JsonLd } from "@/lib/json-ld";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `About ${siteConfig.name}`,
  description: `${siteConfig.name} is a small Melbourne software studio run by ${siteConfig.founder.name}.`,
  path: "/about",
});

const initials = siteConfig.founder.name
  .split(" ")
  .map((p) => p[0])
  .slice(0, 2)
  .join("");

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteConfig.founder.name,
          jobTitle: siteConfig.founder.role,
          worksFor: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          sameAs: [siteConfig.founder.linkedin],
        }}
      />
      <PageHeader
        eyebrow="About"
        title="A small studio, on purpose"
        description="One developer, direct communication, and software built to be useful rather than impressive."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-2xl space-y-5 text-lg leading-8 text-muted">
            {aboutText.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <aside className="card h-fit p-6 sm:p-8" aria-label="Founder">
            <div className="flex items-center gap-4">
              {/* TODO(Naveen): replace the initials with a real photo (public/ + next/image, with alt text). */}
              <span
                aria-hidden="true"
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-xl font-semibold text-accent-ink"
              >
                {initials}
              </span>
              <div>
                <h2 className="text-lg font-semibold">{siteConfig.founder.name}</h2>
                <p className="text-sm text-muted">{siteConfig.founder.role}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 border-t border-line pt-5 text-sm">
              <li className="flex items-center gap-2.5 text-muted">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {siteConfig.location}
              </li>
              <li>
                <a
                  href={siteConfig.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-medium text-accent underline-offset-4 hover:underline"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </aside>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="card flex flex-col items-start justify-between gap-6 bg-accent-soft p-8 sm:p-10 md:flex-row md:items-center">
            <h2 className="h-section max-w-xl">Want to talk about your project?</h2>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
