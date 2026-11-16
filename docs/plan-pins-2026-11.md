# Plan de publication des pins — 18/11 → 13/12/2026

**Décidé le 15/11/2026 après le relevé n°3** (`docs/suivi-trafic-mensuel.md`).
Ce plan remplace la règle « 2 cheveux / 1 corps » du 13/11.

> ## ⚠️ RÉVISION DU 15/11 (soir) — passage à 3 pins/jour
>
> Décision de Farid. Les sections 2 et 3 ci-dessous (1 pin/jour) sont **remplacées** par ce
> qui suit. Le reste du document reste valable.
>
> ### Répartition forcée par le nombre de pages, pas par choix
>
> 3/jour = **21 pins/semaine**. Avec la règle « une URL une seule fois par semaine », il faut
> 21 destinations distinctes. Le site n'en compte que **29** (hors pages d'index) :
>
> | Tableau | Pages disponibles | Pins/semaine |
> |---|---|---|
> | Cheveux | 6 | **6** (toutes, chaque semaine) |
> | Makeup | 6 | **6** (toutes, chaque semaine) |
> | Skincare | 6 | **6** (toutes, chaque semaine) |
> | Corps | 10 | **3** (rotation) |
>
> Conséquence heureuse : le body care tombe à 3 pins/semaine sur 21, soit **14 %** au lieu de
> 73 % des impressions actuelles. Le passage à 3/jour corrige de lui-même le biais body.
>
> ### Grille hebdomadaire type
>
> Trois créneaux espacés : **9 h · 13 h · 19 h**. Jamais trois pins d'affilée.
>
> | Jour | 9 h | 13 h | 19 h |
> |---|---|---|---|
> | Lundi | cheveux 1 | makeup 1 | skincare 1 |
> | Mardi | cheveux 2 | skincare 2 | makeup 2 |
> | Mercredi | cheveux 3 | makeup 3 | skincare 3 |
> | Jeudi | cheveux 4 | skincare 4 | makeup 4 |
> | Vendredi | cheveux 5 | makeup 5 | skincare 5 |
> | Samedi | cheveux 6 | skincare 6 | makeup 6 |
> | Dimanche | corps 1 | corps 2 | corps 3 |
>
> Chaque page reçoit **un pin par semaine**, soit 3 à 4 angles par mois.
>
> ### La réserve d'angles : 6 à 8 semaines
>
> Une fiche produit tient 4 à 6 promesses honnêtes distinctes. 29 pages × 5 angles ≈ **145 pins
> possibles avant de répéter**. À 90 pins/mois, la réserve est épuisée vers **fin décembre /
> début janvier**. Au-delà, il faudra **de nouvelles pages** : environ 18 par mois pour tenir le
> rythme indéfiniment — ce qui n'est pas réaliste.
>
> **3/jour est donc un sprint de 6 à 8 semaines, pas une vitesse de croisière.** Il doit être
> accompagné d'un plan de pages neuves (1 à 2 par semaine), sinon il se transforme en répétition
> et les pins se cannibalisent.
>
> ### Ce que ça devrait rapporter
>
> | Hypothèse | Pins/mois | Clics sortants | Par pin | Clics Amazon/mois | Qualification 3 ventes |
> |---|---|---|---|---|---|
> | Aujourd'hui (1/jour) | 30 | 22 | **0,73** | ~39 | vers avril |
> | 3/jour, +50 % d'impressions | 90 | 33 | 0,37 | ~59 | vers janvier |
> | 3/jour, +70 % d'impressions | 90 | 37 | 0,42 | ~66 | vers janvier |
>
> Les +50 / +70 % sont une **hypothèse, pas une mesure** : Pinterest ne donne pas trois fois plus
> de portée parce qu'on publie trois fois plus. La portée par pin baisse mécaniquement.
>
> ### Règle d'arrêt (test de 14 jours, du 18/11 au 01/12)
>
> Métrique de décision : **clics sortants par pin publié**.
>
> | Valeur observée | Lecture |
> |---|---|
> | ≥ 0,55 | 3/jour fonctionne, on continue |
> | 0,40 – 0,55 | neutre : plus de travail pour le même résultat, on garde si le rythme tient |
> | **< 0,40** | les pins supplémentaires sont du bruit, on revient à 2/jour |
>
> ### Production à tenir
>
> 90 visuels par mois, aucun réemploi. Photos Pexels + `scripts/make_pins_editorial.py`.
> Si la cadence des visuels décroche, c'est la publication qui décroche : mieux vaut 2/jour
> tenus que 3/jour abandonnés au bout de dix jours.
>
> ### Journal des écarts
>
> | Date | Écart | Conséquence |
> |---|---|---|
> | 16/11 | P21 publié le 16/11 à 16:46 GMT au lieu du 17/11, soit 4 h 46 après P26 (même duel d'appareils) | le **17/11 est vide** : un pin de remplacement est nécessaire, sur une page non pinnée cette semaine |
> | 16/11 | 2 pins le même jour (P26 + P21) | autorisé (2/jour maximum avant le 18/11), mais à ne pas reproduire deux jours de suite |
> | 16/11 | 17/11 vide → **P30** créé, puis **changé de page** : le concealer Age Rewind avait déjà un pin le 01/11 (doublon) → lingettes Neutrogena, angle « wipe first, cleanse second » | 17/11 couvert par un angle réellement neuf ; page pinnée pour la dernière fois le 17/10 |

---

## 1. Pourquoi la répartition change

Données du relevé n°3 (14/10 → 13/11) :

| Tableau | Part des impressions | Clics sortants | Taux sortant | Pour 1 000 impr. |
|---|---|---|---|---|
| Body Care & Dry Skin | **73,3 %** | 1 | 0,05 % | 0,5 |
| Hot Air Brush | 10,2 % | 11 | 3,62 % | **36,2** |
| Skincare Routine | 10,8 % | 6 | 1,86 % | 18,6 |
| Makeup for Dry Skin | 5,7 % | 4 | 2,34 % | 23,4 |

Le body care occupe les trois quarts de la surface et produit **un** clic sortant sur vingt-deux.
Les intervalles de confiance ne se recoupent pas (body ≤ 0,26 % · cheveux ≥ 2,03 %) : ce n'est pas
un accident d'échantillon.

**Mais on ne supprime rien.** Les pins body déjà en ligne continuent de tourner seuls et
continuent de produire les impressions. On arrête simplement d'en **fabriquer**.

---

## 2. Nouvelle répartition hebdomadaire

| Tableau | Pins/semaine | Avant | Motif |
|---|---|---|---|
| Hot Air Brush | **3 à 4** | 2 | 3,62 %, meilleur volume de clics sortants |
| Skincare Routine | **2** | 1 (irrégulier) | 1,86 %, deux pages jamais pinnées |
| Makeup for Dry Skin | **1** | ~0 | **80 % de clic pin → sortant**, le meilleur du compte |
| Body Care & Dry Skin | **1** | 1 sur 3 | 0,05 % : entretien seulement |

**Total : 7 pins/semaine = 1 par jour**, jamais deux vers la même URL dans la même semaine.

### Le plafond réel des cheveux

Six destinations seulement, et une seule fois par semaine chacune :

| Page | Dernier pin |
|---|---|
| `/comparisons/best-hot-air-brush-2026/` | 16/11 (P26) |
| `/comparisons/one-step-brush-vs-powerful-dryer/` | 17/11 (P21) |
| `/guides/alternatives-to-viral-heated-brush/` | 12/11 (P20) |
| `/guides/hair-oil-vs-body-oil/` | 09/11 (P08) |
| `/product/revlon-one-step-dryer-volumizer/` | 15/11 (P25) |
| `/product/revlon-compact-hair-dryer-1875w/` | 13/11 (P23) |

C'est pourquoi 3-4/semaine est un plafond, pas un objectif. Pour aller au-delà il faudra
**de nouvelles pages cheveux**, pas de nouveaux pins.

---

## 3. Calendrier

Une ligne = un pin. La fiche détaillée (image, titre, description, alt, tag produit) s'écrit
**48 h avant** la date, jamais le jour même.

### Semaine 16 → 22/11

| Date | Tableau | Destination | Angle |
|---|---|---|---|
| 16/11 | cheveux | `comparisons/best-hot-air-brush-2026` | ✅ **P26 programmé 12 h** — cheveux épais |
| 17/11 | cheveux | `comparisons/one-step-brush-vs-powerful-dryer` | **P21** — cheveux longs |
| 18/11 | cheveux | `guides/hair-oil-vs-body-oil` | les deux huiles ne sont pas interchangeables |
| 19/11 | makeup | `comparisons/best-foundation-for-dry-skin` | **jamais pinnée** — la teinte qui ne marque pas les squames |
| 20/11 | skincare | `guides/how-to-choose-vitamin-c-serum` | **jamais pinnée** — le % et le flacon |
| 21/11 | cheveux | `product/revlon-one-step-dryer-volumizer` | à quoi servent les 3 chaleurs / 2 vitesses |
| 22/11 | corps | `product/raw-shea-butter-16oz` | beurre solide, pas une huile : comment l'utiliser |

### Semaine 23 → 29/11

| Date | Tableau | Destination | Angle |
|---|---|---|---|
| 23/11 | cheveux | `guides/alternatives-to-viral-heated-brush` | 2 alternatives, et pour qui chacune |
| 24/11 | skincare | `product/ceramide-moisturizing-cream` | céramides : ce que ça remplace, ce que ça ne remplace pas |
| 25/11 | cheveux | `comparisons/best-hot-air-brush-2026` | cheveux fins, la version « une passe » |
| 26/11 | makeup | `product/ilia-multi-stick-cheek-lip` | **jamais pinnée** |
| 27/11 | cheveux | `product/revlon-one-step-dryer-volumizer` | la limite des 1100 W, sans détour |
| 28/11 | corps | `comparisons/shea-butter-vs-body-oil` | lequel pour quel type de sécheresse |
| 29/11 | skincare | `product/micellar-makeup-remover-wipes` | démaquillant waterproof en un geste |

### Semaine 30/11 → 06/12

| Date | Tableau | Destination | Angle |
|---|---|---|---|
| 30/11 | cheveux | `comparisons/one-step-brush-vs-powerful-dryer` | le duel, version « je n'en garde qu'un » |
| 01/12 | skincare | `product/medicube-pdrn-pink-collagen-toner-pads` | « 99 % PDRN » : ce que ça veut dire |
| 02/12 | cheveux | `guides/hair-oil-vs-body-oil` | l'huile capillaire sur le corps : ce qui diffère |
| 03/12 | makeup | `product/volume-length-mascara` | volume lavable à l'eau |
| 04/12 | cheveux | `guides/alternatives-to-viral-heated-brush` | la brosse virale n'est pas mauvaise, elle a des conditions |
| 05/12 | corps | `guides/fragrance-free-body-oil-sensitive-skin` | sans parfum ≠ sans odeur |
| 06/12 | skincare | `guides/beginner-glow-routine` | 4 étapes, 5 minutes |

### Semaine 07 → 13/12

| Date | Tableau | Destination | Angle |
|---|---|---|---|
| 07/12 | cheveux | `comparisons/best-hot-air-brush-2026` | cheveux bouclés |
| 08/12 | skincare | `product/truskin-vitamin-c-duo` | sérum + hydratant en un |
| 09/12 | cheveux | `product/revlon-compact-hair-dryer-1875w` | le séchoir de voyage, sans accessoire |
| 10/12 | makeup | `product/age-rewind-eraser-concealer` | teinte 110, correcteur multi-usage |
| 11/12 | cheveux | `comparisons/one-step-brush-vs-powerful-dryer` | temps de séchage réel |
| 12/12 | corps | `comparisons/oil-body-wash-vs-body-wash` | qui doit changer, qui ne doit pas |
| 13/12 | skincare | `product/cetaphil-daily-cleanser-lotion` | le duo 16 oz |

**10/12 = relevé n°4.** Ce jour-là, publier quand même : le relevé se fait dans la journée.

---

## 4. Règles de production

1. **Visuel neuf à chaque pin.** Aucune réutilisation d'une image déjà publiée.
2. **Alternance des thèmes** : `creme` / `dark` d'un pin à l'autre, pour continuer à comparer
   (`scripts/make_pins_editorial.py`).
3. **Aucune impression à zéro.** Les 20, 21 et 22/10 sont les seuls jours à 0 impression du mois,
   et ils suivent un arrêt de publication. Un jour sans pin = un jour perdu.
4. **Vérifier le tableau avant de cliquer sur Publier.** Une erreur = une modification sur les
   deux autorisées en 24 h.
5. **Tag produit** : toujours l'appareil **visible sur l'image**, jamais le produit dont parle la
   page s'il n'est pas sur le visuel.
6. **Pas de « Review », pas de « Test »** dans le titre, la description ou l'image.

---

## 5. Ce que ce plan ne fait pas

| Tentation | Pourquoi on s'en abstient |
|---|---|
| Corriger les UTM des 13 anciens pins | il faudrait changer l'URL → interdit |
| Rééditer les 6 pins dont l'image dit « Review » | le mot est **incrusté dans l'image** : seul un nouveau pin le retire. 324 impressions au total, mauvais rapport effort/gain |
| Republier vers `/guides/dry-body-oil-vs-body-lotion/` | 1 054 impressions sur ce seul pin : un second pin le concurrence |
| Viser 100 clics Amazon/mois en décembre | demanderait ~10 000 impressions/mois (×3,4) |

---

## 6. Suivi

- Relevé mensuel le **10/12** (`docs/suivi-trafic-mensuel.md`, relevé n°4).
- **Nouveau :** relever à la main les clics sortants des 10 premiers pins (Pinterest → vue par pin).
  L'export ne les donne pas, et sans ça on ne saura jamais si ce sont les guides ou les
  comparaisons qui convertissent.
