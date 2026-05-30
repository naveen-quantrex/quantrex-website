import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes: Array<{ path: string; priority: number; lastModified: string }> = [
  { path: "/", priority: 1, lastModified: "2026-05-30" },
  { path: "/services", priority: 0.9, lastModified: "2026-05-30" },
  { path: "/products", priority: 0.8, lastModified: "2026-05-30" },
  { path: "/about", priority: 0.7, lastModified: "2026-05-30" },
  { path: "/contact", priority: 0.7, lastModified: "2026-05-28" },
  { path: "/privacy", priority: 0.5, lastModified: "2026-05-30" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified: new Date(route.lastModified),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
