# Indexation Google — procédure Éclatia

Propriété Search Console : **Préfixe d'URL** `https://guide-beaute.pages.dev/`
Validation : **balise HTML** (déjà dans `app/layout.tsx`, commit `b8d8228`).
⚠️ Ne jamais supprimer cette balise : Google revérifie périodiquement.

---

## 1. Valider la propriété
Search Console → « Valider » → doit afficher **Propriété validée**.

Si « Impossible de vérifier » : attendre 1 minute (cache CDN) et recliquer.
La balise est bien en ligne : `https://guide-beaute.pages.dev/` → code source → `google-site-verification`.

## 2. Soumettre le sitemap
Menu de gauche → **Sitemaps** → champ « Ajouter un sitemap » → taper :

```
sitemap.xml
```

→ **Envoyer**. Statut attendu : *Réussite* (31 URLs détectées), sous 24 à 72 h.

## 3. Demander l'indexation des pages importantes
Menu → **Inspection de l'URL** → coller une URL → attendre l'analyse →
bouton **« Demander une indexation »**.
Quota : environ 10 demandes par jour. Ordre conseillé :

### Priorité 1 — les 10 fiches produits
```
https://guide-beaute.pages.dev/product/revlon-one-step-dryer-volumizer/
https://guide-beaute.pages.dev/product/revlon-compact-hair-dryer-1875w/
https://guide-beaute.pages.dev/product/truskin-vitamin-c-duo/
https://guide-beaute.pages.dev/product/ceramide-moisturizing-cream/
https://guide-beaute.pages.dev/product/cetaphil-daily-cleanser-lotion/
https://guide-beaute.pages.dev/product/raw-shea-butter-16oz/
https://guide-beaute.pages.dev/product/fit-me-shine-free-balance-stick/
https://guide-beaute.pages.dev/product/volume-length-mascara/
https://guide-beaute.pages.dev/product/micellar-makeup-remover-wipes/
https://guide-beaute.pages.dev/product/age-rewind-eraser-concealer/
```

### Priorité 2 — accueil + comparatifs + guides
```
https://guide-beaute.pages.dev/
https://guide-beaute.pages.dev/comparisons/best-hot-air-brush-2026/
https://guide-beaute.pages.dev/comparisons/one-step-brush-vs-powerful-dryer/
https://guide-beaute.pages.dev/comparisons/best-foundation-for-dry-skin/
https://guide-beaute.pages.dev/guides/beginner-glow-routine/
https://guide-beaute.pages.dev/guides/how-to-choose-vitamin-c-serum/
https://guide-beaute.pages.dev/guides/best-beauty-picks-by-budget/
https://guide-beaute.pages.dev/guides/alternatives-to-viral-heated-brush/
```

## 4. Suivre les résultats

| Onglet | Ce qu'on y lit | Délai |
|---|---|---|
| **Indexation des pages** | Combien de pages indexées | 3 à 14 jours |
| **Sitemaps** | Statut de lecture | 1 à 3 jours |
| **Performances** | Impressions et clics Google | 2 à 6 semaines |

Rappel : les liens Pinterest sont en `nofollow` → ils amènent des visiteurs, mais **pas** de signal SEO.
Sans lien entrant réel, Google indexera lentement. 1 à 2 liens éditoriaux honnêtes (profil Reddit/Quora
avec réponses utiles, article invité) accélèrent beaucoup plus que 50 annuaires.

## 5. Bing (optionnel mais rapide)
https://www.bing.com/webmasters → **Importer depuis Google Search Console**.
Bing indexe souvent en 24–48 h, ce qui donne un premier retour sur le contenu.
