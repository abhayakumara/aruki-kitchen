import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

// Display — Fraunces: warm, characterful soft-serif (used with restraint)
const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

// Body — Hanken Grotesk: clean, modern, highly legible
const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Kannada — for the authentic ಅರುಕಿ ಕಿಚನ್ wordmark
const kannada = Noto_Sans_Kannada({
  variable: "--font-kannada",
  subsets: ["kannada"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aruki Kitchen | Premium South Indian Thindi, Mahadevapura Bengaluru",
  description:
    "100% pure vegetarian South Indian tiffin — crispy dosas, soft idlys, bhaths and filter coffee at The Arcade, Brigade Metropolis, Mahadevapura, Bengaluru. Women-owned.",
  keywords:
    "South Indian restaurant Bengaluru, dosa Mahadevapura, idly vada ITPL, filter coffee Brigade Metropolis, pure veg tiffin Bengaluru, Aruki Kitchen",
  openGraph: {
    title: "Aruki Kitchen | Premium South Indian Thindi",
    description:
      "Crispy dosas, soft idlys, hearty bhaths and legendary filter coffee — pure veg, women-owned, Mahadevapura Bengaluru.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${kannada.variable} font-body antialiased`}
      >
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
