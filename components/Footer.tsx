"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { site } from "@/data/site";

// Shared reveal for footer columns — staggered rise as the footer scrolls in.
const col = (i: number) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Footer() {
  return (
    <footer className="relative overflow-hidden grain" style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div
        className="absolute -top-24 right-10 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(110,20,35,0.5), transparent 65%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <motion.div {...col(0)}>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="grid place-items-center w-10 h-10 rounded-full shrink-0"
              style={{ background: "linear-gradient(180deg,#f2d89a,#e0a82e 60%,#c8901f)", color: "#2a1304", fontFamily: "var(--font-display), serif", fontWeight: 700 }}
            >
              अ
            </span>
            <div className="leading-none">
              <h3 className="font-display text-2xl" style={{ color: "var(--cream)" }}>Aruki Kitchen</h3>
              <p className="font-kn text-[11px]" style={{ color: "var(--brass)" }}>{site.nameKannada}</p>
            </div>
          </div>
          <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(242,216,154,0.6)" }}>
            {site.tagline}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(248,241,227,0.6)" }}>{site.blurb}</p>
          <div className="flex gap-3 mt-6">
            {[
              { href: site.instagram, label: "IG" },
              { href: site.facebook, label: "FB" },
              { href: site.zomato, label: "Z" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.12, borderColor: "rgba(224,168,46,0.8)" }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="w-9 h-9 rounded-full grid place-items-center text-xs font-bold"
                style={{ border: "1px solid rgba(242,216,154,0.25)", color: "rgba(248,241,227,0.8)" }}
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div {...col(1)}>
          <h4 className="font-semibold uppercase tracking-widest text-xs mb-5" style={{ color: "var(--brass)" }}>
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/menu", label: "Menu" },
              { href: "/about", label: "About Us" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors hover:text-[#e0a82e]" style={{ color: "rgba(248,241,227,0.65)" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div {...col(2)}>
          <h4 className="font-semibold uppercase tracking-widest text-xs mb-5" style={{ color: "var(--brass)" }}>
            Visit Us
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-sm" style={{ color: "rgba(248,241,227,0.65)" }}>
              <MapPin size={16} style={{ color: "var(--brass)" }} className="mt-0.5 shrink-0" />
              <span>{site.addressShort}</span>
            </li>
            <li className="flex items-center gap-3 text-sm" style={{ color: "rgba(248,241,227,0.65)" }}>
              <Phone size={16} style={{ color: "var(--brass)" }} className="shrink-0" />
              <a href={site.phoneHref} className="hover:text-white transition-colors">{site.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-3 text-sm" style={{ color: "rgba(248,241,227,0.65)" }}>
              <Clock size={16} style={{ color: "var(--brass)" }} className="mt-0.5 shrink-0" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.day} className="block">
                    <span className="font-medium" style={{ color: "rgba(248,241,227,0.85)" }}>{h.day}:</span> {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="relative z-10 border-t py-6 text-center text-xs hairline" style={{ color: "rgba(248,241,227,0.4)" }}>
        © {new Date().getFullYear()} Aruki Kitchen · All rights reserved · 100% Pure Vegetarian
      </div>
    </footer>
  );
}
