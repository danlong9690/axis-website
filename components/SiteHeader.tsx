"use client";

import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur transition-all duration-300">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* LOGO + TAGLINE */}
        <div className={`flex flex-col items-center leading-none transition-all duration-300 ${scrolled ? "pt-0 pb-0" : "pt-1 pb-0"}`}>

          <a href="/" className="flex justify-center">
            <img
              src="/logo.png"
              alt="Axis Strategies logo"
              className={`w-auto shrink-0 transition-all duration-300 ${scrolled ? "h-32" : "h-56"}`}
            />
          </a>

          <div
  className={`text-center text-slate-600 leading-none transition-all duration-300 ${
    scrolled
      ? "max-h-0 overflow-hidden opacity-0"
      : "mt-[-20px] text-lg tracking-[0.12em] opacity-100"
  }`}
>
            Where Pharmacy Strategy Meets Performance
          </div>

        </div>

        {/* NAVIGATION */}
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "pb-2" : "pb-3"}`}>

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
  );
}