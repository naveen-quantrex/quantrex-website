import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/work", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: new URL(r.path, siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
