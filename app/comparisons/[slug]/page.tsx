import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPARATIFS } from "@/data/guides";
import { getProduct } from "@/data/catalog";
import { AffiliateButton } from "@/components/AffiliateButton";
import { Disclosure } from "@/components/Disclosure";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return COMPARATIFS.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const g = COMPARATIFS.find((x) => x.slug === params.slug);
  if (!g) return {};
  return { title: g.titre, description: g.description };
}

const CONTENUS: Record<
  string,
  { intro: string[]; verdict: string; libelleA?: string; libelleB?: string; tableau: { critere: string; a: string; b: string }[] }
> = {
  "best-hot-air-brush-2026": {
    intro: [
      "Looking for the best hot-air brush without falling for fake reviews? Here is the short version: for gentle daily use on fine to normal hair, the 5-in-1 multifunction brush is the simplest. For thick hair or express drying, a powerful dryer still wins.",
      "Our method: we compare declared power, included attachments, weight, stated noise and gentleness (heat settings, cool shot). No invented tests, no fictional discounts.",
    ],
    verdict: "Verdict: gentle, versatile routine → AeroStyle 5-in-1 brush. Speed and heavy volume → Pro 1875 W dryer + round brush. Both links below go to the retailer to check current price and stock.",
    libelleA: "5-in-1 hot-air brush",
    libelleB: "1875 W hair dryer",
    tableau: [
      { critere: "Best for", a: "Fine to normal hair, daily use", b: "Thick, long, curly hair" },
      { critere: "Power", a: "1000 W, moderate heat", b: "1875 W, fast drying" },
      { critere: "Versatility", a: "5 attachments, curls + smoothing", b: "Diffuser + concentrator" },
      { critere: "Bulk", a: "Bulky, not travel-friendly", b: "Heavy but classic" },
    ],
  },
  "5-in-1-brush-vs-powerful-dryer": {
    intro: [
      "An honest duel: the 5-in-1 brush bets on gentleness and simplicity (one tool, one motion), the powerful dryer bets on speed.",
      "Choose by hair type: fine and rushed in the morning → 5-in-1. Thick, curly or precise blowouts → dryer + attachments.",
    ],
    verdict: "If you keep only one: 5-in-1 for simplicity, Pro dryer for power. Check attachments and warranty at the retailer.",
    libelleA: "5-in-1 hot-air brush",
    libelleB: "1875 W hair dryer",
    tableau: [
      { critere: "Styling time", a: "5–10 min, one tool", b: "3–6 min drying + styling" },
      { critere: "Learning curve", a: "Low", b: "Medium (round brush)" },
      { critere: "Frizz", a: "Gentle ionic", b: "Ionic + cool shot" },
    ],
  },
  "best-foundation-for-dry-skin": {
    intro: [
      "Most dry-skin foundation advice assumes a liquid or serum formula. A foundation stick behaves differently: the compact cream is denser, goes on in thin layers, and its matte finish sits on top of the skin instead of melting into it. On dehydrated skin that reads flat rather than luminous.",
      "That does not make the stick a bad choice — it changes the order of the routine. On dry or normal-to-dry skin the cream base has to go on first, in enough quantity to do its job. The stick then only has to even out the tone, not carry the hydration.",
      "The realistic expectation: a matte stick will never give you a dewy finish. What it does give you is speed, a controlled shine level, and a format that survives a bag.",
    ],
    verdict:
      "Dry-skin routine: apply the ceramide cream generously and let it set, then pass the stick over in two thin layers with a damp sponge. Keep the stick out of flaky areas. If you want glow on top, mist or mix a drop of hydration rather than expecting it from the stick itself.",
    libelleA: "Matte stick",
    libelleB: "Hydrating cream base",
    tableau: [
      { critere: "Format", a: "Cream stick, applied from the tube", b: "Lotion cream, worked into the skin" },
      { critere: "Finish", a: "Natural matte, shine-free", b: "Skin-like, soft glow" },
      { critere: "Role", a: "Evens out tone on top of a base", b: "Does the hydrating work itself" },
      { critere: "Coverage", a: "Buildable, light to medium", b: "Light, used as a base layer" },
      { critere: "Best for", a: "Normal to combination skin, or on the go", b: "Dry to normal skin, morning and night" },
      { critere: "Skip if", a: "Very dry or flaky skin with no rich base first", b: "Oily skin that needs matte control" },
    ],
  },
};

export default function ComparisonDetail({ params }: { params: { slug: string } }) {
  const g = COMPARATIFS.find((x) => x.slug === params.slug);
  if (!g) notFound();
  const c = CONTENUS[g.slug] ?? { intro: [g.description], verdict: "Compare the detailed reviews below, then check price and stock at the retailer.", tableau: [] };
  const produits = g.produitsLies.map(getProduct).filter(Boolean);
  return (
    <>
      <p style={{ margin: "22px 0 0", fontSize: "0.88rem" }}><Link href="/">Home</Link> / <Link href="/comparisons">Comparisons</Link> / {g.titre}</p>
      <h1 style={{ fontFamily: "var(--font-display)", margin: "8px 0" }}>{g.titre}</h1>
      <p style={{ color: "var(--muted)" }}>{g.description} · {g.lectureMin} min read · Updated {g.majLe}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={g.image} alt={g.imageAlt} style={{ borderRadius: 18, width: "100%", maxHeight: 380, objectFit: "cover" }} />
      <div className="prose" style={{ marginTop: 16 }}>
        {c.intro.map((p, i) => <p key={i}>{p}</p>)}
        <Disclosure />
        {c.tableau.length > 0 && (
          <>
            <h2>Comparison table</h2>
            <table className="compare-table">
              <thead><tr><th>Criterion</th><th>{c.libelleA ?? "Option A"}</th><th>{c.libelleB ?? "Option B"}</th></tr></thead>
              <tbody>{c.tableau.map((r) => <tr key={r.critere}><td><strong>{r.critere}</strong></td><td>{r.a}</td><td>{r.b}</td></tr>)}</tbody>
            </table>
          </>
        )}
        <h2>Our argued recommendation</h2>
        <p>{c.verdict}</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "12px 0" }}>
          {produits.map((p) => p && (
            <AffiliateButton key={p.slug} url={p.urlAffiliation} productSlug={p.slug} category={p.categorie} merchant={p.marchand} label={`View: ${p.nom.slice(0, 28)}…`} />
          ))}
        </div>
        <h2>Detailed reviews</h2>
      </div>
      <div className="grid-3">
        {produits.map((p) => p && <ProductCard key={p.slug} p={p} />)}
      </div>
    </>
  );
}
