"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "@/components/SmartImage";
import type { MenuItem } from "@/data/menu";

/**
 * A true-3D rotating ring of dishes. Cards are arranged around a cylinder
 * (rotateY + translateZ); the whole ring spins to bring each dish to the
 * front. Auto-advances, pauses on hover, supports arrows + drag + swipe.
 * Collapses to a clean fade list when the user prefers reduced motion.
 */
export default function Carousel3D({ items }: { items: MenuItem[] }) {
  const [index, setIndex] = useState(0);
  const [radius, setRadius] = useState(380);
  const reduce = useReducedMotion();
  const dragStart = useRef<number | null>(null);

  const count = items.length;
  const angle = 360 / count;

  // Responsive ring radius
  useEffect(() => {
    const fit = () => {
      const w = window.innerWidth;
      setRadius(w < 640 ? 230 : w < 1024 ? 320 : 420);
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  // Auto-rotate (paused via CSS-less state when hovered)
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => setIndex((i) => i + 1), 3200);
    return () => clearInterval(t);
  }, [reduce, paused]);

  const go = (dir: number) => setIndex((i) => i + dir);

  // Reduced-motion: simple, accessible fade carousel
  if (reduce) {
    const active = items[((index % count) + count) % count];
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
          <SmartImage src={active.image} alt={active.name} emoji={active.emoji} category={active.category} className="w-full h-full" />
        </div>
        <p className="font-display text-2xl mt-5" style={{ color: "var(--cream)" }}>{active.name}</p>
        <p className="font-display text-3xl" style={{ color: "var(--brass)" }}>{active.price}</p>
        <div className="flex justify-center gap-3 mt-5">
          <button onClick={() => go(-1)} className="ring-btn" aria-label="Previous dish"><ChevronLeft size={20} /></button>
          <button onClick={() => go(1)} className="ring-btn" aria-label="Next dish"><ChevronRight size={20} /></button>
        </div>
      </div>
    );
  }

  const active = items[((index % count) + count) % count];

  return (
    <div
      className="select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="carousel3d-stage relative mx-auto"
        style={{ perspective: "1600px", height: "clamp(300px, 46vw, 460px)", maxWidth: 980 }}
        onPointerDown={(e) => (dragStart.current = e.clientX)}
        onPointerUp={(e) => {
          if (dragStart.current == null) return;
          const dx = e.clientX - dragStart.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          dragStart.current = null;
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: -index * angle }}
          transition={{ type: "spring", stiffness: 60, damping: 16 }}
        >
          {items.map((dish, i) => {
            // shortest angular distance from the front, for depth/opacity styling
            const rel = ((i - (((index % count) + count) % count) + count) % count);
            const dist = Math.min(rel, count - rel);
            const isFront = dist === 0;
            return (
              <div
                key={dish.id}
                className="carousel3d-card absolute top-1/2 left-1/2"
                style={{
                  width: "clamp(200px, 26vw, 280px)",
                  height: "clamp(260px, 34vw, 360px)",
                  transform: `translate(-50%,-50%) rotateY(${i * angle}deg) translateZ(${radius}px)`,
                  opacity: dist > 2 ? 0 : 1,
                  pointerEvents: isFront ? "auto" : "none",
                  transition: "opacity 0.5s",
                }}
              >
                <div
                  className="w-full h-full rounded-3xl overflow-hidden relative"
                  style={{
                    boxShadow: isFront
                      ? "0 40px 80px -30px rgba(0,0,0,0.85), 0 0 0 1px rgba(224,168,46,0.4)"
                      : "0 20px 50px -30px rgba(0,0,0,0.8)",
                    filter: isFront ? "none" : "brightness(0.55) saturate(0.85)",
                    transition: "filter 0.5s, box-shadow 0.5s",
                  }}
                >
                  <SmartImage src={dish.image} alt={dish.name} emoji={dish.emoji} category={dish.category} className="w-full h-full" imgClassName="" />
                  <div className="absolute inset-x-0 bottom-0 p-4" style={{ background: "linear-gradient(to top, rgba(20,6,8,0.92), transparent)" }}>
                    <p className="font-display text-lg leading-tight" style={{ color: "var(--cream)" }}>{dish.name}</p>
                    <p className="font-display text-xl" style={{ color: "var(--brass)" }}>{dish.price}</p>
                  </div>
                  <span className="absolute top-3 left-3 veg-dot" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Caption + controls — sits clear below the magnified front card */}
      <div className="relative z-10 flex items-center justify-center gap-5 mt-12 sm:mt-14">
        <button onClick={() => go(-1)} className="ring-btn" aria-label="Previous dish"><ChevronLeft size={20} /></button>
        <div className="text-center min-w-[150px]">
          <p className="font-display text-xl" style={{ color: "var(--cream)" }}>{active.name}</p>
          <p className="text-xs" style={{ color: "rgba(248,241,227,0.55)" }}>Drag · swipe · or use the arrows</p>
        </div>
        <button onClick={() => go(1)} className="ring-btn" aria-label="Next dish"><ChevronRight size={20} /></button>
      </div>
    </div>
  );
}
