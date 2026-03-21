import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Wrench, Laptop, Server, Shield, ChevronRight, Building2, MapPin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const services = [
  {
    title: "IT Support",
    description:
      "Responsive support for day-to-day IT operations, user issues, devices, networks, and business continuity.",
    icon: Laptop,
  },
  {
    title: "Field Engineering",
    description:
      "Hands-on onsite engineering for installs, upgrades, troubleshooting, hardware rollouts, and site visits.",
    icon: Wrench,
  },
  {
    title: "Custom Software",
    description:
      "Business software tailored to your workflows, with practical automation and systems that fit how your team works.",
    icon: Server,
  },
  {
    title: "SaaS Products",
    description:
      "Focused software products designed for industries where generic tools create friction and wasted effort.",
    icon: Shield,
  },
];

const highlights = [
  "Managed IT support and issue resolution",
  "Onsite field engineering coverage",
  "Internal tools, portals, and workflow systems",
  "Vertical SaaS product development",
];

const industries = ["Professional services", "Operations teams", "Distributed businesses", "Regulated industries"];

const reasons = [
  {
    number: "01",
    title: "Practical delivery",
    body: "We focus on operational outcomes. No generic packages — every engagement starts with understanding how your business actually works.",
  },
  {
    number: "02",
    title: "Full-stack capability",
    body: "Support, field engineering, custom software, and SaaS product development under one partner — so nothing falls between vendors.",
  },
  {
    number: "03",
    title: "Built to fit",
    body: "We work best where the business has real complexity and off-the-shelf tools consistently fall short.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="pb-16 pt-20 sm:pb-24 sm:pt-24">
        <div className="max-w-4xl">
          <span className="pill animate-fade-up">
            Australia-based technology partner
          </span>
          <h1 className="animate-fade-up delay-100 mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            IT support, field engineering, software, and SaaS built for real operations.
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-lg leading-8 text-(--muted)">
            Quantrex helps businesses stay supported, stay operational, and build the right
            systems for growth. We combine practical IT services with custom software and
            product thinking.
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
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-(--border) pt-8">
            <span className="flex items-center gap-1.5 text-sm text-(--muted-2)">
              <Building2 className="h-3.5 w-3.5" />
              Quantrex Pty Ltd
            </span>
            <span className="text-(--border)">·</span>
            <span className="flex items-center gap-1.5 text-sm text-(--muted-2)">
              <MapPin className="h-3.5 w-3.5" />
              Australia
            </span>
            <span className="text-(--border)">·</span>
            <span className="text-sm text-(--muted-2)">IT Services &amp; Engineering</span>
            <span className="text-(--border)">·</span>
            <span className="text-sm text-(--muted-2)">Custom Software &amp; SaaS</span>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <div className="card p-6 md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--muted-2)">
              What we do
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-(--border) bg-background p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-(--green)" />
                  <span className="text-sm leading-6 text-(--muted)">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--muted-2)">
              Industries we serve
            </p>
            <div className="mt-6 space-y-3">
              {industries.map((item) => (
                <div key={item} className="rounded-2xl border border-(--border) bg-background px-4 py-3 text-sm text-(--muted)">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-(--border) py-20">
        <div className="mb-12 max-w-3xl">
          <p className="section-eyebrow">Services</p>
          <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            IT services and software, delivered by one team.
          </h2>
          <p className="section-description">
            From day-to-day support to complex software builds, Quantrex covers the
            full technology stack for businesses that need reliable infrastructure and
            custom systems.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--accent-light) text-(--accent)">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-(--muted)">{service.description}</p>
              <Link href="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-(--accent) hover:opacity-80">
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-(--border) py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card p-8">
            <p className="section-eyebrow">Products</p>
            <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Software built for industries where generic tools fall short.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-(--muted)">
              Quantrex builds vertical SaaS products for high-friction industries.
              VisaDocket is the first — purpose-built for migration professionals
              who need more than a generic CRM.
            </p>
            <a
              href="https://visadocket.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-2xl border border-(--border) bg-background p-6 transition-colors hover:bg-(--surface-hover)"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="pill border-[rgba(34,197,94,0.2)]! bg-[rgba(34,197,94,0.08)]! text-(--green)!">
                    Live product
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">VisaDocket</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-(--muted)">
                    Practice management software for migration professionals, covering client workflows,
                    compliance, applications, and document operations.
                  </p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 text-(--accent) sm:block" />
              </div>
            </a>
          </div>

          <div className="card p-8">
            <p className="section-eyebrow">Why Quantrex</p>
            <div className="space-y-6">
              {reasons.map((item) => (
                <div key={item.number} className="flex gap-4">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-(--border) bg-background text-xs font-bold text-(--muted-2)">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-(--muted)">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-(--border) py-20">
        <div className="card p-10 text-center">
          <p className="section-eyebrow">Next step</p>
          <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            Need support, onsite engineering, or a system built properly?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-(--muted)">
            Quantrex works with businesses that need reliable service and software that makes operations easier.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Quantrex
            </Link>
            <Link href="/products" className="btn-secondary">
              View products
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
