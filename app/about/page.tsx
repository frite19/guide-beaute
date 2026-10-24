export const metadata = { title: "About Éclatia", description: "Who we are: an independent beauty media that compares without selling.", alternates: { canonical: "/about/" } };

export default function Page() {
  return (
    <div className="prose" style={{ padding: "26px 0" }}>
      <h1>About Éclatia</h1>
      <p><strong>Éclatia</strong> is an independent media dedicated to beauty and skincare. We sell no products: we help you discover, compare and choose, then redirect you to the partner retailer for purchase.</p>
      <h2>Our method</h2>
      <ul>
        <li>Verifiable criteria (composition, manufacturer specs, format, tolerance).</li>
        <li>No invented reviews, tests, prices or discounts.</li>
        <li>Strengths <em>and</em> limits shown on every fact sheet.</li>
        <li>Dated updates on every product and guide.</li>
      </ul>
      <h2>Our business model</h2>
      <p>Some links are affiliate links: if you buy through them, we may earn a commission at no extra cost to you. As an Amazon Associate we earn from qualifying purchases. See our <a href="/affiliate-disclosure">affiliate disclosure</a>.</p>
      <h2>Contact</h2>
      <p>Write to us: <a href="/contact">contact page</a> — limitlessmind19@gmail.com</p>
    </div>
  );
}
