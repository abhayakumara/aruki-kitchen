"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Slim brass progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress w-full" style={{ scaleX }} />;
}
