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
  try {
    // 2) Anonymous beacon to the API (no IP stored, see route.ts)
    const blob = new Blob([JSON.stringify(args)], { type: "application/json" });
    navigator.sendBeacon("/api/clicks", blob);
  } catch {}
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
