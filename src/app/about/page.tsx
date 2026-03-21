import type { Metadata } from "next";
import { Mail, Linkedin, MapPin, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Quantrex — Technology Company Based in Melbourne",
  description: "Quantrex is a Melbourne-based technology company founded by Naveen Gugulothu, delivering IT services, engineering, and custom software for growing businesses.",
};
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/section";

const values = [
  {
    title: "Practical first",
    description: "We value useful outcomes over performative complexity.",
  },
  {
    title: "Small by design",
    description: "A focused team means closer communication, better judgment, and stronger accountability.",
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
      <section className="py-20 sm:py-24">
        <SectionIntro
          eyebrow="About"
          title="Quantrex is a technology company built around operational clarity."
          description="We combine hands-on services with software capability so clients can solve support issues, improve delivery, and build systems that scale properly."
        />
      </section>

      <section className="border-t border-(--border) py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-base leading-8 text-(--muted)">
            <p>
              Quantrex is based in Australia and operates at the intersection of IT services,
              field engineering, and software development. We work with businesses that need
              more than a generic managed services provider — teams that have real operational
              complexity and need a partner who can move across support, infrastructure, and
              custom-built systems.
            </p>
            <p>
              Some clients need dependable day-to-day IT support and onsite coverage. Others
              need internal tools, purpose-built software, or a SaaS product designed around
              a specialist workflow. Quantrex is built to support both — within the same
              engagement if needed.
            </p>
            <p>
              The goal is simple: reduce friction in how businesses operate and give teams
              the technology that actually fits how they work.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-sm">
              <span className="flex items-center gap-2 text-(--muted-2)">
                <Building2 className="h-4 w-4" />
                Quantrex Pty Ltd
              </span>
              <span className="flex items-center gap-2 text-(--muted-2)">
                <MapPin className="h-4 w-4" />
                Melbourne, Australia
              </span>
            </div>
          </div>

          <div className="card p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-(--accent) text-base font-bold text-white">
                NG
              </div>
              <div>
                <p className="font-semibold text-foreground">Naveen Gugulothu</p>
                <p className="text-sm text-(--muted)">Founder &amp; CEO</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-(--muted)">
              Technology operator and builder with experience across IT service delivery,
              systems integration, and software product development. He founded Quantrex to
              provide businesses with an end-to-end technology partner — from support
              through to custom software.
            </p>
            <div className="mt-6 flex flex-col gap-3 border-t border-(--border) pt-5">
              <a
                href="mailto:naveen@quantrex.com"
                className="flex items-center gap-2.5 text-sm text-(--accent) hover:opacity-80 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                naveen@quantrex.com
              </a>
              <a
                href="https://linkedin.com/in/naveengugulothu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-(--muted) hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-(--border) py-20">
        <p className="section-eyebrow mb-10">How we operate</p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="card p-6">
              <h2 className="text-base font-semibold">{value.title}</h2>
              <p className="mt-3 text-sm leading-6 text-(--muted)">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-(--border) py-20">
        <div className="card p-8 sm:p-10 text-center">
          <p className="section-eyebrow">Work with us</p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to work with a technology partner who delivers?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-(--muted)">
            Whether you need ongoing IT support, an onsite engineer, or a system built from scratch —
            start with a conversation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
            <Link href="/services" className="btn-secondary">
              View services
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
