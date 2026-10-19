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
    description: "One-step heated brush or powerful dryer? We compare for fine, thick and curly hair — no fake reviews.",
    image: "https://images.pexels.com/photos/8468136/pexels-photo-8468136.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Woman drying her long brown hair with a blow dryer at home",
    majLe: "2026-10-18",
    lectureMin: 7,
    produitsLies: ["revlon-one-step-dryer-volumizer", "revlon-compact-hair-dryer-1875w"],
  },
  {
    slug: "one-step-brush-vs-powerful-dryer",
    type: "comparison",
    titre: "One-Step Heated Brush vs 1875 W Dryer: Which to Choose?",
    description: "Two simple tools, two different jobs: volume while drying, or raw power on a thick head of hair.",
    image: "https://images.pexels.com/photos/5891059/pexels-photo-5891059.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Man drying his hair with a blow dryer in front of a bathroom mirror",
    majLe: "2026-10-18",
    lectureMin: 6,
    produitsLies: ["revlon-one-step-dryer-volumizer", "revlon-compact-hair-dryer-1875w"],
  },
  {
    slug: "best-foundation-for-dry-skin",
    type: "comparison",
    titre: "Foundation Stick vs Cream Base: What Dry Skin Actually Needs",
    description: "A matte stick sits on top of the skin. What dry skin needs is a hydrated base first, then thin layers.",
    image: "https://images.pexels.com/photos/12585853/pexels-photo-12585853.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Woman applying foundation close-up",
    majLe: "2026-10-18",
    lectureMin: 5,
    produitsLies: ["age-rewind-eraser-concealer", "fit-me-shine-free-balance-stick", "ceramide-moisturizing-cream"],
  },
];

export const GUIDES: Guide[] = [
  {
    slug: "beginner-glow-routine",
    type: "guide",
    titre: "Beginner Glow Routine: 4 Steps, 5 Minutes",
    description: "Cleanse, treat, moisturize, protect: the minimal routine that actually works, without buying 10 products.",
    image: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Hands applying moisturizer",
    majLe: "2026-10-05",
    lectureMin: 6,
    produitsLies: ["cetaphil-daily-cleanser-lotion", "truskin-vitamin-c-duo", "ceramide-moisturizing-cream"],
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
    produitsLies: ["truskin-vitamin-c-duo", "ceramide-moisturizing-cream"],
  },
  {
    slug: "best-beauty-picks-by-budget",
    type: "guide",
    titre: "Best Beauty Picks by Budget ($20, $50, $100)",
    description: "Prioritize cleanser and moisturizer first, serum second: our honest budget logic.",
    image: "https://images.pexels.com/photos/4482931/pexels-photo-4482931.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Assorted cosmetics flat lay",
    majLe: "2026-10-03",
    lectureMin: 6,
    produitsLies: ["cetaphil-daily-cleanser-lotion", "ceramide-moisturizing-cream", "truskin-vitamin-c-duo"],
  },
  {
    slug: "alternatives-to-viral-heated-brush",
    type: "guide",
    titre: "Alternatives to the Viral Heated Brush: 2 Sensible Options",
    description: "On the fence about the viral brush? When to pick a one-step heated brush vs a powerful dryer.",
    image: "https://images.pexels.com/photos/3993471/pexels-photo-3993471.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Hair stylist blow-drying a client's wet hair in a salon",
    majLe: "2026-10-06",
    lectureMin: 5,
    produitsLies: ["revlon-one-step-dryer-volumizer", "revlon-compact-hair-dryer-1875w"],
  },
];
