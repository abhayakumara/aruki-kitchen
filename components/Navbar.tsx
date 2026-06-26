"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(33,10,14,0.82)" : "rgba(33,10,14,0.45)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled
          ? "1px solid rgba(242,216,154,0.16)"
          : "1px solid rgba(242,216,154,0)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className="grid place-items-center w-10 h-10 rounded-full shrink-0 transition-transform duration-300 group-hover:rotate-12"
            style={{
              background: "linear-gradient(180deg,#f2d89a,#e0a82e 60%,#c8901f)",
              color: "#2a1304",
              fontFamily: "var(--font-display), serif",
              fontWeight: 700,
            }}
          >
            अ
          </span>
          <span className="flex flex-col leading-none">
            <span
              className="text-xl font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-display), serif", color: "#f8f1e3" }}
            >
              Aruki Kitchen
            </span>
            <span
              className="font-kn text-[11px] tracking-wide"
              style={{ color: "#e0a82e" }}
            >
              {site.nameKannada} · Pure Veg
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative text-sm font-medium transition-colors duration-200 py-1"
                  style={{ color: active ? "#e0a82e" : "rgba(248,241,227,0.82)" }}
                >
                  {l.label}
                  <span
                    className="absolute left-0 -bottom-0.5 h-px transition-all duration-300"
                    style={{
                      width: active ? "100%" : "0%",
                      background: "#e0a82e",
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a href={site.phoneHref} className="hidden md:inline-flex btn-brass text-sm py-2.5 px-5">
          Call to Order
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ color: "#f8f1e3" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden px-6 py-5 flex flex-col gap-1"
          style={{ background: "rgba(33,10,14,0.97)", borderTop: "1px solid rgba(242,216,154,0.14)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-3 text-base font-medium border-b"
              style={{
                color: pathname === l.href ? "#e0a82e" : "rgba(248,241,227,0.85)",
                borderColor: "rgba(242,216,154,0.1)",
              }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a href={site.phoneHref} className="btn-brass text-center mt-4" onClick={() => setOpen(false)}>
            Call {site.phoneDisplay}
          </a>
        </div>
      )}
    </nav>
  );
}
