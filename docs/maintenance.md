# Maintenance & sauvegarde — Éclatia

## Sauvegarde
- **Code** : dépôt Git (poussez après chaque ajout produit).
- **Catalogue** : `data/catalog.ts` = source de vérité. Export JSON depuis `/admin` avant toute modification lourde.
- **Stats clics** : `data/stats/clics.jsonl` (serveur) + `localStorage eclatia_clicks_v1` (navigateur). Copiez `clics.jsonl` chaque mois.

## Routines mensuelles
1. `npm run build` — doit rester vert.
2. Ouvrir `/admin` → « Tester le lien » pour chaque produit (404 ? référence changée ?).
3. Vérifier les dates `majLe` > 90 jours → relire la fiche.
4. Chercher les URL d'exemple restantes : `tag=your-id-20` ne doit plus exister en prod.

## Commande rapide (PowerShell)
```powershell
Select-String -Path "data\catalog.ts" -Pattern "your-id-20"
Select-String -Path "data\catalog.ts" -Pattern "prixIndicatif: [0-9]" # doit être vide : aucun prix inventé
```

## Incidents
- **Lien invalide** : passez le produit en `statut: "draft"`, corrigez l'URL, redéployez. La page 404 guide vers la recherche.
- **Pic de trafic** : pages 100 % statiques (SSG) — aucun changement requis.
