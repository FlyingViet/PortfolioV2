"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/shop", label: "Shop" },
];

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggleTheme() {
    const next = !isLight;
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
    setIsLight(next);
  }

  const toggleBtnClass =
    "p-2 rounded-lg text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-zinc-900 hover:bg-white/5 light:hover:bg-black/5 transition-all duration-200";

  return (
    <nav className="no-print fixed top-0 left-0 right-0 z-50 border-b border-white/8 light:border-black/8 bg-zinc-950/85 light:bg-white/95 backdrop-blur-lg">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg text-white light:text-zinc-900 tracking-tight hover:text-cyan-400 transition-colors"
        >
          Brian<span className="text-cyan-400">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-zinc-900 hover:bg-white/5 light:hover:bg-black/5"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button onClick={toggleTheme} className={`ml-1 ${toggleBtnClass}`} aria-label="Toggle theme">
            {isLight ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="sm:hidden flex items-center gap-1">
          <button onClick={toggleTheme} className={toggleBtnClass} aria-label="Toggle theme">
            {isLight ? <MoonIcon /> : <SunIcon />}
          </button>

          <button
            className="text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-zinc-900 transition-colors p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-white/8 light:border-black/8 bg-zinc-950 light:bg-white px-4 pb-4 pt-2 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                pathname === link.href
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-zinc-900 hover:bg-white/5 light:hover:bg-black/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
