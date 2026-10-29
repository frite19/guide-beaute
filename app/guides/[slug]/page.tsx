import Link from "next/link";
import { Fragment } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GUIDES } from "@/data/guides";
import { getProduct } from "@/data/catalog";
import { AffiliateButton } from "@/components/AffiliateButton";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const g = GUIDES.find((x) => x.slug === params.slug);
  if (!g) return {};
  return { title: g.titre, description: g.description, alternates: { canonical: `/guides/${g.slug}/` } };
}

type Tableau = { entetes: string[]; lignes: string[][] };

type Bloc = {
  h2: string;
  p?: string[];
  ul?: string[];
  ol?: string[];
  tableau?: Tableau;
};

type Contenu = {
  intro?: string[];
  /** RÃ©ponse directe, affichÃ©e dans un encadrÃ© juste aprÃ¨s l'intro (format Â« position zÃ©ro Â»). */
  reponse?: string;
  blocs: Bloc[];
  /** Encart produit affichÃ© aprÃ¨s le bloc d'index donnÃ© (0 = premier bloc). */
  ctaApresBloc?: number;
  faq?: { q: string; a: string }[];
  /** Maillage interne : uniquement des pages publiÃ©es. */
  liens?: { href: string; label: string }[];
};

const CONTENUS: Record<string, Contenu> = {
  "body-oil-before-or-after-lotion": {
    intro: [
      "There are two ways to put on a body oil, and only one of them works. If the oil goes on first and the lotion on top, the lotion ends up sitting on the film of oil: it cannot sink in. The skin feels greasy on the surface and still tight underneath.",
      "The order that works is the opposite: lotion first, on skin that is still damp, then oil on top. Below: the mechanism in plain terms, the exact sequence, the quantities, and the three cases where the rule changes.",
    ],
    reponse:
      "Lotion first, oil second, on skin that is still damp. The lotion brings water and emollients; the oil laid on top forms a film that slows down water loss. Oil first and lotion after leaves the lotion sitting on that film, without penetrating.",
    blocs: [
      {
        h2: "Why this order, in plain terms",
        p: [
          "Two families of ingredients, two different jobs. The point is not which one is \u201cbetter\u201d: it is that they do not do the same thing, and one of them needs to come first.",
        ],
        tableau: {
          entetes: ["Ingredient family", "What it does", "Typical examples"],
          lignes: [
            ["Humectants and emollients", "Attract and hold water, soften the surface", "Glycerin, hyaluronic acid, ceramides, emulsified butters"],
            ["Occlusives", "Form a film that slows down water evaporation", "Oils, pure butters, waxes, petrolatum"],
          ],
        },
      },
      {
        h2: "The 90-second sequence",
        ol: [
          "Shower in warm water, not hot. Very hot water strips the lipid film faster than it takes to replace it.",
          "Get out and pat the skin dry with a towel, without rubbing until it is completely dry. Slightly damp is the goal.",
          "Apply the lotion or the cream to the whole body within about three minutes, while the skin is still damp. This is where hydration happens.",
          "Apply the oil or the butter last: a small amount, only on the areas that still feel tight â€” elbows, knees, heels, feet.",
        ],
        p: [
          "Total time: about 90 seconds, with no extra product. If you feel you need much more oil, the first step was usually too light rather than the oil being too scarce.",
        ],
      },
      {
        h2: "The 3 cases where the rule changes",
        ol: [
          "Very dry skin in winter: a richer cream first (ceramides, fragrance-free), then a thin layer of shea butter on the rough areas. The butter stays the last step, never the first.",
          "Oily or breakout-prone skin on the body: no oil at all on the chest and back. A lotion is enough; adding an occlusive film where sebum is already present does not help.",
          "You only want a satin finish before going out: the oil still goes last, but for the look rather than for hydration. A dry oil limits stickiness and marks on clothes.",
        ],
      },
      {
        h2: "4 mistakes that cancel the benefit",
        tableau: {
          entetes: ["Mistake", "What happens"],
          lignes: [
            ["Oil on perfectly dry skin", "A greasy film, and the skin still feels tight underneath"],
            ["Lotion applied over the oil", "The lotion stays on the surface instead of sinking in"],
            ["Using too much product", "Stained clothes, a tacky feel, no extra hydration"],
            ["Rubbing the skin dry with the towel", "Removes the water before the lotion can hold it"],
          ],
        },
      },
      {
        h2: "Where a shower oil fits",
        p: [
          "A shower oil cleans while sparing the lipid film. It does not replace the lotion or the body oil: it changes the first step, the cleansing, not the hydration step. If you use one, you can sometimes skip the body oil â€” never the lotion on very dry skin.",
        ],
      },
      {
        h2: "How much product",
        ul: [
          "Lotion: 3 to 4 pumps for the whole body.",
          "Cream in a tub: a small amount per leg.",
          "Oil: 2 to 3 pumps, or a small amount of butter for both legs.",
        ],
        p: [
          "If a product seems to \u201crun out\u201d immediately, check the first step before adding more of the second one.",
        ],
      },
      {
        h2: "How this page was built",
        p: [
          "No test, no lab result, no invented trial. The product details quoted on this page â€” a 19 oz tub, ceramides and hyaluronic acid, fragrance-free, non-comedogenic; raw, unrefined shea butter in a 16 oz tub â€” come from the retailer listings checked in October 2026. The rest is standard body-care practice: patch-test a new product on a small area before using it on the whole body.",
        ],
      },
    ],
    ctaApresBloc: 1,
    faq: [
      {
        q: "Does body oil go before or after lotion?",
        a: "After. Lotion first, on damp skin, then a thin layer of oil on the areas that still feel tight. The oil seals in the water the lotion just brought.",
      },
      {
        q: "Can I put lotion on top of body oil?",
        a: "You can, but it works less well: the lotion stays on the film of oil instead of sinking in. It is not harmful, it is simply the wrong order.",
      },
      {
        q: "Do I need both every day?",
        a: "On very dry skin, yes: lotion everywhere, then oil or butter only on the rough areas. On normal skin, the lotion alone is usually enough.",
      },
      {
        q: "How long should I wait before getting dressed?",
        a: "About 2 to 3 minutes for a lotion, 5 to 10 minutes for an oil or a butter. A dry oil is the fastest option if you are in a hurry.",
      },
      {
        q: "Does the same order apply to the face?",
        a: "The principle is the same, with lighter textures. Raw shea butter is too rich for most faces: keep it for the body.",
      },
      {
        q: "Is body oil enough on its own for very dry skin?",
        a: "No. An oil slows water loss, it does not add water. Applied to dry skin with no lotion underneath, it seals in the dryness.",
      },
    ],
    liens: [
      { href: "/comparisons/shea-butter-vs-body-oil", label: "Shea butter vs body oil: which one for dry skin" },
      { href: "/product/ceramide-moisturizing-cream", label: "CeraVe Moisturizing Cream, 19 oz tub" },
      { href: "/product/raw-shea-butter-16oz", label: "Raw shea butter, 16 oz tub" },
      { href: "/guides", label: "All beauty guides" },
    ],
  },
  "beginner-glow-routine": {
    blocs: [
      {
        h2: "The 4-step routine (5 minutes)",
        p: [
          "Morning: 1) gentle cleanser, 2) vitamin C serum, 3) moisturizer (a serum-and-moisturizer duo covers steps 2 and 3 in one), 4) SPF 30+ sunscreen. Night: cleanser + cream, with retinol only if your skin tolerates it (one night in three to start).",
        ],
      },
      {
        h2: "Common mistakes",
        p: [
          "Layering every active in week one, scrubbing daily, skipping SPF after vitamin C. Start simple for 3 weeks, then adjust one product at a time.",
        ],
      },
      {
        h2: "Smart budgeting",
        p: [
          "Priority to cleanser + moisturizer + SPF. Serum comes next. No need for 10 products: consistency beats quantity.",
        ],
      },
    ],
  },
  "how-to-choose-vitamin-c-serum": {
    blocs: [
      {
        h2: "The 5 verifiable criteria",
        p: [
          "1) Stabilized form and a concentration printed on the label. 2) Supporting ingredients you can actually read on the label. 3) Opaque airtight bottle. 4) Fragrance-free if you have sensitive skin. 5) Opening date and storage away from heat. Read the bottle before you buy: these are criteria, not promises about any one product.",
        ],
      },
      {
        h2: "How to use it",
        p: [
          "Morning on dry skin, 3â€“4 drops, then cream and SPF. Patch-test 48h on the jawline. Persistent tingling or redness: space out, stop, and seek advice.",
        ],
      },
    ],
  },
  "best-beauty-picks-by-budget": {
    blocs: [
      {
        h2: "Around $20: the essentials",
        p: [
          "A gentle cleanser. If budget remains: a simple moisturizing cream. That is 80% of results (cleansing + hydration + consistency).",
        ],
      },
      {
        h2: "Around $50: the full routine",
        p: [
          "Cleanser + ceramide cream + sunscreen. Add the vitamin C serum if dullness persists after 3 steady weeks.",
        ],
      },
      {
        h2: "Around $100: target one need",
        p: [
          "Full routine + one targeted active (vitamin C in the morning) or a styling tool, depending on priority. Don't buy two actives at once.",
        ],
      },
    ],
  },
  "alternatives-to-viral-heated-brush": {
    blocs: [
      {
        h2: "Why look for an alternative?",
        p: [
          "The viral brush doesn't fit everyone: very thick hair, need for express drying, or budget. Two sensible paths: a one-step heated brush (simplicity) or a powerful dryer plus a round brush (control).",
        ],
      },
      {
        h2: "Which to pick?",
        p: [
          "Quick daily routine and fine to normal hair â†’ one-step heated brush. Heavy volume, thick hair, speed â†’ 1875 W dryer. Either way, use heat protection and finish with cool air.",
        ],
      },
    ],
  },
};

export default function GuideDetail({ params }: { params: { slug: string } }) {
  const g = GUIDES.find((x) => x.slug === params.slug);
  if (!g) notFound();
  const c = CONTENUS[g.slug] ?? { blocs: [{ h2: "Summary", p: [g.description] }] };
  const produits = g.produitsLies.map(getProduct).filter(Boolean);
  const faqLd = c.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: c.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;
  const encart = produits[0];

  return (
    <>
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <p style={{ margin: "22px 0 0", fontSize: "0.88rem" }}><Link href="/">Home</Link> / <Link href="/guides">Guides</Link> / {g.titre}</p>
      <h1 style={{ fontFamily: "var(--font-display)", margin: "8px 0" }}>{g.titre}</h1>
      <p style={{ color: "var(--muted)" }}>{g.description} Â· {g.lectureMin} min Â· Updated {g.majLe}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={g.image} alt={g.imageAlt} style={{ borderRadius: 18, width: "100%", maxHeight: 380, objectFit: "cover" }} />
      <div className="prose" style={{ marginTop: 16 }}>
        {c.intro?.map((p, i) => <p key={i}>{p}</p>)}
        {c.reponse && (
          <div className="answer-box">
            <strong>The short answer</strong>
            <p>{c.reponse}</p>
          </div>
        )}
        {c.blocs.map((b, i) => (
          <Fragment key={b.h2}>
            <section>
              <h2>{b.h2}</h2>
              {b.p?.map((p, j) => <p key={j}>{p}</p>)}
              {b.ul && <ul>{b.ul.map((li) => <li key={li}>{li}</li>)}</ul>}
              {b.ol && <ol>{b.ol.map((li) => <li key={li}>{li}</li>)}</ol>}
              {b.tableau && (
                <table className="compare-table">
                  <thead>
                    <tr>{b.tableau.entetes.map((h) => <th key={h}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {b.tableau.lignes.map((ligne) => (
                      <tr key={ligne[0]}>
                        {ligne.map((cell, k) => k === 0 ? <td key={k}><strong>{cell}</strong></td> : <td key={k}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>
            {c.ctaApresBloc === i && encart && (
              <div className="affiliate-box" style={{ marginTop: 18 }}>
                <div>
                  <strong>Want to see the current offer?</strong><br />
                  <span style={{ color: "#d9c4b4", fontSize: "0.9rem" }}>
                    Stock, size and price are confirmed at {encart.marchand} when you click.
                  </span>
                </div>
                <AffiliateButton
                  url={encart.urlAffiliation}
                  productSlug={encart.slug}
                  category={encart.categorie}
                  merchant={encart.marchand}
                  label="Check price"
                />
              </div>
            )}
          </Fragment>
        ))}
        <h2>Recommended products in this guide</h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "12px 0" }}>
          {produits.map((p) => p && (
            <AffiliateButton key={p.slug} url={p.urlAffiliation} productSlug={p.slug} category={p.categorie} merchant={p.marchand} label={`View: ${p.nom.slice(0, 30)}â€¦`} />
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
        {c.liens && c.liens.length > 0 && (
          <>
            <h2>Keep reading</h2>
            <ul>
              {c.liens.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="grid-3">
        {produits.map((p) => p && <ProductCard key={p.slug} p={p} />)}
      </div>
    </>
  );
}
