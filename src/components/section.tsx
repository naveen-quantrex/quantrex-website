import type { ReactNode } from "react";

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
    <section className="relative overflow-hidden border-b border-line">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20">
        <SectionHeading as="h1" size="page" eyebrow={eyebrow} title={title} description={description} />
      </Container>
    </section>
  );
}
