"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Users, Coffee } from "lucide-react";

const milestones = [
  {
    year: "The Beginning",
    title: "A Kitchen Born from Passion",
    body: "Aruki Kitchen opened its doors in Mahadevapura with one purpose — to bring the real taste of South Indian home cooking to the heart of Bengaluru's tech corridor.",
  },
  {
    year: "Growing Up",
    title: "Community Favourite",
    body: "Word spread fast. The queue outside The Arcade grew longer each morning as regulars kept coming back for the ghee dosa and filter coffee that tasted just like home.",
  },
  {
    year: "Expanding",
    title: "A Menu for Every Hour",
    body: "We expanded from breakfast tiffin to an all-day menu — bhaths, rice dishes, evening snacks, sandwiches, fresh juices and milkshakes — something for every craving.",
  },
  {
    year: "Today",
    title: "Still Cooking with Heart",
    body: "Run by women, loved by families and trusted by the solo diner. Aruki Kitchen keeps growing — one plate at a time.",
  },
];

const stats = [
  { icon: Coffee, value: "₹25", label: "A cup of filter coffee" },
  { icon: Users, value: "10k+", label: "Happy guests served" },
  { icon: Award, value: "100%", label: "Pure vegetarian" },
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
              A women-owned South Indian tiffin kitchen — built on tradition, run with heart.
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
                  src="https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=85"
                  alt="Aruki Kitchen — crispy dosa fresh off the tawa"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-36 h-36 rounded-xl overflow-hidden border-4"
                style={{ borderColor: "#FDF6EC" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&q=80"
                  alt="Aruki Kitchen filter coffee"
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
              Thindi the Way It Should Be
            </h2>
            <p className="leading-relaxed mb-5" style={{ color: "rgba(59,31,14,0.7)" }}>
              Aruki Kitchen is a 100% pure-vegetarian South Indian breakfast and tiffin spot inside
              The Arcade at Brigade Metropolis, Mahadevapura. We serve the food Bengaluru grew up
              on — crispy dosas, soft idlys, warm bhaths and filter coffee that actually tastes like
              filter coffee.
            </p>
            <p className="leading-relaxed mb-5" style={{ color: "rgba(59,31,14,0.7)" }}>
              Founded and run by women, Aruki is a place where the food is honest, the portions are
              generous, and the welcome is always warm. Whether you&apos;re grabbing a quick
              breakfast before work or sitting down for a family lunch, there&apos;s a plate here
              for you.
            </p>
            <p className="leading-relaxed" style={{ color: "rgba(59,31,14,0.7)" }}>
              The name &ldquo;Aruki&rdquo; reflects a journey — of flavours, of people, and of a
              kitchen that keeps growing. Every plate we send out carries the same care as the very
              first one.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Women-Owned",
                "Pure Vegetarian",
                "LGBTQ+ Friendly",
                "Family-Friendly",
                "Wheelchair Accessible",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{ background: "#F5E8D3", color: "#3B1F0E" }}
                >
                  {tag}
                </span>
              ))}
            </div>
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
                        className="w-12 h-12 rounded-full flex items-center justify-center text-[10px] font-bold text-white z-10 relative text-center leading-tight px-1"
                        style={{ background: "#C4622D" }}
                      >
                        {i + 1}
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
