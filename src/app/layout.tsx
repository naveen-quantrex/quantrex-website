import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantrex | IT Support, Field Engineering, Software & SaaS",
  description:
    "Quantrex delivers IT support, field engineering, custom software development, and SaaS products for growing businesses.",
  metadataBase: new URL("https://quantrex.com.au"),
  openGraph: {
    title: "Quantrex | IT Support, Field Engineering, Software & SaaS",
    description: "Practical technology services and products for modern businesses.",
    url: "https://quantrex.com.au",
    siteName: "Quantrex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantrex",
    description: "IT support, field engineering, custom software, and SaaS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
