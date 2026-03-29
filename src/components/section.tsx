export function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
      <div className="max-w-4xl">
        <p className="section-eyebrow">{eyebrow}</p>
        <h1 className="section-title">{title}</h1>
      </div>
      <p className="section-description lg:ml-auto">{description}</p>
    </div>
  );
}
