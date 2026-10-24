export const metadata = { title: "Cookie Policy", description: "Strictly necessary storage only.", alternates: { canonical: "/cookies/" } };

export default function Page() {
  return (
    <div className="prose" style={{ padding: "26px 0" }}>
      <h1>Cookie policy</h1>
      <p>Éclatia uses only technical local storage (anonymous click counter <code>eclatia_clicks_v1</code>) — no first-party advertising cookies.</p>
      <p>Partner retailers may set their own cookies after the click (affiliate measurement). Please check their respective policies.</p>
    </div>
  );
}
