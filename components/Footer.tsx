import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3B1F0E] text-[#FDF6EC]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3
            className="text-3xl font-bold mb-1"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Aruki
          </h3>
          <p className="text-xs tracking-[0.2em] uppercase text-[#D4A853] mb-4">Kitchen</p>
          <p className="text-sm text-[#FDF6EC]/70 leading-relaxed">
            Authentic Indian flavours crafted with love and the finest ingredients. Come hungry,
            leave happy.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-[#FDF6EC]/20 flex items-center justify-center hover:border-[#C4622D] hover:text-[#C4622D] transition-colors text-xs font-bold"
            >
              IG
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-[#FDF6EC]/20 flex items-center justify-center hover:border-[#C4622D] hover:text-[#C4622D] transition-colors text-xs font-bold"
            >
              FB
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold text-[#D4A853] uppercase tracking-widest text-xs mb-5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/menu", label: "Menu" },
              { href: "/about", label: "About Us" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[#FDF6EC]/70 hover:text-[#C4622D] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-semibold text-[#D4A853] uppercase tracking-widest text-xs mb-5">
            Visit Us
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-sm text-[#FDF6EC]/70">
              <MapPin size={16} className="text-[#C4622D] mt-0.5 shrink-0" />
              <span>Aruki Kitchen, [Address to be updated]</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-[#FDF6EC]/70">
              <Phone size={16} className="text-[#C4622D] shrink-0" />
              <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">
                +91 XXXX XXX XXX
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-[#FDF6EC]/70">
              <Clock size={16} className="text-[#C4622D] mt-0.5 shrink-0" />
              <span>
                Mon – Sat: 11 am – 10 pm
                <br />
                Sunday: 12 pm – 9 pm
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#FDF6EC]/10 py-6 text-center text-xs text-[#FDF6EC]/40">
        © {new Date().getFullYear()} Aruki Kitchen. All rights reserved.
      </div>
    </footer>
  );
}
