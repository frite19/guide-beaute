import Link from "next/link";
import type { Metadata } from "next";
import { CATEGORIES, PRODUCTS, SITE } from "@/data/catalog";
import { COMPARATIFS, GUIDES } from "@/data/guides";
import { ProductCard } from "@/components/ProductCard";
import { Disclosure } from "@/components/Disclosure";
import { AffiliateButton } from "@/components/AffiliateButton";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const selection = PRODUCTS.filter((p) => p.statut === "active").slice(0, 6);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.nom,
    url: "https://guide-beaute.pages.dev",
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: "https://guide-beaute.pages.dev/search?q={query}",
      "query-input": "required name=query",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <div>
          <span className="hero-eyebrow">✦ Verified comparisons — updated October 2026</span>
          <h1>Find the beauty care that is truly made for you.</h1>
          <p className="lead">
            {SITE.nom} compares hot-air brushes, facial skincare and makeup with verifiable criteria.
            No fake reviews, no invented prices: clear fact sheets, then a direct link to the retailer.
          </p>
          <form className="hero-search" role="search" action="/search" method="get">
            <input name="q" placeholder="E.g. vitamin C serum, hair dryer…" aria-label="Search a product or category" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
          <div className="chips">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} className="chip" href={`/category/${c.slug}`}>{c.nom}</Link>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href="/comparisons">Browse comparisons</Link>
            <Link className="btn btn-ghost" href="/guides">Beginner guides</Link>
          </div>
        </div>
        <div className="hero-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1000&q=80&auto=format&fit=crop" alt="Glowing beauty ritual: serums and cream on a bright table" />
          <div className="hero-card-body">
            <strong>Our promise</strong>
            <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: "0.92rem" }}>
              Every recommendation explains <em>for whom</em> and <em>why</em>. Prices are checked at the retailer when you click.
            </p>
          </div>
        </div>
      </section>

      <Disclosure />

      <section className="section" id="recommandes">
        <div className="section-head">
          <div><h2>Recommended products</h2><p>Editor-verified picks — fact sheets with no jargon.</p></div>
          <Link href="/comparisons">All comparisons →</Link>
        </div>
        <div className="grid-3">
          {selection.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="section" id="categories">
        <div className="section-head">
          <div><h2>Popular categories</h2><p>Browse by need, not by brand.</p></div>
        </div>
        <div className="grid-4">
          {CATEGORIES.map((c) => (
            <article key={c.slug} className="card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="cover" src={c.image} alt={c.imageAlt} loading="lazy" />
              <div className="card-body">
                <h3><Link href={`/category/${c.slug}`}>{c.nom}</Link></h3>
                <p className="muted">{c.description}</p>
                <Link className="btn btn-ghost btn-small" href={`/category/${c.slug}`}>Explore</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div><h2>Featured comparisons</h2><p>The questions you actually type into Google.</p></div>
          <Link href="/comparisons">All →</Link>
        </div>
        <div className="grid-3">
          {COMPARATIFS.map((g) => (
            <article key={g.slug} className="card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="cover" src={g.image} alt={g.imageAlt} loading="lazy" />
              <div className="card-body">
                <span className="badge">Comparison · {g.lectureMin} min</span>
                <h3><Link href={`/comparisons/${g.slug}`}>{g.titre}</Link></h3>
                <p className="muted">{g.description}</p>
                <Link className="btn btn-ghost btn-small" href={`/comparisons/${g.slug}`}>Read</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div><h2>Buying guides</h2><p>Step-by-step progress, even as a beginner.</p></div>
          <Link href="/guides">All →</Link>
        </div>
        <div className="grid-3">
          {GUIDES.slice(0, 3).map((g) => (
            <article key={g.slug} className="card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="cover" src={g.image} alt={g.imageAlt} loading="lazy" />
              <div className="card-body">
                <span className="badge">Guide · {g.lectureMin} min</span>
                <h3><Link href={`/guides/${g.slug}`}>{g.titre}</Link></h3>
                <p className="muted">{g.description}</p>
                <Link className="btn btn-ghost btn-small" href={`/guides/${g.slug}`}>Read</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="affiliate-box">
          <div>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)" }}>Our anti-fake-review method</h2>
            <p style={{ margin: "6px 0 0", color: "#d9c4b4" }}>No invented tests, no fictional discounts. Public criteria, manufacturer sources, dated updates.</p>
          </div>
          <AffiliateButton url={PRODUCTS[0].urlAffiliation} productSlug={PRODUCTS[0].slug} category={PRODUCTS[0].categorie} merchant={PRODUCTS[0].marchand} label="Discover the top pick" variant="affiliate" />
        </div>
      </section>
    </>
  );
}
