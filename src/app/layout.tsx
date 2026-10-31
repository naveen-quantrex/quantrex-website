import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { defaultDescription, siteName, siteUrl } from "@/lib/seo";
import { JsonLd } from "@/lib/json-ld";
import { SiteShell } from "@/components/site-shell";
import { MotionController } from "@/components/motion/motion-controller";
import "./globals.css";
import "./motion.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName}: ${siteConfig.tagline}`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteConfig.founder.name }],
  creator: siteConfig.founder.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: `${siteName}: ${siteConfig.tagline}`,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: siteConfig.locale,
    type: "website",
    images: [{ url: "/og", width: 1200, height: 630, alt: `${siteName}: ${siteConfig.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName}: ${siteConfig.tagline}`,
    description: defaultDescription,
    images: ["/og"],
  },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1020" },
  ],
};

// Only facts that are true today: a brand, a website, a contact address and a location.
// No legal name, ABN, opening hours, geo-coordinates or price range are published.
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    ...(siteConfig.legalName ? { legalName: siteConfig.legalName } : {}),
    url: siteUrl,
    logo: `${siteUrl}/icon`,
    email: siteConfig.contactEmail,
    description: defaultDescription,
    address: { "@type": "PostalAddress", addressLocality: "Melbourne", addressCountry: "AU" },
    founder: { "@type": "Person", name: siteConfig.founder.name },
    ...(siteConfig.social.length ? { sameAs: siteConfig.social.map((s) => s.href) } : {}),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "en-AU",
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <JsonLd data={structuredData} />
        <div className="scroll-progress" aria-hidden="true" />
        <MotionController />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
