import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { SITE } from "@/data/catalog";

export const metadata: Metadata = {
  metadataBase: new URL("https://guide-beaute.pages.dev"),
  title: { default: "Éclatia — Beauty Guide: Honest Comparisons & Reviews", template: "%s — Éclatia" },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Éclatia",
    title: "Éclatia — The Independent Beauty Guide",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "WaUCkPiACNIy95Wnc3HpDliang66BwR1UEjqvrkFVqU",
    other: {
      "p:domain_verify": "74d5b677acf848fe3c5deae9c1106557",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Cloudflare Web Analytics (gratuit, sans cookie, sans Stripe).
  // La valeur est injectée au build par Cloudflare Pages (variable NEXT_PUBLIC_CF_ANALYTICS_TOKEN).
  const cfToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

  return (
    <html lang="en">
      <body>
        <a href="#contenu" style={{ position: "absolute", left: "-9999px" }}>Skip to content</a>
        <div className="top-disclosure">
          Independent media — affiliate links disclosed. As an Amazon Associate we earn from qualifying purchases. <Link href="/affiliate-disclosure">How it works</Link>
        </div>
        <Header />
        <main className="container" id="contenu">{children}</main>
        <Footer />
        {cfToken ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: cfToken })}
          />
        ) : null}
      </body>
    </html>
  );
}
