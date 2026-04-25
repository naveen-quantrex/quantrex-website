import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Linkedin, Mail, MapPin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "About Quantrex - Melbourne Technology Company",
  description:
    "Learn about Quantrex, a Melbourne technology company delivering IT support, field engineering, custom software, and SaaS products for growing businesses.",
  path: "/about",
  keywords: ["about Quantrex", "Melbourne technology company", "Quantrex Pty Ltd"],
});

const values = [
  {
    title: "Practical first",
    description: "We prioritise useful outcomes over complexity for its own sake.",
  },
  {
    title: "Small by design",
    description: "A focused team means closer communication, stronger judgment, and clear accountability.",
  },
  {
    title: "Built around fit",
    description: "We care about matching the solution to the way the business actually operates.",
  },
  {
    title: "Long-term thinking",
    description: "Good systems should reduce friction today and stay maintainable tomorrow.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="py-12 sm:py-16">
        <SectionIntro
          eyebrow="About"
          title="Quantrex is built around operational clarity."
          description="We combine hands-on services with software capability so clients can solve support issues, improve delivery, and build systems that scale properly."
        />
      </section>

      <section className="py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="card p-5 sm:p-8">
            <div className="space-y-5 text-sm leading-8 text-[var(--muted)] sm:text-base">
              <p>
                Quantrex operates at the intersection of IT services, field engineering, and
                software development. We work with businesses that need more than a generic managed
                services provider and more than a software shop that never sees the real-world operation.
              </p>
              <p>
                Some clients need dependable day-to-day IT support and onsite coverage. Others need
                internal tools, purpose-built software, or a SaaS product designed around a specialist
                workflow. Quantrex is structured to support both, within the same relationship if needed.
              </p>
              <p>
                The goal is simple: reduce friction in how businesses operate and give teams technology
                that feels calm, useful, and aligned with the work.
              </p>
            </div>
            <div className="fine-rule mt-8 flex flex-wrap gap-4 pt-6 text-sm text-[var(--muted)]">
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[var(--accent-strong)]" />
                Quantrex Pty Ltd
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--accent-strong)]" />
                Melbourne, Australia
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card overflow-hidden">
              <div className="bg-[var(--accent-soft)] px-5 py-7 sm:px-8 sm:py-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--accent-strong)] text-base font-semibold text-white">
                    NG
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[var(--text)]">Naveen Gugulothu</p>
                    <p className="text-sm text-[var(--muted)]">CEO</p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-7 sm:px-8 sm:py-8">
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Technology operator and builder with experience across IT service delivery,
                  systems integration, and software product development. Naveen leads Quantrex
                  across service delivery, systems thinking, and product direction.
                </p>
                <div className="fine-rule mt-6 flex flex-col gap-3 pt-6 text-sm">
                  <a
                    href="mailto:naveen@quantrex.com.au"
                    className="flex items-center gap-2.5 break-all text-[var(--accent-strong)] transition-opacity hover:opacity-80"
                  >
                    <Mail className="h-4 w-4" />
                    naveen@quantrex.com.au
                  </a>
                  <a
                    href="https://linkedin.com/in/naveengugulothu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn profile
                  </a>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="bg-[var(--taupe)] px-5 py-7 sm:px-8 sm:py-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--text)] text-base font-semibold text-white">
                    SB
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[var(--text)]">Surpriya Bhukya</p>
                    <p className="text-sm text-[var(--muted)]">Chief Operating Officer</p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-7 sm:px-8 sm:py-8">
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Surpriya supports the operational side of Quantrex, helping keep delivery,
                  coordination, and day-to-day business flow structured and dependable.
                </p>
                <div className="fine-rule mt-6 flex flex-col gap-3 pt-6 text-sm">
                  <a
                    href="mailto:supriya@quantrex.com.au"
                    className="flex items-center gap-2.5 break-all text-[var(--accent-strong)] transition-opacity hover:opacity-80"
                  >
                    <Mail className="h-4 w-4" />
                    supriya@quantrex.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <p className="section-eyebrow">How we operate</p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="card p-6">
              <h2 className="text-lg font-semibold tracking-[-0.03em]">{value.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 pt-8">
        <div className="card overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[var(--taupe)] px-5 py-8 sm:px-8 sm:py-10">
              <p className="panel-label text-[var(--text)]">Work with us</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
                Ready to work with a technology partner who delivers?
              </h2>
            </div>
            <div className="px-5 py-8 sm:px-8 sm:py-10">
              <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
                Whether you need ongoing IT support, an onsite engineer, or a system built from
                scratch, we can start with a practical conversation.
              </p>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link href="/contact" className="btn-primary sm:w-auto">
                  Get in touch
                </Link>
                <Link href="/services" className="btn-secondary sm:w-auto">
                  View services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
