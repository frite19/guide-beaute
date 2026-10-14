import Link from "next/link";

export default function NotFound() {
  return (
    <div className="prose" style={{ padding: "40px 0", textAlign: "center" }}>
      <p className="badge" style={{ margin: "0 auto" }}>Error 404</p>
      <h1 style={{ fontFamily: "var(--font-display)" }}>This page doesn&apos;t exist (anymore).</h1>
      <p style={{ color: "var(--muted)" }}>
        The product may have been archived or the link is broken.
        Go back home or run a search — all our retailer links are tested from the admin panel.
      </p>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        <Link className="btn btn-primary" href="/">Back home</Link>
        <Link className="btn btn-ghost" href="/search">Search</Link>
        <Link className="btn btn-ghost" href="/comparisons">Comparisons</Link>
      </div>
    </div>
  );
}
