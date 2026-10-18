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
      "Looking for the best hot-air brush without falling for fake reviews? Here is the short version: the one-step heated brush is the simplest option for fine to normal hair, because it dries and adds volume in a single pass. For thick hair or pure express drying, a powerful dryer still wins.",
      "Our method: we compare the rated power, the heat and speed settings, what each tool physically includes, and the type of hair each one suits. We only publish figures we can confirm on the product page, and everything else is marked as to be checked at the retailer.",
    ],
    verdict: "Verdict: volume in one motion on fine to normal hair → one-step heated brush. Speed and heavy volume on thick hair → 1875 W dryer. Both links below go to the retailer to check the current price, stock and exact specification.",
    libelleA: "One-step heated brush",
    libelleB: "1875 W hair dryer",
    tableau: [
      { critere: "Best for", a: "Fine to normal hair, daily volume", b: "Thick or soaking-wet hair, express drying" },
      { critere: "Rated power", a: "1100 W", b: "1875 W" },
      { critere: "Controls", a: "3 heat, 2 speed", b: "Check at the retailer" },
      { critere: "Head", a: "Integrated oval brush, no attachments", b: "Check included accessories" },
      { critere: "Handle", a: "One tool, one motion", b: "Dryer only, pair it with a round brush" },
    ],
  },
  "one-step-brush-vs-powerful-dryer": {
    intro: [
      "An honest duel: the one-step heated brush bets on simplicity (one tool, one motion, volume as it dries), the 1875 W dryer bets on raw power and portability.",
      "Choose by hair type: fine to normal and rushed in the morning → heated brush. Thick, curly or simply in a hurry after the gym → powerful dryer.",
    ],
    verdict: "If you keep only one: heated brush for simplicity, 1875 W dryer for power and travel. Heat settings, accessories and warranty vary, so confirm them at the retailer before you buy.",
    libelleA: "One-step heated brush",
    libelleB: "1875 W hair dryer",
    tableau: [
      { critere: "Styling time", a: "One pass, volume as you dry", b: "3–6 min drying, then style" },
      { critere: "Learning curve", a: "Low", b: "Low" },
      { critere: "Weak point", a: "Underpowered on very thick hair", b: "No volume or style on its own" },
      { critere: "Travel", a: "Bulky relative to a dryer", b: "Lightweight, built for travel" },
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
