import type { MetadataRoute } from "next";
import { CATEGORIES, PRODUCTS } from "@/data/catalog";
import { COMPARATIFS, GUIDES } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eclatia-guide.com";
  const pages = [
    "",
    "/comparisons",
    "/guides",
    "/search",
    "/about",
    "/contact",
    "/privacy",
    "/cookies",
    "/legal",
    "/affiliate-disclosure",
    ...CATEGORIES.map((c) => `/category/${c.slug}`),
    ...PRODUCTS.map((p) => `/product/${p.slug}`),
    ...COMPARATIFS.map((g) => `/comparisons/${g.slug}`),
    ...GUIDES.map((g) => `/guides/${g.slug}`),
  ];
  return pages.map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
}
