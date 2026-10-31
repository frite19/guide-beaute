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

  // Chaque URL est ecrite exactement comme son canonical (slash final inclus,
  // trailingSlash: true). Google recommande <loc> + <lastmod> uniquement :
  // <changefreq> et <priority> sont ignores depuis 2023, donc retires.
  const url = (path: string) => `${BASE}${path}/`.replace(/\/+$/, "/");

  const entries: MetadataRoute.Sitemap = [
    ...staticPages.map((path) => ({
      url: path === "" ? `${BASE}/` : `${BASE}${path}/`,
      lastModified: latest,
    })),
    ...CATEGORIES.map((c) => ({
      url: url(`/category/${c.slug}`),
      lastModified: latest,
    })),
    ...products.map((p) => ({
      url: url(`/product/${p.slug}`),
      lastModified: p.majLe,
    })),
    ...COMPARATIFS.map((g) => ({
      url: url(`/comparisons/${g.slug}`),
      lastModified: g.majLe,
    })),
    ...GUIDES.map((g) => ({
      url: url(`/guides/${g.slug}`),
      lastModified: g.majLe,
    })),
  ];

  return entries;
}
