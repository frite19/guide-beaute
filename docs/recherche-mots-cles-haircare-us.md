# Recherche de mots-clés — Haircare US (affiliation Amazon)

**Site :** Éclatia (guide-beaute.pages.dev) · **Marché :** États-Unis · **Langue :** anglais
**Catégorie :** Haircare · **Filtre :** intention d'achat élevée + concurrence faible
**Date de collecte :** 26 octobre 2026 · **Auteure :** recherche interne

---

## 0. Ce qui est vérifié, ce qui est estimé (à lire avant tout)

C'est le point le plus important du document, parce qu'un mauvais chiffre de volume coûte 3 mois de production.

| Donnée | Statut | Source | Fiabilité |
|---|---|---|---|
| Le mot-clé existe et est recherché sur Amazon US | 🟢 **Vérifié** | Amazon Autocomplete US (`completion.amazon.com`, marketplace US), 26/10/2026 | Certaine (observée) |
| Le mot-clé est recherché sur Google US | 🟢 **Vérifié** | Google Suggest US (`suggestqueries.google.com`, `gl=us`), 26/10/2026 | Certaine (observée) |
| Les variantes affichées (« best… », « for thinning edges », « no cast »…) | 🟢 **Vérifié** | Mêmes sources, annexe A | Certaine (observée) |
| **Volume de recherche mensuel** | 🟠 **Estimé** | Raisonnement heuristique (cf. §1) | **Non fiable à l'unité — fourchette de travail** |
| **Difficulté SEO (KD)** | 🟠 **Estimé** | Raisonnement heuristique sur la structure de la requête | ±10 points |
| Classement SERP réel, DR des concurrents | ⚪ **Non mesuré** | — | À faire avec le protocole §6 |

> **Aucun volume « réel » n'est présenté ici.** Sans Google Keyword Planner, Bing Webmaster Tools ou Ahrefs, tout chiffre de volume serait inventé. Les fourchettes servent à **trier et prioriser**, pas à promettre du trafic. Le protocole gratuit du §6 permet de remplacer ces fourchettes par des chiffres sourcés en ~45 minutes.

**Ce que l'autocomplete prouve (et ne prouve pas) :** le nombre de suggestions Amazon renvoyées (colonne `A=`) mesure la **largeur de la demande marchande** (10 = Amazon a une page entière de variantes commerciales ; 0–2 = requête de niche ou requête « Google-only »). Ce n'est pas un volume. En revanche, la **présence d'une marque en 1ʳᵉ suggestion** est un signal de concurrence très concret : si Amazon propose d'emblée « mielle rosemary oil », le produit générique est déjà écrasé.

---

## 1. Comment les estimations ont été construites (méthode reproductible)

**Intention**
- `T` = transactionnel : le produit est déjà identifié (« heatless curling rod headband »).
- `C` = commercial : l'utilisateur choisit (« shampoo for hard water », « best… »).
- `CI` = commercial-investigation : l'utilisateur compare ou cherche une alternative (« olaplex dupe », « at home »).

**KD estimé (0–100)** — barème appliqué à la main, puis contrôlé par cohérence :
| Facteur | Effet |
|---|---|
| Requête de tête ≤ 3 mots, produit générique | +20 à +30 |
| Marque dominante visible dans l'autocomplete (Mielle, Olaplex, Redken, Kitsch, Dove, Moroccanoil…) | +10 à +15 |
| Modificateur de problème précis (« for hard water », « for bleached hair », « no cast ») | −10 |
| Longue traîne ≥ 5 mots | −8 |
| Aucune page dédiée évidente côté éditeurs (niché) | −5 |
| « dupe », « at home », « vs » (angle éditorial différenciant) | −8 |

**Volume estimé (US/mois)** — fourchettes construites à partir de : largeur de l'autocomplete Amazon (10 / 3–9 / 1–2 / 0), position du mot-clé dans les suggestions Google, et longueur de la requête. Elles sont volontairement larges (±50 %).

**Priorité**
- `P1` : à produire dans les 30 premiers jours (KD ≤ 22 et volume exploitable, ou angle unique).
- `P2` : phase 2, après 6–8 pages publiées.
- `P3` : hub de cluster (nécessite de l'autorité) ou trop dominé par les marques.

---

## 2. Les 40 mots-clés (8 clusters)

### Cluster 1 — Cuir chevelu & pousse (5)

| # | Mot-clé | Int. | KD est. 🟠 | Vol. est. 🟠 (US/mois) | Signal vérifié 🟢 | Angle / produit Amazon |
|---|---|---|---|---|---|---|
| 1 | `scalp serum for hair growth` | C | 38 | 1 500 – 4 000 | A=10 · G=10 · « best… » + Pantene, Obagi | Sérique cuir chevelu ; angle « sans minoxidil, sans parfum » |
| 2 | `rosemary oil for hair growth` | C | 58 | 20 000 – 40 000 | A=10 · G=10 · **Mielle en 1ʳᵉ suggestion** | **Hub**, pas une porte d'entrée : angle « rosemary vs minoxidil » |
| 3 | `shampoo for thinning hair women` | C | 42 | 2 000 – 5 000 | A=3 · G=10 · « biotin », « volumizing » | Shampooing ; angle « sans sulfates, compatible coloration » |
| 4 | `hair growth oil for edges` | C | 20 | 500 – 1 500 | A=2 · G=10 · « black women », « best » | **P1** — audience précise, offre Amazon dense |
| 5 | `derma roller for hair growth` | T | 34 | 3 000 – 6 000 | A=10 · G=10 · 0,5 mm / 1 mm / 1,5 mm | Accessoire ; angle sécurité + protocole d'usage |

### Cluster 2 — Eau calcaire & résidus (5) — **le cluster le plus exploitable**

| # | Mot-clé | Int. | KD est. 🟠 | Vol. est. 🟠 | Signal vérifié 🟢 | Angle / produit Amazon |
|---|---|---|---|---|---|---|
| 6 | `shampoo for hard water` | C | 22 | 1 000 – 3 000 | A=10 · G=10 · « build up », « chelating », « colored hair » | **Pilier P1.** Peu de sites dédiés, intention d'achat forte |
| 7 | `clarifying shampoo for buildup` | C | 24 | 300 – 900 | A=2 · G=10 · « removal », « hard water » | Sous-page du pilier ; shampoings clarifiants |
| 8 | `shower filter for hard water hair` | T | 18 | 400 – 1 000 | A=1 · G=10 · « hair loss », « best » | **P1** — ticket 30–60 $, quasi aucun guide éditorial |
| 9 | `apple cider vinegar rinse for hair` | CI | 26 | 1 000 – 2 000 | A=3 · G=10 · « recipe », « ratio », « hard water » | Mélange DIY/produit ; rinceurs vinaigre |
| 10 | `scalp scrub for buildup` | T | 15 | 200 – 600 | A=2 · G=10 · « removal », « diy », « best » | **P1 facile** — gommage cuir chevelu |

### Cluster 3 — Bond repair, casse, décoloration (5)

| # | Mot-clé | Int. | KD est. 🟠 | Vol. est. 🟠 | Signal vérifié 🟢 | Angle / produit Amazon |
|---|---|---|---|---|---|---|
| 11 | `bond repair treatment for hair` | C | 36 | 1 000 – 2 000 | A=2 · G=10 · K18, OGX | P2 — marques installées |
| 12 | `hair mask for bleached hair` | T | 18 | 300 – 900 | A=4 · G=10 · « packet », « no protein » | **P1** — angle « protéine vs hydratation » |
| 13 | `protein treatment for damaged hair` | C | 26 | 500 – 1 500 | A=2 · G=10 · « at home », « best » | P2 — traitements protéinés |
| 14 | `leave in conditioner for dry damaged hair` | C | 30 | 1 000 – 3 000 | A=10 · G=10 · Redken en suggestion | P3 — trop dominé par les marques |
| 15 | `olaplex dupe` | CI | 16 | 1 000 – 3 000 | **A=0** · G=10 · « aldi », « trader joe's » | **P1 Google-only** : personne ne tape ça sur Amazon → monétiser par une liste d'alternatives |

### Cluster 4 — Cheveux fins, volume (5)

| # | Mot-clé | Int. | KD est. 🟠 | Vol. est. 🟠 | Signal vérifié 🟢 | Angle / produit Amazon |
|---|---|---|---|---|---|---|
| 16 | `shampoo for fine thin hair` | C | 30 | 1 000 – 2 000 | A=9 · G=10 · Dove, « older women » | P2 |
| 17 | `volumizing mousse for fine hair` | T | 22 | 400 – 1 000 | A=10 · G=10 · « alcohol free », « air dry » | P1/P2 — mousses volume |
| 18 | `thickening spray for thin hair` | T | 24 | 300 – 800 | A=1 · G=10 | P2 — sprays épaississants |
| 19 | `dry shampoo for fine hair` | T | 26 | 800 – 2 000 | A=9 · G=10 · « volume », « brunette » | P2 |
| 20 | `root lifter for flat hair` | T | 16 | 150 – 500 | A=3 · G=10 | **P1 facile** — racines plates |

### Cluster 5 — Boucles & ondulations (5)

| # | Mot-clé | Int. | KD est. 🟠 | Vol. est. 🟠 | Signal vérifié 🟢 | Angle / produit Amazon |
|---|---|---|---|---|---|---|
| 21 | `curl cream for frizzy hair` | T | 15 | 200 – 600 | A=1 · G=10 | **P1 facile** — crèmes boucles |
| 22 | `leave in conditioner for curly hair` | C | 38 | 2 000 – 5 000 | A=10 · G=10 · Ouidad | P3 — hub boucles |
| 23 | `sulfate free shampoo for curly hair` | C | 30 | 1 000 – 2 000 | A=3 · G=10 · « 4c » | P2 |
| 24 | `detangling brush for curly hair` | T | 25 | 1 000 – 2 000 | A=10 · G=10 · « wet », « kids », « 4c » | P2 — brosses démêlantes |
| 25 | `sea salt spray for wavy hair` | T | 18 | 300 – 800 | A=4 · G=10 · « texture » | P1 — sprays texturisants |

### Cluster 6 — Couleur & laiton (5)

| # | Mot-clé | Int. | KD est. 🟠 | Vol. est. 🟠 | Signal vérifié 🟢 | Angle / produit Amazon |
|---|---|---|---|---|---|---|
| 26 | `purple shampoo for brassy blonde` | C | 44 | 2 000 – 4 000 | A=2 · G=10 | P3 — marché saturé (Fanola, Olaplex, Matrix) |
| 27 | `blue shampoo for brown hair` | T | 25 | 500 – 1 500 | A=1 · G=10 | P1/P2 — angle « orange, pas jaune » |
| 28 | `hair gloss treatment at home` | CI | 20 | 500 – 1 500 | A=1 · G=10 · « vs salon » | **P1** — gloss semi-permanent |
| 29 | `color depositing mask` | T | 24 | 1 000 – 2 000 | A=10 · G=10 · Moroccanoil, IGK | P2 — masques colorants |
| 30 | `toner for brassy blonde at home` | CI | 18 | 200 – 600 | **A=0** · G=10 · « best » | **P1 Google-only** — attention : produits pro |

### Cluster 7 — Cuir chevelu gras & pellicules (4)

| # | Mot-clé | Int. | KD est. 🟠 | Vol. est. 🟠 | Signal vérifié 🟢 | Angle / produit Amazon |
|---|---|---|---|---|---|---|
| 31 | `shampoo for oily scalp` | C | 32 | 1 000 – 3 000 | A=10 · G=10 · « and dry ends » | P2 — angle double problème |
| 32 | `dandruff shampoo for dry scalp` | C | 26 | 500 – 1 500 | A=1 · G=10 | P2 |
| 33 | `dry shampoo for dark hair` | T | 22 | 500 – 1 500 | A=10 · G=10 · « no residue » | P1/P2 — anti-trace blanche |
| 34 | `scalp exfoliator for dandruff` | T | 15 | 100 – 400 | A=1 · G=10 | **P1 facile** |

### Cluster 8 — Outils & accessoires (6) — aligné sur le catalogue existant

| # | Mot-clé | Int. | KD est. 🟠 | Vol. est. 🟠 | Signal vérifié 🟢 | Angle / produit Amazon |
|---|---|---|---|---|---|---|
| 35 | `heatless curling rod headband` | T | 26 | 2 000 – 5 000 | A=10 · G=10 · « short hair », « satin » | P2 — fort volume, concurrence moyenne |
| 36 | `satin bonnet for curly hair` | T | 20 | 1 000 – 3 000 | A=10 · G=10 · « sleeping », « kids » | **P1** — bonnet satin |
| 37 | `microfiber hair towel wrap` | T | 22 | 1 000 – 2 000 | A=10 · G=10 · Kitsch en suggestion | P2 |
| 38 | `round brush blow dryer for short hair` | T | 18 | 300 – 800 | A=3 · G=10 · « 1 inch », « small » | **P1** — prolonge Revlon One-Step déjà au catalogue |
| 39 | `hair rollers for volume` | T | 22 | 1 000 – 2 000 | A=10 · G=10 · « large », « jumbo » | P2 |
| 40 | `heat protectant spray for fine hair` | T | 15 | 200 – 600 | A=2 · G=10 | **P1 facile** |

**Répartition :** 18 P1 · 17 P2 · 5 P3 · 0 requête « head » pure → toutes les cibles sont déjà des longueurs de traîne à intention d'achat.

---

## 3. Les 12 pages à produire en premier (90 jours)

Ordre recommandé : on construit d'abord le pilier « hard water » (4 pages qui se maillent entre elles), puis les « quick wins » à faible KD, puis les pages à fort volume.

| Rang | Mot-clé | Pourquoi maintenant | Page(s) à créer |
|---|---|---|---|
| 1 | `shampoo for hard water` | KD 22, demande marchande large, quasi aucun guide éditorial dédié | Pilier + comparatif 6 produits |
| 2 | `shower filter for hard water hair` | Produit à 30–60 $, intention transactionnelle pure | Test/guide + tableau compatibilité |
| 3 | `clarifying shampoo for buildup` | Sous-page naturelle du pilier | Guide « quand / à quelle fréquence » |
| 4 | `olaplex dupe` | A=0 → aucun concurrent Amazon, KD bas, forte demande Google | Comparatif d'alternatives ≤ 20 $ |
| 5 | `hair growth oil for edges` | Audience précise, produits Amazon abondants | Top 6 + routine 4 semaines |
| 6 | `satin bonnet for curly hair` | Volume solide, KD 20, produit simple à recommander | Top 6 + guide de choix |
| 7 | `hair gloss treatment at home` | Angle « vs salon » très différenciant | Guide + 5 produits |
| 8 | `dry shampoo for dark hair` | Problème ultra concret (« no cast ») | Top 8 + test de résidu |
| 9 | `hair mask for bleached hair` | Angle « protéine vs hydratation » = contenu expert | Guide + 7 produits |
| 10 | `round brush blow dryer for short hair` | Aligné sur les produits déjà dans `data/catalog.ts` | Comparatif 1 inch / small |
| 11 | `root lifter for flat hair` | KD 16, 150–500 recherches | Top 6 + technique racines |
| 12 | `heat protectant spray for fine hair` | KD 15, complète le cluster volume | Top 7 + « lightweight » |

**Quick wins faciles à glisser en parallèle (volume faible mais KD ≤ 16) :** `scalp scrub for buildup` (10), `curl cream for frizzy hair` (21), `scalp exfoliator for dandruff` (34), `sea salt spray for wavy hair` (25).

---

## 4. Titres SEO (title tag ≤ 60 caractères, H1, format)

> ⚠️ **Aucune mention « tested », « dermatologist-approved » ou « clinically proven »** si ce n'est pas vrai : le site est un guide éditorial, pas un laboratoire. Utiliser « reviewed », « compared », « ranked by ingredients » — c'est vrai, et ça reste vendeur.

| Mot-clé | Title tag | H1 | Format |
|---|---|---|---|
| shampoo for hard water | `Shampoo for Hard Water: 7 Fixes That Actually Work` | The Best Shampoos for Hard Water (And What to Avoid) | Pilier + top 7 |
| shower filter for hard water hair | `Shower Filter for Hard Water Hair: Does It Help?` | Do Shower Filters Actually Help Hard Water Hair? | Guide + 5 filtres |
| clarifying shampoo for buildup | `Clarifying Shampoo for Buildup: When & How to Use` | Clarifying Shampoo for Buildup: A Simple Wash-Day Guide | Guide + 5 produits |
| olaplex dupe | `Olaplex Dupe: 6 Bond Repair Alternatives Under $20` | 6 Olaplex Dupes That Actually Repair Bonds | Comparatif |
| hair growth oil for edges | `Hair Growth Oil for Edges: 6 Picks Worth Buying` | Best Hair Growth Oils for Thinning Edges | Top 6 + routine |
| satin bonnet for curly hair | `Satin Bonnet for Curly Hair: 6 Best for Sleeping` | Best Satin Bonnets for Curly Hair (Sleep-Tested Picks) | Top 6 |
| hair gloss at home | `Hair Gloss at Home: 5 Treatments, Salon-Level Shine` | Hair Gloss at Home vs Salon: What to Buy | Guide + 5 |
| dry shampoo for dark hair | `Dry Shampoo for Dark Hair: 8 With No White Cast` | 8 Dry Shampoos for Dark Hair That Leave No Residue | Top 8 |
| hair mask for bleached hair | `Hair Mask for Bleached Hair: 7 Repair Picks` | Protein vs Moisture: The Right Mask for Bleached Hair | Guide + 7 |
| round brush blow dryer short hair | `Round Brush Blow Dryer for Short Hair: 6 Best Picks` | Best Round Brush Blow Dryers for Short Hair (1-Inch & Small) | Comparatif |
| root lifter for flat hair | `Root Lifter for Flat Hair: 6 That Actually Last` | 6 Root Lifters That Keep Flat Hair Voluminous All Day | Top 6 |
| heat protectant for fine hair | `Heat Protectant for Fine Hair: 7 Lightweight Sprays` | 7 Heat Protectants for Fine Hair That Won't Weigh It Down | Top 7 |
| curl cream for frizzy hair | `Curl Cream for Frizzy Hair: 7 That Define, Not Crunch` | 7 Curl Creams for Frizzy Hair (No Crunch, No Cast) | Top 7 |
| scalp scrub for buildup | `Scalp Scrub for Buildup: 5 Best Picks, Reviewed` | Scalp Scrubs for Buildup: What Works and What Irritates | Top 5 |
| purple shampoo for brassy blonde | `Purple Shampoo for Brassy Blonde: 8 Best in 2026` | Best Purple Shampoos for Brassy Blonde Hair | Top 8 |
| blue shampoo for brown hair | `Blue Shampoo for Brown Hair: 6 Best Against Orange` | Blue Shampoo for Brown Hair: Fixing Orange, Not Yellow | Top 6 |
| toner for brassy blonde at home | `Toner for Brassy Blonde at Home: 5 Safe Options` | Can You Tone Brassy Blonde at Home? 5 Safe Options | Guide + 5 |
| heatless curling rod headband | `Heatless Curling Rod Headband: 7 Best for Overnight` | Best Heatless Curling Rods for Overnight Curls | Top 7 |
| scalp serum for hair growth | `Scalp Serum for Hair Growth: 6 Best (No Minoxidil)` | 6 Scalp Serums for Thinner-Looking Hair | Top 6 |
| derma roller for hair growth | `Derma Roller for Hair Growth: Size Guide + 5 Picks` | Derma Rolling for Hair: Needle Size, Safety, Picks | Guide + 5 |

**4 gabarits réutilisables pour les 20 restants :**
1. `Best [produit] for [problème] in 2026 ([N] Picks)`
2. `[Produit] for [problème]: [N] That Actually [bénéfice]`
3. `[Produit] vs [Produit]: Which One for [problème]?`
4. `How to [résultat] Without [douleur] ([N] Drugstore Picks)`

**Structure commune (à respecter pour tenir le KD bas) :** réponse en 40 mots dès l'intro → tableau comparatif (produit, format, type de cheveu, points forts) → 5–7 fiches produits avec « qui devrait l'acheter / qui devrait passer » → section « comment choisir » → FAQ 4 questions (extraite des suggestions Google vérifiées) → divulgation affiliation.

---

## 5. Idées de titres Pinterest (24)

Format 1000 × 1500 px (2:3), titre 40–60 caractères, description 150–300 caractères avec le mot-clé exact, lien vers **l'article** (jamais un lien Amazon direct depuis Pinterest).

**Eau calcaire & résidus**
1. `Hard Water Ruining Your Hair? Try This Wash-Day Fix`
2. `5 Shampoos for Hard Water That Rinse Clean`
3. `Shower Filter for Hair Loss: What Nobody Tells You`
4. `Clarifying Shampoo 101: When to Use It (and When Not To)`

**Réparation & dupes**
5. `The $12 Olaplex Dupe I'd Buy Again`
6. `Bond Repair at Home: 20-Minute Routine for Bleached Hair`
7. `Hair Mask for Bleached Hair: Moisture vs Protein`
8. `Hair Gloss at Home: Salon Shine for Under $20`

**Volume & cheveux fins**
9. `Root Lift Trick for Flat Hair (No Backcombing)`
10. `Heat Protectant for Fine Hair That Won't Weigh It Down`
11. `Dry Shampoo for Dark Hair: No White Cast, Ever`
12. `Round Brush Blowout for Short Hair — Step by Step`

**Boucles & protection**
13. `Heatless Curls Overnight: The Satin Method`
14. `Satin Bonnet for Curly Hair: Stop Waking Up Frizzy`
15. `Curl Cream for Frizzy Hair: The Squish-to-Condish Method`
16. `Sea Salt Spray for Wavy Hair: Beach Waves in 5 Minutes`

**Cuir chevelu**
17. `Scalp Scrub for Buildup: 3-Ingredient DIY + Best Picks`
18. `Derma Roller for Hair Growth: Read This Before You Start`
19. `Scalp Exfoliator for Dandruff: What Actually Works`
20. `Hair Growth Oil for Edges: A 4-Week Routine`

**Couleur & routines**
21. `Purple Shampoo Mistakes That Make Brassy Hair Worse`
22. `Blue Shampoo for Brown Hair: Before & After`
23. `Wash-Day Routine for Hard Water (Save This)`
24. `5 Hair Tools Under $40 That Replace Salon Visits`

**3 gabarits de pin :**
- Problème → solution : `[Problème]? [Solution courte] (Save This)`
- Liste : `[N] [produits] for [problème] That Actually Work`
- Comparaison : `[Produit A] vs [Produit B]: Which for [problème]?`

**Règles Pinterest qui font la différence :** 1 idée = 3 à 5 visuels (pas de duplication brute : changer le texte overlay), 3 à 5 pins/semaine, nom de tableau = mot-clé (`Hard Water Hair Care`, pas `Hair Tips`), texte alternatif = mot-clé, et toujours une promesse vérifiable dans l'image (pas de « before/after » retouché).

---

## 6. Valider les volumes réels — méthode 100 % gratuite (≈ 45 min)

### Étape 1 — Google Keyword Planner (15 min) — la référence
1. Créer un compte Google Ads (gratuit, **aucune campagne à lancer**, aucune carte requise pour voir les fourchettes).
2. `Tools > Planning > Discover new keywords` → onglet **Start with keywords**.
3. Coller les 40 mots-clés, localisation **United States**, langue **English**.
4. Lire `Avg. monthly searches` + `Competition` + `Top of page bid`.
   - ⚠️ Sans campagne active, Google affiche des **fourchettes** (100–1K, 1K–10K…). C'est suffisant pour trier ; les chiffres exacts exigent un budget actif.
5. Exporter en CSV et coller dans le tableau de suivi (§6.6).

### Étape 2 — Bing Webmaster Tools (10 min) — le volume « gratuit et précis »
1. `bing.com/webmasters` → ajouter le site (vérification DNS ou balise — le site est sur Cloudflare Pages, la balise est le plus simple).
2. `Keyword Research` → pays **United States**, langue **English**.
3. Coller les 40 requêtes → volumes mensuels précis + « related keywords » + difficulté.
4. Bing est généralement à ±20–40 % de Google sur ce type de requêtes : c'est le meilleur proxy gratuit.

### Étape 3 — Ahrefs Free Keyword Generator (5 min)
`ahrefs.com/keyword-generator` → 10 requêtes/jour → volume + **KD gratuit** sur les 12 P1 uniquement. Recouper avec les KD estimés du §2 : si l'écart dépasse 15 points, faire confiance à Ahrefs.

### Étape 4 — Google Trends (5 min)
Par groupes de 5 mots-clés, US, 12 derniers mois + 5 ans : noter la saisonnalité (pousse = janvier, bonnets/heatless = novembre–décembre, purple shampoo = juin–août) et les requêtes `Rising`. Un mot-clé qui monte mais dont le KD baisse = fenêtre d'opportunité.

### Étape 5 — Vérification SERP manuelle (10 min) — le vrai test « low competition »
Navigation privée, `google.com` en US, pour chaque P1 :
| Signal observé | Lecture |
|---|---|
| Reddit / Quora dans le top 5 | 🟢 Très facile à battre avec une page structurée |
| Pages génériques (cosmopolitan.com « best shampoos ») | 🟢 Facile : angle problème précis |
| Fiches produit Amazon / Walmart dans le top 5 | 🟠 Moyen : il faut du contenu, pas juste une liste |
| Page officielle de marque (olaplex.com, mielle.com) | 🔴 Passer, sauf angle « dupe / alternative » |
| 10 sites DR > 70 avec page dédiée | 🔴 Skip |

Compléter avec l'extension gratuite **Detailed SEO Extension** (DR + trafic des 10 premiers) ou **Keyword Surfer** (volume + CPC directement dans la SERP).

### Étape 6 — Confirmer la demande marchande sur Amazon (5 min)
Pour chaque P1 : taper la requête sur amazon.com et noter
1. la **position de la requête dans l'autocomplete** (1ᵉʳ = demande massive),
2. le **nombre de sponsors** (beaucoup = argent réel sur ce mot-clé),
3. le **nombre d'avis des 3 premiers résultats** (< 500 = opportunité, > 5 000 = mur),
4. la présence de la catégorie `Best Sellers in Hair Care` pour le type de produit.

### 6.7 Grille de décision (à appliquer après collecte)
| Condition | Décision |
|---|---|
| Vol ≥ 500 **et** KD ≤ 25 **et** top 3 Amazon < 1 000 avis | **P1 — écrire cette semaine** |
| Vol ≥ 1 000 **et** KD ≤ 35 | P2 — après 6 pages publiées |
| Vol 200–500 **et** KD ≤ 20 | P1 — page de cluster (soutien du pilier) |
| Vol < 200 | Skip, sauf si la page soutient un pilier |
| Marque officielle dans le top 3 **et** pas d'angle alternatif | Skip |
| Reddit dans le top 3 | Priorité — contenu « answer-first » |

### 6.8 Suivi (à remplir une fois les données collectées)
| Mot-clé | Volume Google (KP) | Volume Bing | KD Ahrefs | Reddit en top 5 ? | Avis top 3 Amazon | Décision |
|---|---|---|---|---|---|---|
| shampoo for hard water | | | | | | |
| olaplex dupe | | | | | | |
| … | | | | | | |

> Après 60–90 jours de mise en ligne, **Google Search Console devient la meilleure source** : impressions réelles par requête (onglet Performance > Queries). C'est la seule donnée « vérifiée » qui compte, parce qu'elle mesure *votre* site.

---

## 7. Conformité (Amazon Associates + FTC) — à ne pas négliger

1. **Pas de prix affiché** dans le texte : le catalogue utilise déjà `prixIndicatif: null`, conserver cette règle (l'Operating Agreement l'exige hors API PA).
2. **Pas d'allégations médicales** : « hair loss », « regrow », « cure dandruff », « clinically proven » sont risqués (FDA). Formuler : « for thinner-looking hair », « helps reduce the look of buildup », « supports a healthier scalp feel ».
3. **« Dupe » et marques** : usage nominatif toléré (« alternative to Olaplex No.3 »), jamais de logo, jamais d'achat de mots-clés de marque en publicité, jamais « Olaplex » dans le titre principal de la page.
4. **Divulgation** : « As an Amazon Associate I earn from qualifying purchases. » visible sans défilement, above the fold (déjà géré par `components/Disclosure`).
5. **Images** : ne pas hotlinker les visuels Amazon ; photos personnelles ou banque d'images sous licence.
6. **Pinterest** : lien vers l'article, pas vers Amazon (les liens affiliés bruts y sont régulièrement signalés).
7. **Compléments (biotine, gummies)** : hors périmètre pour l'instant — claims trop sensibles.

---

## 8. Intégration au site (concret)

Le catalogue ne contient aujourd'hui qu'une catégorie capillaire, `hair-styling` (outils). Les 40 mots-clés couvrent deux familles : **soins** et **outils**.

1. Ajouter une catégorie `hair-care` dans `data/catalog.ts` (nom « Hair Care », description orientée problèmes : hard water, buildup, bond repair, volume).
2. Garder `hair-styling` pour les outils (S35, S38, S39) et les pages « round brush blow dryer » déjà alignées sur Revlon One-Step.
3. URL : `/hair-care/[slug]` et `/hair-styling/[slug]` — slugs courts, un mot-clé par page.
4. Maillage : chaque page produit remonte vers son pilier de cluster (`/hair-care/hard-water-hair-guide`), chaque pilier descend vers 4–6 fiches. C'est ce maillage qui fait ranker les longueurs de traîne.
5. `data/guides.ts` : ajouter les comparatifs (format « Top N ») — ce sont eux qui portent l'intention commerciale.

**Séquençage 90 jours :** J1–J30 = pilier hard water + 3 satellites + olaplex dupe (5 pages) · J31–J60 = volume/fins + boucles (5 pages) · J61–J90 = couleur + outils (5 pages). À partir de J30 : 3 à 5 pins/semaine sur les pages publiées.

---

## Annexe A — Données brutes observées (26/10/2026)

`A=` nombre de suggestions Amazon US renvoyées pour la requête exacte · `G=` nombre de suggestions Google US.
Colonne « 1ʳᵉ suggestion » = ce que la plateforme propose réellement → preuve de la formulation commerciale utilisée par les acheteurs.

| # | Mot-clé | A= | 1ʳᵉ suggestion Amazon | 1ʳᵉ suggestion Google |
|---|---|---|---|---|
| 1 | scalp serum for hair growth | 10 | scalp serum for hair growth | scalp serum for hair growth and thickness |
| 2 | rosemary oil for hair growth | 10 | mielle rosemary oil for hair growth organic | rosemary oil for hair growth recipe |
| 3 | shampoo for thinning hair women | 3 | biotin shampoo for thinning hair women | shampoo for thinning hair women menopause |
| 4 | hair growth oil for edges | 2 | hair growth oil for edges black women | wild growth oil for edges |
| 5 | derma roller for hair growth | 10 | derma roller for hair growth scalp | derma roller for hair growth near me |
| 6 | shampoo for hard water | 10 | shampoo for hard water | shampoo for hard water build up |
| 7 | clarifying shampoo for buildup | 2 | clarifying shampoo for buildup removal | clarifying shampoo for buildup and hard water |
| 8 | shower filter for hard water hair | 1 | shower filter for hard water hair | shower filter for hard water hair loss |
| 9 | apple cider vinegar rinse for hair | 3 | apple cider vinegar rinse for hair | apple cider vinegar rinse for hair recipe |
| 10 | scalp scrub for buildup | 2 | scalp scrub for buildup | scalp scrub for buildup and dandruff |
| 11 | bond repair treatment for hair | 2 | bond repair treatment for hair | bond repair treatment for hair pre shampoo |
| 12 | hair mask for bleached hair | 4 | hair mask for bleached hair | hair mask for bleached hair diy |
| 13 | protein treatment for damaged hair | 2 | protein treatment for damaged hair | protein treatment for damaged hair at home |
| 14 | leave in conditioner for dry damaged hair | 10 | leave in conditioner for dry damaged hair | leave in conditioner for dry brittle hair |
| 15 | olaplex dupe | **0** | *(aucune)* | olaplex dupe reddit |
| 16 | shampoo for fine thin hair | 9 | shampoo for fine thin hair | shampoo for fine thin hair reddit |
| 17 | volumizing mousse for fine hair | 10 | volumizing mousse for fine hair | volumizing mousse for fine hair men |
| 18 | thickening spray for thin hair | 1 | thickening spray for thin hair | thickening spray for thin hair men |
| 19 | dry shampoo for fine hair | 9 | dry shampoo for fine hair | dry shampoo for fine hair reddit |
| 20 | root lifter for flat hair | 3 | flat root hair lifter | root lift for flat hair |
| 21 | curl cream for frizzy hair | 1 | curl cream for frizzy hair | curl cream for frizzy hair men |
| 22 | leave in conditioner for curly hair | 10 | leave in conditioner for curly hair | leave in conditioner for curly hair men |
| 23 | sulfate free shampoo for curly hair | 3 | sulfate free shampoo for curly hair | sulfate free shampoo for curly hair men |
| 24 | detangling brush for curly hair | 10 | detangling brush for curly hair | detangling brush for curly hair men |
| 25 | sea salt spray for wavy hair | 4 | sea salt spray for wavy hair | sea salt spray for wavy hair men |
| 26 | purple shampoo for brassy blonde | 2 | purple shampoo for brassy blonde hair | purple shampoo for brassy blonde hair |
| 27 | blue shampoo for brown hair | 1 | blue shampoo for brown hair | blue shampoo for brown hair with highlights |
| 28 | hair gloss treatment at home | 1 | hair gloss treatment at home | hair gloss treatment at home reddit |
| 29 | color depositing mask | 10 | moroccan oil color depositing mask | color depositing mask for dark hair |
| 30 | toner for brassy blonde at home | **0** | *(aucune)* | toner for brassy hair at home |
| 31 | shampoo for oily scalp | 10 | shampoo for oily scalp | shampoo for oily scalp and dry ends |
| 32 | dandruff shampoo for dry scalp | 1 | dandruff shampoo for dry scalp | dandruff shampoo for dry scalp men |
| 33 | dry shampoo for dark hair | 10 | dry shampoo for dark hair | dry shampoo for dark hair homemade |
| 34 | scalp exfoliator for dandruff | 1 | scalp exfoliator for dandruff | scalp exfoliation for dandruff at home |
| 35 | heatless curling rod headband | 10 | heatless curling rod headband | heatless curling rod headband how to use |
| 36 | satin bonnet for curly hair | 10 | satin bonnet for curly hair | satin bonnet for curly hair white girl |
| 37 | microfiber hair towel wrap | 10 | microfiber hair towel wrap | microfiber hair towel wrap for women |
| 38 | round brush blow dryer for short hair | 3 | round brush blow dryer for short hair | round brush blow dry for short hair |
| 39 | hair rollers for volume | 10 | large hair rollers for volume | hair rollers for volume roots |
| 40 | heat protectant spray for fine hair | 2 | heat protectant spray for fine hair | heat protectant spray for fine hair reddit |

**Lecture transversale (vérifiée) :** sur 40 requêtes, **38 sont confirmées par Amazon** et **40/40 par Google**. Deux requêtes (`olaplex dupe`, `toner for brassy blonde at home`) n'ont **aucune** suggestion Amazon → ce sont des requêtes de contenu Google : excellentes pour le trafic, à monétiser via une liste d'alternatives et non via une fiche produit unique.

---

## Annexe B — Fichier de travail

Les 40 lignes sont aussi disponibles en CSV prêt à importer dans Google Sheets :
`docs/recherche-mots-cles-haircare-us.csv`
Colonnes : `keyword, cluster, intent, kd_est, vol_low, vol_high, amazon_suggestions, priority, title_seo, product_angle, volume_google_kp, volume_bing, kd_ahrefs, decision` (les 4 dernières colonnes sont vides : à remplir avec le protocole §6).

---

### Résumé en 5 lignes
1. Le cluster **eau calcaire / résidus** est la meilleure entrée : intention d'achat réelle, KD estimé 15–24, presque aucune page éditoriale dédiée.
2. **`olaplex dupe`** est le meilleur rapport effort/retour : 0 suggestion Amazon = pas de concurrence produit, forte demande Google.
3. Éviter en direct : `rosemary oil`, `purple shampoo`, `leave-in curly`, `leave-in damaged` — marques dominantes, KD 38–58.
4. Publier 15 pages en 90 jours, 3–5 pins/semaine par page, lien Pinterest → article → Amazon.
5. **Aucun chiffre de volume ici n'est vérifié** : passer 45 minutes sur Keyword Planner + Bing Webmaster (§6) avant de valider le planning.
