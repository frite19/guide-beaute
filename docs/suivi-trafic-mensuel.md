# Suivi du trafic — relevé mensuel (Éclatia)

Un relevé par mois, même date, même méthode. Le but n'est pas de commenter chaque
chiffre, mais de comparer d'un mois sur l'autre.

Le mode d'emploi des outils (Cloudflare, Pinterest, Amazon) reste dans
`docs/statistiques.md`. Ce fichier-ci ne contient que les **relevés datés**.

---

## Méthode figée (ne pas changer d'un relevé à l'autre)

| Point | Choix |
|---|---|
| Source trafic | Cloudflare Web Analytics → onglet **Overview / Page views** |
| Filtre | `Exclude bots = Yes` (par défaut) |
| Période | 30 derniers jours, export PDF à la date du relevé |
| Source vitesse | Cloudflare Web Analytics → onglet **Core Web Vitals** |
| Source clics | **Pinterest Analytics** (seule mesure fiable des clics sortants) |
| Source ventes | Amazon Associates → Reports |

> ⚠️ Les « page views » Cloudflare ne sont **pas** des visiteurs. Une page peut être
> chargée par un robot, un aperçu de lien ou un scanner. Toujours lire avec le
> navigateur et le type d'appareil : un navigateur « Unknown » sur desktop = non humain.

---

## Relevé n°1 — 10/11/2026

**Période :** 11/10/2026 18:30 → 10/11/2026 18:30 (UTC) · bots exclus
**Fichiers d'origine :** `srcdoc1.pdf` (vitesse), `srcdoc 2.pdf` (vitesse, échantillon plus large), `srcdoc4.pdf` (trafic)

### Trafic

| Indicateur | Valeur |
|---|---|
| Page views (total) | **200** |
| Visites humaines estimées | **20 à 40** |
| États-Unis | 150 |
| Algérie | 50 |
| Référent : aucun (direct) | 180 |
| Référent : guide-beaute.pages.dev (interne) | 20 |
| **Référent : Pinterest** | **0** |

| Pages vues | Vues |
|---|---|
| `/category/makeup/` | 20 |
| `/about/` | 20 |
| `/category/body-bath/` | 10 |
| `/guides/` | 10 |
| `/category/hair-styling/` | 10 |

| Appareil / navigateur | Valeur |
|---|---|
| Desktop | 180 |
| Mobile | **20** |
| Navigateur « Unknown » | **150** |
| ChromeMobile 20 · Firefox 20 · ChromeDerivative 10 | — |
| OS « Unknown » 150 · Windows 30 · Android 20 | — |
| Navigation : Navigate 180 · Routing APIs 20 | — |

### Vitesse (Core Web Vitals, P75)

| Mesure | Valeur | Seuil Google | État |
|---|---|---|---|
| LCP | 894 ms (P50 424 ms · P90 1 132 ms · P99 1 252 ms) | < 2 500 ms | ✅ 100 % bon |
| INP | ~24 ms | < 200 ms | ✅ 100 % bon |
| CLS | ~0 | < 0,1 | ✅ 100 % bon |

Décomposition du LCP : réponse serveur 297 ms (35 %) · chargement de l'image 285 ms (34 %)
· attente avant rendu 194 ms (23 %) · délai 65 ms (8 %).

### Lecture

1. **150 des 200 vues ne sont pas humaines** (navigateur et OS « Unknown », desktop).
   Le trafic réel est donc de l'ordre de quelques dizaines de visites par mois.
2. **Les 50 vues d'Algérie sont très probablement des visites de contrôle** de l'auteur
   du site, et non de l'audience.
3. **Aucun référent Pinterest.** Soit les pins n'envoient presque personne, soit le
   navigateur intégré de Pinterest masque le référent (ces visites se confondraient
   alors avec les 180 « direct »). L'argument décisif : **20 vues mobiles sur 200**
   seulement, alors que Pinterest est massivement mobile. Conclusion retenue :
   **Pinterest n'apporte quasiment aucun trafic à cette date.**
4. **Les pages vues ne sont pas les pages pinnées** (catégories et `/about/` en tête,
   aucun guide ni comparaison). Un visiteur venu d'un pin arriverait d'abord sur la page
   du pin. Signe cohérent avec le point 3.
5. **La vitesse n'est pas un problème** : les trois métriques sont à 100 % dans le vert.

### Conclusion du relevé

Le site fonctionne et il est rapide ; le goulot d'étranglement est **la distribution sur
Pinterest**, pas le site. Aucune décision de contenu ne doit être prise sur ce relevé :
l'échantillon est trop petit (règle des ~1 000 impressions).

---

## Relevé n°2 — Pinterest Analytics — 12/11/2026

**Période :** 12/10/2026 → 11/11/2026 (31 jours) · export `Pinterest Analytics overview 20261012-20261111.csv`
**Filtres :** tous contenus, tous appareils, toutes sources · bots non exclus par Pinterest

### Volumes

| Indicateur | Valeur |
|---|---|
| Impressions totales | **2 466** (~80/jour) |
| Clics sortants (vers le site) | **22** (0,89 % des impressions) |
| Clics sur le pin (ouverture) | 45 |
| Engagements | 63 |
| Enregistrements | **1** |

**Courbe :** 20 à 140 impressions/jour jusqu'au 08/11, puis **820 le 09/11**,
294 le 10/11, 307 le 11/11. Les deux derniers jours sont des estimations réajustées.

### Par tableau

| Tableau | Impressions | Engagements | Clics pin | Clics sortants | Taux sortant |
|---|---|---|---|---|---|
| Body Care & Dry Skin | 1 722 | 15 | 15 | 1 | **0,06 %** |
| Skincare Routine for Beginners | 304 | 16 | 11 | 6 | 2,0 % |
| Hot Air Brush and Hair Styling | 282 | 23 | 14 | 11 | **3,9 %** |
| Makeup for Dry Skin | 158 | 9 | 5 | 4 | 2,5 % |

### Top pins (par impressions)

| Impr. | Page de destination |
|---|---|
| 771 | `/guides/dry-body-oil-vs-body-lotion/` |
| 477 | `/comparisons/body-oil-vs-body-lotion/` |
| 372 | `/comparisons/best-hot-air-brush-2026/` |
| 117 | `/comparisons/shea-butter-vs-body-oil/` |
| 97 | `/guides/body-oil-before-or-after-lotion/` |

### Lecture

1. **Le pic du 09/11 vient d'un seul pin body** (771 impressions), pas d'une croissance du
   compte. Ne pas en tirer de conclusion : un pin qui décolle une fois n'est pas une tendance.
2. **Les cheveux convertissent 65 fois mieux** que le body care (3,9 % contre 0,06 %), avec
   6 fois moins d'impressions. Décision : passer à **2 pins cheveux / 1 pin corps**.
3. **Le body care est un piège à impressions** : 70 % du volume, 1 clic sortant sur 22. Ce
   n'est pas un problème d'image mais de promesse.
4. **1 seul enregistrement sur le mois.** C'est le point faible le plus coûteux : sans
   enregistrement, un pin ne circule pas. Piste : formats « liste / erreurs à éviter ».
5. **Recoupement** : 22 clics sortants ≈ les 20–40 visites humaines vues dans Cloudflare au
   relevé n°1. Les deux sources concordent — le trafic Pinterest est réel mais ~0,7 visiteur/jour.

### Objectif chiffré qui suit

Pour atteindre 100 clics Amazon/mois, il faut multiplier les clics sortants par ~4,5.
Le levier n'est pas le site (vitesse 100 % verte) mais le **nombre de pins cheveux** et leur
capacité à être enregistrés.

---

## Relevé n°3 — Pinterest Analytics — 15/11/2026

**Période :** 14/10/2026 → 13/11/2026 (31 jours) · export `Pinterest Analytics overview 20261014-20261113.csv`
**Filtres :** tous contenus, tous appareils, toutes sources · bots non exclus par Pinterest

### Raccord avec le relevé n°2 (contrôle obligatoire)

| Étape | Impressions |
|---|---|
| Relevé n°2 (12/10 → 11/11) | 2 466 |
| \+ 12/11 | + 323 |
| \+ 13/11 | + 238 |
| − réajustement Pinterest du 11/11 (307 → 263) | − 44 |
| **= relevé n°3 (14/10 → 13/11)** | **2 983** ✅ |

L'écart est de **−44 exactement**, soit la seule ligne réajustée par Pinterest. Les deux exports
sont donc cohérents : aucune donnée n'a été perdue ni dupliquée. Point important : ces **deux jours
supplémentaires ont produit 7 clics sur le pin et 0 clic sortant**.

### Volumes

| Indicateur | Valeur | Taux |
|---|---|---|
| Impressions | **2 983** | ~96/jour |
| Clics sur le pin (ouverture de la fiche) | 52 | 1,74 % |
| **Clics sortants (vers le site)** | **22** | **0,74 %** |
| Engagements | 69 | 2,31 % |
| Enregistrements | **1** | 0,03 % |

### La courbe change de nature le 09/11

| Période | Jours | Impressions | Moyenne/jour |
|---|---|---|---|
| 17/10 → 08/11 | 23 | 1 045 | **45** |
| 09/11 → 13/11 | 5 | 1 938 | **388** |
| dont le seul 09/11 | 1 | 820 | 27,5 % du mois |

Le 09/11 représente **27,5 % du mois à lui seul**, et les 5 derniers jours **65 %**. Ce n'est pas
une croissance progressive : c'est un palier franchi d'un coup, puis un plateau (294 · 263 · 323 · 238).

### Par tableau

| Tableau | Impr. | Part | Clics pin | Taux pin | **Sortants** | **Taux sortant** | IC 95 % | Pour 1 000 impr. |
|---|---|---|---|---|---|---|---|---|
| Body Care & Dry Skin | 2 186 | 73,3 % | 20 | 0,91 % | **1** | **0,05 %** | 0,01 – 0,26 % | 0,5 |
| Hot Air Brush & Hair Styling | 304 | 10,2 % | 16 | 5,26 % | **11** | **3,62 %** | 2,03 – 6,36 % | **36,2** |
| Skincare Routine for Beginners | 322 | 10,8 % | 11 | 3,42 % | **6** | **1,86 %** | 0,86 – 4,01 % | 18,6 |
| Makeup for Dry Skin | 171 | 5,7 % | 5 | 2,92 % | **4** | **2,34 %** | 0,91 – 5,86 % | 23,4 |

**Les intervalles de confiance ne se recoupent pas** entre le body (max 0,26 %) et les cheveux
(min 2,03 %). L'écart n'est donc pas un artefact d'échantillon : même avec 304 impressions
seulement, on peut affirmer que le tableau cheveux convertit au moins 8 fois mieux que le body.

### Le point de rupture est entre « clic pin » et « clic sortant »

| Tableau | Clics pin → sortants |
|---|---|
| Makeup | **80 %** |
| Hair | **69 %** |
| Skincare | 55 % |
| Body Care | **5 %** |

Sur le body, les gens **ouvrent** le pin et **ne vont pas** sur le site. Ce n'est pas un problème
d'image (20 clics sur le pin) ni de page (le site répond), c'est un problème de **promesse** :
la description dit déjà tout, il n'y a plus de raison de cliquer.

### Par type de destination (impressions seulement)

| Destination | Impr. | Part |
|---|---|---|
| Guides | 1 402 | 47 % |
| Comparaisons | 943 | 32 % |
| Fiches produit | 600 | 20 % |

> ⚠️ **Limite de l'export :** Pinterest ne fournit les clics sortants qu'**au niveau du tableau**,
> jamais au niveau du pin. On ne peut donc pas prouver ici si ce sont les guides ou les
> comparaisons qui convertissent. C'est le premier angle mort à combler (§ méthode ci-dessous).

### Top 12 pins (81 % des impressions)

| Impr. | Pin | Tableau | Destination |
|---|---|---|---|
| 1 054 | Dry Body Oil vs Body Lotion | body | `/guides/dry-body-oil-vs-body-lotion/` |
| 563 | Body Oil vs Body Lotion | body | `/comparisons/body-oil-vs-body-lotion/` |
| 147 | Shea Butter vs Body Oil | body | `/comparisons/shea-butter-vs-body-oil/` |
| 120 | *(sans titre)* | body | `/guides/body-oil-before-or-after-lotion/` |
| 84 | CeraVe Moisturizing Cream **Review** | skincare | `/product/ceramide-moisturizing-cream/` |
| 73 | Maybelline Fit Me Shine-Free Stick | makeup | `/product/fit-me-shine-free-balance-stick/` |
| 66 | *(sans titre)* | hair | `/comparisons/best-hot-air-brush-2026/` |
| 66 | Raw Shea Butter 16 oz | body | `/product/raw-shea-butter-16oz/` |
| 63 | Neutrogena Micellar Wipes | skincare | `/product/micellar-makeup-remover-wipes/` |
| 59 | *(sans titre)* | hair | `/comparisons/best-hot-air-brush-2026/` |
| 59 | TruSkin Vitamin C Duo **Review** | skincare | `/product/truskin-vitamin-c-duo/` |
| 57 | Body Glow Oil | body | `/guides/body-glow-oil/` |

**Concentration :** le premier pin fait 35 % du mois, les deux premiers 54 %, les cinq premiers 66 %.

### Défauts de données constatés (à corriger, ils coûtent)

| Défaut | Pins | Impressions | Effet |
|---|---|---|---|
| **Aucun UTM** sur le lien | 13 | 860 (29 %) | impossible d'attribuer ces visites dans Cloudflare |
| **Aucun titre** sur le pin | 5 | 293 (10 %) | Pinterest affiche le titre de la page à la place ; perte de pertinence |
| Titre contenant **« Review »** | 6 | 324 (11 %) | contredit la position du site (« What the Specs Say », aucun test) |
| **Collision d'UTM** : deux pins différents en `P06` | 2 | 75 | attribution ambiguë |
| Lignes dupliquées dans l'export | 3 | — | somme des pins (2 945) ≠ total (2 983) ; 38 impr. hors top 33 |
| Top pins tronqué | — | — | les listes sont plafonnées (33 lignes, 6 mois) |

### Lecture

1. **Le body care est un puits d'impressions, pas un moteur de trafic.** 73 % du volume, 1 clic
   sortant sur 22. Pour produire 22 clics au taux du body il faudrait **48 100 impressions** ;
   au taux des cheveux, **608** suffisent. Écart d'efficacité : ×72.
2. **La contrepartie chiffrée :** si les 2 186 impressions body avaient converti au taux médian
   des trois autres tableaux (2,34 %), elles auraient produit **51 clics sortants** au lieu de 1.
   C'est la mesure exacte de ce que coûte le mauvais ciblage, et non un ressenti.
3. **Le plafond n'est pas le site.** 42 % des gens qui ouvrent un pin vont jusqu'à la page
   (22 clics sortants pour 52 ouvertures de pin) : la chaîne pin → page → site fonctionne.
   Le problème est le **volume** et la **répartition**, pas la qualité des pages.
4. **Presque aucun enregistrement : 1 sur 2 983.** L'objectif fixé le 26/10 (« 3 à 5 saves pour
   100 impressions ») est manqué d'un facteur 100. Sans save, un pin ne circule pas : c'est la
   raison mécanique pour laquelle les impressions par pin restent basses (~34/pin sur les cheveux).
5. **Les jours à 0 impression (20, 21, 22/10) suivent l'arrêt de publication.** La règle « 1 pin
   par jour minimum » est validée par les chiffres, pas par principe.
6. **Le pic du 09/11 ne se reproduit pas** et n'a pas été accompagné de clics : 820 impressions,
   0 clic sortant supplémentaire sur les 2 jours de queue. Ne rien bâtir dessus.
7. **Aucune preuve que le tunnel Amazon soit cassé.** 39 clics Amazon pour 0 vente : à 3 % de
   conversion, la probabilité d'observer 0 vente sur 39 clics est de **30 %**. C'est du bruit
   statistique, pas un signal. La conclusion est « pas encore assez de volume », pas « ça ne marche pas ».
8. **Le tableau Makeup est le meilleur du compte (80 % de clic pin → sortant)** et il ne compte que
   3 pins. Il est sous-alimenté par rapport à sa performance.

### Décisions issues de ce relevé

| # | Décision | Motif |
|---|---|---|
| D1 | **Body care plafonné à 1 pin/semaine** (au lieu de 1 sur 3) | 0,05 % de conversion ; le stock de pins body déjà en ligne continue de tourner sans nous |
| D2 | **Cheveux à 3-4 pins/semaine** | 3,62 %, le seul tableau au-dessus du seuil de lecture |
| D3 | **Skincare 2/semaine, Makeup 1/semaine** | 1,86 % et 2,34 %, et deux pages jamais pinnées |
| D4 | **Ne plus produire de pin vers `/guides/dry-body-oil-vs-body-lotion/`** | déjà 1 054 impressions ; un second pin concurrence le premier |
| D5 | **Titres à corriger** sur les 5 pins sans titre, puis les 6 « Review » | 10 % et 11 % des impressions ; aucune URL touchée |
| D6 | **Ne pas corriger les UTM a posteriori** | cela obligerait à changer l'URL, interdit |

### Méthode ajoutée (comble l'angle mort)

L'export ne dit pas quel pin produit les clics sortants. Une fois par mois, relever à la main les
**clics sortants des 10 premiers pins** dans Pinterest (Analytics → vue par pin) et les inscrire
ici. Sans cela, on continuera à optimiser à l'aveugle sur le type de destination.

---

## Ce qu'on attend au relevé n°4 (prévu le 10/12/2026)

| À vérifier | Seuil de lecture |
|---|---|
| Page views humaines | en hausse par rapport aux 20–40 estimées |
| Référent Pinterest | doit apparaître (sinon revoir les liens/UTM) |
| Part du mobile | doit monter nettement (signature du trafic Pinterest) |
| Pages vues | doivent passer des catégories aux guides/comparaisons |
| LCP P75 | doit rester < 2 500 ms |

### Cibles Pinterest du relevé n°4 (10/12), calculées sur le relevé n°3

| Indicateur | Relevé n°3 | Cible n°4 | Méthode de calcul |
|---|---|---|---|
| Clics sortants | 22 | **30** (plancher) · 40 (stretch) | 14 pins cheveux × 34 impr. × 3,62 % ≈ 17, + makeup ≈ 7, + skincare ≈ 8 |
| Taux sortant | 0,74 % | **≥ 1,10 %** | effet mécanique du changement de répartition |
| Enregistrements | 1 | **10** | format « liste / erreur à éviter » sur les pins cheveux |
| Impressions | 2 983 | **≥ 2 500** en baisse assumée | on arrête d'alimenter le body : le volume peut reculer, pas l'efficacité |
| Pins sans titre | 5 | **0** | correction des titres, une par jour |
| Pins avec « Review » | 6 | **0** | alignement sur « What the Specs Say » |

> **Ce qu'on ne fera pas :** viser 100 clics Amazon/mois au prochain relevé. Au taux actuel, cela
> demanderait ~10 000 impressions mensuelles, soit ×3,4 sur le volume. C'est un objectif à 3-4 mois,
> pas à 1 mois. L'annoncer maintenant serait se mentir.

Le relevé n°4 se fait le **10/12/2026**, pas avant.

---

## Rappels

- Ne pas consulter ces statistiques tous les jours : une fois par point de contrôle suffit.
- Ne pas naviguer sur son propre site pour « vérifier » : cela gonfle les vues directes
  et rend les relevés inexploitables. Ouvrir une page, contrôler, fermer.
- Cloudflare ne voit jamais les clics sur les boutons Amazon : seul Amazon Associates
  les compte.
