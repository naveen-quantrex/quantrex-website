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
  title: "Quantrex — Software for professionals",
  description:
    "Quantrex builds focused, purpose-built software for professionals working in complex, regulated industries.",
  metadataBase: new URL("https://quantrex.com.au"),
  openGraph: {
    title: "Quantrex — Software for professionals",
    description: "Software built for the niches that matter.",
    url: "https://quantrex.com",
    siteName: "Quantrex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantrex",
    description: "Software built for the niches that matter.",
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
