# Éclatia — Independent Beauty Guide (affiliate site, EN / US market)

Next.js 14 + React 18 + TypeScript site, **Beauty & Skincare** niche, **100% English**, aimed at US/UK/AU audiences.
Goal: organic traffic redirected to retailers via transparent affiliate links (FTC + Amazon Associates compliant).

## Start

```bash
cd guide-beaute
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

- `app/` — pages (home, category/[slug], product/[slug], comparisons, guides, search, trust pages, admin, api/clicks, sitemap, robots)
- `components/` — Header, Footer, ProductCard, AffiliateButton, Disclosure (includes the mandatory “As an Amazon Associate we earn from qualifying purchases” line)
- `data/catalog.ts` — **affiliate source of truth** (products, categories, URL, status, update date)
- `data/guides.ts` — comparisons + guides
- `lib/affiliation.ts` — reusable button + anonymous tracking + `rel="sponsored nofollow noopener"`
- `app/api/clicks/route.ts` — anonymous counter (product, category, source page, timestamp — no IP stored)
- `app/admin/` — local dashboard in French (demo code `eclatia2026` or `NEXT_PUBLIC_ADMIN_CODE`), JSON export, link testing

## Still to configure (important)

1. **Partner IDs**: replace `tag=your-id-20` in `data/catalog.ts` with your real links. US/UK/AU: one Amazon Associates account **per country** + **Amazon OneLink** for geo-redirect.
2. **Domain**: the site currently runs on `guide-beaute.pages.dev` (set in `data/catalog.ts`, `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/page.tsx`). When a custom `.com` is bought, replace it everywhere + add it in Cloudflare Pages.
3. **Legal notice**: legal entity, address, hosting provider.
4. **Contact**: connect the form (Resend / Formspree).
5. **Admin**: protect `/admin` in production (real auth, not the demo code).
6. **Images**: replace Unsplash illustrations with authorized product visuals + fill in `imageAlt`.
7. **Prices**: deliberately `null` (no invented prices — also an Amazon Associates rule). Real price checked at the retailer on click.
8. Old French URLs redirect automatically (see `redirects()` in `next.config.js`).

## SEO

Short URLs, H1/H2/H3 hierarchy, per-page metadata, JSON-LD (WebSite + Product + FAQ), sitemap.xml, robots.txt, `alt` images + `loading="lazy"`, systematic internal linking, `en_US` locale.

## Docs (in French, for the site owner)

See `docs/ajouter-produit.md` to add a product in 5 minutes, `docs/maintenance.md` for upkeep, `docs/statistiques.md` for traffic/click stats (Cloudflare Web Analytics, Pinterest, Amazon).
