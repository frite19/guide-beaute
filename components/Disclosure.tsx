import Link from "next/link";

export function Disclosure() {
  return (
    <p className="disclosure">
      <strong>Transparency:</strong> this page contains affiliate links. As an Amazon
      Associate, Éclatia earns from qualifying purchases — at no extra cost to you.{" "}
      <Link href="/affiliate-disclosure">Affiliate disclosure →</Link>
    </p>
  );
}
