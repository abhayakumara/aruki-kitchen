"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";
import { Leaf, Coffee, Heart, Star, ArrowRight, Phone } from "lucide-react";
import { menuItems } from "@/data/menu";
import { site } from "@/data/site";

const featured = menuItems.filter((m) => m.popular).slice(0, 4);
const ticker = ["Masala Dosey", "Ghee Pudi Thatte Idly", "Bisi Bele Bhath", "Filter Coffee", "Mysore Masala Dosey", "Kesari Bhath", "Rava Idly", "Mangalore Buns", "Khara Bhath", "Vade"];

const pillars = [
  {
    icon: Leaf,
    title: "100% Pure Veg",
    body: "Every plate is fully vegetarian, made fresh through the day from ingredients picked that morning.",
  },
  {
    icon: Coffee,
    title: "Real Filter Coffee",
    body: "Strong decoction brewed the traditional way, frothed with fresh milk and pulled in a steel davara.",
  },
  {
    icon: Heart,
    title: "Women-Owned",
    body: "Founded and run by women — a warm, family-friendly counter where everyone gets a seat at the table.",
  },
];

const testimonials = [
  { name: "Priya S.", text: "The ghee masala dosa is unreal — crisp, golden, perfectly spiced. Best dosa in Mahadevapura, full stop." },
  { name: "Rahul M.", text: "My every-morning stop for filter coffee and thatte idly. Unbeatable prices, consistently brilliant." },
  { name: "Aisha K.", text: "Our family's weekend ritual. The bisi bele bhath is pure comfort — warm, hearty, exactly like home." },
];

export default function Home() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen overflow-hidden grain" style={{ background: "var(--ink)" }}>
        {/* ambient brass glow */}
        <div
          className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(224,168,46,0.22), transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(110,20,35,0.6), transparent 65%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center min-h-screen">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 card-glass"
            >
              <span className="font-kn text-sm" style={{ color: "var(--brass)" }}>{site.nameKannada}</span>
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--brass)" }} />
              <span className="eyebrow" style={{ letterSpacing: "0.2em" }}>{site.tagline}</span>
            </motion.div>

            <h1 className="display-xl font-display" style={{ color: "var(--cream)" }}>
              {["Crisp dosas,", "soft idlys,"].map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.39 }}
                className="block"
              >
                real <span className="ital">filter coffee.</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-7 text-lg max-w-md leading-relaxed"
              style={{ color: "rgba(248,241,227,0.7)" }}
            >
              A women-owned, pure-vegetarian South Indian tiffin kitchen at Brigade Metropolis,
              Bengaluru — served warm, all day, on areca-palm leaf.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link href="/menu" className="btn-brass">
                Explore the Menu <ArrowRight size={18} />
              </Link>
              <a href={site.phoneHref} className="btn-ghost">
                <Phone size={17} /> {site.phoneDisplay}
              </a>
            </motion.div>

            {/* trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm"
              style={{ color: "rgba(248,241,227,0.55)" }}
            >
              <span className="flex items-center gap-2"><span className="veg-dot" /> 100% Pure Veg</span>
              <span className="flex items-center gap-2"><Star size={15} style={{ color: "var(--brass)", fill: "var(--brass)" }} /> Loved in Mahadevapura</span>
              <span>Open daily from 7:30 am</span>
            </motion.div>
          </div>

          {/* Right — rotating brass tumbler plate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative mx-auto w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px]"
          >
            {/* outer dashed brass ring */}
            <div
              className="ring-spin absolute inset-0 rounded-full"
              style={{ border: "1.5px dashed rgba(224,168,46,0.45)" }}
            />
            <div
              className="ring-spin-rev absolute inset-[26px] rounded-full"
              style={{ border: "1px solid rgba(242,216,154,0.25)" }}
            />
            {/* plate */}
            <div
              className="absolute inset-[44px] rounded-full overflow-hidden"
              style={{ boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7), inset 0 0 0 6px rgba(224,168,46,0.35)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=900&q=85"
                alt="Crispy masala dosa served at Aruki Kitchen"
                fill
                priority
                className="object-cover"
              />
              {/* steam */}
              <div className="steam left-[38%]" />
              <div className="steam left-[55%]" style={{ animationDelay: "1.3s" }} />
              <div className="steam left-[47%]" style={{ animationDelay: "2.4s" }} />
            </div>

            {/* floating price chip */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -left-4 bottom-12 px-4 py-3 rounded-2xl card-glass"
            >
              <p className="text-xs" style={{ color: "rgba(248,241,227,0.6)" }}>Ghee Masala Dosey</p>
              <p className="font-display text-2xl" style={{ color: "var(--brass)" }}>₹90</p>
            </motion.div>
            {/* floating coffee chip */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.6 }}
              className="absolute -right-2 top-10 px-4 py-3 rounded-2xl card-glass flex items-center gap-2"
            >
              <Coffee size={18} style={{ color: "var(--brass)" }} />
              <div>
                <p className="text-xs" style={{ color: "rgba(248,241,227,0.6)" }}>Filter Coffee</p>
                <p className="font-display text-lg" style={{ color: "var(--cream)" }}>₹25</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════ TICKER MARQUEE ════════ */}
      <div className="py-4 overflow-hidden border-y" style={{ background: "var(--maroon)", borderColor: "rgba(242,216,154,0.18)" }}>
        <div className="marquee">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="flex items-center gap-5 px-5 whitespace-nowrap">
              <span className="font-display text-lg" style={{ color: "rgba(248,241,227,0.9)" }}>{item}</span>
              <span style={{ color: "var(--brass)" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ════════ FEATURED — 3D tilt cards ════════ */}
      <section className="py-24 px-6" style={{ background: "var(--palm)" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <p className="eyebrow mb-3" style={{ color: "var(--maroon)" }}>Counter Favourites</p>
              <h2 className="section-heading font-display" style={{ color: "var(--ink)" }}>
                The plates people <span className="ital" style={{ color: "var(--maroon)" }}>queue</span> for
              </h2>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all self-start md:self-auto"
              style={{ color: "var(--maroon)" }}
            >
              See full menu <ArrowRight size={18} />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: 1000 }}>
            {featured.map((dish, i) => (
              <AnimatedSection key={dish.id} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <div
                    className="group h-full rounded-3xl overflow-hidden bg-white shadow-lg"
                    style={{ boxShadow: "0 24px 50px -24px rgba(33,10,14,0.35)" }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute top-3 left-3 veg-dot" />
                      <span
                        className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{ background: "var(--brass)", color: "#2a1304" }}
                      >
                        Popular
                      </span>
                    </div>
                    <div className="p-5 tilt-pop">
                      <h3 className="font-display text-xl mb-1" style={{ color: "var(--ink)" }}>
                        {dish.name}
                      </h3>
                      <p className="text-sm line-clamp-2 mb-3" style={{ color: "rgba(33,10,14,0.6)" }}>
                        {dish.description}
                      </p>
                      <p className="font-display text-2xl" style={{ color: "var(--maroon)" }}>
                        {dish.price}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WHY ARUKI ════════ */}
      <section className="relative py-28 px-6 overflow-hidden grain" style={{ background: "var(--ink)" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(110,20,35,0.5), transparent 70%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow mb-3">Why Aruki</p>
            <h2 className="section-heading font-display" style={{ color: "var(--cream)" }}>
              Tiffin the way it <span className="ital">should</span> be
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.12}>
                <div className="h-full p-8 rounded-3xl card-glass">
                  <div
                    className="w-14 h-14 rounded-2xl grid place-items-center mb-6"
                    style={{ background: "rgba(224,168,46,0.14)", border: "1px solid rgba(224,168,46,0.3)" }}
                  >
                    <p.icon size={26} style={{ color: "var(--brass)" }} />
                  </div>
                  <h3 className="font-display text-2xl mb-3" style={{ color: "var(--cream)" }}>{p.title}</h3>
                  <p className="leading-relaxed text-sm" style={{ color: "rgba(248,241,227,0.62)" }}>{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FILTER COFFEE SIGNATURE BAND ════════ */}
      <section className="py-24 px-6" style={{ background: "var(--maroon)" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden" style={{ boxShadow: "0 40px 80px -30px rgba(0,0,0,0.6)" }}>
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=85"
                alt="Traditional South Indian filter coffee"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <p className="eyebrow mb-3">The Aruki Ritual</p>
            <h2 className="section-heading font-display mb-5" style={{ color: "var(--cream)" }}>
              A davara of filter coffee, pulled just right
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: "rgba(248,241,227,0.75)" }}>
              Dark roasted decoction, steeped slow and frothed with hot milk, then pulled high
              between tumbler and davara until it sings. It&apos;s the cup Bengaluru wakes up to —
              and the one regulars come back for, morning after morning.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Filter Coffee · ₹25", "Jaggery Coffee · ₹35", "Cold Coffee · ₹100", "Badam Milk · ₹30"].map((c) => (
                <span
                  key={c}
                  className="text-sm px-4 py-2 rounded-full font-medium"
                  style={{ background: "rgba(248,241,227,0.08)", color: "var(--brass-soft)", border: "1px solid rgba(242,216,154,0.2)" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section className="py-24 px-6" style={{ background: "var(--palm)" }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="eyebrow mb-3" style={{ color: "var(--maroon)" }}>From the Regulars</p>
            <h2 className="section-heading font-display" style={{ color: "var(--ink)" }}>Happy plates, happy hearts</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="h-full bg-white rounded-3xl p-8" style={{ boxShadow: "0 20px 44px -28px rgba(33,10,14,0.4)" }}>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} style={{ color: "var(--brass)", fill: "var(--brass)" }} />
                    ))}
                  </div>
                  <p className="leading-relaxed mb-6 font-display text-lg" style={{ color: "rgba(33,10,14,0.82)" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="font-semibold text-sm" style={{ color: "var(--maroon)" }}>— {t.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="relative py-28 px-6 overflow-hidden grain" style={{ background: "var(--ink)" }}>
        <div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(224,168,46,0.18), transparent 65%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="display-lg font-display mb-5" style={{ color: "var(--cream)" }}>
              Come hungry.<br />Leave <span className="ital">happy.</span>
            </h2>
            <p className="text-lg mb-9" style={{ color: "rgba(248,241,227,0.7)" }}>
              Weekdays 7:30 am – 8 pm · Weekends 7:30 am – 1 pm<br />
              Dine-in · Takeaway · Outdoor seating
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={site.phoneHref} className="btn-brass">
                <Phone size={18} /> Call {site.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-ghost">Find Us <ArrowRight size={17} /></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
