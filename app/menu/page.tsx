"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { menuItems, categories } from "@/data/menu";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((m) => m.category === activeCategory);

  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ background: "#3B1F0E" }}>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1630383249896-424e482df921?w=1600&q=70"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase font-medium mb-3" style={{ color: "#D4A853" }}>
              Premium South Indian Thindi
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Our Menu
            </h1>
            <p className="text-lg" style={{ color: "rgba(253,246,236,0.7)" }}>
              100% pure vegetarian · Dosa · Tiffin · Rice · Snacks · Beverages
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category tabs */}
      <section className="sticky top-16 z-30 py-4 px-6 border-b border-[#F5E8D3]" style={{ background: "#FDF6EC" }}>
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shrink-0"
              style={
                activeCategory === cat
                  ? { background: "#C4622D", color: "white" }
                  : { background: "#F5E8D3", color: "#3B1F0E" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Menu grid */}
      <section className="py-16 px-6" style={{ background: "#FDF6EC" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((dish) => (
                <div
                  key={dish.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {dish.popular && (
                      <span
                        className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded"
                        style={{ background: "#C4622D", color: "white" }}
                      >
                        Popular
                      </span>
                    )}
                    {/* Pure veg green dot */}
                    <span
                      className="absolute top-3 left-3 w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center text-[9px] font-bold"
                      style={{ borderColor: "#16a34a", color: "#16a34a" }}
                      title="Pure Vegetarian"
                    >
                      ●
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3
                        className="font-semibold text-base leading-tight"
                        style={{
                          color: "#3B1F0E",
                          fontFamily: "var(--font-playfair), Georgia, serif",
                        }}
                      >
                        {dish.name}
                      </h3>
                      <span className="font-bold shrink-0 text-base" style={{ color: "#C4622D" }}>
                        {dish.price}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(59,31,14,0.6)" }}>
                      {dish.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center py-20" style={{ color: "rgba(59,31,14,0.4)" }}>
              No items in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Note */}
      <section className="py-10 px-6 text-center" style={{ background: "#F5E8D3" }}>
        <AnimatedSection>
          <p className="text-sm" style={{ color: "rgba(59,31,14,0.6)" }}>
            All prices inclusive of taxes · 100% pure vegetarian · Menu and prices may vary seasonally.
            <br />
            Tiffin available 8 am – 11 am &amp; 5 pm – 7 pm · Snacks from 4 pm · Rice from 9 am
          </p>
        </AnimatedSection>
      </section>
    </>
  );
}
