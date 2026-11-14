"use client";
import { affiliateLinkProps, trackAffiliateClick } from "@/lib/affiliation";

export function AffiliateButton({
  url,
  productSlug,
  category,
  merchant,
  label = "View deal",
  variant = "affiliate",
  small = false,
  external = true,
}: {
  url: string;
  productSlug: string;
  category: string;
  merchant: string;
  label?: string;
  variant?: "affiliate" | "primary" | "ghost";
  small?: boolean;
  /** true = le lien quitte le site (Amazon) : on affiche une fleche sortante. */
  external?: boolean;
}) {
  const cls = `btn btn-${variant}${small ? " btn-small" : ""}`;
  const link = affiliateLinkProps(url);
  return (
    <a
      {...link}
      className={cls}
      onClick={() =>
        trackAffiliateClick({
          productSlug,
          category,
          merchant,
          sourcePage: window.location.pathname,
        })
      }
    >
      {label} <span aria-hidden>{external ? "↗" : "→"}</span>
    </a>
  );
}
