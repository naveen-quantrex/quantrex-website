import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Code2, Headset, Rocket } from "lucide-react";
import { siteConfig } from "@/config/site";
import { clientProjects, ownProducts, services, workSteps } from "@/config/content";
import { Container, SectionHeading } from "@/components/section";
import { HeroBackground } from "@/components/motion/hero-background";
import { MaskWords } from "@/components/motion/mask-words";
import { Marquee } from "@/components/motion/marquee";
import { ProcessTimeline } from "@/components/motion/process-timeline";
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

/** Sets the CSS variable that staggers an entrance animation. */
const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export default function Home() {
  return (
    <>
      {/* Hero: always dark and cinematic, whatever the visitor's theme */}
      <section className="hero grain relative overflow-hidden" data-pause-offscreen>
        <HeroBackground />
        <div className="hero-beam" aria-hidden="true" />
        <Container className="relative z-10 grid min-h-[min(88svh,820px)] items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="max-w-3xl">
            <p className="eyebrow hero-in" style={delay(0.05)}>
              {siteConfig.location}
            </p>
            <h1 className="h-display mt-5">
              <MaskWords text="Software and AI that fit how your business already runs." accentFrom={7} />
            </h1>
            <p className="lead hero-in mt-6 max-w-2xl" style={delay(0.75)}>
              {siteConfig.name} builds custom software, automation and focused products for small and growing
              businesses. You work directly with the developer, from the first call to launch and after.
            </p>
            <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={delay(0.95)}>
              <Link href="/contact" className="btn btn-primary" data-magnetic>
                Start a project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn btn-secondary" data-magnetic>
                See what I build
              </Link>
            </div>
          </div>

          {/* Decorative illustration of the idea, not a claim about any client. */}
          <div className="hero-panel-in hidden lg:block" style={delay(0.7)} aria-hidden="true">
            <div className="card space-y-3 p-6 backdrop-blur-sm" data-tilt data-spot>
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

      <Marquee items={[...services.map((s) => s.title), "Melbourne, Australia"]} />

      {/* Services */}
      <section className="py-20 sm:py-24">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="Services"
              title="Four ways I can help"
              description="Most projects start with one of these. Many end up using two."
            />
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2" data-stagger>
            {services.map((s) => {
              const Icon = icons[s.slug];
              return (
                <li key={s.slug} className="card p-6 sm:p-7" data-spot>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{s.summary}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-8" data-reveal>
            <Link href="/services" className="link-u inline-flex items-center gap-1.5 font-semibold text-accent">
              Details on each service
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </Container>
      </section>

      <div className="divider-glow" data-reveal aria-hidden="true" />

      {/* Process */}
      <section className="section-band py-20 sm:py-24">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Small steps, clear scope, no surprises"
              description="A simple process that keeps you in control and keeps projects moving."
            />
          </div>
          <div className="mt-12">
            <ProcessTimeline steps={workSteps} />
          </div>
        </Container>
      </section>

      <div className="divider-glow" data-reveal aria-hidden="true" />

      {/* Selected work */}
      <section className="py-20 sm:py-24">
        <Container>
          <div data-reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Products I build and run myself"
              description="Client case studies will appear here as projects wrap up and clients agree to be named."
            />
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2" data-stagger>
            {ownProducts.map((p) => (
              <li key={p.name} className="card flex flex-col p-6 sm:p-7" data-spot>
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
                    className="link-u mt-5 inline-flex items-center gap-1.5 self-start font-semibold text-accent"
                  >
                    Visit {p.name}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
              </li>
            ))}
            {clientProjects.map((p) => (
              <li key={p.name} className="card p-6 sm:p-7" data-spot>
                <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.client}</p>
                <p className="mt-3 leading-7 text-muted">{p.built}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA: night band to close the page */}
      <section className="cta-band grain relative overflow-hidden py-20 sm:py-28">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-mesh hero-mesh-a" data-parallax="0.08" />
          <div className="hero-mesh hero-mesh-b" data-parallax="0.14" />
        </div>
        <Container className="relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center" data-reveal>
            <div className="max-w-xl">
              <h2 className="h-section">Got something that needs fixing, automating or building?</h2>
              <p className="lead mt-3">Tell me about it. A short message is enough to start the conversation.</p>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0" data-magnetic>
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
