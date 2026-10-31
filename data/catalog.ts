export type ProductStatus = "active" | "draft" | "archived";

export interface Product {
  slug: string;
  nom: string;
  marque: string;
  categorie: string; // category slug
  description: string;
  image: string;
  imageAlt: string;
  caracteristiques: string[];
  avantages: string[];
  inconvenients: string[];
  publicIdeal: string;
  casUsage: string[];
  // Price: null = do not display any price (requires verification). Never invent one.
  prixIndicatif: number | null;
  prixDevise?: string;
  prixVerifieLe?: string | null;
  marchand: string;
  urlAffiliation: string;
  statut: ProductStatus;
  majLe: string;
  noteRedaction: number; // 0-5, honest editorial rating based on public criteria
  faq: { q: string; a: string }[];
}

export interface Category {
  slug: string;
  nom: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const SITE = {
  nom: "Éclatia",
  tagline: "The independent beauty guide",
  domaine: "guide-beaute.pages.dev",
  description:
    "Éclatia helps you discover, compare and choose your beauty essentials: hot-air brushes, facial skincare, hair dryers. Honest comparisons, clear guides, transparent partner links.",
  contactEmail: "limitlessmind19@gmail.com",
  affiliateParamNote:
    "Replace the example URLs (tag=eclatia20-20) with your real affiliate links, ideally via Amazon OneLink for US/UK/AU geo-redirect. See docs/ajouter-produit.md",
};

export const CATEGORIES: Category[] = [
  {
    slug: "hair-styling",
    nom: "Hair Styling",
    description: "Hot-air brushes, hair dryers, straighteners: style without damage.",
    image: "https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Hairstylist styling hair with a brush and dryer in a salon",
  },
  {
    slug: "face-care",
    nom: "Face Care",
    description: "Serums, moisturizers, cleansers: a simple routine that works.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Minimalist serum and face cream bottles",
  },
  {
    slug: "body-bath",
    nom: "Body & Bath",
    description: "Hydration, exfoliation and gentle hair removal for comfortable skin.",
    image: "https://images.pexels.com/photos/33756874/pexels-photo-33756874.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Applying moisturizing cream from a tube onto the hand",
  },
  {
    slug: "makeup",
    nom: "Makeup",
    description: "Natural-looking base, defined eyes: the essentials, nothing more.",
    image: "https://images.pexels.com/photos/13307114/pexels-photo-13307114.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Makeup brushes and foundation bottles on a marble surface",
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "revlon-one-step-dryer-volumizer",
    nom: "Revlon One-Step Dryer & Volumizer",
    marque: "Revlon",
    categorie: "hair-styling",
    description:
      "One-step ionic hair dryer and volumizer with an integrated oval brush head. Rated at 1100 W with 3 heat and 2 speed settings: dries and adds root volume in the same pass, without a separate brush.",
    image: "https://images.pexels.com/photos/8468136/pexels-photo-8468136.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Woman styling her long hair with a hot-air brush at home",
    caracteristiques: [
      "1100 W (manufacturer data)",
      "3 heat settings, 2 speed settings",
      "Ionic",
      "Integrated oval brush head, no interchangeable attachments",
      "Pro Collection",
    ],
    avantages: ["One tool instead of a dryer plus a round brush", "Adds root volume while drying", "Straightforward: nothing to swap mid-routine"],
    inconvenients: ["1100 W is not enough for very thick or soaking-wet hair", "Fixed oval head, so no dedicated concentrator or diffuser", "Not a replacement for a curling tool"],
    publicIdeal: "Fine to normal hair wanting volume on a short daily routine.",
    casUsage: ["Morning blowout", "Root volume", "Quick dry before a meeting"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B01HZ5K8UE?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-18",
    noteRedaction: 3.9,
    faq: [
      { q: "Is it a 5-in-1 brush with attachments?", a: "No. It is a one-step dryer and volumizer with a single integrated brush head. There are no interchangeable attachments on this model." },
      { q: "Is 1100 W enough for thick hair?", a: "It suits fine to normal hair. Very thick or soaking-wet hair needs a more powerful dryer. Always towel-dry first and follow the manufacturer's instructions." },
    ],
  },
  {
slug: "revlon-compact-hair-dryer-1875w",
    nom: "Revlon Compact Hair Dryer 1875W",
    marque: "Revlon",
    categorie: "hair-styling",
    description:
      "1875 W hair dryer built around a lightweight, travel-friendly design. The selling point is raw drying power in a body that takes little room in a bag, not styling versatility.",
    image: "https://images.pexels.com/photos/7518702/pexels-photo-7518702.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Close-up of a red compact hair dryer",
    caracteristiques: [
      "1875 W (manufacturer data)",
      "Lightweight design, built for travel",
      "Black",
      "Heat and speed settings, included accessories: check the current listing",
    ],
    avantages: ["Fast drying thanks to 1875 W", "Lightweight build, easier to hold and to pack", "No attachments to sort before a trip"],
    inconvenients: ["Built for power, not for styling versatility", "Specifications vary between batches: confirm settings and accessories before buying"],
    publicIdeal: "Travel, or anyone who wants drying power rather than styling features.",
    casUsage: ["Travel and hotel nights", "Express drying", "After the shower"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B003TQPRGY?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-18",
    noteRedaction: 4.0,
    faq: [{ q: "Is it ionic, and does it come with a diffuser?", a: "We only publish what we can confirm: 1875 W and a lightweight travel build. Ionic function, diffuser and heat settings vary, so check the current listing before buying." }],
  },
  {
    slug: "truskin-vitamin-c-duo",
    nom: "TruSkin Vitamin C Serum & Moisturizer Duo",
    marque: "TruSkin",
    categorie: "face-care",
    description:
      "Two-step vitamin C routine sold as a duo: a 1 fl oz serum followed by a 2 fl oz moisturizer. The active and the hydration arrive together instead of being bought separately.",
    image: "https://images.pexels.com/photos/13964620/pexels-photo-13964620.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Hand holding a dropper over a vitamin C serum bottle",
    caracteristiques: [
      "Serum 1 fl oz + moisturizer 2 fl oz",
      "Sold as a duo",
      "Designed as a two-step routine: brighten, then hydrate",
      "Concentration and full ingredient list: check at Amazon",
    ],
    avantages: ["Two matched steps without buying two products separately", "Moisturizer volume suited to daily use", "Simple, fixed morning routine"],
    inconvenients: ["You need both steps to use it as intended", "Total volume is larger than a single-bottle serum"],
    publicIdeal: "Beginners who want a vitamin C routine without choosing each product separately.",
    casUsage: ["Morning, step 1 serum", "Morning, step 2 moisturizer", "Before SPF"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B08QSLJ8CC?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-18",
    noteRedaction: 4.0,
    faq: [
      { q: "Is it a serum or a moisturizer?", a: "Both. The pack contains a 1 fl oz serum and a 2 fl oz moisturizer." },
      { q: "What concentration is the serum?", a: "Check the current listing on Amazon: we do not publish a concentration figure we cannot verify on the product page." },
    ],
  },
  {
    slug: "ceramide-moisturizing-cream",
    nom: "CeraVe Moisturizing Cream",
    marque: "CeraVe",
    categorie: "face-care",
    description:
      "Fragrance-free ceramide moisturizer with hyaluronic acid, marketed for dry skin and skin barrier repair, for face and body. Non-comedogenic, and sold here in a large 19 oz tub built for daily use.",
    image: "https://images.pexels.com/photos/7321497/pexels-photo-7321497.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Hand scooping moisturizing cream from a jar",
    caracteristiques: ["Ceramide moisturizer, marketed for skin barrier repair", "Hyaluronic acid", "Fragrance-free", "Non-comedogenic", "Face and body use", "Marketed for dry skin", "Marketed for daily use", "19 oz format sold here"],
    avantages: ["Large format, good value for daily full-body use", "Fragrance-free, suits reactive skin", "Works as a makeup base on hydrated skin"],
    inconvenients: ["Very large tub, less practical for travel than a small jar", "Light texture can feel insufficient on very dry winter skin"],
    publicIdeal: "Dry skin, face and body, and anyone who wants one cream for everything.",
    casUsage: ["Face, morning and night", "Body after the shower", "Makeup base"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B00TTD9BRC?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-24",
    noteRedaction: 4.5,
    faq: [
      { q: "Does it suit oily skin?", a: "It is non-comedogenic, so it is generally well tolerated. Very oily skin may still prefer a lighter gel." },
      { q: "Is it good for dry skin?", a: "It is marketed for dry skin and skin barrier repair, for face and body. On very dry winter skin the light texture can still feel thin, so apply it on damp skin or layer it." },
      { q: "Is this the small jar?", a: "No: the format sold here is 19 oz, for face and body. Sizes vary, so check the size before ordering." },
    ],
  },
  {
    slug: "cetaphil-daily-cleanser-lotion",
    nom: "Cetaphil Daily Cleanser + Lotion Set",
    marque: "Cetaphil",
    categorie: "face-care",
    description:
      "Bundle set pairing a 16 oz gentle daily face wash with a 2 oz moisturizing lotion. Marketed for sensitive and dry skin, as non-irritating and as dermatologist recommended.",
    image: "https://images.pexels.com/photos/7623581/pexels-photo-7623581.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Gentle face wash close-up",
    caracteristiques: [
      "16 oz daily face wash",
      "2 oz moisturizing lotion included",
      "Sold as a bundle set",
      "Marketed for sensitive and dry skin",
      "Marketed as non-irritating and dermatologist recommended",
    ],
    avantages: ["One purchase covers cleansing and a first moisturizing step", "Large cleanser format for daily use", "Marketed for sensitive and dry skin"],
    inconvenients: ["Unbalanced sizes: 16 oz of cleanser against only 2 oz of lotion", "The small lotion runs out well before the cleanser"],
    publicIdeal: "Sensitive or dry skin wanting cleanser and lotion in a single purchase.",
    casUsage: ["Morning cleanse", "Second cleanse step", "Lotion straight after cleansing"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B0DXS4CR2B?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-18",
    noteRedaction: 4.4,
    faq: [
      { q: "Is this just a cleanser?", a: "No. The pack contains a 16 oz daily face wash plus a 2 oz moisturizing lotion." },
      { q: "Do I still need a separate moisturizer?", a: "For light use, the included lotion can cover it. On dry skin you will probably still want a larger, dedicated cream." },
    ],
  },
  {
    slug: "raw-shea-butter-16oz",
    nom: "It's Pure Natural Raw Shea Butter",
    marque: "It's Pure Natural",
    categorie: "body-bath",
    description:
      "Raw, unrefined, degummed ivory African shea butter in a 16 oz tub. This is a solid butter, not an oil: it melts on contact with warm skin and leaves a rich, occlusive finish.",
    image: "https://images.pexels.com/photos/12572310/pexels-photo-12572310.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Illustrative photo: a jar of pale yellow cream with wood and dried flowers. The product itself is raw ivory shea butter in a 16 oz tub.",
    caracteristiques: [
      "Raw, unrefined, degummed ivory shea butter",
      "16 oz (473 ml) tub",
      "Solid butter, not an oil",
      "Marketed for use on skin, hair and face",
    ],
    avantages: ["Sold as pure shea butter, nothing blended in", "16 oz is a lot for body use", "Doubles as a leave-in on hair ends and a base under oil"],
    inconvenients: ["Solid and greasy until melted: it does not dry down like an oil", "Sits on top of the skin rather than sinking into it", "Strong natural scent"],
    publicIdeal: "Anyone who wants the raw ingredient and does not mind a rich, slow-absorbing finish.",
    casUsage: ["Body butter on dry areas", "Melted down with a few drops of oil", "Hair ends and dry scalp"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B07RRDMMZM?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-18",
    noteRedaction: 4.2,
    faq: [
      { q: "Is this a body oil?", a: "No. It is raw shea butter: a solid that melts on contact with warm skin. If you want a ready-to-use oil, this is not it." },
      { q: "Can I use it on eczema-prone skin?", a: "Many people do, but it is a rich occlusive butter. Patch-test first and introduce one product at a time." },
    ],
  },
  {
    slug: "fit-me-shine-free-balance-stick",
    nom: "Maybelline Fit Me Shine-Free + Balance Stick",
    marque: "Maybelline",
    categorie: "makeup",
    description:
      "Multi-use cream foundation stick with a natural matte finish. Applied straight from the tube in thin, buildable layers, and usable a second time as a contour stick.",
    image: "https://images.pexels.com/photos/7256102/pexels-photo-7256102.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Stock photo: flatlay of a foundation bottle, concealer and compact powder on a beige background",
    caracteristiques: [
      "Cream stick format, no pump and nothing to spill",
      "Natural matte, shine-free finish",
      "Multi-use: foundation and contour",
      "Marketed for natural matte coverage",
      "Shade sold here: Porcelain",
      "Sold as a single stick",
    ],
    avantages: [
      "Travel-safe: a solid stick has no liquid to leak",
      "Fast to apply: swipe, blend, done",
      "Controls shine without a separate powder step",
      "Second use as a contour stick for cheekbones and jawline",
    ],
    inconvenients: [
      "Matte finish needs a well-hydrated base to avoid looking flat on dry skin",
      "Porcelain only suits fair to light undertones",
      "Dense cream needs practice to blend without edges",
    ],
    publicIdeal: "Normal to combination skin wanting a matte natural finish, and anyone who travels with makeup.",
    casUsage: ["On-the-go base", "T-zone shine control", "Quick contour definition"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B00DQLN3Y0?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-18",
    noteRedaction: 3.6,
    faq: [
      { q: "Is it a serum or a liquid foundation?", a: "Neither. It is a cream stick: you apply it directly from the tube, with no brush and no mixing." },
      { q: "Does it work on dry skin?", a: "Only over a properly hydrated base. On bare dry skin the matte finish can read flat." },
      { q: "Does it contain SPF?", a: "No SPF is claimed on the Fit Me Shine-Free + Balance stick. Apply a separate SPF 30+ in daylight." },
    ],
  },
  {
    slug: "volume-length-mascara",
    nom: "Maybelline Lash Sensational Sky High",
    marque: "Maybelline",
    categorie: "makeup",
    description:
      "Washable mascara from the Lash Sensational Sky High line, marketed for volume, length, definition and curl with a buildable formula. Blackest Black.",
    image: "https://images.pexels.com/photos/4938457/pexels-photo-4938457.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Mascara brush and container on a marble surface",
    caracteristiques: ["Washable formula", "Buildable", "Blackest Black", "Sold as 1 count", "Brush type and volume: check at Amazon"],
    avantages: ["Buildable: a thin coat for day, more for evening", "Washable, so no waterproof residue", "Marketed for volume, length, definition and curl"],
    inconvenients: ["Washable formulas can transfer a little more than waterproof ones", "Replace every 3 months (hygiene)"],
    publicIdeal: "Defined, voluminous lashes without a waterproof formula.",
    casUsage: ["Daily wear", "Evening looks needing more volume"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B08H3JPH74?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-18",
    noteRedaction: 4.1,
    faq: [
      { q: "Is this the Sky High version?", a: "Yes, it is the Sky High variant of Lash Sensational." },
      { q: "Is it waterproof?", a: "No: it is marketed as a washable formula." },
    ],
  },
  {
    slug: "micellar-makeup-remover-wipes",
    nom: "Neutrogena Makeup Remover Micellar Wipes",
    marque: "Neutrogena",
    categorie: "face-care",
    description:
      "Twin pack of micellar cleansing wipes (2 x 25) made with plant-based cloths. Removes oil, dirt and waterproof makeup without a heavy residue, and is alcohol-free.",
    image: "https://images.pexels.com/photos/5468609/pexels-photo-5468609.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Woman using a makeup remover pad for a micellar cleansing routine",
    caracteristiques: [
      "Twin pack: 2 x 25 wipes",
      "Plant-based cloths",
      "Alcohol-free",
      "Marketed to remove oil, dirt and waterproof makeup",
      "Full formula and testing claims: check at Amazon",
    ],
    avantages: ["Removes waterproof makeup in one step", "Alcohol-free, no heavy residue", "No bottle to carry in a gym or travel bag"],
    inconvenients: ["Single-use, so the cost per application is higher than a liquid cleanser", "Reseal the pack or the wipes dry out", "Follow with a cleanser after heavy makeup"],
    publicIdeal: "Busy routines, travelers, late nights when the sink feels too far.",
    casUsage: ["After-makeup clean-up", "Removing waterproof mascara before or alongside a cleanser", "Freshen up after a commute or a workout"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B00U2VQZDS?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-18",
    noteRedaction: 4.3,
    faq: [
      { q: "Do I still need a cleanser if I use wipes?", a: "For light makeup, usually not. For foundation plus SPF, follow with a gentle cleanser: the wipe lifts the bulk, the cleanser cleans the residue." },
      { q: "Are they safe around the eyes?", a: "They are marketed for gentle removal of eye-area makeup. Wipe closed eyelids without rubbing, and stop if irritation appears." },
    ],
  },
  {
    slug: "age-rewind-eraser-concealer",
    nom: "Maybelline Instant Age Rewind Eraser Concealer",
    marque: "Maybelline",
    categorie: "makeup",
    description:
      "Multi-use concealer marketed to conceal, contour and correct, with a crease-resistant formula intended for under eyes and dark spots, and up to 12 hours of wear. Applied with its own sponge tip.",
    image: "/pins/base-maybelline-stick-clean.jpg",
    imageAlt: "Illustrative photo: concealer being applied under the eye, product packaging may differ",
    caracteristiques: [
      "Sponge-tip applicator",
      "Multi-use: conceal, contour and correct (claim on listing)",
      "Crease-resistant formula (claim on listing)",
      "Intended for under eyes and dark spots (claim on listing)",
      "Up to 12 hours of wear (claim on listing)",
      "Shade sold here: 110",
      "Net content not stated on the audited page - check at Amazon",
    ],
    avantages: [
      "One product can cover dark circles, add contour or brighten",
      "Applies straight from the sponge tip, no separate brush needed",
      "Crease-resistant claim targets the under-eye area, where lines show first",
    ],
    inconvenients: [
      "Crease resistance and 12-hour wear are brand claims, not independent tests",
      "Only one shade offered here: 110 - check the shade chart at Amazon before ordering",
      "The sponge tip absorbs product over time and needs gentle cleaning",
    ],
    publicIdeal: "Anyone wanting a single multi-use concealer for under-eye darkness and quick spot correction.",
    casUsage: ["Under-eye concealer", "Spot correction", "Quick contour and highlight touches"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B004Y9GTOO?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-19",
    noteRedaction: 4.0,
    faq: [
      { q: "Is it only for dark circles?", a: "No: the listing positions it as multi-use - conceal, contour and correct." },
      { q: "How do I apply it?", a: "Use the built-in sponge tip; the standard instruction is to turn it until concealer becomes visible on the sponge." },
      { q: "Does it really last 12 hours?", a: "That figure is a claim from the listing itself, not an independent test." },
    ],
  },
  {
    // NOTE: image is hotlinked from the Amazon CDN on purpose.
    // Amazon Associates allows displaying product images from their servers,
    // but forbids downloading/caching them (no copy in /public, no next/image).
    slug: "naturium-glow-getter-multi-oil-body-wash",
    nom: "Naturium The Glow Getter Multi-Oil Body Wash",
    marque: "Naturium",
    categorie: "body-bath",
    description:
      "A multi-oil body wash that turns from oil into a light lather, with glycerin listed first and a blend of sea buckthorn, rose hip, jojoba and squalane. Marketed for all skin types as a gentle cleanser that does not strip moisture. 16.9 fl oz.",
    image: "https://m.media-amazon.com/images/I/51UQAhpL9ML._SL1500_.jpg",
    imageAlt: "Clear pump bottle of pale yellow multi-oil body wash",
    caracteristiques: [
      "16.9 fl oz (500 ml)",
      "Glycerin listed first, before water",
      "Multi-oil blend: sea buckthorn, rose hip, jojoba, squalane",
      "Oil-to-lather texture",
      "Marketed as a gentle cleanser for all skin types",
      "No SLS or SLES in the ingredient list",
      "No added fragrance in the ingredient list; scent comes from botanical extracts",
      "Sold as vegan, cruelty free and paraben free on the listing",
    ],
    avantages: [
      "Cleanses without the tight feeling a strong gel wash leaves behind",
      "One bottle for shower and shaving",
      "Large 500 ml format",
      "Full ingredient list is published, so you can check it before buying",
    ],
    inconvenients: [
      "Still contains surfactants: it is a wash, not pure oil",
      "Scented by botanical extracts, so not a truly fragrance-free product",
      "Pump bottle is less practical for travel than a small format",
    ],
    publicIdeal: "Dry to normal body skin that feels tight after a classic body wash, and anyone who wants a gentle oil-to-lather cleanser.",
    casUsage: ["Daily shower", "Shaving base", "Winter body cleansing"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B0B1PDDLGZ?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-26",
    noteRedaction: 4.4,
    faq: [
      { q: "Is it pure oil?", a: "No. It is a body wash built on glycerin with a multi-oil blend, and it lathers. It cleanses gently rather than coating the skin like a body oil does." },
      { q: "Is it fragrance-free?", a: "The ingredient list shows no added fragrance. The scent comes from botanical extracts such as vanilla, gardenia and clove, so it is not unscented." },
      { q: "Does it contain sulfates?", a: "Neither SLS nor SLES appears in the ingredient list published on the listing. Formulas can change, so check the bottle on arrival." },
      { q: "How much should I use?", a: "One pump is enough for the body. Like any wash, using more does not clean better." },
    ],
  },
  {
    slug: "ilia-multi-stick-cheek-lip",
    nom: "ILIA Multi-Stick Cheek + Lip Color",
    marque: "ILIA",
    categorie: "makeup",
    description:
      "Cream colour stick for cheeks and lips, marketed for a buildable wash of colour in a luminous finish. The formula is built on shea butter and is meant to melt with the warmth of the skin. Shade sold here: Tenderly, a soft pink.",
    image: "https://images.pexels.com/photos/7290670/pexels-photo-7290670.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Stock photo: flat lay of cheek colour compacts and makeup brushes on a white surface (illustrative)",
    caracteristiques: [
      "Cream stick, twist-up: no brush and no pump",
      "Two uses in one product: cheeks and lips",
      "Marketed for a buildable, blendable wash of colour",
      "Shea butter listed as a key ingredient on the listing",
      "Marketed as dermatologist-tested, talc-free, cruelty-free and gluten-free",
      "12 shades in the range; the shade sold here is Tenderly (soft pink)",
      "Sold as a single stick",
    ],
    avantages: [
      "A cream texture, the family usually recommended when the skin is dry",
      "One product for cheeks and lips, so less to carry",
      "Blends with fingers, which warms the product and softens the edges",
      "Shea butter base: it does not set tight the way a powder can",
      "Talc-free formula",
    ],
    inconvenients: [
      "Cream textures can migrate on oily skin and in heat",
      "One shade per listing: you cannot swatch before buying",
      "Applied straight from the stick it can look streaky until blended",
      "Less buildable than a powder if you want a strong, opaque colour",
    ],
    publicIdeal: "Dry to normal skin wanting a natural flush on cheeks and lips, and anyone who prefers a stick they can blend with their fingers.",
    casUsage: ["Everyday cheek colour", "Sheer lip tint", "Travel makeup bag"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B00II3QMQM?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-31",
    noteRedaction: 4.0,
    faq: [
      { q: "Is it a blush or a lipstick?", a: "Both: it is marketed as a cheek and lip colour. On the lips it gives a sheer wash rather than full opacity." },
      { q: "Does it suit dry skin?", a: "That is its natural fit. A cream formula built on shea butter sits on dry skin better than a powder, which can look chalky over dry patches." },
      { q: "Do I need a brush?", a: "No. It is designed to be swiped on and blended with the fingers. A dense brush works too, but fingers warm the product and make blending easier." },
      { q: "Is it fragrance-free?", a: "No added fragrance is highlighted on the listing. Formulas change and the listing is not the full ingredient list: check the packaging if your skin reacts to scent." },
      { q: "How many shades are there?", a: "The range lists 12 shades. This page refers to one of them, Tenderly, a soft pink." },
      { q: "Will it work on oily skin?", a: "It can, in a thin layer, but cream colour moves more than powder on oily skin and in heat. Set it with a light powder if you need it to stay put." },
    ],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
export function getProductsByCategory(cat: string) {
  return PRODUCTS.filter((p) => p.categorie === cat && p.statut === "active");
}
export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
