"use client";

import { useState } from "react";
import Image from "next/image";
import { categoryAccent } from "@/data/menu";

type Props = {
  src: string;
  alt: string;
  emoji?: string;
  category?: string;
  /** Tailwind classes for the *wrapper* (it is positioned relative). */
  className?: string;
  /** Extra classes for the <Image> itself (e.g. group-hover scale). */
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * A resilient, always-premium image.
 *
 * Renders a branded gradient + dish emoji *behind* the real photo. The photo
 * fades in once it loads; if it ever fails (offline, blocked network, dead
 * URL) the gradient stays — so the UI never shows a broken-image box and
 * always looks intentional. Pure presentation, no layout shift.
 */
export default function SmartImage({
  src,
  alt,
  emoji = "🍽️",
  category = "Dosa",
  className = "",
  imgClassName = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const accent = categoryAccent[category] ?? categoryAccent.Dosa;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Branded fallback layer — always present underneath */}
      <div className="absolute inset-0" style={{ background: accent }}>
        <div className="absolute inset-0 opacity-[0.18] sheen" />
        <div
          className={`absolute inset-0 grid place-items-center transition-opacity duration-700 ${
            loaded && !failed ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="emoji-float text-6xl sm:text-7xl drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] select-none">
            {emoji}
          </span>
        </div>
      </div>

      {/* Real photo — fades in on load, hidden entirely if it errors */}
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
