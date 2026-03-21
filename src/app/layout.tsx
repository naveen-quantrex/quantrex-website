import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
