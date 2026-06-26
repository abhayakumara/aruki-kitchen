"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Users, Utensils } from "lucide-react";

const milestones = [
  { year: "2018", title: "Doors Open", body: "Aruki Kitchen opened its doors with a simple dream: to share the warmth of authentic Indian home cooking with the community." },
  { year: "2020", title: "Community Favourite", body: "Despite a tough year, our loyal guests kept us going. We launched takeaway service and reached hundreds of new families." },
  { year: "2022", title: "Expanded Menu", body: "We introduced our tandoor range and expanded the menu with regional specialities from across India." },
  { year: "2024", title: "Still Cooking", body: "Today, Aruki Kitchen continues to grow — one plate at a time, with the same love it started with." },
];

const stats = [
  { icon: Utensils, value: "50+", label: "Dishes on the menu" },
  { icon: Users, value: "10k+", label: "Happy guests served" },
  { icon: Award, value: "6+", label: "Years of excellence" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6" style={{ background: "#3B1F0E" }}>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=70"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase font-medium mb-3" style={{ color: "#D4A853" }}>
              Our Story
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              About Aruki Kitchen
            </h1>
            <p className="text-lg" style={{ color: "rgba(253,246,236,0.7)" }}>
              Born from a passion for flavour and a love of bringing people together around the table.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6" style={{ background: "#FDF6EC" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ background: "#F5E8D3" }}
              />
              <div className="relative rounded-2xl overflow-hidden h-[480px]">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85"
                  alt="Aruki Kitchen interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-36 h-36 rounded-xl overflow-hidden border-4"
                style={{ borderColor: "#FDF6EC" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&q=80"
                  alt="Aruki dish"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <p
              className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
              style={{ color: "#C4622D" }}
            >
              Who We Are
            </p>
            <h2
              className="text-4xl font-bold mb-6"
              style={{
                color: "#3B1F0E",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              A Labour of Love, Seasoned with Tradition
            </h2>
            <p className="leading-relaxed mb-5" style={{ color: "rgba(59,31,14,0.7)" }}>
              Aruki Kitchen was born from a belief that food is more than sustenance — it is memory,
              culture, and connection. We started small, with a handful of treasured family recipes
              and an unwavering commitment to quality.
            </p>
            <p className="leading-relaxed mb-5" style={{ color: "rgba(59,31,14,0.7)" }}>
              Every spice we use is hand-picked, every sauce is made fresh, and every dish is
              prepared as if we&apos;re cooking for family. Because to us, that&apos;s exactly what
              our guests are.
            </p>
            <p className="leading-relaxed" style={{ color: "rgba(59,31,14,0.7)" }}>
              The name &ldquo;Aruki&rdquo; reflects a journey — of flavours, of people, and of a
              kitchen that keeps growing. We invite you to be part of that journey, one meal at a
              time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6" style={{ background: "#C4622D" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.15}>
              <s.icon size={36} className="mx-auto mb-3 text-white opacity-80" />
              <p
                className="text-5xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {s.value}
              </p>
              <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
                {s.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6" style={{ background: "#F5E8D3" }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
              style={{ color: "#C4622D" }}
            >
              Our Journey
            </p>
            <h2 className="section-heading">A Kitchen with a Story</h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{ background: "#D4A853" }}
            />

            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.1} direction="left">
                  <div className="flex gap-6">
                    <div className="relative shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white z-10 relative"
                        style={{ background: "#C4622D" }}
                      >
                        {m.year.slice(2)}
                      </div>
                    </div>
                    <div className="pb-2">
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: "#C4622D" }}
                      >
                        {m.year}
                      </p>
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{
                          color: "#3B1F0E",
                          fontFamily: "var(--font-playfair), Georgia, serif",
                        }}
                      >
                        {m.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(59,31,14,0.65)" }}>
                        {m.body}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
