"use client";

import { motion } from "framer-motion";

// Remounts on every route change → smooth, subtly 3D page-enter transition
// site-wide. The perspective + gentle rotateX makes each page settle in like
// a card tilting up into place, then flattening.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ perspective: 1400 }}>
      <motion.div
        initial={{ opacity: 0, y: 26, rotateX: 6 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d", transformOrigin: "50% 0%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
