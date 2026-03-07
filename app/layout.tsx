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
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
            <div className="flex items-center gap-5">
              <a href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
                <img
                  src="/logo.png"
                  alt="Axis Strategies logo"
                  className="h-32 w-auto shrink-0"
                />
                <div className="hidden min-w-0 sm:flex flex-col justify-center leading-tight">
                  <div className="truncate text-2xl font-semibold text-blue-950 lg:text-3xl">
                    Axis Strategies
                  </div>
                  <div className="mt-1 text-xs tracking-[0.15em] text-slate-500 lg:text-sm">
                    Where Pharmacy Strategy Meets Performance
                  </div>
                </div>
              </a>
            </div>

            <nav className="hidden flex-1 justify-center md:flex">
              <div className="flex items-center gap-10 text-sm font-medium">
                <a href="/#services" className="whitespace-nowrap text-slate-700 hover:text-blue-900 transition">
                  Services
                </a>
                <a href="/#services" className="whitespace-nowrap text-slate-700 hover:text-blue-900 transition">
                  About
                </a>
                <a href="/#services" className="whitespace-nowrap text-slate-700 hover:text-blue-900 transition">
                  Strategic Insights
                </a>
                <a href="/#services" className="whitespace-nowrap text-slate-700 hover:text-blue-900 transition">
                  Leadership
                </a>
                <a href="/#services" className="whitespace-nowrap text-slate-700 hover:text-blue-900 transition">
                  Executive Assessment
                </a>
                <a href="/#services" className="whitespace-nowrap text-slate-700 hover:text-blue-900 transition">
                  Contact
                </a>
              </div>
            </nav>

            <a
              href="/#contact"
              className="hidden shrink-0 rounded-2xl bg-blue-900 px-4 py-2 text-sm font-semibold text-white md:inline-block"
            >
              Start a Conversation
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
