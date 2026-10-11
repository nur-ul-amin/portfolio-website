import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "")

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ]
}
