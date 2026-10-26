# À valider — contenus body oil (26/10/2026)

> **Rien n'est en ligne. Rien n'est déployé. Aucun pin n'est publié.**
> Tous les fichiers de ce dossier sont hors de `app/` et `data/` : le site ne les voit pas.

---

## 1. Ce qu'il y a dans ce dossier

| Fichier | Type | État | Monétisable |
|---|---|---|---|
| `comparatifs/C1-shea-butter-vs-body-oil.md` | comparatif | **texte complet** | ✅ karité |
| `comparatifs/C2-body-oil-vs-body-lotion.md` | comparatif | **texte complet** | ✅ CeraVe + karité |
| `comparatifs/C3-oil-body-wash-vs-body-wash.md` | comparatif | **texte complet** | ✅ Naturium |
| `guides/G1-body-oil-before-or-after-lotion.md` | guide | **texte complet** | ✅ CeraVe + karité |
| `guides/G2-dry-body-oil-vs-body-lotion.md` | guide | **texte complet** | ✅ karité (partiel) |
| `guides/G3-body-glow-oil.md` | guide | **texte complet** | ⚠️ karité seulement |
| `guides/G4-fragrance-free-body-oil-sensitive-skin.md` | guide | **plan détaillé** | ✅ karité + CeraVe |
| `guides/G5-hair-oil-vs-body-oil.md` | guide | **plan détaillé** | ✅ karité |
| `produits/P0-naturium-glow-getter.md` | fiche produit | **vérifiée, non intégrée** | ✅ ASIN `B0B1PDDLGZ` |
| `pins/pins-body-oil-12.md` | 12 pins | textes prêts | — |
| `../strategie-body-oil-2026-10-26.md` | stratégie | analyse + plan | — |

---

## 2. Ce que je te demande de valider

Coche (ou dis-moi) :

- [ ] Le **positionnement** : « Éclatia = le guide huile ou crème, laquelle et dans quel ordre »
- [ ] Les **8 pages** et leurs slugs (aucune URL réservée par erreur, aucun doublon)
- [ ] L'**ordre de production** : C1 → G1 → C2 → G2 → G3 → C3 → G4 → G5
- [ ] Les **12 pins** et les 3 nouveaux tableaux
- [ ] Le **calendrier 4 semaines**
- [ ] Les **interdits** (section 8 de la stratégie)

Dès que tu dis oui, j'implémente **C1 puis G1** dans `data/guides.ts` + `app/`, et je te montre le résultat en local avant déploiement.

---

## 3. Ce qu'il me faut de toi

| # | Élément | Pourquoi | Bloquant ? |
|---|---|---|---|
| 1 | **ASIN huile corporelle** | monétiser G2, G3 et une partie de C2 | non (page éducative possible) |
| 2 | ~~ASIN huile de douche~~ | ✅ **fait : Naturium B0B1PDDLGZ** | — |
| 3 | **ASIN beurre corporel** | couvrir `body butter` (57) | non |
| 4 | **Ton prénom + 1 phrase de bio** | page auteur / E-E-A-T pour Google | non |
| 5 | **Validation des visuels** | 12 images à produire | oui, avant publication |

Pour les ASIN : ouvre Amazon, cherche le produit, copie l'URL `https://www.amazon.com/dp/XXXXXXXXXX`. Je vérifie ensuite la fiche avant d'écrire quoi que ce soit.

---

## 4. Ce que je n'ai pas fait (et pourquoi)

| Chose | Raison |
|---|---|
| Aucun prix | interdit sans API Amazon, et invérifiable |
| Aucun test « j'ai essayé 8 semaines » | ton site promet « no invented reviews » |
| Aucune marque concurrente citée dans les pages | risque de confusion + contenu invérifiable |
| Aucune page « best body oil 2026 » | impossible de vérifier 10 fiches produit |
| Aucun lien vers un produit non vérifié | règle absolue du site |

---

## 5. Une remarque sur les données Trends

Deux choses que les 100 requêtes **ne** disent **pas** :

1. **Pas de volume absolu.** `search interest` est un indice 0–100, pas un nombre de recherches/mois. Une requête à 100 n'est pas « 1 million de recherches ».
2. **Pas d'intention d'achat.** `body oil wash` (100) est très demandé, mais rien ne dit que ces gens achètent en ligne — beaucoup cherchent juste une recette ou une explication.

Et une mise en garde : les hausses de **+1 000 % à +4 350 %** (Dior Backstage, eos, NYX, Dove) sont sur des requêtes à **intérêt 0 à 3**. Ce sont des pics de lancement de marque, pas des tendances durables. Construire une page dessus serait du travail perdu — et invérifiable, puisque ces produits ne sont pas dans ton catalogue.

---

## 6. Note technique (à lire avant d'approuver)

J'ai vérifié le code : les gabarits actuels sont **plus limités que ces brouillons**.

| Page | Ce que le gabarit accepte aujourd'hui | Ce que demandent C1/G1 |
|---|---|---|
| `/comparisons/[slug]` | intro (paragraphes) + **1 seul** tableau + verdict | intro + tableau + sections « qui devrait / qui ne devrait pas » + limites + FAQ |
| `/guides/[slug]` | titres `h2` + paragraphes **uniquement** | h2 + paragraphes + listes + FAQ |

Deux options :

**Option A (recommandée)** — étendre le modèle de contenu pour accepter `h2`, `h3`, paragraphes, listes, tableaux et FAQ, puis brancher le JSON-LD `FAQPage` sur les guides. ~2 à 3 h de travail, **aucune page existante modifiée** (les anciennes continuent d'utiliser le format simple).

**Option B** — compresser les brouillons au format actuel : on perd les FAQ (donc le rich result Google) et les sections d'arbitrage. Plus rapide, moins efficace.

Je recommande A. Dis-moi si tu valides.

## 7. Ordre de lecture conseillé

1. `../strategie-body-oil-2026-10-26.md` — 10 min, pour la vue d'ensemble
2. `comparatifs/C1-shea-butter-vs-body-oil.md` — le texte le plus abouti
3. `guides/G1-body-oil-before-or-after-lotion.md` — la seule question explicite du corpus
4. `pins/pins-body-oil-12.md` — les 12 pins

Si tu n'as que 10 minutes : lis la stratégie et les titres des 8 pages. C'est suffisant pour approuver ou corriger la direction.
