import "./globals.css";

export const metadata = {
  title: "Axis Strategies | Pharmacy, 340B, Infusion & Healthcare Strategy Consulting",
  description:
    "Axis Strategies provides executive pharmacy leadership, 340B optimization, infusion strategy, and revenue growth consulting for healthcare organizations and FQHC systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <a href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
                <img
                  src="/logo.png"
                  alt="Axis Strategies logo"
                  className="h-24 w-auto shrink-0"
                />
                <div className="hidden min-w-0 sm:flex flex-col justify-center leading-tight">
                  <div className="truncate text-lg font-semibold text-blue-950 lg:text-xl">
                    Axis Strategies
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500 lg:text-xs">
                    Pharmacy • 340B • Infusion • Growth
                  </div>
                </div>
              </a>
            </div>

            <nav className="hidden flex-1 justify-center md:flex">
              <div className="flex w-full max-w-2xl items-center justify-between px-8 text-sm font-medium">
                <a href="/#services" className="whitespace-nowrap hover:text-blue-900">
                  Services
                </a>
                <a href="/#about" className="whitespace-nowrap hover:text-blue-900">
                  About
                </a>
                <a href="/#insights" className="whitespace-nowrap hover:text-blue-900">
                  Strategic Insights
                </a>
                <a href="/#leadership" className="whitespace-nowrap hover:text-blue-900">
                  Leadership
                </a>
                <a href="/#assessment" className="whitespace-nowrap hover:text-blue-900">
                  Executive Assessment
                </a>
                <a href="/#contact" className="whitespace-nowrap hover:text-blue-900">
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
