"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SmartImage from "@/components/SmartImage";
import TiltCard from "@/components/TiltCard";
import { menuItems, categories } from "@/data/menu";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All" ? menuItems : menuItems.filter((m) => m.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden grain" style={{ background: "var(--ink)" }}>
        <div
          className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(224,168,46,0.18), transparent 65%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="eyebrow mb-3">Premium South Indian Thindi</p>
            <h1 className="display-lg font-display mb-4" style={{ color: "var(--cream)" }}>
              The full <span className="ital">menu</span>
            </h1>
            <p className="text-lg" style={{ color: "rgba(248,241,227,0.65)" }}>
              100% pure vegetarian · Dosa · Tiffin · Rice · Snacks · Sweets · Beverages
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category tabs */}
      <section
        className="sticky top-[68px] z-30 py-4 px-6 border-b hairline"
        style={{ background: "rgba(33,10,14,0.92)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shrink-0"
                style={
                  active
                    ? { background: "linear-gradient(180deg,#f2d89a,#e0a82e)", color: "#2a1304" }
                    : { background: "rgba(248,241,227,0.07)", color: "rgba(248,241,227,0.75)", border: "1px solid rgba(242,216,154,0.16)" }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6" style={{ background: "var(--palm)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              style={{ perspective: 1200 }}
            >
              {filtered.map((dish) => (
                <TiltCard key={dish.id} className="h-full" intensity={7}>
                  <div
                    className="group bg-white rounded-3xl overflow-hidden h-full"
                    style={{ boxShadow: "0 18px 40px -26px rgba(33,10,14,0.4)" }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <SmartImage
                        src={dish.image}
                        alt={dish.name}
                        emoji={dish.emoji}
                        category={dish.category}
                        sizes="(max-width:768px) 100vw, (max-width:1280px) 33vw, 25vw"
                        className="h-full w-full"
                        imgClassName="transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute top-3 left-3 veg-dot z-10" />
                      {dish.popular && (
                        <span
                          className="absolute top-3 right-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{ background: "var(--brass)", color: "#2a1304" }}
                        >
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="p-5 tilt-pop">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-display text-lg leading-tight" style={{ color: "var(--ink)" }}>
                          {dish.name}
                        </h3>
                        <span className="font-display text-xl shrink-0" style={{ color: "var(--maroon)" }}>
                          {dish.price}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(33,10,14,0.6)" }}>
                        {dish.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 px-6 text-center" style={{ background: "var(--maroon)" }}>
        <AnimatedSection>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(248,241,227,0.75)" }}>
            All prices inclusive of taxes · 100% pure vegetarian · Menu &amp; prices may vary seasonally.
            <br />
            Tiffin 8–11 am &amp; 5–7 pm · Snacks from 4 pm · Rice from 9 am · Lunch from 12:30 pm
          </p>
        </AnimatedSection>
      </section>
    </>
  );
}
