import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES } from "@/data/guides";
import { getProduct } from "@/data/catalog";
import { AffiliateButton } from "@/components/AffiliateButton";
import { Disclosure } from "@/components/Disclosure";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

const ARTICLES: Record<string, string[][]> = {
  "beginner-glow-routine": [
    ["h2", "The 4-step routine (5 minutes)"],
    ["p", "Morning: 1) gentle cleanser, 2) vitamin C serum, 3) moisturizer (a serum-and-moisturizer duo covers steps 2 and 3 in one), 4) SPF 30+ sunscreen. Night: cleanser + cream, with retinol only if your skin tolerates it (one night in three to start)."],
    ["h2", "Common mistakes"],
    ["p", "Layering every active in week one, scrubbing daily, skipping SPF after vitamin C. Start simple for 3 weeks, then adjust one product at a time."],
    ["h2", "Smart budgeting"],
    ["p", "Priority to cleanser + moisturizer + SPF. Serum comes next. No need for 10 products: consistency beats quantity."],
  ],
  "how-to-choose-vitamin-c-serum": [
    ["h2", "The 5 verifiable criteria"],
    ["p", "1) Stabilized form and a concentration printed on the label. 2) Supporting ingredients you can actually read on the label. 3) Opaque airtight bottle. 4) Fragrance-free if you have sensitive skin. 5) Opening date and storage away from heat. Read the bottle before you buy: these are criteria, not promises about any one product."],
    ["h2", "How to use it"],
    ["p", "Morning on dry skin, 3–4 drops, then cream and SPF. Patch-test 48h on the jawline. Persistent tingling or redness: space out, stop, and seek advice."],
  ],
  "best-beauty-picks-by-budget": [
    ["h2", "Around $20: the essentials"],
    ["p", "A gentle cleanser. If budget remains: a simple moisturizing cream. That is 80% of results (cleansing + hydration + consistency)."],
    ["h2", "Around $50: the full routine"],
    ["p", "Cleanser + ceramide cream + sunscreen. Add the vitamin C serum if dullness persists after 3 steady weeks."],
    ["h2", "Around $100: target one need"],
    ["p", "Full routine + one targeted active (vitamin C in the morning) or a styling tool, depending on priority. Don't buy two actives at once."],
  ],
  "alternatives-to-viral-heated-brush": [
    ["h2", "Why look for an alternative?"],
    ["p", "The viral brush doesn't fit everyone: very thick hair, need for express drying, or budget. Two sensible paths: a one-step heated brush (simplicity) or a powerful dryer plus a round brush (control)."],
    ["h2", "Which to pick?"],
    ["p", "Quick daily routine and fine to normal hair → one-step heated brush. Heavy volume, thick hair, speed → 1875 W dryer. Either way, use heat protection and finish with cool air."],
  ],
};

export default function GuideDetail({ params }: { params: { slug: string } }) {
  const g = GUIDES.find((x) => x.slug === params.slug);
  if (!g) notFound();
  const blocks = ARTICLES[g.slug] ?? [["p", g.description]];
  const produits = g.produitsLies.map(getProduct).filter(Boolean);
  return (
    <>
      <p style={{ margin: "22px 0 0", fontSize: "0.88rem" }}><Link href="/">Home</Link> / <Link href="/guides">Guides</Link> / {g.titre}</p>
      <h1 style={{ fontFamily: "var(--font-display)", margin: "8px 0" }}>{g.titre}</h1>
      <p style={{ color: "var(--muted)" }}>{g.description} · {g.lectureMin} min · Updated {g.majLe}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={g.image} alt={g.imageAlt} style={{ borderRadius: 18, width: "100%", maxHeight: 380, objectFit: "cover" }} />
      <div className="prose" style={{ marginTop: 16 }}>
        <Disclosure />
        {blocks.map(([tag, text], i) =>
          tag === "h2" ? <h2 key={i}>{text}</h2> : <p key={i}>{text}</p>
        )}
        <h2>Recommended products in this guide</h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "12px 0" }}>
          {produits.map((p) => p && (
            <AffiliateButton key={p.slug} url={p.urlAffiliation} productSlug={p.slug} category={p.categorie} merchant={p.marchand} label={`View: ${p.nom.slice(0, 30)}…`} />
          ))}
        </div>
      </div>
      <div className="grid-3">
        {produits.map((p) => p && <ProductCard key={p.slug} p={p} />)}
      </div>
    </>
  );
}
