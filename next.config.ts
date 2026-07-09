import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Commons' Special:FilePath serves pre-sized thumbs (?width=...) via a
    // cross-host redirect; browser-direct loading handles that reliably and
    // pairs with SmartImage's graceful fallback.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "commons.wikimedia.org" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
