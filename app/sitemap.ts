import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/experience", "/projects", "/blog", "/contact"];

  return routes.map((route) => ({
    url: `https://muhammadishaq.xyz${route}`,
    lastModified: new Date("2026-10-08"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
