"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Header() {
  const router = useRouter();
  const [q, setQ] = useState("");
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <span className="logo-mark" aria-hidden="true">é</span>
          <span>
            <span className="logo-name">Éclatia</span>
            <span className="logo-tag">The independent beauty guide</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/#categories">Categories</Link>
          <Link href="/comparisons">Comparisons</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/about">About</Link>
        </nav>
        <form
          className="search-inline"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/search?q=${encodeURIComponent(q)}`);
          }}
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a product…"
            aria-label="Search a product"
          />
          <button className="btn btn-ghost btn-small" type="submit">OK</button>
        </form>
      </div>
    </header>
  );
}
