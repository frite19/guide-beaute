import Link from "next/link";
import { Fragment } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GUIDES } from "@/data/guides";
import { getProduct } from "@/data/catalog";
import { AffiliateButton } from "@/components/AffiliateButton";
import { ProductCard } from "@/components/ProductCard";
import { StickyBuyBar } from "@/components/StickyBuyBar";

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
  "beginner-makeup-routine-5-steps": {
    intro: [
      "A beginner routine fails for a boring reason: too many steps in the wrong order, with too much product. Five steps, in a fixed sequence, cover a finished face — and two of those five are skin care, not makeup.",
      "Below: the five steps and why each one sits where it does, what to buy first if you are starting from nothing, the four steps you can skip without looking unfinished, the exact quantities, and how to take it off without undoing the work.",
    ],
    reponse:
      "Five steps: moisturizer on damp skin, a thin layer of base where you need it, concealer only on spots and under the eye, cream blush on the cheeks (and the same stick on the lips), then curled lashes and mascara. Ten minutes, four products, one brush and one sponge. Primer, setting powder, bronzer and contour are not part of a beginner routine.",
    blocs: [
      {
        h2: "The 5 steps, in order",
        ol: [
          "Moisturizer, on skin that is still slightly damp. This is the step that decides whether the base sits smoothly or catches on dry patches.",
          "Base: a thin layer of foundation or a tinted stick, only where you want it — usually the centre of the face, not the jaw and the hairline.",
          "Concealer: one dot under each eye, one on a spot. After the base, never before, so you use less of it.",
          "Cheeks and lips: a cream blush or a multi-stick, tapped on with the fingers, then the same product on the lips.",
          "Lashes: curl them, then mascara. Last, because it is the step that smudges everything else if you do it first.",
        ],
        p: [
          "That is the whole routine. It takes about ten minutes the first week and five once the order is automatic.",
        ],
      },
      {
        h2: "Why this order and not another",
        tableau: {
          entetes: ["Step", "Why it comes here", "If you skip it"],
          lignes: [
            ["Moisturizer", "It brings water to the skin before anything sits on top", "The base catches on dry patches and looks patchy by mid-day"],
            ["Base", "It evens the skin tone, thinly", "The concealer has to cover too much, and it shows"],
            ["Concealer", "Applied over the base, it only has to cover what is left", "A thick layer under the eye, which creases"],
            ["Blush", "Cream goes on top of the base, before any powder", "A flat, single-tone face"],
            ["Lashes", "Mascara is the last thing that touches the eye area", "Smudges on the eyelid, and the base has to be redone"],
          ],
        },
      },
      {
        h2: "What to buy first, if you own nothing",
        p: [
          "Buy in this order. Each line adds more to the face than the next one, for roughly the same money.",
          "Everything else - eyeliner, eyeshadow, bronzer, highlighter, lip liner - is a style choice, not a step. Buy it when you want a specific look, not to complete a routine.",
        ],
        tableau: {
          entetes: ["Priority", "Product", "Why it comes first"],
          lignes: [
            ["1", "Moisturizer", "Without it, no base sits well, whatever the price"],
            ["2", "Mascara", "The single product that changes a face the most"],
            ["3", "Base (foundation or a stick)", "Evens the tone, hides the least interesting part of the skin"],
            ["4", "Cream blush or a multi-stick", "Adds life back into a face that foundation has flattened"],
            ["5", "Tools: one brush, one sponge", "They decide the finish more than the formula does"],
          ],
        },
      },
      {
        h2: "The 4 steps you can skip",
        ul: [
          "Primer: a moisturizer does the same job for most skins. A primer is for a specific problem — visible pores, or a base that slides.",
          "Setting powder: it mattifies. On dry skin it emphasizes flakes; keep it for the T-zone, or skip it.",
          "Bronzer and contour: they draw shadows. Without practice they read as stripes, not as bone structure.",
          "Colour corrector: it fixes a specific discolouration. A concealer covers ordinary shadows well enough.",
        ],
        p: [
          "Skipping a step is not laziness. It is the difference between a face that looks made up and a face that looks painted.",
        ],
      },
      {
        h2: "How much product, concretely",
        tableau: {
          entetes: ["Product", "Quantity for the whole face"],
          lignes: [
            ["Foundation", "One pump, or a pea-sized amount of stick"],
            ["Concealer", "One dot under each eye, plus one on a spot"],
            ["Cream blush", "Two taps on the back of the hand, then transferred to the cheek"],
            ["Mascara", "Two thin coats, not three thick ones"],
            ["Moisturizer", "Enough to cover the face without a greasy film"],
          ],
        },
        p: [
          "If a product disappears into the skin and you see nothing, the amount was right. If you can see where it starts and stops, it was too much.",
        ],
      },
      {
        h2: "The 5 mistakes that make it look heavy",
        tableau: {
          entetes: ["Mistake", "What happens"],
          lignes: [
            ["Foundation on the whole face, including the neck line", "A visible edge at the jaw, and a flatter face"],
            ["Concealer before foundation", "Double coverage in one area, and creasing"],
            ["Powder on dry patches", "Flakes and texture that were not visible before"],
            ["Mascara first, then the rest", "Smudges on the eyelid, and a base that has to be redone"],
            ["Buying five products at once", "Nothing gets learned, and most of it goes unused"],
          ],
        },
      },
      {
        h2: "Dry skin, specifically",
        p: [
          "Cream and stick formulas sit better on dry skin than powder or matte liquids. Apply them on top of a moisturizer that has had a minute to sink in, and keep powder for the T-zone only.",
          "If the base turns patchy by mid-afternoon, the problem is almost never the foundation: it is the moisturizer underneath, or the way it was applied. A damp sponge presses a base into the skin; a brush lays it on top.",
        ],
      },
      {
        h2: "Taking it off",
        p: [
          "A micellar wipe removes the base and the blush. Mascara, especially a waterproof one, needs an oil-based cleanser or a biphase remover: rubbing a wipe on the lashes pulls them out.",
          "Sleeping in make-up is the one habit worth breaking immediately. It is the only step on this page that has no cheaper alternative.",
        ],
      },
      {
        h2: "How this page was built",
        p: [
          "No test, no lab result, no invented trial. The products linked on this page are described from their Amazon listings, checked in November 2026: a fragrance-free ceramide cream in a 19 oz tub, a shine-free foundation stick, a concealer with a built-in sponge applicator, a multi-stick for cheeks and lips, a volumizing mascara, a metal lash curler and micellar wipes. Nothing here is a claim about results, and no product on this page treats a skin condition. Patch-test anything new on a small area first.",
        ],
      },
    ],
    ctaApresBloc: 2,
    faq: [
      {
        q: "How long should a beginner routine take?",
        a: "About ten minutes at first, five once the order is automatic. If it takes longer, the number of steps is usually the problem, not the speed.",
      },
      {
        q: "What should I buy first with a small budget?",
        a: "A moisturizer, then a mascara, then a base. Tools come after that: one brush and one sponge change the finish more than a more expensive formula.",
      },
      {
        q: "Do I need a primer?",
        a: "Usually not. A moisturizer does the same job for most skins. A primer is for a specific problem, such as visible pores or a base that slides by mid-day.",
      },
      {
        q: "Why does my foundation look cakey?",
        a: "Three usual causes: too much product, a dry skin underneath, or powder applied over a liquid base on dry areas. Start with less product and a moisturizer on damp skin.",
      },
      {
        q: "Can I use one product for cheeks and lips?",
        a: "Yes, a cream multi-stick is made for that. It is also the cheapest way to add colour to a beginner routine, and it blends with the fingers.",
      },
      {
        q: "Do I need brushes, or can I use my fingers?",
        a: "Fingers work for cream products, and they warm the formula. A damp sponge gives the most even base, and one brush is enough for powder. Start with the sponge.",
      },
    ],
    liens: [
      { href: "/guides/makeup-brush-set-how-many-brushes", label: "Makeup brush set: how many brushes you actually need" },
      { href: "/guides/lashes-fall-flat-by-noon", label: "Why your lashes fall flat by noon" },
      { href: "/comparisons/best-foundation-for-dry-skin", label: "Foundation stick vs cream base: what dry skin needs" },
      { href: "/product/tweezerman-classic-lash-curler", label: "Tweezerman Classic Lash Curler" },
      { href: "/category/makeup", label: "All makeup products" },
    ],
  },
  "lashes-fall-flat-by-noon": {
    intro: [
      "Straight lashes do not stay curled because nothing holds them there. A curler bends the fibre; mascara then either locks that bend in place or pulls it back down, depending on the formula and on the order you apply it.",
      "Below: the order that works, the three-press method, why the curl collapses by lunchtime, manual versus heated, and the one thing no product on this page will do.",
    ],
    reponse:
      "Curl first, mascara second, always. Press at the base of the lash line for a few seconds, then once at mid-length and once at the tip, so the bend is a curve rather than a fold. A light, slightly dry mascara holds the curl; a wet, heavy one weighs it down. A waterproof formula holds best, and needs an oil-based remover at night.",
    blocs: [
      {
        h2: "The order, and why it is not negotiable",
        p: [
          "Mascara sets the lash in the shape it had when it dried. Curl after mascara and you are bending a stiffened fibre: it pulls at the root, it cracks the coating, and the lash rarely returns to a clean curve.",
          "The listing of the curler linked on this page says the same thing in one line: always curl lashes before applying mascara. It is the only instruction that matters on the first day.",
        ],
      },
      {
        h2: "The three-press method",
        ol: [
          "Start on lashes that are dry and free of mascara. A wet lash bends badly and can pull.",
          "Place the pad at the base of the lash line, as close to the lid as is comfortable, with the lashes centred between the pad and the frame.",
          "Squeeze gently and hold for about five seconds. Gentle is the point: pressure does not add curl, it only adds risk.",
          "Move the curler up a third of the lash length and press again, then once more near the tip. Three presses give a curve; one hard press gives a fold.",
          "Finish on the outer lashes if you want the eye to look wider, then apply mascara from the root, wiggling slightly.",
        ],
      },
      {
        h2: "Why the curl collapses by noon",
        tableau: {
          entetes: ["Cause", "What is happening", "Fix"],
          lignes: [
            ["A wet, heavy mascara", "The weight of the formula straightens the lash as it dries", "Wipe the wand, use thinner coats, or a drier formula"],
            ["Curling after mascara", "The lash is bent while stiff, and it springs back", "Curl first, every time"],
            ["One hard press at the base", "A sharp fold that unfolds during the day", "Three presses, base to tip"],
            ["Humidity and heat", "The fibre takes on moisture and relaxes", "A waterproof formula holds longer"],
            ["Touching the lashes", "Fingers and eyelids push the curve out", "Leave them alone once the mascara is dry"],
          ],
        },
      },
      {
        h2: "Manual or heated",
        tableau: {
          entetes: ["", "Manual", "Heated"],
          lignes: [
            ["What it does", "Bends the lash mechanically", "Bends it with a warm pad"],
            ["Curl", "Good, temporary", "Slightly stronger, also temporary"],
            ["Charging", "None", "Battery or USB"],
            ["Risk", "Pinching the lid if rushed", "A heat source next to the eye"],
            ["Cost", "Lower", "Higher, plus charging"],
            ["For a beginner", "The default choice", "Only with a temperature setting and a cool-down"],
          ],
        },
        p: [
          "Neither makes lashes longer, and neither changes how fast they grow. The difference is the amount of heat involved, nothing else.",
        ],
      },
      {
        h2: "The mascara that holds a curl",
        ul: [
          "Waterproof and smudge-proof formulas hold a curve better, because they set harder.",
          "They also need an oil-based cleanser or a biphase remover. Pulling at a waterproof mascara with a dry wipe takes lashes with it.",
          "Very wet formulas give volume and weight at the same time: the lash goes down as the formula dries.",
          "Wiping the wand on the tube before the first coat removes the excess that causes clumps.",
        ],
        p: [
          "Two thin coats hold better than three thick ones. That is a rule about weight, not about brands.",
        ],
      },
      {
        h2: "What actually damages lashes",
        ul: [
          "Pulling the curler away while it is still clamped.",
          "Curling lashes that are still coated in mascara.",
          "Sharing a curler: the pad sits against the lash line, and it is not a shared tool.",
          "Using a pad that has hardened or split, which crimps instead of curving.",
          "Sleeping in mascara, night after night.",
        ],
        p: [
          "The brand of the curler linked here states a new pad every three months and a new curler after a year. Whatever the tool, a clean pad is the part that touches the eye.",
        ],
      },
      {
        h2: "What no product on this page does",
        p: [
          "No curler and no mascara makes lashes grow, thicken or lengthen. A mechanical curl is a shape; it is not a treatment.",
          "Lash serums, extensions and salon lifts are different categories, with their own claims and their own risks. This page does not sell any of them, and does not recommend one.",
          "If lashes fall out in patches, itch, or the lid becomes red and swollen, that is not a make-up problem: stop the products and see a healthcare professional.",
        ],
      },
      {
        h2: "How this page was built",
        p: [
          "No test, no lab result, no invented trial. The curler details come from its Amazon listing, checked in November 2026: a manual metal curler with rounded silicone pads, three replacement pads included, a stated replacement of the pad every three months and the curler after one year, and instructions that say to curl before mascara. The rest is standard make-up practice about order, pressure and formula weight, not a claim about any specific product.",
        ],
      },
    ],
    ctaApresBloc: 1,
    faq: [
      {
        q: "Should I curl my lashes before or after mascara?",
        a: "Before. Mascara stiffens the lash; curling after pulls on it, cracks the coating and rarely gives a clean curve. The curler's own instructions say the same thing.",
      },
      {
        q: "How long should I hold the curler?",
        a: "About five seconds per press, three presses: base, middle and tip. Holding longer does not add curl, and pressing harder only adds risk.",
      },
      {
        q: "Why does my curl disappear after an hour?",
        a: "Usually the mascara: a wet, heavy formula straightens the lash as it dries. Wipe the wand, use thinner coats, and try a waterproof formula if you need it to last.",
      },
      {
        q: "Do heated curlers work better?",
        a: "Slightly, on some lashes. They also put a heat source next to the eye and need charging. For a beginner, a manual curler is the safer default.",
      },
      {
        q: "Can curling damage my lashes over time?",
        a: "A gentle, clean technique does not break the fibre. Damage comes from pulling, from curling over mascara, and from a hard or split pad that crimps instead of curving.",
      },
      {
        q: "Will a curler make my lashes grow?",
        a: "No. It changes the shape for a few hours. Growth is not affected by any tool or mascara on this page.",
      },
    ],
    liens: [
      { href: "/product/tweezerman-classic-lash-curler", label: "Tweezerman Classic Lash Curler" },
      { href: "/product/volume-length-mascara", label: "Volume and length mascara" },
      { href: "/guides/beginner-makeup-routine-5-steps", label: "Beginner makeup routine: 5 steps, 10 minutes" },
      { href: "/guides/makeup-brush-set-how-many-brushes", label: "Makeup brush set: how many brushes you actually need" },
      { href: "/category/makeup", label: "All makeup products" },
    ],
  },
  "makeup-brush-set-how-many-brushes": {
    intro: [
      "A brush set is sold as a number, and the number is the least useful information on the box. Twelve brushes do not make a better face than four; they make a cheaper way to buy the four, with eight extras that cover looks most people never do.",
      "Below: the four brushes that do almost all the work, what each extra brush in a big set is actually for, when a set is a better buy than one brush at a time, synthetic versus natural bristles, and the washing routine that decides whether a cheap brush lasts two months or two years.",
    ],
    reponse:
      "Four brushes cover a full face: a foundation brush, a powder brush, a blush brush and an eye blending brush. Add a damp sponge if you want a softer, more blended base. A 12-piece set is not twelve times better — it is a cheap way to get the four you need, plus eight brushes for specific looks. If you already own a sponge, a five-piece set is usually enough.",
    blocs: [
      {
        h2: "The four brushes that do most of the work",
        tableau: {
          entetes: ["Brush", "Its job", "Without it"],
          lignes: [
            ["Foundation brush", "Press and buff liquid or cream into the skin", "Fingers work, but coverage is less even and slower to build"],
            ["Powder brush", "Set the base and take down shine over a wide area", "The base slides and shines by mid-day"],
            ["Blush brush", "Diffuse colour on the cheek with a soft, tapered head", "A hard edge, with the colour concentrated in one spot"],
            ["Eye blending brush", "Blur the edges of eyeshadow", "Visible lines between two shades"],
          ],
        },
        p: [
          "Everything else is a refinement. A concealer brush makes a difference under the eye, an eyeliner brush makes a difference on the lash line, and a lip brush matters if you wear dark colours. None of them is needed to look finished.",
        ],
      },
      {
        h2: "What the extra brushes in a big set are for",
        ul: [
          "Concealer brush: a small, flat or rounded head to place product under the eye and around the nose.",
          "Eyeliner brush: an angled or fine tip to press colour close to the lashes.",
          "Lip brush: for dark or matte colours, where a precise edge is visible.",
          "Brow comb and lash wand: plastic combs, not brushes. They separate, they do not apply.",
          "Smudge sponge: a foam tip for a soft line along the lash line. Useful once a month, at most.",
          "Bronzer brush: a large, fluffy head. A powder brush usually does the same job.",
          "Fan brush: for a light sweep of highlighter. The most optional brush in any set.",
          "Setting brush: a small powder brush for the under-eye and the sides of the nose.",
        ],
        p: [
          "None of these is a scam. They are simply tools for specific looks, sold together because a set is cheaper to manufacture and easier to market than eight separate decisions.",
        ],
      },
      {
        h2: "A set, or one brush at a time?",
        p: [
          "The arithmetic is blunt. In this catalogue, the 12-brush set works out cheapest per brush, the five-tool set sits in the middle, and a single mid-range brush costs more per tool than either set. That is arithmetic, not a recommendation.",
          "Prices move, and they differ by size and by seller. Compare price per brush before comparing sets: that is the only number that stays meaningful.",
        ],
        tableau: {
          entetes: ["Approach", "Price per brush", "Who it suits"],
          lignes: [
            ["12-piece set", "The lowest of the three", "A first kit, a gift, a travel kit you can lose"],
            ["5-piece set", "In the middle", "Someone who already owns a sponge or a concealer brush"],
            ["One good brush at a time", "The highest, per tool", "A replacement, or one brush you use every day"],
          ],
        },
      },
      {
        h2: "Synthetic or natural bristles",
        p: [
          "Almost every inexpensive set is synthetic, and that is not a downgrade for a beginner.",
          "If you use a liquid foundation and a cream blush, synthetic is the better tool, whatever the price. If you mostly wear powder, natural hair holds pigment differently — it is a texture choice, not a quality ranking.",
        ],
        tableau: {
          entetes: ["", "Synthetic", "Natural hair"],
          lignes: [
            ["Works best with", "Liquid and cream", "Powder"],
            ["Absorbs product", "Little", "More"],
            ["Washing", "Easier, dries faster", "Needs more care, can dry out"],
            ["Animal origin", "None", "Yes"],
            ["Price", "Low", "High"],
          ],
        },
      },
      {
        h2: "Brush, sponge or fingers for foundation",
        tableau: {
          entetes: ["", "Brush", "Damp sponge", "Fingers"],
          lignes: [
            ["Finish", "Even, slightly more coverage", "Softest, most skin-like", "Variable, depends on the hand"],
            ["Speed", "Fast", "Slower", "Fast"],
            ["Product used", "Little", "More: the sponge absorbs some", "Little"],
            ["Streaks", "Possible if the brush is stiff", "Rare", "Possible"],
            ["Lifespan", "Years, with washing", "A few months", "Indefinite"],
          ],
        },
        p: [
          "The common routine is both: a brush to lay the product down, a damp sponge to soften the edges. One does not replace the other, and neither fixes a foundation that is the wrong formula for the skin.",
        ],
      },
      {
        h2: "How to wash a brush without ruining it",
        ol: [
          "Lukewarm water, never hot: heat softens the glue that holds the bristles in the ferrule.",
          "A drop of mild soap or shampoo in the palm, then work the bristles in circles. No soaking.",
          "Rinse with the brush pointing down, so water never runs towards the handle.",
          "Squeeze gently in a towel, reshape the head with the fingers, and lay it flat to dry with the bristles over the edge of a surface.",
          "Never stand a wet brush upright in a cup: water runs into the ferrule and the bristles start to shed.",
        ],
        p: [
          "A foundation brush and a sponge, which touch liquid product, need washing after a few uses. A powder brush can go a few weeks. No product on this page changes that.",
        ],
      },
      {
        h2: "The 3 mistakes that make a good brush useless",
        tableau: {
          entetes: ["Mistake", "What happens"],
          lignes: [
            ["Never washing it", "Product builds up, application turns uneven, and the brush stops picking up colour properly"],
            ["Drying it upright", "Water sits in the ferrule, the glue loosens, bristles fall out"],
            ["Pressing hard on the skin", "Streaks with a brush, and a splayed head within weeks"],
          ],
        },
        p: [
          "A cheap brush that is washed properly outperforms an expensive one that never is. That is the whole point of this page.",
        ],
      },
      {
        h2: "How this page was built",
        p: [
          "No test, no lab result, no invented trial. The product details quoted here come from Amazon listings checked on 17 November 2026: a two-sponge pack of latex-free polyurethane foam, dermatologist tested, vegan and cruelty-free; a 12-brush set with synthetic bristles in a zip pouch, vegan, Leaping Bunny and PETA certified; a five-tool set of four synthetic brushes and one sponge. Prices change often, which is why no price is displayed on this site: check the listing before buying. The washing routine and the brush roles are standard makeup practice, not a claim about any specific product.",
        ],
      },
    ],
    ctaApresBloc: 1,
    faq: [
      {
        q: "How many makeup brushes do I actually need?",
        a: "Four: foundation, powder, blush and an eye blending brush. A fifth, a damp sponge, softens the base. Everything beyond that is for a specific look, not for a finished face.",
      },
      {
        q: "Is a 12-piece brush set worth it?",
        a: "As a first kit, yes: you get the four useful brushes plus extras for about the price of one mid-range brush. If you already own a sponge and a concealer brush, a smaller set is the better buy.",
      },
      {
        q: "Are cheap brushes bad for the skin?",
        a: "The brush itself is rarely the problem; a dirty brush is. Wash it after every few uses, dry it flat, and replace the sponge when the foam starts to tear.",
      },
      {
        q: "Synthetic or natural bristles for a beginner?",
        a: "Synthetic. They suit liquid and cream, wash easily, dry faster, and no animal is involved. Natural hair is a powder tool, and it costs more.",
      },
      {
        q: "How often should I replace my brushes?",
        a: "A well-washed brush lasts years. Replace it when the bristles splay and will not reshape, when they shed every time you use it, or when the ferrule comes loose.",
      },
      {
        q: "Do I need a brush for concealer?",
        a: "No. The tip of a damp sponge does the job, and fingers work too. A small concealer brush is a comfort, not a requirement.",
      },
    ],
    liens: [
      { href: "/product/real-techniques-miracle-complexion-sponge", label: "Real Techniques Miracle Complexion Sponge, 2 sponges" },
      { href: "/product/elf-professional-12-brush-set", label: "e.l.f. Professional Set of 12 brushes" },
      { href: "/product/real-techniques-everyday-essentials", label: "Real Techniques Everyday Essentials, 5 tools" },
      { href: "/comparisons/best-foundation-for-dry-skin", label: "Foundation stick vs cream base: what dry skin needs" },
      { href: "/guides/beginner-makeup-routine-5-steps", label: "Beginner makeup routine: 5 steps, 10 minutes" },
      { href: "/guides/lashes-fall-flat-by-noon", label: "Why your lashes fall flat by noon" },
      { href: "/category/makeup", label: "All makeup products" },
    ],
  },
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
          "Normal to dry skin, and you want a satin finish before going out: dry oil last, on skin that is already moisturized. Two pumps for the legs, one for the arms.",
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
          "A dry oil can still mark light-colored clothes if you overdose it.",
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
      "A body glow oil is not a moisturizer with extra shine. It is a finishing product: it goes on last, over skin that is already hydrated, and its only job is the way the skin catches the light. Used that way, two pumps cover both legs.",
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
            ["Putting it on dry, unmoisturized skin", "The oil sits on the surface and the skin still feels tight", "Lotion first, oil last"],
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
          "Light-colored or silk clothes straight after application.",
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
      "Fragrance-free means no fragrance has been added. Unscented means the smell has been neutralized, sometimes with a masking fragrance. Natural scent almost always means essential oils or botanical extracts, which are fragrance compounds even when the word fragrance does not appear. For reactive skin, fragrance-free is the default choice.",
    blocs: [
      {
        h2: "The four labels that look the same",
        tableau: {
          entetes: ["What the listing says", "What it means", "For reactive skin"],
          lignes: [
            ["Fragrance-free", "No fragrance added to the formula", "The default choice"],
            ["Unscented", "The smell has been neutralized, sometimes by a masking fragrance", "Check further: the mask can irritate"],
            ["Natural fragrance, natural scent", "Essential oils or botanical extracts carry the smell", "Treat it as fragrance"],
            ["No mention at all", "Unknown", "Not worth the risk"],
          ],
        },
      },
      {
        h2: "Fragrance-free does not mean odorless",
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
          "Preservatives such as phenoxyethanol: rarely an issue in an oil with no water in it, but worth recognizing on a label.",
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
        a: "No. Fragrance-free means nothing has been added to scent the product. Unscented means the smell has been neutralized, sometimes with a masking fragrance, so it is not necessarily fragrance-free.",
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
          "What works: a small amount, warmed between the fingers, on the ends of dry or damp hair; a thin layer on elbows, knees and heels; and under a lighter oil, on skin that is already moisturized.",
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
    ctaApresBloc: 1,
    faq: [
      {
        q: "Can I use body oil on my hair?",
        a: "On the ends, usually yes, in a small amount. On the scalp and on fine hair, no: it is too heavy and too occlusive.",
      },
      {
        q: "Can I use hair oil on my body?",
        a: "You can, but it is an expensive way to moisturize, and some hair oils are built around silicones rather than emollients.",
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
                  <strong>{encart.nom}</strong><br />
                  <span style={{ color: "#d9c4b4", fontSize: "0.9rem" }}>
                    Stock, size and price are confirmed at {encart.marchand} when you click.
                  </span>
                </div>
                <AffiliateButton
                  url={encart.urlAffiliation}
                  productSlug={encart.slug}
                  category={encart.categorie}
                  merchant={encart.marchand}
                  label="See Price on Amazon"
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
      {encart && (
        <StickyBuyBar
          url={encart.urlAffiliation}
          productSlug={encart.slug}
          category={encart.categorie}
          merchant={encart.marchand}
          productName={encart.nom}
        />
      )}
    </>
  );
}
