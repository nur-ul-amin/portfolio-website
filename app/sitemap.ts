import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"
import { BLOG_POSTS, PROJECTS } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "")

  const rootEntry: MetadataRoute.Sitemap[number] = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  }

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  const projectEntries: MetadataRoute.Sitemap = PROJECTS.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date(proj.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [rootEntry, ...blogEntries, ...projectEntries]
}
