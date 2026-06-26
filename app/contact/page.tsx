"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Clock, MessageCircle, Send } from "lucide-react";
import { site } from "@/data/site";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name} via Aruki Kitchen website`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:arukikitchen@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

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
              Get in Touch
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Find Us
            </h1>
            <p className="text-lg" style={{ color: "rgba(253,246,236,0.7)" }}>
              We&apos;d love to see you. Here&apos;s where to find us and how to reach us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 px-6" style={{ background: "#FDF6EC" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info column */}
          <AnimatedSection direction="left">
            <div>
              <h2
                className="text-3xl font-bold mb-8"
                style={{
                  color: "#3B1F0E",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                Visit Aruki Kitchen
              </h2>

              {/* Address */}
              <div className="flex gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#F5E8D3" }}
                >
                  <MapPin size={20} style={{ color: "#C4622D" }} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "#3B1F0E" }}>
                    Address
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(59,31,14,0.65)" }}>
                    {site.addressLines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < site.addressLines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <a
                    href={site.mapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium mt-1 inline-block"
                    style={{ color: "#C4622D" }}
                  >
                    Get directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#F5E8D3" }}
                >
                  <Phone size={20} style={{ color: "#C4622D" }} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "#3B1F0E" }}>
                    Phone
                  </p>
                  <a
                    href={site.phoneHref}
                    className="text-sm"
                    style={{ color: "rgba(59,31,14,0.65)" }}
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#F5E8D3" }}
                >
                  <MessageCircle size={20} style={{ color: "#C4622D" }} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "#3B1F0E" }}>
                    WhatsApp
                  </p>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                    style={{ color: "rgba(59,31,14,0.65)" }}
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#F5E8D3" }}
                >
                  <Clock size={20} style={{ color: "#C4622D" }} />
                </div>
                <div className="w-full">
                  <p className="font-semibold mb-3" style={{ color: "#3B1F0E" }}>
                    Opening Hours
                  </p>
                  <div className="flex flex-col gap-2">
                    {site.hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-sm">
                        <span style={{ color: "rgba(59,31,14,0.65)" }}>{h.day}</span>
                        <span className="font-medium" style={{ color: "#3B1F0E" }}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs mt-3" style={{ color: "rgba(59,31,14,0.45)" }}>
                    Tiffin: 8–11 am &amp; 5–7 pm · Snacks: 4–7 pm · Rice: 9 am–3 pm
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2
                className="text-2xl font-bold mb-6"
                style={{
                  color: "#3B1F0E",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                Send us a Message
              </h2>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "#F5E8D3" }}
                  >
                    <Send size={24} style={{ color: "#C4622D" }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#3B1F0E", fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Thank you!
                  </h3>
                  <p className="text-sm" style={{ color: "rgba(59,31,14,0.6)" }}>
                    We&apos;ve received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "#3B1F0E" }}
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ravi Kumar"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition"
                      style={{ borderColor: "#F5E8D3", background: "#FDF6EC", color: "#3B1F0E" }}
                      onFocus={(e) => (e.target.style.borderColor = "#C4622D")}
                      onBlur={(e) => (e.target.style.borderColor = "#F5E8D3")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "#3B1F0E" }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition"
                      style={{ borderColor: "#F5E8D3", background: "#FDF6EC", color: "#3B1F0E" }}
                      onFocus={(e) => (e.target.style.borderColor = "#C4622D")}
                      onBlur={(e) => (e.target.style.borderColor = "#F5E8D3")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "#3B1F0E" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Ask us anything, or just say hi!"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none transition"
                      style={{ borderColor: "#F5E8D3", background: "#FDF6EC", color: "#3B1F0E" }}
                      onFocus={(e) => (e.target.style.borderColor = "#C4622D")}
                      onBlur={(e) => (e.target.style.borderColor = "#F5E8D3")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary text-sm flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-20" style={{ background: "#FDF6EC" }}>
        <AnimatedSection>
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-md">
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
        </AnimatedSection>
      </section>
    </>
  );
}
