import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Products — VisaDocket & Eva's Fashion Hub",
  description:
    "Quantrex software products for specialist industries: VisaDocket for migration professionals and Eva's Fashion Hub for boutique fashion retail.",
  path: "/products",
  keywords: [
    "VisaDocket",
    "Eva's Fashion Hub",
    "vertical SaaS Australia",
    "fashion e-commerce",
    "migration software",
    "boutique retail platform",
  ],
});

export default function ProductsPage() {
  return (
    <SiteShell>
      <section className="py-12 sm:py-16">
        <SectionIntro
          eyebrow="Products"
          title="Focused software for teams working in specialist environments."
          description="Quantrex builds software products where narrow workflows matter and generic platforms create more friction than value."
        />
      </section>

      <section className="pb-20 pt-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <a
            href="https://visadocket.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="card block overflow-hidden transition-transform hover:-translate-y-0.5"
          >
            <div className="bg-[var(--accent)] px-5 py-8 text-white sm:px-8 sm:py-10">
              <div className="pill border-white/20 bg-white/10 text-white">Live product</div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">VisaDocket</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
                    A vertical SaaS platform for migration professionals, combining client
                    records, applications, documents, compliance support, and operational tooling.
                  </p>
                </div>
                <ArrowUpRight className="mt-1 hidden h-5 w-5 sm:block" />
              </div>
            </div>
            <div className="grid gap-3 bg-[var(--surface-strong)] px-5 py-7 sm:grid-cols-2 sm:px-8 sm:py-8">
              {[
                "Client and application tracking",
                "Document workflows",
                "Compliance-aware operations",
                "Client portal capabilities",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </a>

          <div className="card block overflow-hidden">
            <div className="bg-[var(--eva-brand)] px-5 py-8 sm:px-8 sm:py-10">
              <div className="pill border-white/20 bg-white/10 text-white">In development</div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    Eva&apos;s Fashion Hub
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
                    A styling-led fashion storefront for curated looks, coordinated outfits, and
                    affordable discovery. Built for boutique brands wanting an AI-powered retail
                    presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-3 bg-[var(--surface-strong)] px-5 py-7 sm:grid-cols-2 sm:px-8 sm:py-8 [&>*:last-child:nth-child(odd)]:col-span-2">
              {[
                "Outfit curation engine",
                "AI stylist chat",
                "Dropshipping integrations",
                "Stripe payments",
                "Weather-aware recommendations",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
