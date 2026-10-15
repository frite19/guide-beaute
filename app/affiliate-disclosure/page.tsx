export const metadata = { title: "Affiliate Disclosure", description: "How Éclatia earns money with transparent affiliate links. FTC & Amazon Associates compliant." };

export default function Page() {
  return (
    <div className="prose" style={{ padding: "26px 0" }}>
      <h1>Affiliate disclosure</h1>
      <p><strong>In short:</strong> some links on Éclatia (buttons like “View deal”, “Check price”, “Discover the product”) are affiliate links. If you click and buy from the retailer, we may earn a commission <strong>at no extra cost to you</strong>.</p>
      <p><strong>As an Amazon Associate we earn from qualifying purchases.</strong></p>
      <h2>How to spot them</h2>
      <ul>
        <li>Technical <code>rel=&quot;sponsored nofollow&quot;</code> attributes on every affiliate outbound link.</li>
        <li>A note under every button: “Price and stock checked at [Retailer] when you click.”</li>
        <li>A transparency banner at the top of the site and a disclosure box on every review.</li>
      </ul>
      <h2>What we never do</h2>
      <ul>
        <li>We never invent reviews, tests, prices or discounts.</li>
        <li>We never claim to know your sales or commissions: only affiliate networks measure those.</li>
        <li>We never rank by commission, only by fit for your needs.</li>
      </ul>
      <h2>Partner programs</h2>
      <p>We may earn commissions through programs such as Amazon Associates (US), Awin or CJ Affiliate. When you shop in another country, you are redirected to your local store when possible.</p>
      <h2>US visitors (FTC)</h2>
      <p>This disclosure follows the FTC&apos;s Endorsement Guides: our financial relationship with retailers is stated clearly, right where affiliate links appear — not hidden in a separate page. Compensation never affects our ratings or rankings.</p>
    </div>
  );
}
