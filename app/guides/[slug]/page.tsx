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
  /** Réponse directe, affichée dans un encadré juste après l'intro (format « position zéro »). */
  reponse?: string;
  blocs: Bloc[];
  /** Encart produit affiché après le bloc d'index donné (0 = premier bloc). */
  ctaApresBloc?: number;
  faq?: { q: string; a: string }[];
  /** Maillage interne : uniquement des pages publiées. */
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
          "Apply the oil or the butter last: a small amount, only on the areas that still feel tight — elbows, knees, heels, feet.",
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
          "A shower oil cleans while sparing the lipid film. It does not replace the lotion or the body oil: it changes the first step, the cleansing, not the hydration step. If you use one, you can sometimes skip the body oil — never the lotion on very dry skin.",
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
          "No test, no lab result, no invented trial. The product details quoted on this page — a 19 oz tub, ceramides and hyaluronic acid, fragrance-free, non-comedogenic; raw, unrefined shea butter in a 16 oz tub — come from the retailer listings checked in October 2026. The rest is standard body-care practice: patch-test a new product on a small area before using it on the whole body.",
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
      { href: "/guides/dry-body-oil-vs-body-lotion", label: "Dry body oil vs body lotion: texture and finish" },
      { href: "/comparisons/shea-butter-vs-body-oil", label: "Shea butter vs body oil: which one for dry skin" },
      { href: "/product/ceramide-moisturizing-cream", label: "CeraVe Moisturizing Cream, 19 oz tub" },
      { href: "/product/raw-shea-butter-16oz", label: "Raw shea butter, 16 oz tub" },
      { href: "/guides", label: "All beauty guides" },
    ],
  },
  "dry-body-oil-vs-body-lotion": {
    intro: [
      "\u201cDry oil\u201d does not mean an oil that dries the skin out. It describes a formula built to sink in fast and leave a satin finish instead of a greasy film. A lotion brings water and emollients and leaves the skin soft, usually matte.",
      "So the choice is not about which one hydrates more. It is about the finish you want, the time you have before getting dressed, and whether your skin feels tight after a shower. Below: what actually differs, the three profiles, and the mistake that cancels the benefit of both products.",
    ],
    reponse:
      "A dry oil is a finish, not a hydration step: it sinks in fast and leaves a light sheen. A lotion brings water and leaves a soft, mostly matte surface. If your skin feels tight after the shower, the lotion comes first, on damp skin, and the oil goes on top \u2014 or only on the areas that still pull.",
    blocs: [
      {
        h2: "What actually differs, in one table",
        tableau: {
          entetes: ["Criteria", "Dry body oil", "Body lotion"],
          lignes: [
            ["What it leaves on the skin", "A thin, satin, slightly shiny film", "A matte to satin finish, no visible film"],
            ["Time before getting dressed", "2 to 5 minutes", "1 to 3 minutes"],
            ["Large areas (legs, arms, back)", "Very fast, about 30 seconds", "Fast too, but you have to rub it in"],
            ["Skin that feels tight after the shower", "Not enough on its own", "That is exactly its job"],
            ["Marks on clothes", "Possible if you use too much", "Rare once absorbed"],
            ["Glow effect", "Yes, that is the main point", "No"],
            ["Scent", "Often fragranced (check for fragrance-free)", "Wide choice without fragrance"],
            ["Reactive skin", "Check the fragrance first", "Fragrance-free options are common"],
          ],
        },
      },
      {
        h2: "Where the word \u201cdry\u201d comes from",
        p: [
          "The name describes the touch, not the effect on the skin. It usually comes from one of two things in the formula:",
        ],
        ul: [
          "A light base: fluid plant oils such as jojoba, hazelnut or grapeseed, rather than thick mineral oils.",
          "Volatile silicones: they evaporate within a few minutes and carry away the greasy feel with them.",
        ],
      },
      {
        h2: "The consequence, in one sentence",
        p: [
          "A dry oil is still an oil. It seals the water that is already in the skin; it does not bring any. If your skin feels tight, a dry oil will not fix that \u2014 it will only make the surface more comfortable while the tightness stays underneath.",
        ],
      },
      {
        h2: "Three profiles, three answers",
        ul: [
          "Normal to dry skin, and you want a satin finish before going out: dry oil last, on skin that is already moisturised. Two pumps for the legs, one for the arms.",
          "Very dry skin, tight after the shower: lotion or cream first, on skin that is still damp, then a thin layer of shea butter on elbows, knees and heels. Raw shea butter is not an oil: it is solid, melts on contact with warm skin and leaves a richer occlusive film. It is the right pick on an area that really pulls, and the wrong one if you dislike a greasy film.",
          "Reactive skin, redness, fragrance that does not sit well: a fragrance-free lotion or cream, and no scented oil. If you still want an oil, look for \u201cfragrance-free\u201d on the listing, not \u201cnatural scent\u201d.",
        ],
      },
      {
        h2: "The most common mistake",
        p: [
          "Putting a dry oil on perfectly dry skin, then wondering why the skin still feels tight an hour later. An oil can only hold water that is already there, and on dry skin there is nothing to hold.",
          "The right reflex: get out of the shower, pat the skin dry without rubbing, apply the lotion within about three minutes, then the oil or the butter last, only on the areas that pull. The full sequence is covered in the guide on body oil before or after lotion.",
        ],
      },
      {
        h2: "How much product, concretely",
        tableau: {
          entetes: ["Area", "Dry oil", "Lotion"],
          lignes: [
            ["Both legs", "2 pumps", "2 pumps"],
            ["Arms", "1 pump", "1 pump"],
            ["Whole body", "4 to 5 pumps", "4 to 5 pumps"],
            ["Elbows, knees, heels", "A small amount of butter rather than more oil", "No need to add more"],
          ],
        },
        p: [
          "If you feel you need more and more product, the hydrating step is almost always too light \u2014 not the oil too scarce.",
        ],
      },
      {
        h2: "The limits, said plainly",
        ul: [
          "No oil treats a skin condition such as eczema or psoriasis. That is a medical question, not a product choice.",
          "Fragranced oils are the first cause of irritation on reactive skin.",
          "A dry oil can still mark light-coloured clothes if you overdose it.",
          "The glow is a visual effect. It does not mean the skin is better hydrated.",
        ],
      },
      {
        h2: "How this page was built",
        p: [
          "No test, no lab result, no invented trial. The product details quoted here come from the retailer listings checked in October 2026: a 19 oz tub, ceramides and hyaluronic acid, fragrance-free, non-comedogenic for the cream; raw, unrefined shea butter in a 16 oz tub. No body oil in the catalogue has been verified yet, so no specific oil is named on this page. The rest is standard body-care practice: patch-test a new product on a small area before using it on the whole body.",
        ],
      },
    ],
    ctaApresBloc: 1,
    faq: [
      {
        q: "Is dry body oil better than body lotion?",
        a: "Neither is better: they do different jobs. A dry oil gives a finish and slows water loss; a lotion brings water. On very dry skin, the lotion comes first and the oil goes on top.",
      },
      {
        q: "Does dry oil dry out the skin?",
        a: "No. \u201cDry\u201d refers to the touch, not to a drying effect: the formula absorbs faster and leaves less film. It adds no water either, which is why it cannot replace a lotion on tight skin.",
      },
      {
        q: "Can I use dry oil instead of lotion?",
        a: "If your skin is already comfortable and you want a sheen, yes. If it feels tight after the shower, no: the oil has no water to hold.",
      },
      {
        q: "Can I use a dry oil on my face?",
        a: "Some formulas, yes, but a body oil is rarely designed for the face. Raw shea butter is too rich for most faces: keep it for the body.",
      },
      {
        q: "Dry oil or classic body oil?",
        a: "Same family. \u201cDry\u201d describes the touch and the speed of absorption, not the ability to nourish.",
      },
      {
        q: "And if the skin on my body is oily?",
        a: "No oil on the chest and back. A non-comedogenic lotion is enough there.",
      },
    ],
    liens: [
      { href: "/comparisons/body-oil-vs-body-lotion", label: "Body oil vs body lotion: what each one actually does" },
      { href: "/guides/body-oil-before-or-after-lotion", label: "Body oil before or after lotion? The correct order" },
      { href: "/comparisons/shea-butter-vs-body-oil", label: "Shea butter vs body oil: which one for dry skin" },
      { href: "/product/ceramide-moisturizing-cream", label: "CeraVe Moisturizing Cream, 19 oz tub" },
      { href: "/product/raw-shea-butter-16oz", label: "Raw shea butter, 16 oz tub" },
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
          "Morning on dry skin, 3–4 drops, then cream and SPF. Patch-test 48h on the jawline. Persistent tingling or redness: space out, stop, and seek advice.",
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
          "Quick daily routine and fine to normal hair → one-step heated brush. Heavy volume, thick hair, speed → 1875 W dryer. Either way, use heat protection and finish with cool air.",
        ],
      },
    ],
  },
  "body-glow-oil": {
    intro: [
      "A body glow oil is not a moisturiser with extra shine. It is a finishing product: it goes on last, over skin that is already hydrated, and its only job is the way the skin catches the light. Used that way, two pumps cover both legs.",
      "The confusion comes from two words that look interchangeable and are not: glow and shimmer. One is a finish, the other is a particle. Below: the four product types side by side, the 4-step method, the two mistakes that turn a sheen into grease, and who should skip it altogether.",
    ],
    reponse:
      "A glow oil is a finish, not a hydration step. Apply it last, on skin that has already had a lotion or a cream, two pumps maximum, and only on the areas that catch the light: shins, shoulders, collarbones, tops of the arms. Let it settle for 5 minutes before dressing. On very dry skin it does not replace the cream underneath.",
    blocs: [
      {
        h2: "Glow, shimmer, classic oil, butter",
        tableau: {
          entetes: ["Type", "What you see", "What you feel", "Where it goes"],
          lignes: [
            ["Classic body oil", "Soft skin, discreet sheen", "A film, more or less rich", "Anywhere on the body"],
            ["Glow oil", "Satin sheen, skin looks bare but lit", "Fluid, medium absorption", "Shins, shoulders, collarbones"],
            ["Shimmer oil", "Visible particles in the light", "Can feel grainy or tacky", "Evenings, photos, legs"],
            ["Raw shea butter", "No sheen at all: matte to greasy", "Rich, occlusive", "Very dry patches"],
          ],
        },
        p: [
          "Shimmer shows up more in a photo than in real life, and more on fair skin. Keep it for evenings and events, not for the office.",
        ],
      },
      {
        h2: "The method in 4 steps",
        ol: [
          "Hydrate first. Lotion or cream on skin that is still damp, after the shower. Without this step the oil only greases the surface.",
          "Wait 2 minutes. Putting oil on cream that is still wet makes the product pill or slide.",
          "Two pumps, not more. Warm it between the palms, then pat it on rather than rubbing: upwards on the shins, outwards on the shoulders.",
          "Wait 5 minutes before dressing. Otherwise you get marks on dark clothes and on furniture.",
        ],
        p: [
          "The sheen is a visual effect. If the skin feels tight an hour later, the problem is step one, not the oil.",
        ],
      },
      {
        h2: "The 2 mistakes that make it greasy",
        tableau: {
          entetes: ["Mistake", "What happens", "Fix"],
          lignes: [
            ["Putting it on the whole body", "Too much surface, too much product, shine everywhere", "Only the areas that catch the light"],
            ["Putting it on dry, unmoisturised skin", "The oil sits on the surface and the skin still feels tight", "Lotion first, oil last"],
          ],
        },
        p: [
          "A third one is less obvious: oil plus heat plus sweat. In summer a glow oil on the legs can run and mark. A small amount is enough, and the back of the knees is best left alone.",
        ],
      },
      {
        h2: "Who should skip it",
        ul: [
          "A back or chest that breaks out: an occlusive film does not help there.",
          "Reactive skin: glow oils are often fragranced. Look for fragrance-free on the listing, not for natural scent.",
          "Light-coloured or silk clothes straight after application.",
          "Children: fragranced formulas and shimmer particles are not designed for them.",
        ],
      },
      {
        h2: "Very dry skin: glow is not the answer",
        p: [
          "If the legs feel tight or flaky, the missing piece is water, not sheen. Adding more oil to dry skin seals the dryness in.",
        ],
        ol: [
          "Cream or lotion on damp skin, everywhere.",
          "Raw shea butter in a thin layer on the rough areas: elbows, knees, heels. It is solid, melts on contact with warm skin, and leaves a much richer occlusive film than a glow oil.",
          "Then, if you still want the visual effect, the glow oil on the shins only.",
        ],
      },
      {
        h2: "Why butter and glow oil are not interchangeable",
        p: [
          "The butter gives no sheen, which is exactly why it does not replace a glow oil. And the glow oil gives no water, which is why it does not replace the cream. One is the hydrating and occlusive step; the other is the finishing touch, and neither substitutes for the other.",
        ],
      },
      {
        h2: "How much product it really takes",
        p: [
          "A glow oil applied to the whole body goes fast, 4 to 5 pumps per use. Limited to the shins and shoulders, 1 to 2 pumps are enough. That is the difference between a bottle that lasts three weeks and one that lasts three months.",
        ],
      },
      {
        h2: "How this page was built",
        p: [
          "No test, no lab result, no invented trial. The product details quoted here come from a retailer listing checked in November 2026: raw, unrefined, degummed ivory shea butter in a 16 oz (473 ml) tub, marketed for skin, hair and face, solid rather than liquid. No shimmer or glow oil in the catalogue has been verified yet, so no specific glow product is named or linked on this page. The rest is standard body-care practice: patch-test a new product on a small area before using it on the whole body.",
        ],
      },
    ],
    ctaApresBloc: 5,
    faq: [
      {
        q: "Is glow oil the same as body oil?",
        a: "Often, yes: glow is a claim about the finish. Read the ingredient list, though: the presence of mica or other particles is what separates a glow oil from a shimmer oil.",
      },
      {
        q: "Can I use it on my face?",
        a: "No. Body glow oils are too rich, and often too fragranced, for the face.",
      },
      {
        q: "Does it stain the sheets?",
        a: "It can if you go to bed straight after. Give it time to settle, or keep it for the morning.",
      },
      {
        q: "Does it hydrate?",
        a: "It seals the water already in the skin. It does not add any. On dehydrated skin it is not enough on its own.",
      },
      {
        q: "What about photos?",
        a: "Shimmer reads stronger than glow. For a natural result, stay with a glow oil and keep it on the shins.",
      },
    ],
    liens: [
      { href: "/guides/dry-body-oil-vs-body-lotion", label: "Dry body oil vs body lotion: texture and finish" },
      { href: "/guides/body-oil-before-or-after-lotion", label: "Body oil before or after lotion? The correct order" },
      { href: "/comparisons/shea-butter-vs-body-oil", label: "Shea butter vs body oil: which one for dry skin" },
      { href: "/product/raw-shea-butter-16oz", label: "Raw shea butter, 16 oz tub" },
      { href: "/guides", label: "All beauty guides" },
    ],
  },
  "fragrance-free-body-oil-sensitive-skin": {
    intro: [
      "Sensitive skin on the body is usually not reacting to the oil itself, but to what was added to it: fragrance, essential oils, alcohol high in the list. The problem is that the label rarely says so in plain words.",
      "Three mentions look like the same promise and are not: fragrance-free, unscented, and natural scent. Below: what each one means, the five lines to look for in an ingredient list, the 3-day patch test, and what a body oil will not fix.",
    ],
    reponse:
      "Fragrance-free means no fragrance has been added. Unscented means the smell has been neutralised, sometimes with a masking fragrance. Natural scent almost always means essential oils or botanical extracts, which are fragrance compounds even when the word fragrance does not appear. For reactive skin, fragrance-free is the default choice.",
    blocs: [
      {
        h2: "The four labels that look the same",
        tableau: {
          entetes: ["What the listing says", "What it means", "For reactive skin"],
          lignes: [
            ["Fragrance-free", "No fragrance added to the formula", "The default choice"],
            ["Unscented", "The smell has been neutralised, sometimes by a masking fragrance", "Check further: the mask can irritate"],
            ["Natural fragrance, natural scent", "Essential oils or botanical extracts carry the smell", "Treat it as fragrance"],
            ["No mention at all", "Unknown", "Not worth the risk"],
          ],
        },
      },
      {
        h2: "Fragrance-free does not mean odourless",
        p: [
          "This is the point that surprises most people, and it is worth knowing before you open the tub: raw, unrefined shea butter smells strong. That smell is the ingredient, not an added fragrance. It is nutty, sometimes smoky, and it fades as the butter is worked into the skin.",
          "No added fragrance and no smell are two different promises. A product can be fragrance-free and still have a marked natural scent, and a product can smell of nothing because a masking agent is doing the work.",
        ],
      },
      {
        h2: "The 5 things to look for in an ingredient list",
        ul: [
          "Alcohol denat. near the top: it dries the skin out and is a poor first ingredient in a body product.",
          "Essential oils: lavender, citrus, mint, eucalyptus. Natural, and still fragrance compounds that can irritate.",
          "The words fragrance or parfum: the mention to avoid on reactive skin.",
          "Lanolin: well tolerated by many people, a known allergen for others.",
          "Preservatives such as phenoxyethanol: rarely an issue in an oil with no water in it, but worth recognising on a label.",
        ],
        p: [
          "None of these ingredients is dangerous in itself. The question is whether your skin tolerates it, and the only way to know is to test on a small area.",
        ],
      },
      {
        h2: "The 3-day patch test",
        ol: [
          "Pick one product at a time. Two new products at once and you learn nothing about either.",
          "Apply a small amount inside the wrist or the crook of the elbow, morning and evening, for three days.",
          "Stop at the first sign of redness, itching or heat, and do not apply it anywhere else.",
        ],
        p: [
          "A reaction can also appear later, after a few days of full-body use. The patch test lowers the risk; it does not remove it.",
        ],
      },
      {
        h2: "What an oil will not fix",
        p: [
          "Eczema, psoriasis and dermatitis are medical conditions. A fragrance-free oil can be part of a routine that does not aggravate them. It does not treat them, and no product page should suggest otherwise.",
        ],
        ul: [
          "It does not calm a flare-up.",
          "It does not replace a prescribed treatment.",
          "It does not make a reaction disappear once it has started: stop the product and ask a healthcare professional.",
        ],
      },
      {
        h2: "Two products, two different jobs",
        p: [
          "The hydrating step and the occlusive step are not the same purchase, and on reactive skin the order matters as much as the label.",
          "A ceramide cream in a 19 oz tub, fragrance-free and non-comedogenic, marketed for dry skin and for the skin barrier, for face and body, covers the first step. Raw shea butter in a 16 oz tub covers the second: no fragrance added, a strong natural scent, and a rich film that suits elbows, knees and heels rather than the whole body.",
          "If you buy only one, buy the cream. It is the step that brings water, and it is the easiest to find in a fragrance-free version.",
        ],
      },
      {
        h2: "How this page was built",
        p: [
          "No test, no lab result, no invented trial. The product details quoted here come from retailer listings checked in October and November 2026: a 19 oz tub, ceramides and hyaluronic acid, fragrance-free, non-comedogenic for the cream; raw, unrefined, degummed shea butter in a 16 oz tub, no added fragrance and a strong natural scent, for the butter. The rest is standard practice: patch-test, one product at a time, and a doctor for anything that persists.",
        ],
      },
    ],
    ctaApresBloc: 5,
    faq: [
      {
        q: "Is fragrance-free the same as unscented?",
        a: "No. Fragrance-free means nothing has been added to scent the product. Unscented means the smell has been neutralised, sometimes with a masking fragrance, so it is not necessarily fragrance-free.",
      },
      {
        q: "Can a natural oil be fragrance-free?",
        a: "Yes. Many single-ingredient oils contain no added fragrance and still smell of themselves. Fragrance-free describes what was added, not what the ingredient smells like.",
      },
      {
        q: "Is raw shea butter fragrance-free?",
        a: "On the listing it is sold with no added fragrance, but it has a strong natural scent. If you need a product with no smell at all, this is not it.",
      },
      {
        q: "Is hypoallergenic a reliable label?",
        a: "It is a marketing term rather than a standard you can check. An ingredient list and a patch test tell you more.",
      },
      {
        q: "Should I test a body oil before using it everywhere?",
        a: "Yes: three days on the wrist or the crook of the elbow, one product at a time.",
      },
      {
        q: "Can an oil treat eczema?",
        a: "No. It can avoid aggravating the skin, but it is not a treatment. See a healthcare professional for a flare-up.",
      },
    ],
    liens: [
      { href: "/comparisons/shea-butter-vs-body-oil", label: "Shea butter vs body oil: which one for dry skin" },
      { href: "/guides/dry-body-oil-vs-body-lotion", label: "Dry body oil vs body lotion: texture and finish" },
      { href: "/guides/body-oil-before-or-after-lotion", label: "Body oil before or after lotion? The correct order" },
      { href: "/product/ceramide-moisturizing-cream", label: "CeraVe Moisturizing Cream, 19 oz tub" },
      { href: "/product/raw-shea-butter-16oz", label: "Raw shea butter, 16 oz tub" },
    ],
  },
  "hair-oil-vs-body-oil": {
    intro: [
      "One bottle on the shelf, two possible uses. Sometimes that works, and the reason it works is not the oil: it is the formula around it. A body oil is built to leave a film on skin. A hair oil is built to glide through the fibre without weighing it down.",
      "Below: what actually differs, which oils genuinely work on both, the one product in this catalogue that is marketed for both uses, and the three cases where sharing a product goes wrong.",
    ],
    reponse:
      "Sometimes yes, often no. A body oil is usually richer, more fragranced and more occlusive; a hair oil is lighter and built for combing and frizz. The only reliable case for sharing is when the listing says both uses explicitly. On the scalp, a body oil is the wrong product whatever the label promises.",
    blocs: [
      {
        h2: "What actually differs",
        tableau: {
          entetes: ["Criteria", "Hair oil", "Body oil"],
          lignes: [
            ["Purpose", "Detangle, tame frizz, shine, protect ends", "Nourish, seal water in, massage"],
            ["Texture", "Often lighter, with silicones", "Richer, sometimes thick"],
            ["Fragrance", "Frequent, sometimes strong", "Varies"],
            ["On the scalp", "Sometimes designed for it", "Not recommended: too occlusive"],
            ["On the skin", "Possible, but expensive per use", "Its intended use"],
            ["Rinsing", "Usually leave-in", "Leave-in"],
          ],
        },
      },
      {
        h2: "Oils that work on both",
        p: [
          "These are general properties of the ingredients, not claims about any specific bottle. Read the listing of the product in your hand before you buy it for both uses.",
        ],
        ul: [
          "Jojoba: close to the skin's own sebum, light, tolerated by many skins and hair types.",
          "Coconut: effective on thick, curly hair, but comedogenic for some skins and it can clog the scalp.",
          "Sweet almond: mild, suits the body and works on hair ends.",
          "Argan: works on both, and is usually the most expensive of the list.",
          "Mineral oil, including baby oil: body only. Never on the scalp.",
        ],
      },
      {
        h2: "The shea butter case",
        p: [
          "The one product in this catalogue that covers both uses is a raw shea butter, marketed on its listing for skin, hair and face. That wording is worth reading carefully: marketed for three uses does not mean suitable for every skin, every hair type and every zone.",
          "It is a solid butter, not an oil: raw, unrefined, degummed, ivory, in a 16 oz (473 ml) tub. It melts at skin temperature, which is why it has to be warmed between the palms first.",
          "What works: a small amount, warmed between the fingers, on the ends of dry or damp hair; a thin layer on elbows, knees and heels; and under a lighter oil, on skin that is already moisturised.",
          "What does not: the scalp, where it is too occlusive and leaves a residue; fine hair, which it flattens; and the face for most skins, which is too rich even though the listing mentions it.",
        ],
      },
      {
        h2: "The 3 cases where you should not share",
        ol: [
          "A scalp that itches or flakes. Any fragranced body product can make it worse, and if it persists that is a medical question.",
          "Fine hair plus a rich body oil. The result is flat, greasy hair that needs two shampoos to recover.",
          "The face. A fragranced body oil has no place on reactive facial skin.",
        ],
      },
      {
        h2: "How to use one product for both without ruining it",
        p: [
          "The rule is simple: a small amount for the hair, a small amount for the body, and never the same finger in the tub twice.",
        ],
        ul: [
          "Take the hair amount first, from a clean tub, then the body amount.",
          "Or use a clean spatula and put the product in your palm, not back in the tub.",
          "Keep the tub closed and away from the shower spray: water in a raw butter is a bad idea.",
        ],
      },
      {
        h2: "The verdict, in two lines",
        p: [
          "One product for both uses: a raw multi-use butter, if you accept a solid texture and a strong natural scent. Two separate products: simpler, and the better default when either use is daily. Neither, on an irritated scalp: see a doctor before adding anything.",
        ],
      },
      {
        h2: "How this page was built",
        p: [
          "No test, no lab result, no invented trial. The shea butter details come from a retailer listing checked in November 2026: raw, unrefined, degummed ivory shea butter, 16 oz (473 ml), solid, marketed for skin, hair and face. The properties of jojoba, coconut, almond, argan and mineral oil are general and conditional. Nothing here is a treatment claim: patch-test a new product on a small area before using it on the whole body, and start with the ends rather than the scalp.",
        ],
      },
    ],
    ctaApresBloc: 3,
    faq: [
      {
        q: "Can I use body oil on my hair?",
        a: "On the ends, usually yes, in a small amount. On the scalp and on fine hair, no: it is too heavy and too occlusive.",
      },
      {
        q: "Can I use hair oil on my body?",
        a: "You can, but it is an expensive way to moisturise, and some hair oils are built around silicones rather than emollients.",
      },
      {
        q: "Is shea butter a hair oil?",
        a: "No. It is a solid butter marketed for skin, hair and face. On hair it works on the ends, not on the scalp.",
      },
      {
        q: "Does coconut oil clog the scalp?",
        a: "It can, for some people. It is comedogenic for a share of skins, and on the scalp it can leave a residue that is hard to rinse out.",
      },
      {
        q: "Can an oil make hair grow faster?",
        a: "Nothing on this page makes that claim. An oil can change how the hair feels and looks, not how fast it grows.",
      },
      {
        q: "What if my scalp itches after using oil?",
        a: "Stop the product, and see a healthcare professional if it persists. An irritated scalp is not a styling problem.",
      },
    ],
    liens: [
      { href: "/product/raw-shea-butter-16oz", label: "Raw shea butter, 16 oz tub" },
      { href: "/comparisons/shea-butter-vs-body-oil", label: "Shea butter vs body oil: which one for dry skin" },
      { href: "/guides/body-oil-before-or-after-lotion", label: "Body oil before or after lotion? The correct order" },
      { href: "/guides/dry-body-oil-vs-body-lotion", label: "Dry body oil vs body lotion: texture and finish" },
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
      <p style={{ color: "var(--muted)" }}>{g.description} · {g.lectureMin} min · Updated {g.majLe}</p>
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
            <AffiliateButton key={p.slug} url={p.urlAffiliation} productSlug={p.slug} category={p.categorie} merchant={p.marchand} label={`View: ${p.nom.slice(0, 30)}…`} />
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
