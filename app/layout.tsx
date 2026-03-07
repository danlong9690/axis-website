import "./globals.css";
import type { ReactNode } from "react";

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
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* LOGO + TAGLINE */}
    <div className="flex flex-col items-center pt-3 pb-1">

      <a href="/" className="flex justify-center">
        <img
          src="/logo.png"
          alt="Axis Strategies logo"
          className="h-56 w-auto"
        />
      </a>

      <div className="mt-0 text-lg tracking-[0.12em] text-slate-600 text-center">
        Where pharmacy strategy meets performance
      </div>

    </div>


    {/* NAVIGATION */}
    <div className="flex items-center justify-between pb-3">

      <nav className="flex flex-1 justify-center">

        <div className="flex items-center gap-10 text-base font-medium">

          <a href="/#services" className="hover:text-blue-900 transition">
            Services
          </a>

          <a href="/#about" className="hover:text-blue-900 transition">
            About
          </a>

          <a href="/#insights" className="hover:text-blue-900 transition">
            Strategic Insights
          </a>

          <a href="/#leadership" className="hover:text-blue-900 transition">
            Leadership
          </a>

          <a href="/#assessment" className="hover:text-blue-900 transition">
            Executive Assessment
          </a>

          <a href="/#contact" className="hover:text-blue-900 transition">
            Contact
          </a>

        </div>

      </nav>

      <a
        href="/#contact"
        className="ml-6 rounded-2xl bg-blue-900 px-5 py-2 text-base font-semibold text-white hover:bg-blue-800"
      >
        Start a Conversation
      </a>

    </div>

  </div>

</header>

        {children}
      </body>
    </html>
  );
}
