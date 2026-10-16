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
  domaine: "eclatia-guide.com",
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
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Hot-air brush and hair dryer on a bright vanity",
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
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Body products and towel in a bright bathroom",
  },
  {
    slug: "makeup",
    nom: "Makeup",
    description: "Natural-looking base, defined eyes: the essentials, nothing more.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Makeup palette and brushes",
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "5-in-1-hot-air-brush-aerostyle",
    nom: "Revlon One-Step Volumizer Plus",
    marque: "Revlon",
    categorie: "hair-styling",
    description:
      "Multifunctional hot-air brush with 5 attachments (drying, smoothing, loose curls, volume, precision nozzle). Made for quick morning routines, with controlled heat for gentle styling.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Multifunctional hot-air brush with attachments",
    caracteristiques: [
      "5 interchangeable attachments",
      "3 heat settings + cool shot",
      "Ionic anti-frizz technology",
      "2 m swivel cord",
      "Rated power: 1000 W (manufacturer data)",
    ],
    avantages: ["Versatile for smoothing and volume", "Easy handling for beginners", "Cool shot to set the style"],
    inconvenients: ["Less suited to very thick, long hair needing high power", "Bulky unit for travel"],
    publicIdeal: "Fine to normal hair, quick daily routine.",
    casUsage: ["Soft morning blowout", "Root volume", "Loose curls without a hot iron"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B01HZ5K8UE?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-01",
    noteRedaction: 4.2,
    faq: [
      { q: "Is a 5-in-1 brush good for fine hair?", a: "Yes, that is its sweet spot: moderate heat, volumizing and smoothing attachments. For very thick hair, allow more time or pick a more powerful tool." },
      { q: "Can I use it on wet hair?", a: "Towel-dry and pre-dry to about 70–80% before styling to limit heat exposure and get better hold. Always follow the manufacturer's instructions." },
    ],
  },
  {
    slug: "ionic-pro-hair-dryer-1875w",
    nom: "Revlon Compact Hair Dryer 1875W",
    marque: "Revlon",
    categorie: "hair-styling",
    description:
      "Powerful AC-motor hair dryer with ionic function and included diffuser. Built for fast drying while keeping frizz down.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Black professional hair dryer",
    caracteristiques: ["AC motor 1875 W (manufacturer data)", "3 speeds / 3 heat settings", "Cool-shot button", "Diffuser + concentrator included", "Removable rear filter"],
    avantages: ["Fast drying", "Diffuser great for curls", "Washable filter = longer lifespan"],
    inconvenients: ["Heavier than a compact model", "Loud at full power"],
    publicIdeal: "Thick, long or curly hair when speed matters.",
    casUsage: ["Express drying", "Curl definition with diffuser", "Blowout with concentrator"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B003TQPRGY?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-01",
    noteRedaction: 4.4,
    faq: [{ q: "Does ionic actually do anything?", a: "Ionic airflow aims to reduce static and frizz. Results vary with hair type." }],
  },
  {
    slug: "vitamin-c-12-glow-serum",
    nom: "TruSkin Vitamin C Super Serum",
    marque: "TruSkin",
    categorie: "face-care",
    description:
      "Glow serum with stabilized vitamin C, vitamin E and ferulic acid. Lightweight texture, to wear in the morning under sunscreen.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Vitamin C serum dropper bottle",
    caracteristiques: ["Stabilized 12% vitamin C", "Vitamin E + ferulic acid", "Opaque pump bottle 1 fl oz", "No added fragrance", "pH ~3.5–4 (manufacturer data)"],
    avantages: ["Simple glow routine", "Layers well under makeup", "Light-protective bottle"],
    inconvenients: ["Tingling possible on sensitive skin — patch-test first", "Keep away from heat"],
    publicIdeal: "Dull tone, light dark spots, skin used to active ingredients.",
    casUsage: ["Morning glow routine", "Under SPF", "4–6 week course"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B08QSLJ8CC?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-05",
    noteRedaction: 4.1,
    faq: [{ q: "Can I mix vitamin C and retinol?", a: "Usually keep them apart: vitamin C in the morning, retinol at night. When in doubt, ask a dermatologist." }],
  },
  {
    slug: "ceramide-moisturizing-cream",
    nom: "CeraVe Moisturizing Cream",
    marque: "CeraVe",
    categorie: "face-care",
    description:
      "Moisturizing cream with ceramides, niacinamide and squalane. Fragrance-free, suited to sensitive skin and minimalist routines.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80&auto=format&fit=crop",
    imageAlt: "White moisturizing cream jar",
    caracteristiques: ["Ceramides + niacinamide", "Plant-derived squalane", "Fragrance-free", "1.7 fl oz", "Dermatologist-tested (manufacturer data)"],
    avantages: ["Calms tightness", "Great makeup base", "Suits sensitive skin"],
    inconvenients: ["May feel light for very dry skin in winter", "Jar needs clean fingers or a spatula"],
    publicIdeal: "Sensitive, dehydrated skin, simple routines.",
    casUsage: ["Morning and night hydration", "After serum", "Reactive skin"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B00TTD9BRC?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-05",
    noteRedaction: 4.6,
    faq: [{ q: "Does it suit oily skin?", a: "Yes in a small amount, depending on tolerance; very oily skin may prefer a light gel." }],
  },
  {
    slug: "gentle-ph-55-cleanser",
    nom: "Cetaphil Gentle Facial Cleanser",
    marque: "Cetaphil",
    categorie: "face-care",
    description:
      "Gentle gel cleanser at physiological pH, no harsh sulfates. Cleanses without tightness, morning and night.",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Gentle facial cleanser tube",
    caracteristiques: ["pH 5.5", "No harsh sulfates (manufacturer data)", "5 fl oz", "Works as step 2 of double cleansing"],
    avantages: ["No tight feeling", "Budget-friendly (a little goes a long way)", "Good tolerance"],
    inconvenients: ["Won't remove waterproof makeup on its own"],
    publicIdeal: "All skin types, including sensitive.",
    casUsage: ["Morning cleanse", "Second cleanse step", "Reactive skin"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B0DXS4CR2B?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-05",
    noteRedaction: 4.5,
    faq: [{ q: "Do I need to double-cleanse?", a: "If you wear makeup or stubborn SPF: oil/balm first, then this cleanser. Otherwise it is enough on its own." }],
  },
  {
    slug: "shea-nourishing-body-oil",
    nom: "Pure Natural Shea Body Oil",
    marque: "Pure Natural",
    categorie: "body-bath",
    description:
      "Nourishing dry body oil with shea butter and jojoba oil. Non-sticky finish for legs, arms and neckline.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Golden body oil bottle",
    caracteristiques: ["Shea butter + jojoba", "Dry-touch finish", "3.4 fl oz pump bottle", "Light scent"],
    avantages: ["Supple skin fast", "No stickiness on clothes after 2 min", "Pretty satin finish"],
    inconvenients: ["Test the scent if you are sensitive", "No replacement for a rich balm in deep winter"],
    publicIdeal: "Normal to dry skin wanting quick comfort.",
    casUsage: ["After shower", "Legs before a dress", "Light massage"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B07RRDMMZM?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-02",
    noteRedaction: 4.3,
    faq: [{ q: "Will it stain clothes?", a: "Apply a thin layer and wait 2 minutes. Stay cautious with delicate light fabrics." }],
  },
  {
    slug: "serum-foundation-spf15",
    nom: "Maybelline Fit Me Foundation",
    marque: "Maybelline",
    categorie: "makeup",
    description:
      "Serum foundation with light-to-medium coverage and a natural finish. Enriched with niacinamide, available in several shades.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Serum foundation and brush",
    caracteristiques: ["Light-to-medium coverage", "Niacinamide", "SPF 15 (not a substitute for SPF 30+)", "1 fl oz", "6 shades"],
    avantages: ["Skin-like effect", "Quick finger application", "Won't cling to dry patches on hydrated skin"],
    inconvenients: ["Limited shade range", "Average wear on oily skin without powder"],
    publicIdeal: "Everyday natural base, beginners.",
    casUsage: ["Daytime makeup", "3-minute base", "Normal to dry skin"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B00DQLN3Y0?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-02",
    noteRedaction: 4.0,
    faq: [{ q: "Is SPF 15 enough?", a: "No as main protection. Layer SPF 30+ underneath in real sun exposure." }],
  },
  {
    slug: "volume-length-mascara",
    nom: "Volume & Length Mascara",
    marque: "NudeGlow",
    categorie: "makeup",
    description:
      "Lengthening volumizing mascara with tapered brush, washable with warm water. Intense black, clump-free with a zigzag application.",
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Open black mascara",
    caracteristiques: ["Tapered brush", "Washable formula", "Intense black", "0.34 fl oz"],
    avantages: ["Lengthens fine lashes well", "Removes easily", "Barely any fallout during the day"],
    inconvenients: ["2 coats needed for a dramatic effect", "Replace every 3 months (hygiene)"],
    publicIdeal: "Defined eyes without falsies.",
    casUsage: ["Daily wear", "Eyes sensitive to waterproof formulas"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Beauty partner (e.g. Amazon)",
    urlAffiliation: "https://www.amazon.com/s?k=volumizing+lengthening+mascara&tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-02",
    noteRedaction: 4.1,
    faq: [{ q: "Does it suit contact-lens wearers?", a: "Washable formulas are usually better tolerated, but patch-test and remove gently. Stop use if irritation occurs." }],
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
