/** Slow capability ticker. Content comes from the real service list, no claims. */
export function Marquee({ items }: { items: readonly string[] }) {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="marquee-item">
          <span className="marquee-dot" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee border-b border-line" data-pause-offscreen>
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
