import type { CSSProperties } from "react";

/**
 * Headline split into words that rise out of a mask, one after another. Pure CSS
 * (works before JS loads). `accentFrom` is the index of the first word that gets
 * the gradient accent. Reduced motion shows the words immediately.
 */
export function MaskWords({
  text,
  accentFrom,
  startDelay = 0.12,
}: {
  text: string;
  accentFrom?: number;
  startDelay?: number;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="mask-word">
            <span
              className={accentFrom !== undefined && i >= accentFrom ? "text-gradient" : undefined}
              style={{ "--w": `${(startDelay + i * 0.055).toFixed(3)}s` } as CSSProperties}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
