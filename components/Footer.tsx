import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", margin: "0 0 8px" }}>Éclatia</p>
          <p style={{ fontSize: "0.9rem", color: "#cbb7a6" }}>
            Honest beauty comparisons and guides. We sell nothing: we help you choose, then send you to the partner retailer.
          </p>
          <p className="disclosure" style={{ marginTop: 12 }}>
            Some links are affiliate links: if you buy through them, we may earn a commission at no extra cost to you. As an Amazon Associate we earn from qualifying purchases. <Link href="/affiliate-disclosure">Learn more</Link>
          </p>
        </div>
        <div>
          <p><strong>Explore</strong></p>
          <p><Link href="/#categories">Categories</Link></p>
          <p><Link href="/comparisons">Comparisons</Link></p>
          <p><Link href="/guides">Buying guides</Link></p>
          <p><Link href="/search">Search</Link></p>
        </div>
        <div>
          <p><strong>Trust</strong></p>
          <p><Link href="/about">About</Link></p>
          <p><Link href="/contact">Contact</Link></p>
          <p><Link href="/affiliate-disclosure">Affiliate disclosure</Link></p>
          <p><Link href="/legal">Legal notice</Link></p>
        </div>
        <div>
          <p><strong>Legal</strong></p>
          <p><Link href="/privacy">Privacy</Link></p>
          <p><Link href="/cookies">Cookies</Link></p>
          <p><Link href="/admin">Admin</Link></p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Éclatia — Independent beauty media. Prices and availability checked at the retailer when you click.</div>
    </footer>
  );
}
