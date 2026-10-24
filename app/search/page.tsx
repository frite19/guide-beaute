import { Suspense } from "react";
import SearchClient from "./SearchClient";

export const metadata = {
  title: "Search",
  description: "Search a product, category, comparison or guide on Éclatia.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/search/" },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<p style={{ color: "var(--muted)" }}>Loading search…</p>}>
      <SearchClient />
    </Suspense>
  );
}
