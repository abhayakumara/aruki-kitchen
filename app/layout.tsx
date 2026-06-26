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
  title: "Aruki Kitchen | Authentic Indian Cuisine",
  description:
    "Experience the warmth and flavours of authentic Indian cuisine at Aruki Kitchen. Fresh ingredients, time-honoured recipes, and a welcoming atmosphere.",
  keywords: "Indian restaurant, authentic Indian food, Aruki Kitchen, Indian cuisine",
  openGraph: {
    title: "Aruki Kitchen | Authentic Indian Cuisine",
    description:
      "Experience the warmth and flavours of authentic Indian cuisine at Aruki Kitchen.",
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
