import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { clientProjects, ownProducts } from "@/config/content";
import { Container, PageHeader } from "@/components/section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Work: products and projects",
  description: `Products built and run by ${siteConfig.name}, and client projects as they are published.`,
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Things I have built"
        description="Products I build and run myself. Client case studies will be added as projects finish and clients agree to be named."
      />

      <section className="py-16 sm:py-20" aria-label="Projects">
        <Container>
          <ul className="grid gap-5 md:grid-cols-2" data-stagger>
            {ownProducts.map((p) => (
              <li key={p.name} className="card flex flex-col p-6 sm:p-8" data-spot data-tilt>
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-2xl font-semibold tracking-tight">{p.name}</h2>
                  <span className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
                    {p.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{p.kind}</p>
                <p className="mt-4 leading-7 text-muted">{p.description}</p>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-u mt-6 inline-flex items-center gap-1.5 self-start font-semibold text-accent"
                  >
                    Visit {p.name}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
              </li>
            ))}
            {clientProjects.map((p) => (
              <li key={p.name} className="card p-6 sm:p-8" data-spot>
                <h2 className="text-2xl font-semibold tracking-tight">{p.name}</h2>
                <p className="mt-1 text-sm text-muted">{p.client}</p>
                <dl className="mt-4 space-y-3 leading-7">
                  <div>
                    <dt className="font-semibold">Problem</dt>
                    <dd className="text-muted">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">What I built</dt>
                    <dd className="text-muted">{p.built}</dd>
                  </div>
                  {p.result ? (
                    <div>
                      <dt className="font-semibold">Result</dt>
                      <dd className="text-muted">{p.result}</dd>
                    </div>
                  ) : null}
                </dl>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
