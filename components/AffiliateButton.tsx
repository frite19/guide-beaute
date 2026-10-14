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
}: {
  url: string;
  productSlug: string;
  category: string;
  merchant: string;
  label?: string;
  variant?: "affiliate" | "primary" | "ghost";
  small?: boolean;
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
      {label} <span aria-hidden>→</span>
    </a>
  );
}
