import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
