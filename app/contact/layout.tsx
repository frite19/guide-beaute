import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Éclatia",
  description: "Report an error on a review, suggest a product or ask a question before buying.",
  alternates: { canonical: "/contact/" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
