"use client";

import { affiliateLinkProps, trackAffiliateClick } from "@/lib/affiliation";

/**
 * Ligne "livraison / Prime", placée une seule fois par page, en bas du contenu.
 *
 * Pourquoi : le barème Associates paie 12 $ pour un essai Prime réussi, contre
 * 0,12 $ pour une lotion à 3,99 $ en catégorie Beauty (3 %). C'est le seul
 * endroit du site où un visiteur peut valoir plus d'un dollar.
 *
 * Contraintes respectées :
 * - aucun prix, aucune urgence, aucune promesse : « most items ship free with
 *   Prime » est vrai pour la majorité des références recommandées ;
 * - lien marqué sponsored/nofollow, ouvert dans un nouvel onglet, tag intact ;
 * - l'essai Prime est une offre Amazon, pas une affirmation du site.
 */
export function PrimeNote() {
  const link = affiliateLinkProps("https://www.amazon.com/prime?tag=eclatia20-20");
  return (
    <p className="prime-note">
      Most of these items ship free with Prime.{" "}
      <a
        {...link}
        onClick={() =>
          trackAffiliateClick({
            productSlug: "amazon-prime",
            category: "membership",
            merchant: "Amazon",
            sourcePage: typeof window !== "undefined" ? window.location.pathname : "unknown",
          })
        }
      >
        Amazon offers a 30-day free trial
      </a>{" "}
      <span aria-hidden>↗</span>
    </p>
  );
}
