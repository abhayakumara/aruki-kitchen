"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import Magnetic from "@/components/Magnetic";

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
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
          <motion.span
            className="grid place-items-center w-10 h-10 rounded-full shrink-0"
            whileHover={{ rotate: 12, scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 320, damping: 15 }}
            style={{
              background: "linear-gradient(180deg,#f2d89a,#e0a82e 60%,#c8901f)",
              color: "#2a1304",
              fontFamily: "var(--font-display), serif",
              fontWeight: 700,
            }}
          >
            अ
          </motion.span>
          <span className="flex flex-col leading-none">
            <span
              className="text-xl font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-display), serif", color: "#f8f1e3" }}
            >
              Aruki Kitchen
            </span>
            <span className="font-kn text-[11px] tracking-wide" style={{ color: "#e0a82e" }}>
              {site.nameKannada} · Pure Veg
            </span>
          </span>
        </Link>

        {/* Desktop links — active pill slides between items via shared layout */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative block px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200"
                  style={{ color: active ? "#e0a82e" : "rgba(248,241,227,0.82)" }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(224,168,46,0.12)", border: "1px solid rgba(224,168,46,0.35)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Magnetic className="hidden md:inline-flex">
          <a href={site.phoneHref} className="btn-brass text-sm py-2.5 px-5">
            Call to Order
          </a>
        </Magnetic>

        {/* Mobile hamburger — icon cross-fades/rotates on toggle */}
        <button
          className="md:hidden relative w-7 h-7 grid place-items-center"
          style={{ color: "#f8f1e3" }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(33,10,14,0.97)", borderTop: "1px solid rgba(242,216,154,0.14)" }}
          >
            <motion.div
              className="px-6 py-5 flex flex-col gap-1"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
            >
              {links.map((l) => (
                <motion.div
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, x: -18 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <Link
                    href={l.href}
                    className="block py-3 text-base font-medium border-b"
                    style={{
                      color: pathname === l.href ? "#e0a82e" : "rgba(248,241,227,0.85)",
                      borderColor: "rgba(242,216,154,0.1)",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={site.phoneHref}
                className="btn-brass text-center mt-4 justify-center"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
              >
                Call {site.phoneDisplay}
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
