import Link from "next/link";
import type { Metadata } from "next";
import { COMPARATIFS } from "@/data/guides";

export const metadata: Metadata = {
  title: "2026 Beauty Comparisons: Brushes, Skincare, Makeup",
  description: "Our honest beauty comparisons: hot-air brushes, facial skincare, makeup. Verifiable criteria, alternatives and transparent retailer links.",
};

export default function ComparisonsPage() {
  return (
    <>
      <h1 style={{ fontFamily: "var(--font-display)", margin: "26px 0 6px" }}>Beauty comparisons</h1>
      <p style={{ color: "var(--muted)", maxWidth: 720 }}>Pages built for your real searches: best pick, head-to-head, budget. Every comparison recommends with arguments — never SEO filler.</p>
      <div className="grid-3" style={{ marginTop: 16 }}>
        {COMPARATIFS.map((g) => (
          <article key={g.slug} className="card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="cover" src={g.image} alt={g.imageAlt} loading="lazy" />
            <div className="card-body">
              <span className="badge">Comparison · {g.lectureMin} min · Updated {g.majLe}</span>
              <h3><Link href={`/comparisons/${g.slug}`}>{g.titre}</Link></h3>
              <p className="muted">{g.description}</p>
              <Link className="btn btn-ghost btn-small" href={`/comparisons/${g.slug}`}>Read comparison</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
