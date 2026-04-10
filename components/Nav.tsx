"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Products", href: "#products" },
    { label: "Team", href: "#team" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-200 transition-all duration-150 ${
        scrolled ? "bg-white/95 backdrop-blur-sm" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#">
          <Image src="/Logo.png" alt="Curate" width={120} height={32} className="h-7 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-gray-700 hover:text-ink transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="bg-purple text-white font-semibold text-[14px] px-6 py-2.5 rounded-xl hover:bg-purple-dark transition-colors shadow-[0_4px_8px_rgba(156,126,168,0.4)]"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[16px] font-medium text-gray-700 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="bg-purple text-white font-semibold text-[14px] px-6 py-3.5 rounded-xl text-center hover:bg-purple-dark transition-colors shadow-[0_4px_8px_rgba(156,126,168,0.4)]"
          >
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
}
