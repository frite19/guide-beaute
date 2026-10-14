# Ajouter un nouveau produit (5 minutes)

> Règle d'or : **ne jamais inventer** avis, prix, test, réduction ou caractéristique. Si non vérifié → laissez vide.

## 1. Ouvrir `data/catalog.ts`

Ajoutez un objet dans `PRODUCTS` :

```ts
{
  slug: "mon-produit-slug-court",
  nom: "Nom exact fabricant",
  marque: "Marque",
  categorie: "coiffure", // coiffure | soin-visage | corps-bain | maquillage
  description: "1-2 phrases factuelles et utiles.",
  image: "https://…/photo.jpg",
  imageAlt: "Description précise pour l'accessibilité",
  caracteristiques: ["Format: 50 ml", "Sans parfum (donnée fabricant)"],
  avantages: ["…"],
  inconvenients: ["…"], // obligatoire : au moins 1 limite honnête
  publicIdeal: "Pour qui ?",
  casUsage: ["Usage 1", "Usage 2"],
  prixIndicatif: null,       // laissez null tant que non vérifié
  prixVerifieLe: null,
  marchand: "Amazon",
  urlAffiliation: "https://www.amazon.com/dp/XXXX?tag=your-id-20",
  statut: "active",          // active | draft | archived
  majLe: "2026-10-13",
  noteRedaction: 4.0,
  faq: [{ q: "…?", a: "…" }],
},
```

## 2. Lier depuis un comparatif ou guide

Dans `data/guides.ts`, ajoutez le slug dans `produitsLies` du guide concerné.

## 3. Vérifier

- `npm run dev` → `/product/my-product-short-slug`
- Cliquez « Vérifier le prix » : nouvel onglet, `rel="sponsored nofollow noopener"`, clic compté dans `/admin`.
- Testez la recherche : `/search?q=my-product`.

## 4. Publier

`npm run build` doit passer sans erreur. Mettez à jour `majLe` à chaque changement de prix/URL.
