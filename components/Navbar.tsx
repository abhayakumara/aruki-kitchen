"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[#FDF6EC] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className={`text-2xl font-bold tracking-tight transition-colors ${
              scrolled || !isHome ? "text-[#3B1F0E]" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Aruki
          </span>
          <span
            className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
              scrolled || !isHome ? "text-[#C4622D]" : "text-[#D4A853]"
            }`}
          >
            Kitchen
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`nav-link text-sm tracking-wide ${
                  scrolled || !isHome ? "text-[#3B1F0E]" : "text-white"
                } ${pathname === l.href ? "font-semibold" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className={`hidden md:inline-block text-sm font-semibold px-5 py-2 rounded transition-all duration-200 ${
            scrolled || !isHome
              ? "bg-[#C4622D] text-white hover:bg-[#A04E20]"
              : "bg-white/20 text-white border border-white/40 hover:bg-white hover:text-[#3B1F0E]"
          }`}
        >
          Find Us
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden ${scrolled || !isHome ? "text-[#3B1F0E]" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#FDF6EC] border-t border-[#F5E8D3] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[#3B1F0E] font-medium py-2 border-b border-[#F5E8D3] ${
                pathname === l.href ? "text-[#C4622D]" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Find Us
          </Link>
        </div>
      )}
    </nav>
  );
}
