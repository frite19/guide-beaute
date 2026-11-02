export type ProductStatus = "active" | "draft" | "archived";

export interface Product {
  slug: string;
  nom: string;
  marque: string;
  categorie: string; // category slug
  description: string;
  image: string;
  imageAlt: string;
  // Optional caption shown under the hero photo. Use it when the photo is a
  // real product shot (Amazon listing) rather than an illustrative stock photo.
  imageNote?: string;
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
  {
    slug: "medicube-pdrn-pink-collagen-toner-pads",
    nom: "medicube PDRN Pink Collagen Jelly Toner Pads",
    marque: "medicube",
    categorie: "face-care",
    description:
      "A pouch of 70 pre-soaked gel toner pads in a pink jelly texture, marketed around salmon DNA PDRN and collagen. The pad is a Tencel-based gel disc you can leave on for five minutes as a mini mask, then wipe across the face. Niacinamide, allantoin and glycerin appear in the ingredient list published on the listing.",
    image: "https://m.media-amazon.com/images/I/61lZFElGdBL._SL1500_.jpg",
    imageAlt: "Pink medicube jar labelled PDRN Pink Collagen Toning Gel Toner Pad, 120 ml and 70 pads",
    imageNote: "Product photo from the Amazon listing: the jar is labelled 120 ml / 4.05 fl oz (70 pads). Packaging and formulas change, so check the reference at Amazon when you click.",
    caracteristiques: [
      "Format: 70 pads, 120 ml / 4.05 fl oz",
      "Pad: Tencel-based gel disc",
      "Marketed ingredients: salmon DNA PDRN, collagen",
      "Listed ingredients: niacinamide, allantoin, glycerin",
      "Skin types: marketed for all skin types and daily use",
      "Use: 5 seconds in the essence, 5 minutes on the skin, wipe, then pat in the rest",
      "Amazon rank: #1 in Facial Toners & Astringents (2 Nov 2026)",
    ],
    avantages: [
      "A pad format: no cotton wool and no bottle of toner to decant",
      "Can be left on for five minutes as a mask over one area, not only swiped",
      "Niacinamide is named in the published ingredient list, not only in the title",
      "The full ingredient list is published, so you can check it before buying",
    ],
    inconvenients: [
      "PDRN and madecassoside appear in the title and the brand claims, but neither is named in the ingredient list published on the listing (checked 2 Nov 2026)",
      "The pack reads \"High Purity Salmon PDRN 99%\": that figure describes the purity of the raw material, not a concentration in the finished product",
      "The listing adds a footnote saying the PDRN information describes the raw material, not a result measured on skin",
      "One pouch opened and closed repeatedly: the pads can dry out if it is not sealed well",
      "Chamomile oil, rose water and jasmine water are in the formula, so it is not fragrance-free",
    ],
    publicIdeal: "Anyone who prefers a pre-soaked pad to a liquid toner, and wants a five-minute step rather than a ten-step routine.",
    casUsage: ["Evening tone step", "Five-minute mask on the cheeks", "Travel, instead of a bottle of toner"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B0DX74CWSQ?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-11-02",
    noteRedaction: 3.9,
    faq: [
      { q: "What is PDRN?", a: "PDRN stands for polydeoxyribonucleotide, a DNA fragment the brand presents as salmon-derived. On this listing it works as an ingredient name in the title and the bullets: the ingredient list published on the page does not spell it out. Judge the product on what is listed (niacinamide, allantoin, glycerin) and on the pad format." },
      { q: "Does the 99% on the jar mean the product is 99% PDRN?", a: "No. The jar reads \"High Purity Salmon PDRN 99%\", which describes the purity of the raw material the brand uses. The listing's own footnote says the information concerns the characteristics of the raw material." },
      { q: "How do you use the pads?", a: "As written on the listing: open the pouch, pour in the essence and wait 5 seconds; apply the pads to the areas you want and leave them on for 5 minutes; wipe gently, avoiding the eyes and lips; then pat in the remaining essence." },
      { q: "Are they fragrance-free?", a: "No. Chamomile flower oil, Rosa Damascena flower water and jasmine flower water are in the ingredient list. If your skin reacts to scent, patch-test first." },
      { q: "Can you use them every day?", a: "The listing markets them for daily use and for all skin types. On reactive skin, start two or three times a week and see how it goes before making it a daily step." },
      { q: "Do you need to rinse after using them?", a: "No. The protocol ends with wiping and patting in the rest of the essence, then continuing with your moisturizer." },
    ],
  },
  {
    slug: "eos-shea-better-caramel-cashmere-travel-lotion",
    nom: "eos Shea Better Body Lotion — Caramel Cashmere (Travel Size)",
    marque: "eos",
    categorie: "body-bath",
    description:
      "Limited-edition holiday body lotion in a travel size: two 2.5 fl oz tubes, scented with caramel, spiced vanilla and sugar cookie. Marketed as a 24-hour moisture formula built on seven oils and butters, including shea butter and shea oil, and sold as vegan and cruelty-free.",
    image: "https://m.media-amazon.com/images/I/81TgeqFWejL._SL1500_.jpg",
    imageAlt: "Two purple eos Shea Better 24H Moisture body lotion tubes, 2.5 fl oz each",
    imageNote: "Product photo from the Amazon listing. The tubes in the main photo are printed \"Cocoa Cashmere\", while the listing title and the tube's back label read \"Caramel Cashmere\". Check the scent name on the label when the pack arrives.",
    caracteristiques: [
      "Format: 2 tubes × 2.5 fl oz (74 ml)",
      "Scent: caramel, spiced vanilla, sugar cookie",
      "Formula: marketed as 7 oils and butters, including shea butter and shea oil",
      "Also listed: vitamin E",
      "Claims: 24-hour moisture, lightweight, non-greasy",
      "Free from: marketed as vegan, cruelty-free and phthalate-free",
      "Edition: limited holiday release",
      "Amazon rank: #1 in Body Lotions (2 Nov 2026)",
    ],
    avantages: [
      "Travel format: fits a bag, a desk drawer or a gym kit",
      "Two tubes, so one can be kept and one given away",
      "Shea butter and shea oil are named in the formula, which suits dry skin",
      "Layers with the brand's body wash and mist in the same scent",
    ],
    inconvenients: [
      "Limited edition: when the holiday stock is gone, the scent usually goes with it",
      "Fragranced on purpose, so not an option if you need fragrance-free body care",
      "2.5 fl oz is small for daily full-body use: two tubes go fast",
      "\"24-hour moisture\" is a brand claim, not a result measured on this page",
      "The listing states that its details describe the pack, not a single tube",
    ],
    publicIdeal: "Dry skin that likes scented body care, plus travel sizes and small gifts.",
    casUsage: ["Travel and weekends away", "Gift or stocking filler", "Layering with a matching body wash"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B0FYKPSR5N?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-11-02",
    noteRedaction: 4.0,
    faq: [
      { q: "Is this the full-size lotion?", a: "No. This listing is a pack of two travel tubes, 2.5 fl oz each — not the full-size bottle." },
      { q: "Is it fragrance-free?", a: "No, the scent is the point: caramel, spiced vanilla and sugar cookie. If you need unscented body care, this is not it." },
      { q: "Why does the photo read Cocoa Cashmere?", a: "That is what the listing's main image shows. The title, the scent notes and the back label of the tube say Caramel Cashmere. It looks like a mixed-up product photo on Amazon's side: check the label when the pack arrives, and the scent name on the listing before ordering." },
      { q: "Is it vegan and cruelty-free?", a: "The listing markets it as vegan, cruelty-free and phthalate-free. Formulas vary by scent and by edition: check the tube you receive." },
      { q: "Is it enough for very dry skin?", a: "It is a lotion built on shea butter and shea oil, so it is comfortable on dry skin. Very dry skin usually needs a richer butter, or a body oil on top of the lotion." },
      { q: "How long does one tube last?", a: "Two 2.5 fl oz tubes are a travel format: used daily on the whole body, they run out in a few weeks. For daily use at home, a full-size bottle is more economical." },
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
