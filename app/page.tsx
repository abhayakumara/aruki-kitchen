"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { Leaf, Coffee, Heart, Star, ChevronRight } from "lucide-react";
import { menuItems } from "@/data/menu";
import { site } from "@/data/site";

const featured = menuItems.filter((m) => m.popular).slice(0, 4);

const pillars = [
  {
    icon: Leaf,
    title: "100% Pure Vegetarian",
    body: "Every item on our menu is entirely vegetarian — made with the freshest ingredients sourced daily.",
  },
  {
    icon: Coffee,
    title: "Famous Filter Coffee",
    body: "Our filter coffee is brewed the traditional South Indian way — strong decoction, fresh milk, and perfectly frothed.",
  },
  {
    icon: Heart,
    title: "Women-Owned & Welcoming",
    body: "Founded and run by women, Aruki Kitchen is a place of warmth — family-friendly, casual, and always full of heart.",
  },
];

const testimonials = [
  {
    name: "Priya S.",
    rating: 5,
    text: "The ghee masala dosa here is absolutely incredible — crispy, golden and the filling is perfectly spiced. Best dosa in Mahadevapura!",
  },
  {
    name: "Rahul M.",
    rating: 5,
    text: "Come here every morning for the filter coffee and thatte idly. Prices are unbeatable and the quality is consistently great.",
  },
  {
    name: "Aisha K.",
    rating: 5,
    text: "Aruki Kitchen is our family's weekend breakfast spot. The bisi bele bhath is soul food — warm, hearty and so comforting.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1630383249896-424e482df921?w=1800&q=85"
            alt="Aruki Kitchen — Premium South Indian Thindi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/75" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm tracking-[0.3em] uppercase font-medium mb-4"
            style={{ color: "#D4A853" }}
          >
            {site.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            South India on
            <br />
            <span style={{ color: "#D4A853" }}>Every Plate</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Crispy dosas, fluffy idlys, hearty bhaths and legendary filter coffee — served fresh
            all day at Brigade Metropolis, Bengaluru.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/menu" className="btn-primary text-base px-8 py-3">
              View Our Menu
            </Link>
            <Link href="/contact" className="btn-outline text-base px-8 py-3">
              Find Us
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10"
            style={{ background: "rgba(255,255,255,0.4)" }}
          />
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ── Pure Veg badge strip ── */}
      <section className="py-4 px-6 text-center text-sm font-medium tracking-wide" style={{ background: "#3B1F0E", color: "#D4A853" }}>
        🌿 100% Pure Vegetarian &nbsp;·&nbsp; Women-Owned &nbsp;·&nbsp; Mahadevapura, Bengaluru &nbsp;·&nbsp; Open Daily from 7:30 am
      </section>

      {/* ── Featured Dishes ── */}
      <section className="py-24 px-6" style={{ background: "#FDF6EC" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
              style={{ color: "#C4622D" }}
            >
              Our Specialities
            </p>
            <h2 className="section-heading">Dishes Worth Coming Back For</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((dish, i) => (
              <AnimatedSection key={dish.id} delay={i * 0.1}>
                <div className="group rounded-2xl overflow-hidden bg-white shadow-md card-hover">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span
                      className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded"
                      style={{ background: "#C4622D", color: "white" }}
                    >
                      Popular
                    </span>
                  </div>
                  <div className="p-4">
                    <h3
                      className="font-semibold text-lg mb-1"
                      style={{
                        color: "#3B1F0E",
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      {dish.name}
                    </h3>
                    <p
                      className="text-sm line-clamp-2 mb-3"
                      style={{ color: "rgba(59,31,14,0.6)" }}
                    >
                      {dish.description}
                    </p>
                    <p className="font-bold text-lg" style={{ color: "#C4622D" }}>
                      {dish.price}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
              style={{ color: "#C4622D" }}
            >
              See full menu <ChevronRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Aruki ── */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #3B1F0E 0%, #5C3317 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
              style={{ color: "#D4A853" }}
            >
              Why Choose Us
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The Aruki Difference
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.15}>
                <div className="text-center group">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300"
                    style={{ background: "rgba(196,98,45,0.2)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "#C4622D";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(196,98,45,0.2)";
                    }}
                  >
                    <p.icon size={28} style={{ color: "#D4A853" }} />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="leading-relaxed text-sm" style={{ color: "rgba(253,246,236,0.6)" }}>
                    {p.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 px-6" style={{ background: "#F5E8D3" }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
              style={{ color: "#C4622D" }}
            >
              What Our Guests Say
            </p>
            <h2 className="section-heading">Happy Plates, Happy Hearts</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm card-hover">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} style={{ color: "#D4A853", fill: "#D4A853" }} />
                    ))}
                  </div>
                  <p
                    className="leading-relaxed text-sm mb-5 italic"
                    style={{ color: "rgba(59,31,14,0.7)" }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="font-semibold text-sm" style={{ color: "#3B1F0E" }}>
                    — {t.name}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=80"
            alt="Filter coffee at Aruki Kitchen"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(59,31,14,0.88)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <AnimatedSection>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Come Hungry.
              <br />
              Leave Happy.
            </h2>
            <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
              Open weekdays 7:30 am – 8 pm · Weekends 7:30 am – 1 pm
              <br />
              Dine-in, takeaway and outdoor seating available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={site.phoneHref}
                className="font-bold px-8 py-3 rounded transition-colors"
                style={{ background: "white", color: "#3B1F0E" }}
              >
                Call {site.phoneDisplay}
              </a>
              <Link href="/menu" className="btn-outline text-base px-8 py-3">
                Browse Menu
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
