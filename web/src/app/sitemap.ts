import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/obrigado`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacidade`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
