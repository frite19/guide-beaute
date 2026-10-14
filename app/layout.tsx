import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { SITE } from "@/data/catalog";

export const metadata: Metadata = {
  metadataBase: new URL("https://eclatia-guide.com"),
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
      </body>
    </html>
  );
}
