import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getCategory, getProduct, getProductsByCategory } from "@/data/catalog";
import { AffiliateButton } from "@/components/AffiliateButton";
import { Disclosure } from "@/components/Disclosure";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.nom}: Honest Review, Pros & Cons`,
    description: `${p.nom} (${p.marque}) — ${p.description.slice(0, 150)}. Detailed review, alternatives and transparent retailer link.`,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p || p.statut === "archived") notFound();
  const cat = getCategory(p.categorie);
  const alternatives = getProductsByCategory(p.categorie).filter((x) => x.slug !== p.slug).slice(0, 2);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.nom,
    brand: p.marque,
    description: p.description,
    image: p.image,
    category: cat?.nom,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <p style={{ margin: "22px 0 0", fontSize: "0.88rem" }}>
        <Link href="/">Home</Link> / <Link href={`/category/${p.categorie}`}>{cat?.nom}</Link> / {p.nom}
      </p>
      <div className="product-hero">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.imageAlt} />
          <p className="price-note" style={{ marginTop: 8 }}>Illustrative photo — check the exact look and reference at {p.marchand} when you click.</p>
        </div>
        <div>
          <span className="badge">{p.marque} · {cat?.nom}</span>
          <h1 style={{ fontFamily: "var(--font-display)", margin: "8px 0" }}>{p.nom}</h1>
          <p style={{ color: "var(--muted)" }}>{p.description}</p>
          <p><strong>Best for:</strong> {p.publicIdeal}</p>
          <p className="price-note">
            {p.prixIndicatif
              ? `Indicative price: ${p.prixDevise ?? "$"}${p.prixIndicatif} (checked ${p.prixVerifieLe}). The actual price may vary — confirmed at the retailer when you click.`
              : `No price shown on purpose: prices change fast. Click to see the current verified price at ${p.marchand}.`}
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "12px 0" }}>
            <AffiliateButton url={p.urlAffiliation} productSlug={p.slug} category={p.categorie} merchant={p.marchand} label="Check price" />
            <AffiliateButton url={p.urlAffiliation} productSlug={p.slug} category={p.categorie} merchant={p.marchand} label="Discover the product" variant="ghost" />
          </div>
          <Disclosure />
          <p className="price-note">Review last updated: {p.majLe} · Retailer: {p.marchand}</p>
        </div>
      </div>

      <section className="prose">
        <h2>Verified specifications</h2>
        <table className="spec-table">
          <tbody>
            {p.caracteristiques.map((c) => {
              const [k, ...rest] = c.split(":");
              return <tr key={c}><th>{k}</th><td>{rest.join(":") || "—"}</td></tr>;
            })}
          </tbody>
        </table>

        <h2>Pros and cons</h2>
        <div className="pros-cons" style={{ fontSize: "0.95rem" }}>
          <div className="panel"><strong>✅ Strengths</strong><ul>{p.avantages.map((a) => <li key={a}>{a}</li>)}</ul></div>
          <div className="panel"><strong>⚠️ Honest limits</strong><ul>{p.inconvenients.map((a) => <li key={a}>{a}</li>)}</ul></div>
        </div>

        <h2>Recommended use cases</h2>
        <ul>{p.casUsage.map((u) => <li key={u}>{u}</li>)}</ul>

        <div className="affiliate-box" style={{ marginTop: 18 }}>
          <div><strong>Ready to see the current deal?</strong><br /><span style={{ color: "#d9c4b4", fontSize: "0.9rem" }}>Stock, shade and price verified at {p.marchand}.</span></div>
          <AffiliateButton url={p.urlAffiliation} productSlug={p.slug} category={p.categorie} merchant={p.marchand} label="View deal" />
        </div>

        {alternatives.length > 0 && (
          <>
            <h2>Relevant alternatives</h2>
            <table className="compare-table">
              <thead><tr><th>Product</th><th>Best for</th><th>Highlight</th><th>Link</th></tr></thead>
              <tbody>
                <tr><td><strong>{p.nom}</strong></td><td>{p.publicIdeal}</td><td>{p.avantages[0]}</td><td><Link href={`/product/${p.slug}`}>Review</Link></td></tr>
                {alternatives.map((a) => (
                  <tr key={a.slug}><td>{a.nom}</td><td>{a.publicIdeal}</td><td>{a.avantages[0]}</td><td><Link href={`/product/${a.slug}`}>Review</Link></td></tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        <h2>Frequently asked questions</h2>
        <div className="faq">
          {p.faq.map((f) => (
            <details key={f.q}><summary><strong>{f.q}</strong></summary><p>{f.a}</p></details>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "16px 0 30px" }}>
          <AffiliateButton url={p.urlAffiliation} productSlug={p.slug} category={p.categorie} merchant={p.marchand} label="Check final price" />
          <Link className="btn btn-ghost" href={`/category/${p.categorie}`}>Back to category</Link>
        </div>
        {alternatives.length > 0 && (
          <div className="grid-3">
            {alternatives.map((a) => <ProductCard key={a.slug} p={a} />)}
          </div>
        )}
      </section>
    </>
  );
}
