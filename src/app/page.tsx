import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Server,
  Shield,
  Wrench,
  Laptop,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const services = [
  {
    title: "IT Support",
    description:
      "Responsive coverage for devices, users, networks, and the day-to-day issues that slow teams down.",
    icon: Laptop,
  },
  {
    title: "Field Engineering",
    description:
      "Onsite delivery for installations, upgrades, rollouts, troubleshooting, and project work across physical sites.",
    icon: Wrench,
  },
  {
    title: "Custom Software",
    description:
      "Internal tools, workflow systems, and portals shaped around the way your operation actually runs.",
    icon: Server,
  },
  {
    title: "Vertical SaaS",
    description:
      "Focused products for specialist industries where generic platforms create friction instead of clarity.",
    icon: Shield,
  },
];

const metrics = [
  { value: "4", label: "service layers under one team" },
  { value: "1", label: "partner for support through software" },
  { value: "100%", label: "built around operational fit" },
];

const principles = [
  "Support, engineering, and software in one delivery partner",
  "Built for businesses with specialist workflows and real-world complexity",
  "Clear, practical execution without generic MSP packaging",
];

const reasons = [
  {
    number: "01",
    title: "Operations first",
    body: "We start with the workflow, the friction point, and the delivery risk before recommending the technology.",
  },
  {
    number: "02",
    title: "One connected stack",
    body: "Support, field work, systems, and software are delivered together so ownership stays clear.",
  },
  {
    number: "03",
    title: "Designed to fit",
    body: "We do our best work where a business needs a tailored approach, not a standard package with extra jargon.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="pb-18 pt-10 sm:pb-24 sm:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-4xl">
            <span className="pill animate-fade-up">Australia-based technology partner</span>
            <h1 className="animate-fade-up delay-100 mt-6 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
              A calmer, smarter way to run support, field engineering, and software delivery.
            </h1>
            <p className="editorial-kicker animate-fade-up delay-200 mt-6 max-w-2xl">
              Quantrex helps businesses stay operational with dependable IT services and
              software that matches the shape of the work. We bring support, engineering,
              and product thinking into one consistent team.
            </p>
            <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
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

          <div className="card overflow-hidden">
            <div className="bg-[var(--accent)] px-6 py-8 text-white sm:px-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/80">
                Operational design
              </p>
              <p className="mt-4 max-w-sm text-2xl font-semibold tracking-[-0.04em]">
                Technology support shaped around real business conditions.
              </p>
            </div>
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="bg-[var(--accent-soft)] px-6 py-8 sm:px-8">
                <p className="panel-label text-[var(--text)]">Coverage</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  User support, onsite delivery, custom software, and product capability.
                </p>
              </div>
              <div className="bg-[var(--bg-soft)] px-6 py-8 sm:px-8">
                <p className="panel-label text-[var(--text)]">Approach</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Practical, steady delivery for operations that need reliability more than noise.
                </p>
              </div>
            </div>
            <div className="bg-[var(--taupe)] px-6 py-6 sm:px-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Quantrex blends service capability with product discipline.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-6 sm:p-8">
            <p className="panel-label">What we do</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="stat-value text-[var(--accent-strong)]">{metric.value}</div>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <p className="panel-label">Best fit</p>
            <div className="mt-4 space-y-4">
              {principles.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-strong)]" />
                  <p className="text-sm leading-6 text-[var(--muted)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mb-12 max-w-3xl">
          <p className="section-eyebrow">Services</p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
            Four connected capabilities, designed to feel like one team.
          </h2>
          <p className="section-description">
            From frontline support to specialist product work, Quantrex closes the gaps that
            usually appear when service providers, engineers, and software teams are separated.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="card p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-light)] text-[var(--accent-strong)]">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
              <Link href="/services" className="btn-tertiary mt-5">
                Learn more
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="card overflow-hidden">
            <div className="bg-[var(--surface-strong)] px-8 py-8">
              <p className="section-eyebrow mb-0">Products</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Purpose-built software for high-friction industries.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                Quantrex builds focused products where specialist teams need deeper workflow fit
                than a generic CRM or operations platform can provide.
              </p>
            </div>
            <a
              href="https://visadocket.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[var(--accent-soft)] px-8 py-8 transition-colors hover:bg-[var(--bg-soft)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="pill border-[var(--border)] bg-[rgba(255,250,245,0.7)] text-[var(--accent-strong)]">
                    Live product
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">VisaDocket</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    Practice management software for migration professionals covering client
                    workflows, compliance, applications, and document operations.
                  </p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 text-[var(--accent-strong)] sm:block" />
              </div>
            </a>
          </div>

          <div className="card p-8">
            <p className="section-eyebrow mb-6">Why Quantrex</p>
            <div className="space-y-6">
              {reasons.map((item) => (
                <div key={item.number} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] font-mono text-xs text-[var(--accent-strong)]">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-10">
        <div className="card overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[var(--taupe)] px-8 py-10">
              <p className="panel-label text-[var(--text)]">Next step</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Need support, onsite engineering, or a system built properly?
              </h2>
            </div>
            <div className="px-8 py-10">
              <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">
                Quantrex works with businesses that need reliable service and software that
                reduces operational friction. Start with a conversation and we can shape the
                right mix of support, engineering, and product capability.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Contact Quantrex
                </Link>
                <Link href="/products" className="btn-secondary">
                  View products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
