import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Quantrex — IT Support, Field Engineering & Custom Software",
  description: "Quantrex delivers IT support, field engineering, custom software development, infrastructure management, and SaaS product strategy for Australian businesses.",
};
import { ArrowRight, CheckCircle2, Headphones, Network, Wrench, Workflow, ShieldCheck, Cloud } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/section";

const serviceGroups = [
  {
    title: "IT Support",
    icon: Headphones,
    points: [
      "User support and issue resolution",
      "Device, email, and connectivity troubleshooting",
      "Managed maintenance and operational support",
    ],
  },
  {
    title: "Field Engineering",
    icon: Wrench,
    points: [
      "Onsite deployments and installations",
      "Hardware rollouts and replacements",
      "Site troubleshooting and hands-on engineering work",
    ],
  },
  {
    title: "Custom Software Development",
    icon: Workflow,
    points: [
      "Internal tools and workflow systems",
      "Customer portals and operational dashboards",
      "Automation for manual business processes",
    ],
  },
  {
    title: "Infrastructure & Systems",
    icon: Network,
    points: [
      "Business systems review and improvements",
      "Cloud-connected applications and integrations",
      "Support for secure, reliable operations",
    ],
  },
  {
    title: "Security-Minded Delivery",
    icon: ShieldCheck,
    points: [
      "Operational resilience and sensible controls",
      "Support for businesses with regulated workflows",
      "Clear documentation and maintainable systems",
    ],
  },
  {
    title: "SaaS Product Strategy",
    icon: Cloud,
    points: [
      "Validation and shaping of focused software products",
      "MVP design and delivery",
      "Long-term product iteration for niche markets",
    ],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="py-20 sm:py-24">
        <SectionIntro
          eyebrow="Services"
          title="Technology services that keep businesses running and moving."
          description="Quantrex supports clients across day-to-day IT operations, onsite engineering work, custom software delivery, and long-term product development."
        />
      </section>

      <section className="border-t border-(--border) py-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceGroups.map((service) => (
            <div key={service.title} className="card flex flex-col p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--accent-light) text-(--accent)">
                <service.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tight">{service.title}</h2>
              <ul className="mt-4 flex-1 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-(--muted)">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-(--green)" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-(--border) py-20">
        <div className="card p-8 sm:p-10">
          <p className="section-eyebrow">How we work</p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understand the operation",
                body: "We start with the real workflow, support gap, or systems problem instead of forcing a preset package.",
              },
              {
                step: "02",
                title: "Deliver the right layer",
                body: "That may be support coverage, onsite engineering, custom software, or a combination.",
              },
              {
                step: "03",
                title: "Improve continuously",
                body: "We help stabilize operations first, then create leverage through better tooling and automation.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-(--border) bg-background text-xs font-bold text-(--muted-2)">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-(--muted)">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-(--border) pt-8">
            <Link href="/contact" className="btn-primary">
              Discuss your requirements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
