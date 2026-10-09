import type { MetadataRoute } from "next";
import { posts } from "../data/posts";
import { SITE_URL } from "../lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: new Date("2026-10-09"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date("2026-10-09"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date("2026-10-09"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-10-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/experience`,
      lastModified: new Date("2026-10-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-10-09"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const publishedPosts: MetadataRoute.Sitemap = posts
    .filter((post) => post.status !== "draft")
    .map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.published_at
        ? new Date(post.published_at)
        : new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }));

  return [...staticRoutes, ...publishedPosts];
}
