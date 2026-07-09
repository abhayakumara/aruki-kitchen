"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SmartImage from "@/components/SmartImage";
import TiltCard from "@/components/TiltCard";
import { X, ZoomIn } from "lucide-react";
import { IMG } from "@/data/menu";

// Verified Wikimedia Commons photos — each shows the dish it's captioned as.
const images = [
  { src: IMG.masalaDosa, alt: "Masala Dosey", emoji: "🥞", category: "Dosa", span: "col-span-1 row-span-2" },
  { src: IMG.idli, alt: "Idly & Sambar", emoji: "🍚", category: "Tiffin", span: "col-span-1" },
  { src: IMG.samosa, alt: "Crispy Samosa", emoji: "🥟", category: "Snacks", span: "col-span-1" },
  { src: IMG.filterCoffee, alt: "Filter Coffee at Aruki", emoji: "☕", category: "Beverages", span: "col-span-2" },
  { src: IMG.upma, alt: "Khara Bhath", emoji: "🍲", category: "Rice & Bhath", span: "col-span-1" },
  { src: IMG.bisiBele, alt: "Bisi Bele Bhath", emoji: "🍛", category: "Rice & Bhath", span: "col-span-1 row-span-2" },
  { src: IMG.mysoreDosa, alt: "Mysore Masala Dosey", emoji: "🌶️", category: "Dosa", span: "col-span-1" },
  { src: IMG.gulabJamun, alt: "Gulab Jamun", emoji: "🍡", category: "Desserts", span: "col-span-1" },
  { src: IMG.vadaSambar, alt: "Medu Vade & Sambar", emoji: "🍩", category: "Tiffin", span: "col-span-2" },
  { src: IMG.masalaChai, alt: "Masala Tea", emoji: "🍵", category: "Beverages", span: "col-span-1" },
  { src: IMG.thatteIdli, alt: "Thatte Idly", emoji: "🍮", category: "Tiffin", span: "col-span-2" },
  { src: IMG.kesari, alt: "Kesari Bhath", emoji: "🍮", category: "Desserts", span: "col-span-1" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden grain" style={{ background: "var(--ink)" }}>
        <div
          className="absolute -top-32 right-10 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(224,168,46,0.18), transparent 65%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="eyebrow mb-3">Visual Story</p>
            <h1 className="display-lg font-display mb-4" style={{ color: "var(--cream)" }}>
              The <span className="ital">gallery</span>
            </h1>
            <p className="text-lg" style={{ color: "rgba(248,241,227,0.65)" }}>
              Dosas, idlys, bhaths, filter coffee and more — a visual taste of Aruki Kitchen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6" style={{ background: "var(--palm)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4" style={{ perspective: 1400 }}>
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.05} className={`${img.span}`}>
              <TiltCard className="w-full h-full" intensity={6}>
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setLightbox(img)}
                  style={{ boxShadow: "0 16px 36px -24px rgba(33,10,14,0.4)" }}
                >
                  <SmartImage src={img.src} alt={img.alt} emoji={img.emoji} category={img.category} sizes="(max-width:768px) 50vw, 33vw" className="w-full h-full" imgClassName="transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 z-10 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn size={30} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ background: "linear-gradient(to top, rgba(33,10,14,0.9), transparent)" }}>
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(20,6,8,0.94)" }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ paddingBottom: "66%" }}>
                <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain rounded-2xl" />
              </div>
              <p className="text-center text-sm mt-4" style={{ color: "var(--brass-soft)" }}>{lightbox.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
