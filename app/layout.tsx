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
    <div className="flex flex-col items-center pt-6 pb-4">

      <a href="/" className="flex justify-center">
        <img
          src="/logo.png"
          alt="Axis Strategies logo"
          className="h-44 w-auto"
        />
      </a>

      <div className="mt-3 text-sm tracking-[0.18em] text-slate-500 text-center">
        Where pharmacy strategy meets performance
      </div>

    </div>


    {/* NAVIGATION */}
    <div className="flex items-center justify-between pb-4">

      <nav className="flex flex-1 justify-center">

        <div className="flex items-center gap-8 text-sm font-medium">

          <a href="/#services" className="hover:text-blue-900">
            Services
          </a>

          <a href="/#about" className="hover:text-blue-900">
            About
          </a>

          <a href="/#insights" className="hover:text-blue-900">
            Strategic Insights
          </a>

          <a href="/#leadership" className="hover:text-blue-900">
            Leadership
          </a>

          <a href="/#assessment" className="hover:text-blue-900">
            Executive Assessment
          </a>

          <a href="/#contact" className="hover:text-blue-900">
            Contact
          </a>

        </div>

      </nav>

      <a
        href="/#contact"
        className="ml-6 rounded-2xl bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
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
