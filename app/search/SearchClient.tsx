"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES, PRODUCTS } from "@/data/catalog";
import { COMPARATIFS, GUIDES } from "@/data/guides";
import { ProductCard } from "@/components/ProductCard";

export default function SearchClient() {
  const searchParams = useSearchParams();
  const rawQ = searchParams.get("q") ?? "";
  const q = rawQ.trim().toLowerCase();

  const prods = q
    ? PRODUCTS.filter((p) =>
        `${p.nom} ${p.marque} ${p.description} ${p.categorie}`.toLowerCase().includes(q)
      )
    : [];
  const cats = q ? CATEGORIES.filter((c) => `${c.nom} ${c.description}`.toLowerCase().includes(q)) : [];
  const articles = q
    ? [...COMPARATIFS, ...GUIDES].filter((g) => `${g.titre} ${g.description}`.toLowerCase().includes(q))
    : [];

  return (
    <>
      <h1 style={{ fontFamily: "var(--font-display)", margin: "26px 0 6px" }}>Search</h1>
      <form className="hero-search" action="/search" method="get" role="search">
        <input name="q" defaultValue={rawQ} placeholder="E.g. vitamin C, brush, budget…" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
      {!q && <p style={{ color: "var(--muted)" }}>Type a keyword above. Try “brush”, “serum”, “budget”.</p>}
      {q && (
        <>
          <p><strong>{prods.length + cats.length + articles.length}</strong> result(s) for “{rawQ}”</p>
          {cats.length > 0 && (
            <><h2>Categories</h2><ul>{cats.map((c) => <li key={c.slug}><Link href={`/category/${c.slug}`}>{c.nom}</Link> — {c.description}</li>)}</ul></>
          )}
          {prods.length > 0 && (
            <><h2>Products</h2><div className="grid-3">{prods.map((p) => <ProductCard key={p.slug} p={p} />)}</div></>
          )}
          {articles.length > 0 && (
            <><h2>Comparisons & guides</h2><ul>
              {articles.map((a) => (
                <li key={a.slug}><Link href={`/${a.type === "comparison" ? "comparisons" : "guides"}/${a.slug}`}>{a.titre}</Link> — {a.description}</li>
              ))}
            </ul></>
          )}
          {prods.length + cats.length + articles.length === 0 && (
            <p>No results. Try “hair”, “face”, “makeup” or browse our <Link href="/comparisons">comparisons</Link>.</p>
          )}
        </>
      )}
    </>
  );
}
