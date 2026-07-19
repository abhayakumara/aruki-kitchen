"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";
import { MapPin, Phone, Clock, MessageCircle, Send } from "lucide-react";
import { site } from "@/data/site";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Aruki Kitchen! I'm ${form.name} (${form.email}).%0A%0A${encodeURIComponent(form.message)}`;
    window.open(`${site.whatsappHref}?text=${text}`, "_blank");
    setSent(true);
  };

  const inputStyle = {
    borderColor: "rgba(110,20,35,0.18)",
    background: "var(--paper)",
    color: "var(--ink)",
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden grain" style={{ background: "var(--ink)" }}>
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(110,20,35,0.5), transparent 65%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="eyebrow mb-3">Get in Touch</p>
            <h1 className="display-lg font-display mb-4" style={{ color: "var(--cream)" }}>
              Find <span className="ital">us</span>
            </h1>
            <p className="text-lg" style={{ color: "rgba(248,241,227,0.65)" }}>
              We&apos;d love to see you. Here&apos;s where we are and how to reach us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6" style={{ background: "var(--palm)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <AnimatedSection direction="left">
            <h2 className="section-heading font-display mb-8" style={{ color: "var(--ink)" }}>
              Visit Aruki Kitchen
            </h2>

            {[
              { icon: MapPin, title: "Address", body: (
                <>
                  {site.addressLines.map((l, i) => (
                    <span key={i}>{l}{i < site.addressLines.length - 1 && <br />}</span>
                  ))}
                  <a href={site.mapsDirections} target="_blank" rel="noopener noreferrer" className="block text-sm font-medium mt-1.5" style={{ color: "var(--maroon)" }}>
                    Get directions →
                  </a>
                </>
              ) },
              { icon: Phone, title: "Phone", body: <a href={site.phoneHref} style={{ color: "rgba(33,10,14,0.65)" }}>{site.phoneDisplay}</a> },
              { icon: MessageCircle, title: "WhatsApp", body: <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(33,10,14,0.65)" }}>Chat with us on WhatsApp</a> },
            ].map((row, i) => (
              <motion.div
                key={row.title}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6 }}
                className="flex gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl grid place-items-center shrink-0" style={{ background: "rgba(110,20,35,0.1)" }}>
                  <row.icon size={20} style={{ color: "var(--maroon)" }} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--ink)" }}>{row.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(33,10,14,0.65)" }}>{row.body}</p>
                </div>
              </motion.div>
            ))}

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl grid place-items-center shrink-0" style={{ background: "rgba(110,20,35,0.1)" }}>
                <Clock size={20} style={{ color: "var(--maroon)" }} />
              </div>
              <div className="w-full">
                <p className="font-semibold mb-3" style={{ color: "var(--ink)" }}>Opening Hours</p>
                <div className="flex flex-col gap-2">
                  {site.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span style={{ color: "rgba(33,10,14,0.65)" }}>{h.day}</span>
                      <span className="font-medium" style={{ color: "var(--ink)" }}>{h.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-3" style={{ color: "rgba(33,10,14,0.45)" }}>
                  Tiffin 8–11 am &amp; 5–7 pm · Snacks 4–7 pm · Rice 9 am–3 pm
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right">
            <TiltCard intensity={4}>
            <div className="bg-white rounded-3xl p-8" style={{ boxShadow: "0 28px 60px -34px rgba(33,10,14,0.45)" }}>
              <h2 className="font-display text-2xl mb-2" style={{ color: "var(--ink)" }}>Send us a message</h2>
              <p className="text-sm mb-6" style={{ color: "rgba(33,10,14,0.55)" }}>
                Opens WhatsApp with your message ready to send.
              </p>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full grid place-items-center mb-4" style={{ background: "rgba(110,20,35,0.1)" }}>
                    <Send size={24} style={{ color: "var(--maroon)" }} />
                  </div>
                  <h3 className="font-display text-xl mb-2" style={{ color: "var(--ink)" }}>Thank you!</h3>
                  <p className="text-sm" style={{ color: "rgba(33,10,14,0.6)" }}>
                    We&apos;ve opened WhatsApp for you — hit send and we&apos;ll reply soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: "var(--ink)" }}>Your Name</label>
                    <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ravi Kumar" className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = "#6e1423")} onBlur={(e) => (e.target.style.borderColor = "rgba(110,20,35,0.18)")} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: "var(--ink)" }}>Email Address</label>
                    <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = "#6e1423")} onBlur={(e) => (e.target.style.borderColor = "rgba(110,20,35,0.18)")} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: "var(--ink)" }}>Message</label>
                    <textarea id="message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Ask us anything, or just say hi!" className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none transition" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = "#6e1423")} onBlur={(e) => (e.target.style.borderColor = "rgba(110,20,35,0.18)")} />
                  </div>
                  <button type="submit" className="btn-brass justify-center">
                    <Send size={16} /> Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
            </TiltCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-20" style={{ background: "var(--palm)" }}>
        <AnimatedSection>
          <div className="max-w-6xl mx-auto" style={{ perspective: 1400 }}>
          <TiltCard intensity={3}>
          <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "0 28px 60px -34px rgba(33,10,14,0.5)" }}>
            <iframe
              src={site.mapsEmbed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Aruki Kitchen location — Brigade Metropolis, Mahadevapura, Bengaluru"
            />
          </div>
          </TiltCard>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
