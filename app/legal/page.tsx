export const metadata = { title: "Legal Notice", description: "Publisher, hosting, intellectual property." };

export default function Page() {
  return (
    <div className="prose" style={{ padding: "26px 0" }}>
      <h1>Legal notice</h1>
      <h2>Publisher</h2>
      <p>Éclatia — independent beauty media. Email: limitlessmind19@gmail.com.</p>
      <h2>Hosting</h2>
      <p>[Complete: hosting provider, address.] Site built with Next.js, deployable on Vercel / Netlify / VPS.</p>
      <h2>Intellectual property</h2>
      <p>Texts and design: Éclatia. Photos: Unsplash (illustrations) — check licenses before heavy commercial use; replace with official brand product photos where authorized.</p>
      <h2>Affiliation</h2>
      <p>Éclatia is not the seller of the featured products. Purchases happen at the partner retailer. See our <a href="/affiliate-disclosure">affiliate disclosure</a>. As an Amazon Associate we earn from qualifying purchases.</p>
    </div>
  );
}
