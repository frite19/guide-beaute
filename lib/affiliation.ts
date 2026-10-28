"use client";

import { useCallback } from "react";

export function trackAffiliateClick(args: {
  productSlug: string;
  category: string;
  merchant: string;
  sourcePage: string;
}) {
  try {
    // 1) Local privacy-friendly counter (no personal data)
    const key = "eclatia_clicks_v1";
    const raw = localStorage.getItem(key);
    const arr = raw ? JSON.parse(raw) : [];
    arr.push({ ...args, at: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(arr.slice(-500)));
  } catch {}
  // Note: pas d'envoi serveur. Le site est un export statique (aucune route /api) :
  // un sendBeacon vers /api/clicks renvoyait 404 à chaque clic.
  // Les clics réels se lisent dans Amazon Associates (Reports > Clicks)
  // et le trafic dans Cloudflare Web Analytics.
}

export function useAffiliateClick(meta: {
  productSlug: string;
  category: string;
  merchant: string;
}) {
  return useCallback(() => {
    trackAffiliateClick({
      ...meta,
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "unknown",
    });
  }, [meta.productSlug, meta.category, meta.merchant]);
}

export function affiliateLinkProps(url: string) {
  // Best practice: sponsored + nofollow + secure opening
  return {
    href: url,
    target: "_blank" as const,
    rel: "sponsored nofollow noopener",
  };
}
