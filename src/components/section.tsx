import type { ReactNode } from "react";
import { MaskWords } from "./motion/mask-words";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

/** Heading block used at the top of every section. `as` controls the heading level. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
  size,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  size?: "display" | "page";
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Tag
        className={`${size === "display" ? "h-display" : size === "page" || Tag === "h1" ? "h-page" : "h-section"} ${
          eyebrow ? "mt-3" : ""
        }`}
      >{title}</Tag>
      {description ? <p className="lead mt-4">{description}</p> : null}
    </div>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-hero grain relative overflow-hidden" data-pause-offscreen>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-mesh hero-mesh-a" data-parallax="0.08" />
        <div className="bg-grid absolute inset-0" />
      </div>
      <Container className="relative z-10 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow hero-in" style={{ "--d": "0.05s" } as React.CSSProperties}>
            {eyebrow}
          </p>
          <h1 className="h-page mt-3">
            <MaskWords text={title} />
          </h1>
          <p className="lead hero-in mt-4" style={{ "--d": "0.45s" } as React.CSSProperties}>
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
