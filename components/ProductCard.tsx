import Link from "next/link";
import type { Product } from "@/data/catalog";
import { AffiliateButton } from "./AffiliateButton";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="card">
      <Link href={`/product/${p.slug}`} aria-label={p.nom}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="cover" src={p.image} alt={p.imageAlt} loading="lazy" />
      </Link>
      <div className="card-body">
        <span className="badge">{p.marque}</span>
        <h3><Link href={`/product/${p.slug}`}>{p.nom}</Link></h3>
        <p className="muted">{p.description.slice(0, 110)}…</p>
        <div className="pros-cons">
          <div><strong>+ Highlights</strong><ul>{p.avantages.slice(0, 2).map((a) => <li key={a}>{a}</li>)}</ul></div>
          <div><strong>− Good to know</strong><ul>{p.inconvenients.slice(0, 2).map((a) => <li key={a}>{a}</li>)}</ul></div>
        </div>
        <p className="muted">Best for: {p.publicIdeal}</p>
        <div style={{ display: "flex", gap: 8, marginTop: "auto", flexWrap: "wrap" }}>
          <AffiliateButton url={p.urlAffiliation} productSlug={p.slug} category={p.categorie} merchant={p.marchand} label="Check price" small />
          <Link className="btn btn-ghost btn-small" href={`/product/${p.slug}`}>Full review</Link>
        </div>
        <p className="price-note">Price and stock checked at {p.marchand} when you click — at no extra cost to you.</p>
      </div>
    </article>
  );
}
