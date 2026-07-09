"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** max tilt in degrees */
  intensity?: number;
};

/**
 * Cursor-following 3D tilt with a moving glare highlight. The card rotates
 * toward the pointer on springs and a soft brass sheen tracks the cursor —
 * like a plate catching the light. Degrades to a plain card on touch (no
 * pointer = no tilt); transitions collapse under prefers-reduced-motion.
 */
export default function TiltCard({ children, className = "", intensity = 9 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const glareO = useMotionValue(0);

  const spring = { stiffness: 150, damping: 18 };
  const rx = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), spring);
  const ry = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), spring);
  const gx = useTransform(px, [0, 1], [15, 85]);
  const gy = useTransform(py, [0, 1], [15, 85]);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(242,216,154,0.35), rgba(242,216,154,0.08) 35%, transparent 60%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    glareO.set(1);
  }

  function reset() {
    px.set(0.5);
    py.set(0.5);
    glareO.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      whileHover={{ translateY: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`tilt relative ${className}`}
    >
      {children}
      {/* brass glare sheen tracking the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl z-10"
        style={{ background: glare, opacity: glareO, mixBlendMode: "soft-light" }}
      />
    </motion.div>
  );
}
