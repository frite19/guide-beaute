"use client";
import { useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "@/data/catalog";

interface Click { productSlug: string; category: string; merchant: string; sourcePage: string; at: string; }

const CODE = process.env.NEXT_PUBLIC_ADMIN_CODE || "eclatia2026"; // Démo locale. En prod : définissez NEXT_PUBLIC_ADMIN_CODE + vraie auth serveur.

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [clicks, setClicks] = useState<Click[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("eclatia_clicks_v1");
      if (raw) setClicks(JSON.parse(raw));
    } catch {}
  }, [unlocked]);

  const stats = useMemo(() => {
    const byProduct: Record<string, number> = {};
    const byCat: Record<string, number> = {};
    const byPage: Record<string, number> = {};
    for (const c of clicks) {
      byProduct[c.productSlug] = (byProduct[c.productSlug] ?? 0) + 1;
      byCat[c.category] = (byCat[c.category] ?? 0) + 1;
      byPage[c.sourcePage] = (byPage[c.sourcePage] ?? 0) + 1;
    }
    return { byProduct, byCat, byPage, total: clicks.length };
  }, [clicks]);

  const rows = PRODUCTS.filter((p) => !filter || p.nom.toLowerCase().includes(filter.toLowerCase()));

  if (!unlocked) {
    return (
      <div className="prose" style={{ padding: "30px 0" }}>
        <h1>Administration</h1>
        <p>Interface de gestion des liens d&apos;affiliation. Saisissez le code d&apos;accès (démo : <code>{CODE}</code>). En production, protégez cette page (mot de passe, IP, authentification).</p>
        <form onSubmit={(e) => { e.preventDefault(); if (code === CODE) setUnlocked(true); else alert("Code incorrect"); }} style={{ display: "flex", gap: 8 }}>
          <input className="input" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Code d'accès" type="password" />
          <button className="btn btn-primary" type="submit">Entrer</button>
        </form>
      </div>
    );
  }

  function exportJSON() {
    const blob = new Blob([JSON.stringify(PRODUCTS, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "catalogue-affiliation.json";
    a.click();
  }

  return (
    <div style={{ padding: "24px 0" }}>
      <h1 style={{ fontFamily: "var(--font-display)" }}>Administration — liens d&apos;affiliation</h1>
      <p style={{ color: "var(--muted)" }}>Modifiez une URL ici, elle se propage partout via le composant <code>AffiliateButton</code>. Source de vérité : <code>data/catalog.ts</code>. Exportez puis remplacez le fichier.</p>

      <div className="kpi">
        <div><span>Clics (ce navigateur)</span><strong>{stats.total}</strong></div>
        <div><span>Produit top</span><strong style={{ fontSize: "1rem" }}>{Object.entries(stats.byProduct).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—"}</strong></div>
        <div><span>Catégorie top</span><strong style={{ fontSize: "1rem" }}>{Object.entries(stats.byCat).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—"}</strong></div>
        <div><span>Page source top</span><strong style={{ fontSize: "1rem" }}>{Object.entries(stats.byPage).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—"}</strong></div>
      </div>

      <div className="admin-grid">
        <div className="panel">
          <h3>Tester / filtrer</h3>
          <input className="input" placeholder="Filtrer produits…" value={filter} onChange={(e) => setFilter(e.target.value)} />
          <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
            <button className="btn btn-ghost btn-small" onClick={exportJSON}>Exporter JSON</button>
            <button className="btn btn-ghost btn-small" onClick={() => { localStorage.removeItem("eclatia_clicks_v1"); setClicks([]); }}>Réinitialiser stats locales</button>
          </div>
          <h3 style={{ marginTop: 16 }}>Clics par produit</h3>
          <ul>{Object.entries(stats.byProduct).map(([k, v]) => <li key={k}>{k} — <strong>{v}</strong></li>)}</ul>
          <h3>Clics par catégorie</h3>
          <ul>{Object.entries(stats.byCat).map(([k, v]) => <li key={k}>{k} — <strong>{v}</strong></li>)}</ul>
        </div>
        <div className="panel">
          <h3>Catalogue ({rows.length})</h3>
          <p style={{ fontSize: "0.88rem", color: "var(--muted)" }}>Pour modifier une URL durablement : ouvrez <code>data/catalog.ts</code>, changez <code>urlAffiliation</code>, redéployez. Vérifiez le lien (bouton « Tester » ouvre en nouvel onglet avec rel sponsored nofollow).</p>
          <div style={{ display: "grid", gap: 10 }}>
            {rows.map((p) => (
              <div key={p.slug} style={{ border: "1px solid var(--line)", borderRadius: 12, padding: 12 }}>
                <strong>{p.nom}</strong> <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>· {p.categorie} · {p.marchand} · MAJ {p.majLe} · {p.statut}</span>
                <code style={{ display: "block", fontSize: "0.78rem", margin: "6px 0", wordBreak: "break-all" }}>{p.urlAffiliation}</code>
                <div style={{ display: "flex", gap: 8 }}>
                  <a className="btn btn-ghost btn-small" href={p.urlAffiliation} target="_blank" rel="sponsored nofollow noopener">Tester le lien</a>
                  <a className="btn btn-ghost btn-small" href={`/product/${p.slug}`}>Voir fiche</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
