import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services, workSteps } from "@/config/content";
import { Container, PageHeader, SectionHeading } from "@/components/section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Services: custom software, AI automation and IT support",
  description:
    "Custom software, AI and workflow automation, product and MVP builds, and hands-on IT support for small and growing businesses in Melbourne.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Software, automation and IT help, from one person you can reach"
        description="Pick one service or combine them. Each project starts with a short call and a written scope."
      />

      <section className="py-16 sm:py-20" aria-label="Services">
        <Container>
          <ul className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug} id={s.slug} className="card scroll-mt-24 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-tight">{s.title}</h2>
                <p className="mt-2 leading-7 text-muted">{s.summary}</p>
                <ul className="mt-5 space-y-3">
                  {s.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[0.95rem] leading-6">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-line bg-surface-2 py-16 sm:py-20">
        <Container>
          <div>
            <SectionHeading eyebrow="How we work" title="From first call to launch" />
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step, i) => (
              <li key={step.title} className="card p-6">
                <span className="font-mono text-sm font-medium text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-7 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-5">
          <h2 className="h-section max-w-xl">Not sure which one you need?</h2>
          <p className="lead max-w-xl">Describe the problem and I will tell you honestly whether I can help, and how.</p>
          <Link href="/contact" className="btn btn-primary">
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Container>
      </section>
    </>
  );
}
