import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/section";

export const metadata: Metadata = {
  title: "Products | Quantrex - VisaDocket & Vertical SaaS",
  description:
    "Quantrex builds focused software products for high-friction industries. VisaDocket is practice management software for migration professionals.",
};

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
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <a
            href="https://visadocket.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="card block overflow-hidden transition-transform hover:-translate-y-0.5"
          >
            <div className="bg-[var(--accent)] px-8 py-10 text-white">
              <div className="pill border-white/20 bg-white/10 text-white">Live product</div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-4xl font-semibold tracking-[-0.05em]">VisaDocket</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78">
                    A vertical SaaS platform for migration professionals, combining client
                    records, applications, documents, compliance support, and operational tooling.
                  </p>
                </div>
                <ArrowUpRight className="mt-1 hidden h-5 w-5 sm:block" />
              </div>
            </div>
            <div className="grid gap-3 bg-[var(--surface-strong)] px-8 py-8 sm:grid-cols-2">
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

          <div className="card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-light)] text-[var(--accent-strong)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em]">More products ahead</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Quantrex is built around the idea that high-friction industries deserve software
              that actually respects the details of the work.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              If you operate in a niche where existing software is slowing your team down, we&apos;re
              open to shaping the right product with you.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-secondary">
                Share an idea
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
