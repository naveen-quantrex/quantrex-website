import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Headphones,
  Network,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/section";

export const metadata: Metadata = {
  title: "Services | Quantrex - IT Support, Field Engineering & Custom Software",
  description:
    "Quantrex delivers IT support, field engineering, custom software development, infrastructure management, and SaaS product strategy for Australian businesses.",
};

const serviceGroups = [
  {
    title: "IT Support",
    icon: Headphones,
    points: [
      "User support and issue resolution",
      "Devices, email, and connectivity troubleshooting",
      "Managed maintenance for stable day-to-day operations",
    ],
  },
  {
    title: "Field Engineering",
    icon: Wrench,
    points: [
      "Onsite deployments and installations",
      "Hardware rollouts and replacements",
      "Hands-on engineering and site troubleshooting",
    ],
  },
  {
    title: "Custom Software",
    icon: Workflow,
    points: [
      "Internal tools and workflow systems",
      "Operational dashboards and portals",
      "Automation for repetitive manual processes",
    ],
  },
  {
    title: "Infrastructure & Systems",
    icon: Network,
    points: [
      "Systems reviews and technical improvements",
      "Cloud-connected applications and integrations",
      "Reliable foundations for business continuity",
    ],
  },
  {
    title: "Security-Minded Delivery",
    icon: ShieldCheck,
    points: [
      "Sensible controls and operational resilience",
      "Support for regulated or risk-sensitive workflows",
      "Clear documentation and maintainable setups",
    ],
  },
  {
    title: "Product Strategy",
    icon: Cloud,
    points: [
      "Early shaping for focused software ideas",
      "MVP design and delivery planning",
      "Long-term iteration for niche markets",
    ],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="py-12 sm:py-16">
        <SectionIntro
          eyebrow="Services"
          title="Technology services that keep the operation steady and moving."
          description="Quantrex supports clients across day-to-day IT operations, onsite engineering work, custom software delivery, and long-term product development."
        />
      </section>

      <section className="py-12 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceGroups.map((service) => (
            <div key={service.title} className="card flex flex-col p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-light)] text-[var(--accent-strong)]">
                <service.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{service.title}</h2>
              <ul className="mt-5 flex-1 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-strong)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 pt-8">
        <div className="card overflow-hidden">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-[var(--accent-soft)] px-8 py-10">
              <p className="panel-label text-[var(--text)]">How we work</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
                Diagnose clearly. Deliver the right layer. Improve from there.
              </h2>
            </div>
            <div className="px-8 py-10">
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    step: "01",
                    title: "Understand the operation",
                    body: "We begin with the workflow, support gap, or systems friction that is slowing the team down.",
                  },
                  {
                    step: "02",
                    title: "Deliver the right mix",
                    body: "That may be support coverage, onsite engineering, custom software, or a combination of all three.",
                  },
                  {
                    step: "03",
                    title: "Build momentum",
                    body: "Once the operation is stable, we create leverage through better tooling, systems, and automation.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--bg-soft)] font-mono text-xs text-[var(--accent-strong)]">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary">
                  Discuss your requirements
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
