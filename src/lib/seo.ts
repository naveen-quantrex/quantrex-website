import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const siteUrl = siteConfig.url;
export const siteName = siteConfig.name;
export const defaultDescription = siteConfig.description;

type SeoConfig = {
  /** Page title without the brand suffix (the layout template appends it). */
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function createSeoMetadata({ title, description, path = "/", noIndex = false }: SeoConfig): Metadata {
  const url = new URL(path, siteUrl).toString();
  const ogTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: "/og", width: 1200, height: 630, alt: `${siteName}: ${siteConfig.tagline}` }],
    },
    twitter: { card: "summary_large_image", title: ogTitle, description, images: ["/og"] },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
  };
}
