export interface Guide {
  slug: string;
  type: "comparison" | "guide";
  titre: string;
  description: string;
  image: string;
  imageAlt: string;
  majLe: string;
  lectureMin: number;
  produitsLies: string[];
}

export const COMPARATIFS: Guide[] = [
  {
    slug: "best-hot-air-brush-2026",
    type: "comparison",
    titre: "Best Hot-Air Brush 2026: An Honest Comparison",
    description: "Multifunction brush or powerful dryer? We compare for fine, thick and curly hair — no fake reviews.",
    image: "https://images.pexels.com/photos/8468136/pexels-photo-8468136.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Woman drying her long brown hair with a blow dryer at home",
    majLe: "2026-10-06",
    lectureMin: 7,
    produitsLies: ["5-in-1-hot-air-brush-aerostyle", "ionic-pro-hair-dryer-1875w"],
  },
  {
    slug: "5-in-1-brush-vs-powerful-dryer",
    type: "comparison",
    titre: "5-in-1 Brush vs Powerful Dryer: Which to Choose?",
    description: "Two styling philosophies: gentle versatility or raw power. Our method to decide based on your hair.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Styling brush versus hair dryer",
    majLe: "2026-10-06",
    lectureMin: 6,
    produitsLies: ["5-in-1-hot-air-brush-aerostyle", "ionic-pro-hair-dryer-1875w"],
  },
  {
    slug: "best-foundation-for-dry-skin",
    type: "comparison",
    titre: "Best Foundation for Dry Skin: Serum vs Cream",
    description: "A natural finish without cakiness: why serum foundation usually wins on well-hydrated dry skin.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Foundations compared",
    majLe: "2026-10-04",
    lectureMin: 5,
    produitsLies: ["serum-foundation-spf15", "ceramide-moisturizing-cream"],
  },
];

export const GUIDES: Guide[] = [
  {
    slug: "beginner-glow-routine",
    type: "guide",
    titre: "Beginner Glow Routine: 4 Steps, 5 Minutes",
    description: "Cleanse, treat, moisturize, protect: the minimal routine that actually works, without buying 10 products.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Minimalist skincare routine",
    majLe: "2026-10-05",
    lectureMin: 6,
    produitsLies: ["gentle-ph-55-cleanser", "vitamin-c-12-glow-serum", "ceramide-moisturizing-cream"],
  },
  {
    slug: "how-to-choose-vitamin-c-serum",
    type: "guide",
    titre: "Vitamin C Serum: How to Choose Without the Mistakes",
    description: "Concentration, derivatives, bottle, storage: the 5 verifiable criteria before buying.",
    image: "https://images.pexels.com/photos/16769670/pexels-photo-16769670.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Vitamin C serum bottle with lemon slices",
    majLe: "2026-10-05",
    lectureMin: 8,
    produitsLies: ["vitamin-c-12-glow-serum", "ceramide-moisturizing-cream"],
  },
  {
    slug: "best-beauty-picks-by-budget",
    type: "guide",
    titre: "Best Beauty Picks by Budget ($20, $50, $100)",
    description: "Prioritize cleanser and moisturizer first, serum second: our honest budget logic.",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Beauty products by budget",
    majLe: "2026-10-03",
    lectureMin: 6,
    produitsLies: ["gentle-ph-55-cleanser", "ceramide-moisturizing-cream", "vitamin-c-12-glow-serum"],
  },
  {
    slug: "alternatives-to-viral-heated-brush",
    type: "guide",
    titre: "Alternatives to the Viral Heated Brush: 2 Sensible Options",
    description: "On the fence about the viral brush? When to pick gentle multifunction vs dryer + round brush.",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Hair styling alternatives",
    majLe: "2026-10-06",
    lectureMin: 5,
    produitsLies: ["5-in-1-hot-air-brush-aerostyle", "ionic-pro-hair-dryer-1875w"],
  },
];
