"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SmartImage from "@/components/SmartImage";
import TiltCard from "@/components/TiltCard";
import CountUp from "@/components/CountUp";
import { Award, Users, Coffee } from "lucide-react";
import { IMG } from "@/data/menu";

const milestones = [
  {
    year: "The Beginning",
    title: "A Kitchen Born from Passion",
    body: "Aruki Kitchen opened in Mahadevapura with one purpose — to bring the real taste of South Indian home cooking to the heart of Bengaluru's tech corridor.",
  },
  {
    year: "Growing Up",
    title: "Community Favourite",
    body: "Word spread fast. The queue outside The Arcade grew longer each morning as regulars came back for the ghee dosa and filter coffee that tasted just like home.",
  },
  {
    year: "Expanding",
    title: "A Menu for Every Hour",
    body: "We grew from breakfast tiffin to an all-day menu — bhaths, rice plates, evening snacks, sandwiches, fresh juices and milkshakes. Something for every craving.",
  },
  {
    year: "Today",
    title: "Still Cooking with Heart",
    body: "Run by women, loved by families, trusted by the solo diner. Aruki Kitchen keeps growing — one plate at a time.",
  },
];

const stats = [
  { icon: Coffee, prefix: "₹", value: 25, suffix: "", label: "A cup of real filter coffee" },
  { icon: Users, prefix: "", value: 10, suffix: "k+", label: "Happy guests served" },
  { icon: Award, prefix: "", value: 100, suffix: "%", label: "Pure vegetarian, always" },
];

const tags = ["Women-Owned", "Pure Vegetarian", "LGBTQ+ Friendly", "Family-Friendly", "Wheelchair Accessible"];

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden grain" style={{ background: "var(--ink)" }}>
        <div
          className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(110,20,35,0.55), transparent 65%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="eyebrow mb-3">Our Story</p>
            <h1 className="display-lg font-display mb-4" style={{ color: "var(--cream)" }}>
              About <span className="ital">Aruki</span>
            </h1>
            <p className="text-lg" style={{ color: "rgba(248,241,227,0.65)" }}>
              A women-owned South Indian tiffin kitchen — built on tradition, run with heart.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6" style={{ background: "var(--palm)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative" style={{ perspective: 1200 }}>
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl" style={{ background: "rgba(110,20,35,0.12)" }} />
              <TiltCard intensity={6}>
                <div className="relative rounded-3xl overflow-hidden h-[480px]" style={{ boxShadow: "0 30px 60px -30px rgba(33,10,14,0.5)" }}>
                  <SmartImage
                    src={IMG.masalaDosa}
                    alt="Masala dosa fresh off the tawa at Aruki Kitchen"
                    emoji="🥞"
                    category="Dosa"
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="absolute inset-0"
                  />
                </div>
              </TiltCard>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-2xl overflow-hidden border-4 z-10" style={{ borderColor: "var(--palm)" }}>
                <SmartImage
                  src={IMG.filterCoffee}
                  alt="Aruki Kitchen filter coffee"
                  emoji="☕"
                  category="Beverages"
                  sizes="144px"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <p className="eyebrow mb-3" style={{ color: "var(--maroon)" }}>Who We Are</p>
            <h2 className="section-heading font-display mb-6" style={{ color: "var(--ink)" }}>
              Thindi the way it should be
            </h2>
            <p className="leading-relaxed mb-5" style={{ color: "rgba(33,10,14,0.72)" }}>
              Aruki Kitchen is a 100% pure-vegetarian South Indian breakfast and tiffin spot inside
              The Arcade at Brigade Metropolis, Mahadevapura. We serve the food Bengaluru grew up
              on — crispy dosas, soft idlys, warm bhaths and filter coffee that actually tastes like
              filter coffee.
            </p>
            <p className="leading-relaxed mb-5" style={{ color: "rgba(33,10,14,0.72)" }}>
              Founded and run by women, Aruki is a place where the food is honest, the portions are
              generous, and the welcome is always warm — whether you&apos;re grabbing breakfast
              before work or sitting down for a family lunch.
            </p>
            <p className="leading-relaxed" style={{ color: "rgba(33,10,14,0.72)" }}>
              The name &ldquo;Aruki&rdquo; reflects a journey — of flavours, of people, and of a
              kitchen that keeps growing. Every plate carries the same care as the very first one.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3.5 py-1.5 rounded-full font-medium"
                  style={{ background: "rgba(110,20,35,0.08)", color: "var(--maroon)", border: "1px solid rgba(110,20,35,0.18)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6" style={{ background: "var(--maroon)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center" style={{ perspective: 1200 }}>
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.12}>
              <TiltCard intensity={8} className="h-full">
                <div
                  className="h-full py-9 px-6 rounded-3xl"
                  style={{ background: "rgba(248,241,227,0.06)", border: "1px solid rgba(242,216,154,0.18)", boxShadow: "0 24px 50px -30px rgba(0,0,0,0.6)" }}
                >
                  <motion.div
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl grid place-items-center"
                    style={{ background: "rgba(224,168,46,0.14)", border: "1px solid rgba(224,168,46,0.3)" }}
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 14 }}
                  >
                    <s.icon size={26} style={{ color: "var(--brass)" }} />
                  </motion.div>
                  <p className="font-display text-5xl mb-2 tilt-pop" style={{ color: "var(--cream)" }}>
                    <CountUp prefix={s.prefix} value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-sm font-medium" style={{ color: "rgba(248,241,227,0.7)" }}>{s.label}</p>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 grain" style={{ background: "var(--ink)" }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow mb-3">Our Journey</p>
            <h2 className="section-heading font-display" style={{ color: "var(--cream)" }}>A kitchen with a story</h2>
          </AnimatedSection>

          <div className="relative" ref={timelineRef} style={{ perspective: 1000 }}>
            {/* faint rail + brass line that draws in as you scroll the section */}
            <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: "rgba(224,168,46,0.14)" }} />
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-px origin-top"
              style={{ background: "linear-gradient(180deg,#f2d89a,#e0a82e)", scaleY: lineScale, boxShadow: "0 0 12px rgba(224,168,46,0.5)" }}
            />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.1} direction="left">
                  <div className="flex gap-6">
                    <div className="relative shrink-0" style={{ perspective: 600 }}>
                      <motion.div
                        className="w-12 h-12 rounded-full grid place-items-center text-sm font-bold relative z-10"
                        style={{ background: "linear-gradient(180deg,#f2d89a,#e0a82e)", color: "#2a1304" }}
                        initial={{ scale: 0, rotateY: -90 }}
                        whileInView={{ scale: 1, rotateY: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ delay: 0.15 + i * 0.1, type: "spring", stiffness: 260, damping: 16 }}
                        whileHover={{ scale: 1.12, boxShadow: "0 0 22px rgba(224,168,46,0.7)" }}
                      >
                        {i + 1}
                      </motion.div>
                    </div>
                    <div className="pb-2">
                      <p className="eyebrow mb-1" style={{ fontSize: "0.65rem" }}>{m.year}</p>
                      <h3 className="font-display text-xl mb-2" style={{ color: "var(--cream)" }}>{m.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(248,241,227,0.62)" }}>{m.body}</p>
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
