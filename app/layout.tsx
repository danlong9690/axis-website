import "./globals.css";
import type { ReactNode } from "react";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Axis Strategies | Pharmacy, 340B, Infusion & Healthcare Strategy Consulting",
  description:
    "Axis Strategies provides executive pharmacy leadership, 340B optimization, infusion strategy, and revenue growth consulting for healthcare organizations and FQHC systems.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">

        <SiteHeader />

        {children}

      </body>
    </html>
  );
}