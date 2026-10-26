# P0 — Naturium The Glow Getter Multi-Oil Body Wash

**Statut :** fiche rédigée, **non intégrée au catalogue, non publiée**.
**Vérifiée le :** 26/10/2026 (page produit Amazon.com + liste d'ingrédients complète).

---

## 1. Identité

| Champ | Valeur vérifiée |
|---|---|
| **ASIN** | `B0B1PDDLGZ` |
| **Marque** | Naturium |
| **Nom complet du listing** | Naturium The Glow Getter Multi-Oil Body Wash, 16.9 fl oz \| Nourishing Gentle Cleanser, Dissolves Impurities, Hydrating Base Protects Essential Moisture, for All Skin Types |
| **Format** | 16.9 fl oz (500 ml) |
| **Note** | 4,6★ — ~7 900 avis (cumul des variantes) |
| **Badge** | Amazon's Choice |
| **Vendeur** | Expédié par Amazon (« any seller shipped by Amazon ») |
| **Prix observé** | **16,88 $** (plage 90 jours : 13,97 $ – 16,88 $) → **jamais affiché sur le site** |
| **Lien d'affiliation** | `https://www.amazon.com/dp/B0B1PDDLGZ?tag=eclatia20-20` |

> ⚠️ Le prix a changé **entre deux consultations le même jour** (14,88 $ puis 16,88 $). C'est exactement la raison pour laquelle le site n'affiche aucun prix : impossible de le maintenir juste sans l'API Amazon.

---

## 2. Liste d'ingrédients complète (relevée sur la fiche)

```
Glycerin, Aqua, Cocamidopropyl Betaine, Disodium Cocoamphodiacetate,
Hippophae Rhamnoides Fruit/Seed Oil, Rosa Canina (Rose Hips) Fruit Oil,
Simmondsia Chinensis (Jojoba) Seed Oil, Squalane, Pyrus Malus (Apple) Fruit Extract,
Polyquaternium-10, Maltodextrin, Sorbitan Oleate Decylglucoside Crosspolymer,
Phenoxyethanol, Cocos Nucifera (Coconut) Fruit Extract, Vanilla Planifolia Fruit Extract,
Gardenia Jasminoides Fruit Extract, Eugenia Caryophyllus (Clove) Flower Extract,
Prunus Armeniaca (Apricot) Fruit Extract, Prunus Persica (Peach) Fruit Extract,
Citric Acid, Ethylhexylglycerin, Tetrasodium Glutamate Diacetate.
```

### Ce que la liste prouve (et qu'on peut donc écrire)

| Observation | Formulation autorisée sur le site |
|---|---|
| **Glycerin en 1ᵉʳ ingrédient**, avant l'eau | « Glycerin is the first ingredient » |
| Huiles : argousier, rose musquée, jojoba + squalane | « A multi-oil base: sea buckthorn, rose hip, jojoba and squalane » |
| Tensioactifs doux : cocamidopropyl betaine, disodium cocoamphodiacetate | « It is still a surfactant-based wash, not pure oil » |
| **Aucun SLS/SLES** dans la liste | « No SLS or SLES appears in the ingredient list » |
| **Aucune mention de parfum** (ni *Fragrance* ni *Parfum*) | « No added fragrance in the ingredient list » |
| Mais extraits de vanille, gardénia, clou de girofle | « The scent comes from botanical extracts », **pas** « fragrance-free » |
| Phenoxyethanol, ethylhexylglycerin | conservateurs — normal pour un produit aqueux |

### ⛔ Ce qu'on ne peut PAS écrire

| Affirmation tentante | Pourquoi c'est interdit ici |
|---|---|
| « Fragrance-free » | la marque écrit « **most** of our skincare is Synthetic Fragrance Free » → c'est une stats de marque, pas ce produit. Et il y a des extraits parfumés. |
| « Sulfate-free » | la fiche ne le dit pas. On écrit « aucun SLS/SLES dans la liste d'ingrédients », point. |
| « Hydrate 24 h / 72 h » | aucune durée sur la fiche. |
| « Nettoie en profondeur » | contredit le positionnement du produit (« gentle cleanser »). |
| « Guérit / calme l'eczéma » | allégation médicale, interdite. |
| « Le n°1 des ventes » | badge non vérifié de façon stable. |
| Un prix | voir ci-dessus. |

---

## 3. Ce que dit la fiche (à citer avec « marketed for »)

- *« transforms from a luscious oil to a gentle lather »*
- *« cleansing without stripping the skin of essential moisture »*
- *« respectful to skin's barrier »*
- *« over 50% glycerin and phyto lipids »*
- *« pH level appropriate, vegan, cruelty free, paraben free, gluten free, dermatologist tested »*
- *« for All Skin Types »*
- *« Dissolves Impurities »*, *« Hydrating Base Protects Essential Moisture »*

---

## 4. Entrée catalogue prête à coller (`data/catalog.ts`)

```ts
  {
    slug: "naturium-glow-getter-multi-oil-body-wash",
    nom: "Naturium The Glow Getter Multi-Oil Body Wash",
    marque: "Naturium",
    categorie: "body-bath",
    description:
      "A multi-oil body wash that turns from oil to a light lather, built on glycerin as the first ingredient with sea buckthorn, rose hip, jojoba and squalane. Marketed for all skin types as a gentle cleanser that does not strip moisture. 16.9 fl oz.",
    image: "À DÉFINIR — photo à valider visuellement",
    imageAlt: "À DÉFINIR avec la photo",
    caracteristiques: [
      "16.9 fl oz (500 ml)",
      "Glycerin listed first, before water",
      "Multi-oil base: sea buckthorn, rose hip, jojoba, squalane",
      "Oil-to-lather texture",
      "Marketed as a gentle cleanser for all skin types",
      "No SLS or SLES in the ingredient list",
      "No added fragrance in the ingredient list; scent comes from botanical extracts",
      "Vegan, cruelty free, paraben free, dermatologist tested (as stated on the listing)",
    ],
    avantages: [
      "Cleanses without the tight feeling of a strong gel wash",
      "One product for shower and shaving",
      "Large 500 ml format",
      "Ingredient list is fully published, so you can check it before buying",
    ],
    inconvenients: [
      "Still contains surfactants: it is not pure oil",
      "Scented by botanical extracts, so not suitable if you need a truly fragrance-free product",
      "Pump bottle, less practical for travel than a small format",
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
      { q: "Is it pure oil?", a: "No. It is a body wash built on glycerin with a multi-oil blend, and it lathers. It cleanses like a wash, gently, rather than coating the skin like a body oil." },
      { q: "Is it fragrance-free?", a: "The ingredient list shows no added fragrance. The scent comes from botanical extracts such as vanilla, gardenia and clove, so it is not unscented." },
      { q: "Does it contain sulfates?", a: "Neither SLS nor SLES appears in the ingredient list published on the listing. Check the bottle on arrival, as formulas can change." },
      { q: "How much per shower?", a: "One pump is enough for the body. As with any wash, more product does not clean better." },
    ],
  },
```

---

## 5. Le seul point bloquant : l'image

Le catalogue exige une photo. Deux options :

1. **Tu choisis une photo** (Pexels / Unsplash, usage libre) et tu me l'envoies → je l'intègre.
2. **Je propose 3 photos**, tu valides visuellement, j'intègre.

⚠️ Rappel : je ne juge pas correctement une image dans l'outil de lecture. **La validation visuelle finale est la tienne.**

---

## 6. Ce que cette fiche débloque

| Page | Avant | Après |
|---|---|---|
| C3 `oil-body-wash-vs-body-wash` | éducative, 0 lien | **monétisable** — requête n°1 du corpus (intérêt 100) |
| G2 / G3 | renvoi karité | inchangé |
| G4 (sans parfum) | — | **reste sans lien produit** : Naturium n'est pas fragrance-free |

C'est le bon arbitrage : une page monétisable sur la requête la plus forte, et la page « sans parfum » qui garde son intégrité.
