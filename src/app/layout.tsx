import type { Metadata } from "next";
import { defaultDescription, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const title = "Quantrex Melbourne | IT Support & Field Engineering";

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
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Quantrex — IT Support, Field Engineering & Custom Software, Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: defaultDescription,
    images: ["/og"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
    "@type": "LocalBusiness",
    name: "Quantrex",
    legalName: "Quantrex Pty Ltd",
    url: "https://quantrex.com.au",
    email: "hello@quantrex.com.au",
    telephone: "+61466300421",
    image: "https://quantrex.com.au/og",
    logo: "https://quantrex.com.au/og",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3000",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -37.8136,
      longitude: 144.9631,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: ["https://www.linkedin.com/in/naveen-gugulothu/"],
    areaServed: { "@type": "Country", name: "Australia" },
    priceRange: "$$",
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
    alternateName: "Quantrex Pty Ltd",
    url: siteUrl,
    inLanguage: "en-AU",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
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
