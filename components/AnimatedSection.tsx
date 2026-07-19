"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 44, scale: 0.985 }
      : direction === "left"
      ? { opacity: 0, x: -48, rotateY: 6 }
      : direction === "right"
      ? { opacity: 0, x: 48, rotateY: -6 }
      : { opacity: 0, scale: 0.97 };

  const animate = { opacity: 1, y: 0, x: 0, scale: 1, rotateY: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
