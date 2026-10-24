import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, getCategory, getProductsByCategory } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import { Disclosure } from "@/components/Disclosure";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cat = getCategory(params.slug);
  if (!cat) return {};
  return {
    title: `${cat.nom}: 2026 Comparison & Top Picks`,
    description: `${cat.nom} — ${cat.description} Honest comparison, detailed reviews and transparent retailer links.`,
    alternates: { canonical: `/category/${cat.slug}/` },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = getCategory(params.slug);
  if (!cat) notFound();
  const produits = getProductsByCategory(params.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: cat.nom,
    description: cat.description,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p style={{ margin: "22px 0 0", fontSize: "0.88rem" }}><Link href="/">Home</Link> / {cat.nom}</p>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", margin: "8px 0" }}>{cat.nom}</h1>
      <p style={{ color: "var(--muted)", maxWidth: 720 }}>{cat.description} Every product below has a detailed review (strengths, limits, who it is for) and a verified retailer link.</p>
      <Disclosure />
      {produits.length === 0 ? (
        <p>No active products in this category yet.</p>
      ) : (
        <div className="grid-3" style={{ marginTop: 16 }}>
          {produits.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      )}
      <section className="section prose">
        <h2>How we compare ({cat.nom.toLowerCase()})</h2>
        <h3>1. Verifiable criteria</h3>
        <p>Declared composition and specs, format, tolerance (fragrance, pH), ease of use. No invented tests.</p>
        <h3>2. Who it is for — and who should skip it</h3>
        <p>Each review names the ideal audience and cases where another product fits better, with links to our <Link href="/comparisons">comparisons</Link> and <Link href="/guides">guides</Link>.</p>
      </section>
    </>
  );
}
