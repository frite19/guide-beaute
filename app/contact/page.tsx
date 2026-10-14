"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "", societe: "" });
  return (
    <div className="prose" style={{ padding: "26px 0" }}>
      <h1>Contact</h1>
      <p>Spotted an error on a review? A product to suggest? Write to us. We reply within 2–3 business days.</p>
      {sent ? (
        <div className="panel"><strong>Message saved (demo).</strong><p>In production, connect this form to your email service (Resend, Formspree). Nothing is sent yet.</p></div>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); if (form.societe) return; setSent(true); }}
          style={{ display: "grid", gap: 10, background: "white", border: "1px solid var(--line)", borderRadius: 16, padding: 16 }}
        >
          <input type="text" name="societe" value={form.societe} onChange={(e) => setForm({ ...form, societe: e.target.value })} style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <input className="input" required placeholder="Your name" aria-label="Your name" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} />
          <input className="input" required type="email" placeholder="Your email" aria-label="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input className="input" required placeholder="Subject (e.g. product review error)" value={form.sujet} onChange={(e) => setForm({ ...form, sujet: e.target.value })} />
          <textarea className="textarea" required rows={5} placeholder="Your message…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button className="btn btn-primary" type="submit">Send</button>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>Spam protection active in production (honeypot + rate limiting + invisible CAPTCHA).</p>
        </form>
      )}
      <p>Direct email: hello@eclatia-guide.com</p>
    </div>
  );
}
