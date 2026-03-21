import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Quantrex — VisaDocket & Vertical SaaS",
  description: "Quantrex builds focused software products for high-friction industries. VisaDocket is practice management software for migration professionals.",
};
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/section";

export default function ProductsPage() {
  return (
    <SiteShell>
      <section className="py-20 sm:py-24">
        <SectionIntro
          eyebrow="Products"
          title="Focused products for teams working in complex environments."
          description="Quantrex builds software products where specialist workflows matter and generic platforms create friction."
        />
      </section>

      <section className="border-t border-[var(--border)] py-20">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <a
            href="https://visadocket.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="card block p-8 transition-colors hover:bg-[var(--surface-hover)]"
          >
            <div className="pill border-[rgba(34,197,94,0.2)]! bg-[rgba(34,197,94,0.08)]! text-(--green)!">
              Live product
            </div>
            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">VisaDocket</h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
                  A vertical SaaS platform for migration professionals, combining client
                  records, applications, documents, compliance support, and operational tooling.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Client and application tracking",
                    "Document workflows",
                    "Compliance-aware operations",
                    "Client portal capabilities",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--muted)]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="mt-1 hidden h-5 w-5 text-[var(--accent)] sm:block" />
            </div>
          </a>

          <div className="card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">More products ahead</h3>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">
              Quantrex is built around the idea that narrow, high-friction industries deserve better software.
              Future products will follow the same principle: deep fit over generic breadth.
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              If you operate in a niche where existing software is slowing your team down, we&apos;re open to conversations.
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

