import type { Metadata } from "next";
import { defaultDescription, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const title = "Quantrex | IT Support, Field Engineering, Software & SaaS";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Quantrex",
  },
  description: defaultDescription,
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: "Quantrex Pty Ltd" }],
  creator: siteName,
  publisher: siteName,
  category: "Technology services",
  keywords: [
    "Quantrex",
    "IT support Melbourne",
    "field engineering Australia",
    "custom software development",
    "SaaS product development",
    "technology services Australia",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: defaultDescription,
  },
  robots: {
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

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    legalName: "Quantrex Pty Ltd",
    url: siteUrl,
    email: "naveen@quantrex.com.au",
    telephone: "+61466300421",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    sameAs: ["https://linkedin.com/in/naveengugulothu"],
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    knowsAbout: [
      "IT support",
      "Field engineering",
      "Custom software development",
      "Vertical SaaS",
      "Infrastructure management",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "en-AU",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
