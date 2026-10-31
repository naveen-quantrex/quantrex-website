/**
 * Single source of truth for brand details.
 *
 * Changing the company name later? Edit `name` (and `legalName` once a legal
 * entity exists) here. Every page, the metadata, the OG image, the icons, the
 * footer, the legal pages and the contact emails read from this file.
 *
 * Nothing legal (Pty Ltd, ABN, "registered company") is rendered while
 * `legalName` and `abn` are null.
 */

const url = (process.env.NEXT_PUBLIC_SITE_URL || "https://quantrex.com.au").replace(/\/$/, "");

export const siteConfig = {
  /** Brand / trading name shown everywhere. */
  name: "Quantrex",

  /**
   * Registered legal entity, e.g. "Example Pty Ltd". Leave null until the
   * entity actually exists: when null, nothing legal is rendered.
   */
  legalName: null as string | null,

  /** Australian Business Number, only shown when set (and legalName/trading status is real). */
  abn: null as string | null,

  tagline: "Practical software and AI for small businesses.",

  description:
    "A Melbourne software studio that builds custom software, AI automation and focused SaaS products for small and growing businesses.",

  /** Canonical site URL. Override with NEXT_PUBLIC_SITE_URL. */
  url,
  /** Host shown in the UI (derived from `url`). */
  domain: new URL(url).host,

  locale: "en_AU",
  location: "Melbourne, Australia",

  /** Public contact address, also the default recipient for the contact form. */
  contactEmail: "hello@quantrex.com.au",

  /** Leave null to hide. Do not publish a personal mobile number unless you want to. */
  phone: null as string | null,

  /**
   * Logo. Swap the mark by editing src/components/logo.tsx, or drop a file in
   * /public and set `imageSrc` (square SVG/PNG) to use it everywhere instead of
   * the generated monogram.
   */
  logo: {
    imageSrc: null as string | null,
    alt: "Quantrex logo",
  },

  /** Social profiles. Empty array renders nothing. */
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/naveen-gugulothu/" },
    { label: "GitHub", href: "https://github.com/naveen-quantrex" },
  ] as { label: string; href: string }[],

  founder: {
    name: "Naveen Gugulothu",
    role: "Founder and developer",
    linkedin: "https://www.linkedin.com/in/naveen-gugulothu/",
  },

  /** Brand colours used for generated images (OG, icons). Keep in sync with globals.css. */
  colors: {
    ink: "#0f172a",
    accent: "#4338ca",
    paper: "#fafaf9",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** "Name" or "Legal Name", for © lines and legal copy. */
export const displayLegalName = siteConfig.legalName ?? siteConfig.name;
