import Link from "next/link";
import type { Metadata } from "next";
import { GUIDES } from "@/data/guides";

export const metadata: Metadata = {
  title: "Beauty Buying Guides for Beginners",
  description: "Simple routines, vitamin C, beauty budgets: clear guides with argued recommendations and transparent retailer links.",
};

export default function GuidesPage() {
  return (
    <>
      <h1 style={{ fontFamily: "var(--font-display)", margin: "26px 0 6px" }}>Buying guides</h1>
      <p style={{ color: "var(--muted)", maxWidth: 720 }}>Full answers to one precise intent: getting started, picking an active, managing a budget, finding an alternative.</p>
      <div className="grid-3" style={{ marginTop: 16 }}>
        {GUIDES.map((g) => (
          <article key={g.slug} className="card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="cover" src={g.image} alt={g.imageAlt} loading="lazy" />
            <div className="card-body">
              <span className="badge">Guide · {g.lectureMin} min · Updated {g.majLe}</span>
              <h3><Link href={`/guides/${g.slug}`}>{g.titre}</Link></h3>
              <p className="muted">{g.description}</p>
              <Link className="btn btn-ghost btn-small" href={`/guides/${g.slug}`}>Read guide</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
