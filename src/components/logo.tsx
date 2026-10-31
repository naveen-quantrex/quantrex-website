import Image from "next/image";
import { siteConfig } from "@/config/site";

/**
 * The one place the logo is defined. Swap it by:
 *  - setting `siteConfig.logo.imageSrc` to a file in /public (square SVG or PNG), or
 *  - replacing `LogoMark` below with your own SVG.
 * The wordmark always reads `siteConfig.name`.
 */
export function LogoMark({ size = 32 }: { size?: number }) {
  if (siteConfig.logo.imageSrc) {
    return (
      <Image
        src={siteConfig.logo.imageSrc}
        alt=""
        width={size}
        height={size}
        className="shrink-0 rounded-lg"
        priority
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, fontSize: size * 0.5 }}
      className="inline-flex shrink-0 items-center justify-center rounded-lg bg-accent font-bold leading-none text-accent-ink"
    >
      {siteConfig.name.charAt(0).toUpperCase()}
    </span>
  );
}

export function Logo({ showName = true }: { showName?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      {showName ? <span className="text-[1.05rem] font-semibold tracking-tight">{siteConfig.name}</span> : null}
      {!showName ? <span className="sr-only">{siteConfig.name}</span> : null}
    </span>
  );
}
