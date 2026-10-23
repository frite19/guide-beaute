import type { MetadataRoute } from "next";
import { CATEGORIES, PRODUCTS } from "@/data/catalog";
import { COMPARATIFS, GUIDES } from "@/data/guides";

const BASE = "https://guide-beaute.pages.dev";

/**
 * Sitemap volontairement sans /search : une page de résultats de recherche
 * n'a pas sa place dans un sitemap (contenu généré, aucune valeur SEO).
 * Chaque URL porte un lastmod réel, pris sur la date de mise à jour du contenu.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const products = PRODUCTS.filter((p) => p.statut === "active");
  const editorial = [...COMPARATIFS, ...GUIDES];

  const dates = [
    ...products.map((p) => p.majLe),
    ...editorial.map((g) => g.majLe),
  ].sort();
  const latest = dates[dates.length - 1] ?? "2026-10-23";

  const staticPages = [
    "",
    "/comparisons",
    "/guides",
    "/about",
    "/contact",
    "/privacy",
    "/cookies",
    "/legal",
    "/affiliate-disclosure",
  ];

  const entries: MetadataRoute.Sitemap = [
    ...staticPages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: latest,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.6,
    })),
    ...CATEGORIES.map((c) => ({
      url: `${BASE}/category/${c.slug}`,
      lastModified: latest,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...products.map((p) => ({
      url: `${BASE}/product/${p.slug}`,
      lastModified: p.majLe,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...COMPARATIFS.map((g) => ({
      url: `${BASE}/comparisons/${g.slug}`,
      lastModified: g.majLe,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...GUIDES.map((g) => ({
      url: `${BASE}/guides/${g.slug}`,
      lastModified: g.majLe,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return entries;
}
