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
    slug: "5-in-1-hot-air-brush-aerostyle",
    nom: "Revlon One-Step Volumizer Plus",
    marque: "Revlon",
    categorie: "hair-styling",
    description:
      "Multifunctional hot-air brush with 5 attachments (drying, smoothing, loose curls, volume, precision nozzle). Made for quick morning routines, with controlled heat for gentle styling.",
    image: "https://images.pexels.com/photos/8468136/pexels-photo-8468136.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Woman styling her long hair with a hot-air brush at home",
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
    image: "https://images.pexels.com/photos/7518702/pexels-photo-7518702.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Close-up of a red compact hair dryer",
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
    image: "https://images.pexels.com/photos/13964620/pexels-photo-13964620.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Hand holding a dropper over a vitamin C serum bottle",
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
    image: "https://images.pexels.com/photos/7321497/pexels-photo-7321497.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Hand scooping moisturizing cream from a jar",
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
    image: "https://images.pexels.com/photos/7623581/pexels-photo-7623581.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Gentle face wash close-up",
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
    image: "https://images.pexels.com/photos/6663469/pexels-photo-6663469.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Woman squeezing body lotion onto her hand",
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
      "Buildable light-to-medium coverage",
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
    nom: "Maybelline Lash Sensational Mascara",
    marque: "Maybelline",
    categorie: "makeup",
    description:
      "Lengthening volumizing mascara with tapered brush, washable with warm water. Intense black, clump-free with a zigzag application.",
    image: "https://images.pexels.com/photos/4938457/pexels-photo-4938457.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Mascara brush and container on a marble surface",
    caracteristiques: ["Tapered brush", "Washable formula", "Intense black", "0.34 fl oz"],
    avantages: ["Lengthens fine lashes well", "Removes easily", "Barely any fallout during the day"],
    inconvenients: ["2 coats needed for a dramatic effect", "Replace every 3 months (hygiene)"],
    publicIdeal: "Defined eyes without falsies.",
    casUsage: ["Daily wear", "Eyes sensitive to waterproof formulas"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B08H3JPH74?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-02",
    noteRedaction: 4.1,
    faq: [{ q: "Does it suit contact-lens wearers?", a: "Washable formulas are usually better tolerated, but patch-test and remove gently. Stop use if irritation occurs." }],
  },
  {
    slug: "micellar-makeup-remover-wipes",
    nom: "Neutrogena Makeup Remover Micellar Wipes",
    marque: "Neutrogena",
    categorie: "face-care",
    description:
      "Ultra-soft micellar cleansing wipes in a twin pack (2 x 25 ct). Lift away makeup, including waterproof mascara, plus dirt, oil, sweat and sunscreen in one step - no rinsing needed.",
    image: "https://images.pexels.com/photos/5468609/pexels-photo-5468609.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Woman using a makeup remover pad for a micellar cleansing routine",
    caracteristiques: [
      "Twin pack: 2 x 25 wipes",
      "Micellar-infused triple emollient formula (manufacturer data)",
      "Removes up to 99% of makeup, even waterproof mascara",
      "Alcohol-free, no parabens, sulfates, phthalates, soaps or dyes",
      "100% plant-based cloth, home compostable (manufacturer data)",
      "Ophthalmologist-, dermatologist- and allergy-tested",
    ],
    avantages: ["Fastest way to remove stubborn mascara", "Gentle on the eye area", "No rinse needed - great for travel or gym bags"],
    inconvenients: ["Single-use: pricier per use than a liquid cleanser", "Reseal the pack well or wipes dry out", "Not a replacement for a full evening cleanse with makeup-heavy looks"],
    publicIdeal: "Busy routines, travelers, late nights when the sink feels too far.",
    casUsage: ["After-makeup clean-up", "Removing waterproof mascara before/alongside a cleanser", "Freshen up after commute or workout"],
    prixIndicatif: null,
    prixVerifieLe: null,
    marchand: "Amazon",
    urlAffiliation: "https://www.amazon.com/dp/B00U2VQZDS?tag=eclatia20-20",
    statut: "active",
    majLe: "2026-10-17",
    noteRedaction: 4.4,
    faq: [
      { q: "Do I still need a cleanser if I use wipes?", a: "For light makeup, no. For foundation plus SPF, follow with a gentle cleanser: the wipe lifts the bulk, the cleanser cleans the residue." },
      { q: "Are they safe around the eyes?", a: "They are formulated to be gentle on the delicate eye area and ophthalmologist-tested. Wipe closed eyelids gently and avoid rubbing. If irritation occurs, stop use." },
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
