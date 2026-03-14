"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Who We Serve", href: "/#organizations" },
  { label: "Services", href: "/#services" },
  { label: "Strategic Insights", href: "/#insights" },
  { label: "Leadership", href: "/#leadership" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* LOGO + TAGLINE */}
        <div
          className={`flex flex-col items-center leading-none transition-all duration-300 ${
            scrolled ? "pt-0 pb-0" : "pt-1 pb-0"
          }`}
        >
          <a href="/" className="flex justify-center">
            <img
              src="/logo.png"
              alt="Axis Strategies logo"
              className={`w-auto shrink-0 transition-all duration-300 ${
                scrolled ? "h-24 sm:h-28 lg:h-32" : "h-32 sm:h-44 lg:h-56"
              }`}
            />
          </a>

          <div
            className={`text-center text-slate-600 leading-none transition-all duration-300 ${
              scrolled
                ? "max-h-0 overflow-hidden opacity-0"
                : "mt-[-18px] sm:mt-[-30px] lg:mt-[-50px] px-4 text-sm sm:text-base lg:text-lg tracking-[0.12em] opacity-100"
            }`}
          >
            Where Pharmacy Strategy Meets Performance
          </div>
        </div>

        {/* NAV / ACTIONS ROW */}
        <div
          className={`transition-all duration-300 ${
            scrolled ? "mt-4 pb-2" : "mt-6 pb-3"
          }`}
        >
          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            <nav className="flex flex-1 justify-center">
              <div className="flex items-center gap-10 text-base font-medium">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="hover:text-blue-900 transition"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="ml-6 flex items-center gap-3">
              <a
                href="/#assessment"
                className="rounded-2xl bg-amber-500 px-6 py-2.5 text-base font-semibold text-white hover:bg-amber-600 transition"
              >
                Request Executive Assessment
              </a>

              <a
                href="/#contact"
                className="rounded-2xl bg-blue-900 px-6 py-2.5 text-base font-semibold text-white hover:bg-blue-800 transition"
              >
                Start a Conversation
              </a>
            </div>
          </div>

          {/* Mobile / Tablet */}
          <div className="lg:hidden">
            <div className="flex items-center gap-2">
              {/* Hamburger on left */}
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              {/* Buttons beside hamburger */}
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <a
                  href="/#assessment"
                  className="flex-1 rounded-xl bg-amber-500 px-3 py-3 text-center text-xs font-semibold text-white hover:bg-amber-600 transition sm:text-sm"
                >
                  Request Assessment
                </a>

                <a
                  href="/#contact"
                  className="flex-1 rounded-xl bg-blue-900 px-3 py-3 text-center text-xs font-semibold text-white hover:bg-blue-800 transition sm:text-sm"
                >
                  Start Conversation
                </a>
              </div>
            </div>

            {/* Mobile dropdown only for nav links */}
            {mobileOpen && (
              <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
                <nav className="flex flex-col">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-900"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}