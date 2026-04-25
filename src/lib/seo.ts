import type { Metadata } from "next";

export const siteUrl = "https://quantrex.com.au";
export const siteName = "Quantrex";
export const defaultDescription =
  "Quantrex delivers IT support, field engineering, custom software development, and SaaS products for growing businesses in Australia.";

type SeoConfig = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createSeoMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  noIndex = false,
}: SeoConfig): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

