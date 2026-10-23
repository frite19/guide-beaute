# Statistiques du site — mode d'emploi (Éclatia)

Le site est 100 % statique (Cloudflare Pages). Il n'y a **aucun serveur** qui compte les
visiteurs : les chiffres viennent donc de services externes. Voici les 3 endroits où
trouver les vraies statistiques, du plus utile au moins utile.

---

## 1. Trafic du site — Cloudflare Web Analytics (gratuit, sans cookie)

### Option A — réglage automatique (recommandé, aucune ligne de code)

1. Va sur https://dash.cloudflare.com
2. Menu **Analytics & Logs → Web Analytics**
3. Si le site `guide-beaute.pages.dev` apparaît : clique dessus, puis **Enable**
   (active le mode « Automatic setup »).
4. Ouvre le site dans un navigateur, attends 1 à 2 minutes, puis rafraîchis la page
   Web Analytics : une visite doit apparaître.

> Avec l'option A, **ne définis pas** `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` dans Cloudflare Pages,
> sinon les visites seraient comptées deux fois.

### Option B — jeton injecté par le code (déjà prévu dans `app/layout.tsx`)

Le layout charge `beacon.min.js` **uniquement si** la variable `NEXT_PUBLIC_CF_ANALYTICS_TOKEN`
existe au moment du build.

1. Cloudflare Dashboard → **Web Analytics** → **Add a site** → domaine `guide-beaute.pages.dev`
2. Copie le **token** affiché dans le script d'installation.
3. Cloudflare Pages → projet `guide-beaute` → **Settings → Environment variables** →
   ajoute `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` = ton token (environnement *Production*).
4. **Retrigger un déploiement** (push Git ou *Retry deployment*).

### Ce que tu peux lire

| Métrique | Ce qu'elle veut dire pour toi |
|---|---|
| **Visits** | Nombre de visites (une personne = une visite) |
| **Page views** | Pages vues au total |
| **Top pages** | Quelles fiches produits / guides sont lues |
| **Referrers** | D'où viennent les visiteurs : `pinterest.com` doit dominer |
| **Countries** | Doit être majoritairement **United States** (c'est ta cible Amazon.com) |
| **Core Web Vitals** | Vitesse réelle du site |

⚠️ Cloudflare Web Analytics ne voit **pas** les clics sur les boutons Amazon (ce ne sont pas
des pages de ton site). Pour ça, voir la section 2.

---

## 2. Clics vers Amazon — Pinterest + Amazon Associates

### Pinterest Analytics (où sont tes vrais clics sortants)

1. https://www.pinterest.com/eclatiabeauty/ → **Analytics** (compte Business gratuit)
2. Onglets utiles :
   - **Overview** : impressions, engagements, **outbound clicks**, saves
   - **Top Pins** : quel pin envoie du trafic vers `guide-beaute.pages.dev`
   - **Audience** : pays, centres d'intérêt

C'est la seule source fiable pour savoir si un pin « marche ».

### Amazon Associates (les seuls chiffres qui paient)

1. https://affiliate-program.amazon.com → **Reports**
2. Onglets : *Dashboard* (clics, commandes, revenus), *Earnings* (montant validé)
3. Rappel de ton compte : Store ID `eclatia20-20`, paiement **gift card**,
   seuil **10 $**, versement ~60 jours après la fin du mois, retenue 0 % (W-8BEN validé).

Règle simple : **clics Amazon ≥ 100 / mois** avant d'espérer une première commande.

---

## 3. Compteur local `/admin` — à ne pas confondre avec du trafic

`/admin` (code `eclatia2026`, à changer) lit `localStorage` : il ne compte **que les clics
faits dans TON navigateur**. Il remet à zéro si tu vides le cache. Ce n'est **pas** une
statistique de site, c'est un outil de test des liens.

---

## Routine hebdomadaire (5 minutes, le lundi)

1. Cloudflare Web Analytics → noter **visits** et la page n°1
2. Pinterest Analytics → noter **outbound clicks**
3. Amazon Associates → noter **clicks** et **ordered items**
4. Ajouter 3 à 7 pins dans la semaine (1 pin/jour vers un guide, jamais directement Amazon)
