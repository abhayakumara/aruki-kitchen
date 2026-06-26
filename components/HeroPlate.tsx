"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Coffee } from "lucide-react";
import SmartImage from "@/components/SmartImage";

/**
 * The hero centrepiece — a layered 3D scene. The whole cluster tilts toward
 * the pointer in real 3D (rotateX/rotateY), while inner layers sit at
 * different translateZ depths so rings, plate and price chips parallax apart.
 * Brass rings spin, an aura glows behind, steam rises off the plate.
 */
export default function HeroPlate() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rx = useSpring(useTransform(my, [0, 1], [12, -12]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-14, 14]), { stiffness: 120, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function reset() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <div className="scene relative mx-auto w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px]">
      {/* animated aura behind everything */}
      <div className="aura-spin absolute -inset-10 rounded-full pointer-events-none" />

      <motion.div
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="relative w-full h-full preserve-3d"
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      >
        {/* outer dashed brass ring */}
        <div
          className="ring-spin absolute inset-0 rounded-full"
          style={{ border: "1.5px dashed rgba(224,168,46,0.45)", transform: "translateZ(30px)" }}
        />
        <div
          className="ring-spin-rev absolute inset-[26px] rounded-full"
          style={{ border: "1px solid rgba(242,216,154,0.25)", transform: "translateZ(55px)" }}
        />

        {/* plate */}
        <div
          className="absolute inset-[44px] rounded-full overflow-hidden"
          style={{
            transform: "translateZ(70px)",
            boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7), inset 0 0 0 6px rgba(224,168,46,0.35)",
          }}
        >
          <SmartImage
            src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=900&q=85&auto=format&fit=crop"
            alt="Crispy masala dosa served at Aruki Kitchen"
            emoji="🥞"
            category="Dosa"
            priority
            sizes="460px"
            className="w-full h-full"
          />
          <div className="steam left-[38%]" />
          <div className="steam left-[55%]" style={{ animationDelay: "1.3s" }} />
          <div className="steam left-[47%]" style={{ animationDelay: "2.4s" }} />
        </div>

        {/* floating price chip — deepest layer in front */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="absolute -left-4 bottom-12 px-4 py-3 rounded-2xl card-glass"
          style={{ transform: "translateZ(120px)" }}
        >
          <p className="text-xs" style={{ color: "rgba(248,241,227,0.6)" }}>Ghee Masala Dosey</p>
          <p className="font-display text-2xl" style={{ color: "var(--brass)" }}>₹90</p>
        </motion.div>

        {/* floating coffee chip */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.6 }}
          className="absolute -right-2 top-10 px-4 py-3 rounded-2xl card-glass flex items-center gap-2"
          style={{ transform: "translateZ(140px)" }}
        >
          <Coffee size={18} style={{ color: "var(--brass)" }} />
          <div>
            <p className="text-xs" style={{ color: "rgba(248,241,227,0.6)" }}>Filter Coffee</p>
            <p className="font-display text-lg" style={{ color: "var(--cream)" }}>₹25</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
