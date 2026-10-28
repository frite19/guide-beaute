import Link from "next/link";
import type { Metadata } from "next";
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
  return { title: g.titre, description: g.description, alternates: { canonical: `/comparisons/${g.slug}/` } };
}

type Bloc = { h2: string; p?: string[]; ul?: string[]; ol?: string[] };

type Contenu = {
  intro: string[];
  verdict: string;
  libelleA?: string;
  libelleB?: string;
  tableau: { critere: string; a: string; b: string }[];
  /** Sections rédigées entre le tableau et le verdict (h2 + paragraphes + listes). */
  sections?: Bloc[];
  /** FAQ affichée en <details> + balisage FAQPage. */
  faq?: { q: string; a: string }[];
};

const CONTENUS: Record<string, Contenu> = {
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
      { critere: "Coverage", a: "Natural matte, as described on the listing", b: "Light, used as a base layer" },
      { critere: "Best for", a: "Normal to combination skin, or on the go", b: "Dry to normal skin, morning and night" },
      { critere: "Skip if", a: "Very dry or flaky skin with no rich base first", b: "Oily skin that needs matte control" },
    ],
  },
  "shea-butter-vs-body-oil": {
    intro: [
      "They are not the same product in two formats. One is a solid fat that melts on contact with skin; the other is a liquid blend that spreads in seconds. The right choice depends less on \u201cwhich one is better\u201d than on where you apply it, how dry your skin is, and whether you can tolerate a rich film.",
      "Everything on the shea butter side of this page comes from the retailer listing, checked on 18 October 2026. The oil side stays general on purpose: \u201cbody oil\u201d covers formulas that behave nothing alike, so the only reliable source is the ingredient list of the exact bottle in your hand.",
    ],
    verdict:
      "Take the raw shea butter if your dry patches are localised (elbows, knees, heels, feet), you accept a rich texture and a natural scent, you want one product for body and hair ends, and you want a large format that lasts. Take a body oil if you need to cover large areas fast, you dislike a tacky film, you want a satin finish before getting dressed, or you use it for massage. The combination that works best: cream or lotion on damp skin, then a thin layer of butter on the areas that still pull. Oil alone does not replace water, and butter alone can be enough on a very dry patch.",
    libelleA: "Raw shea butter",
    libelleB: "Body oil",
    tableau: [
      { critere: "Format", a: "Solid in a tub, melts on contact with skin", b: "Liquid in a bottle or a spray" },
      { critere: "Texture", a: "Rich, thick, leaves a film", b: "Fluid, glides, spreads fast" },
      { critere: "Absorption", a: "Slow: it stays on the surface", b: "Varies: \u201cdry oils\u201d sink in fast, richer blends stay greasy" },
      { critere: "After feel", a: "Occlusive, can feel tacky", b: "Depends on the base: light film or visible shine" },
      { critere: "Scent", a: "Strong natural scent (raw, unrefined)", b: "From neutral to heavily fragranced" },
      { critere: "Best zones", a: "Very dry patches: elbows, knees, heels, feet", b: "Large areas: legs, arms, back; massage" },
      { critere: "Very dry skin", a: "The film holds", b: "Depends on the formula" },
      { critere: "If you hate greasy films", a: "Avoid", b: "Only if it is labelled dry oil or dry-touch" },
      { critere: "On hair", a: "Works on ends", b: "Works, but watch the dose" },
      { critere: "What the label actually tells you", a: "Format, raw or refined, solid", b: "Ingredient list, \u201cdry oil\u201d, \u201cfragrance-free\u201d" },
    ],
    sections: [
      {
        h2: "What raw shea butter actually is",
        p: [
          "The product on this page is described by the retailer as raw, unrefined, degummed ivory shea butter in a 16 oz (473 ml) tub, marketed for skin, hair and face. That wording matters: \u201cshea butter\u201d on a label can also mean a blended cream that contains a small percentage of butter.",
          "\u201cDegummed\u201d means the gums naturally present in the raw fat were removed. It is still unrefined, so the colour and the smell stay those of the raw ingredient.",
        ],
        ul: [
          "It is not an oil. It is a solid fat that melts at skin temperature, which is why it has to be warmed between the palms before it spreads.",
          "It stays on the surface. That is the whole point on a cracked heel, and exactly why it feels heavy on a large area of skin that is only slightly dry.",
          "It has a smell. Unrefined butter smells like roasted nuts. \u201cNo added fragrance\u201d does not mean \u201cno scent\u201d.",
        ],
      },
      {
        h2: "What a body oil actually is",
        p: [
          "A body oil is a blend: plant oils, mineral oil, or both, sometimes with silicones. Two families cover almost everything on the shelf.",
        ],
        ul: [
          "Dry oils (labelled dry oil or dry-touch): thin film, fast absorption, satin finish. Usually the only oils you can put on in the morning and get dressed right after.",
          "Rich oils: more film, slower absorption, better for massage or for very dry skin at night.",
        ],
      },
      {
        h2: "The rule that matters more than the product",
        p: [
          "Neither product adds water to the skin. An oil or a butter slows down the water that is already there from evaporating. Applied to bone-dry skin, both simply seal in dryness.",
          "The sequence that works: damp skin after the shower, then a lotion or a cream while it is still damp, then a thin layer of butter on the areas that still feel tight. Oil first and lotion after is the order that leaves skin greasy on top and tight underneath.",
        ],
      },
      {
        h2: "The 3 cases where raw shea butter is the wrong pick",
        ol: [
          "You want to cover the whole body straight out of the shower, in under a minute. A solid butter needs warming and time; a lotion or a dry oil does the job faster.",
          "You hate the feeling of a film on the skin, or you get dressed immediately after. The butter stays perceptible for a long while.",
          "You have acne-prone skin on the back, chest or shoulders. A rich occlusive is not the first thing to try on those areas.",
        ],
      },
      {
        h2: "How this page was built",
        p: [
          "No test, no lab result, no invented trial. The shea butter facts come from the retailer listing checked on 18 October 2026. The oil characteristics are general and conditional: read the ingredient list of the exact bottle you are considering before you buy.",
        ],
      },
    ],
    faq: [
      {
        q: "Can shea butter replace a body oil?",
        a: "On a very dry patch, yes. On the whole body, no: it is too rich and too slow to spread.",
      },
      {
        q: "Can I put body oil on top of shea butter?",
        a: "It adds film, not hydration. If you want more moisture, add a water-based lotion first rather than another oil.",
      },
      {
        q: "Why does raw shea butter smell so strong?",
        a: "That is the smell of unrefined butter. Refined shea is closer to neutral, but it has gone through more processing.",
      },
      {
        q: "Is shea butter safe on acne-prone skin?",
        a: "It is a thick, occlusive fat and opinions on comedogenicity differ by source. On acne-prone areas, patch-test on a small zone and use it sparingly rather than assuming it is safe.",
      },
      {
        q: "Which one should I use for eczema?",
        a: "No promises here. Patch-test on a small area and ask a healthcare professional: a product page is not a diagnosis.",
      },
    ],
  },
};

export default function ComparisonDetail({ params }: { params: { slug: string } }) {
  const g = COMPARATIFS.find((x) => x.slug === params.slug);
  if (!g) notFound();
  const c = CONTENUS[g.slug] ?? { intro: [g.description], verdict: "Compare the detailed reviews below, then check price and stock at the retailer.", tableau: [] };
  const produits = g.produitsLies.map(getProduct).filter(Boolean);
  const faqLd = c.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: c.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;
  return (
    <>
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
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
        {produits.length > 0 && produits[0] && (
          <div className="affiliate-box" style={{ marginTop: 18 }}>
            <div>
              <strong>Want to see the current offer?</strong><br />
              <span style={{ color: "#d9c4b4", fontSize: "0.9rem" }}>
                Stock, size and price are confirmed at {produits[0].marchand} when you click.
              </span>
            </div>
            <AffiliateButton
              url={produits[0].urlAffiliation}
              productSlug={produits[0].slug}
              category={produits[0].categorie}
              merchant={produits[0].marchand}
              label="Check price"
            />
          </div>
        )}
        {c.sections?.map((s) => (
          <section key={s.h2}>
            <h2>{s.h2}</h2>
            {s.p?.map((p, i) => <p key={i}>{p}</p>)}
            {s.ul && <ul>{s.ul.map((li) => <li key={li}>{li}</li>)}</ul>}
            {s.ol && <ol>{s.ol.map((li) => <li key={li}>{li}</li>)}</ol>}
          </section>
        ))}
        <h2>Our argued recommendation</h2>
        <p>{c.verdict}</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "12px 0" }}>
          {produits.map((p) => p && (
            <AffiliateButton key={p.slug} url={p.urlAffiliation} productSlug={p.slug} category={p.categorie} merchant={p.marchand} label={`View: ${p.nom.slice(0, 28)}…`} />
          ))}
        </div>
        {c.faq && c.faq.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            <div className="faq">
              {c.faq.map((f) => (
                <details key={f.q}><summary><strong>{f.q}</strong></summary><p>{f.a}</p></details>
              ))}
            </div>
          </>
        )}
        <h2>Detailed reviews</h2>
      </div>
      <div className="grid-3">
        {produits.map((p) => p && <ProductCard key={p.slug} p={p} />)}
      </div>
    </>
  );
}
