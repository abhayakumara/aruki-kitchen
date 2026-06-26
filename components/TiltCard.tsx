"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** max tilt in degrees */
  intensity?: number;
};

/**
 * Cursor-following 3D tilt. The card rotates toward the pointer with a
 * springy feel and lifts on hover — gives dish cards a tactile, premium depth.
 * Respects reduced-motion via CSS (transitions collapse) and degrades to a
 * normal card on touch (no pointer = no tilt).
 */
export default function TiltCard({ children, className = "", intensity = 9 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), {
    stiffness: 150,
    damping: 18,
  });
  const ry = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), {
    stiffness: 150,
    damping: 18,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }

  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      whileHover={{ translateY: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`tilt ${className}`}
    >
      {children}
    </motion.div>
  );
}
