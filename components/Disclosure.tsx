import Link from "next/link";

export function Disclosure() {
  return (
    <p className="disclosure">
      <strong>Transparency:</strong> some links to retailers are affiliate links.
      If you buy after clicking, Éclatia may earn a commission at no extra cost to you.
      As an Amazon Associate we earn from qualifying purchases.
      This funds our independent comparisons. <Link href="/affiliate-disclosure">Our method</Link>
    </p>
  );
}
