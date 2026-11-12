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

## Ce qu'on attend au relevé n°2 (prévu le 10/12/2026)

| À vérifier | Seuil de lecture |
|---|---|
| Page views humaines | en hausse par rapport aux 20–40 estimées |
| Référent Pinterest | doit apparaître (sinon revoir les liens/UTM) |
| Part du mobile | doit monter nettement (signature du trafic Pinterest) |
| Pages vues | doivent passer des catégories aux guides/comparaisons |
| LCP P75 | doit rester < 2 500 ms |

Le point intermédiaire sur **Pinterest Analytics** (impressions, clics sortants) se fait
le **12/11/2026**, pas avant.

---

## Rappels

- Ne pas consulter ces statistiques tous les jours : une fois par point de contrôle suffit.
- Ne pas naviguer sur son propre site pour « vérifier » : cela gonfle les vues directes
  et rend les relevés inexploitables. Ouvrir une page, contrôler, fermer.
- Cloudflare ne voit jamais les clics sur les boutons Amazon : seul Amazon Associates
  les compte.
