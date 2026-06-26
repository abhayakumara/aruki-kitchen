"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { X, ZoomIn } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=80",
    alt: "Crispy Masala Dosa",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80",
    alt: "Idly with Sambar & Chutney",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    alt: "Crispy Samosa",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    alt: "Aruki Filter Coffee",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    alt: "Ghee Pudi Thatte Idly",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    alt: "Bisi Bele Bhath",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
    alt: "Mysore Masala Dosa",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=800&q=80",
    alt: "Gulab Jamun",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    alt: "Aruki Cold Coffee",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800&q=80",
    alt: "Masala Tea",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Aruki Kitchen — warm & welcoming",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=800&q=80",
    alt: "Kesari Bhath",
    span: "col-span-1",
  },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6" style={{ background: "#3B1F0E" }}>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=70"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase font-medium mb-3" style={{ color: "#D4A853" }}>
              Visual Story
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Gallery
            </h1>
            <p className="text-lg" style={{ color: "rgba(253,246,236,0.7)" }}>
              Dosas, idlys, bhaths, filter coffee and more — a visual taste of Aruki Kitchen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6" style={{ background: "#FDF6EC" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.05} className={`${img.span}`}>
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setLightbox(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
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
            style={{ background: "rgba(0,0,0,0.92)" }}
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
              className="relative max-w-4xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ paddingBottom: "66%" }}>
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <p className="text-center text-white/70 text-sm mt-4">{lightbox.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
