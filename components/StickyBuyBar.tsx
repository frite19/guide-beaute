"use client";

import { useEffect, useState } from "react";
import { AffiliateButton } from "@/components/AffiliateButton";

/**
 * Barre d'action collante, mobile uniquement.
 *
 * Pourquoi : sur Pinterest, 90 % du trafic est mobile et le visiteur scrolle peu.
 * Le bouton Amazon de la fiche produit est en haut ; sans cette barre, il faut
 * remonter pour l'atteindre.
 *
 * Contraintes respectées :
 * - ce n'est pas un pop-up ni un layer ad : c'est un lien fixe, sans recouvrement de contenu ;
 * - aucun prix affiché, aucun compte à rebours, aucune fausse urgence ;
 * - le lien est le même que celui des autres boutons (tag d'affiliation intact).
 */
export function StickyBuyBar({
  url,
  productSlug,
  category,
  merchant,
  productName,
}: {
  url: string;
  productSlug: string;
  category: string;
  merchant: string;
  productName: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Réserve la hauteur de la barre pour ne jamais masquer la fin de page. */}
      <div className="sticky-buy-spacer" aria-hidden />
      <div className={`sticky-buy${visible ? " is-visible" : ""}`} role="region" aria-label="Product link">
        <span className="sticky-buy-name">{productName}</span>
        <AffiliateButton
          url={url}
          productSlug={productSlug}
          category={category}
          merchant={merchant}
          label="Check price"
          small
        />
      </div>
    </>
  );
}
