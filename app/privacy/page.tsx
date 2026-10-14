export const metadata = { title: "Privacy Policy", description: "Minimal data, no data sales, anonymous statistics." };

export default function Page() {
  return (
    <div className="prose" style={{ padding: "26px 0" }}>
      <h1>Privacy policy</h1>
      <p>Last updated: October 13, 2026.</p>
      <h2>Data we collect</h2>
      <ul>
        <li><strong>Anonymous affiliate clicks:</strong> product, category, source page, timestamp. No IP or identifiers stored by us.</li>
        <li><strong>Contact form:</strong> name, email, message — used only to reply.</li>
      </ul>
      <h2>What we never do</h2>
      <p>No data sales, no ad profiling, no first-party tracking cookies. Partner retailers apply their own policies after the click.</p>
      <h2>Your rights</h2>
      <p>Access, correction, deletion: write to hello@eclatia-guide.com. To erase local stats: the “Reset” button on the /admin page (this browser).</p>
      <h2>US privacy notes (California / CCPA)</h2>
      <p>We do not sell or share personal information. The anonymous click counters above contain no personal data and cannot be linked back to you.</p>
    </div>
  );
}
