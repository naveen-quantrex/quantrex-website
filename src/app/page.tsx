import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Code2, Headset, Rocket } from "lucide-react";
import { siteConfig } from "@/config/site";
import { clientProjects, ownProducts, services, workSteps } from "@/config/content";
import { Container, SectionHeading } from "@/components/section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: `${siteConfig.name}: ${siteConfig.tagline}`,
    description: siteConfig.description,
    path: "/",
  }),
  title: { absolute: `${siteConfig.name}: ${siteConfig.tagline}` },
};

const icons = { "custom-software": Code2, "ai-automation": Bot, "product-builds": Rocket, "it-support": Headset } as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.25fr_0.75fr] lg:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow rise">{siteConfig.location}</p>
            <h1 className="h-display rise-2 mt-5">
              Software and AI that fit how your business already runs.
            </h1>
            <p className="lead rise-3 mt-6 max-w-2xl">
              {siteConfig.name} builds custom software, automation and focused products for small and growing
              businesses. You work directly with the developer, from the first call to launch and after.
            </p>
            <div className="rise-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Start a project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn btn-secondary">
                See what I build
              </Link>
            </div>
          </div>

          {/* Decorative illustration of the idea, not a claim about any client. */}
          <div className="rise-3 hidden lg:block" aria-hidden="true">
            <div className="card space-y-3 p-6">
              {[
                { label: "Today", text: "Spreadsheets, email threads, copy and paste" },
                { label: "Build", text: "One simple web app your team actually uses" },
                { label: "Next", text: "Automation and AI take the repetitive steps" },
              ].map((row, i) => (
                <div key={row.label}>
                  <div className="rounded-xl border border-line bg-surface-2 p-4">
                    <p className="eyebrow">{row.label}</p>
                    <p className="mt-1.5 text-[0.95rem] leading-6">{row.text}</p>
                  </div>
                  {i < 2 ? <div className="mx-auto h-4 w-px bg-line" /> : null}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <Container>
          <div>
            <SectionHeading
              eyebrow="Services"
              title="Four ways I can help"
              description="Most projects start with one of these. Many end up using two."
            />
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((s) => {
              const Icon = icons[s.slug];
              return (
                <li key={s.slug} className="card p-6 sm:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{s.summary}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-8">
            <Link href="/services" className="inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline">
              Details on each service
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </Container>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-surface-2 py-20 sm:py-24">
        <Container>
          <div>
            <SectionHeading
              eyebrow="How we work"
              title="Small steps, clear scope, no surprises"
              description="A simple process that keeps you in control and keeps projects moving."
            />
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Selected work */}
      <section className="py-20 sm:py-24">
        <Container>
          <div>
            <SectionHeading
              eyebrow="Selected work"
              title="Products I build and run myself"
              description="Client case studies will appear here as projects wrap up and clients agree to be named."
            />
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {ownProducts.map((p) => (
              <li key={p.name} className="card flex flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                  <span className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
                    {p.status}
                  </span>
                </div>
                <p className="mt-3 leading-7 text-muted">{p.description}</p>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    Visit {p.name}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
              </li>
            ))}
            {clientProjects.map((p) => (
              <li key={p.name} className="card p-6 sm:p-7">
                <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.client}</p>
                <p className="mt-3 leading-7 text-muted">{p.built}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="card flex flex-col items-start justify-between gap-6 bg-accent-soft p-8 sm:p-12 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="h-section">Got something that needs fixing, automating or building?</h2>
              <p className="lead mt-3">Tell me about it. A short message is enough to start the conversation.</p>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
