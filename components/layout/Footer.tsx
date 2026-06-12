import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Aviation Fuel Systems",
  "Industrial Fuel Infrastructure",
  "Training & Competency",
  "Building & Construction",
];

const projects = [
  { label: "Kukipi Primary School", href: "/projects" },
  { label: "Miaru Primary School", href: "/projects" },
  { label: "Savaiviri Primary School", href: "/projects" },
  { label: "Moro Airfield Fuel Works", href: "/projects" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a]">

      {/* Pre-footer CTA — 2 columns */}
      <div className="border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Left: Service enquiry */}
            <div className="bg-[#131c2e] border border-[#1e293b] rounded-xl px-8 py-7 flex flex-col justify-between gap-6">
              <div>
                <p className="text-[#dc2626] text-[10px] font-mono uppercase tracking-[0.2em] mb-2">Get Started</p>
                <h3 className="text-xl font-black text-white tracking-tight mb-1.5">
                  Need a Service? Let&apos;s Talk.
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">Request a free site assessment or quote from our engineering team today.</p>
              </div>
              <Link href="/contact" className="self-start">
                <button className="group inline-flex items-center gap-2 h-10 px-6 bg-[#dc2626] text-white text-xs font-black uppercase tracking-[0.15em] rounded-lg hover:bg-[#b91c1c] transition-colors">
                  Request a Quote
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Right: Partner CTA */}
            <div className="bg-[#131c2e] border border-[#1e293b] rounded-xl px-8 py-7 flex flex-col justify-between gap-6">
              <div>
                <p className="text-[#dc2626] text-[10px] font-mono uppercase tracking-[0.2em] mb-2">Partner with PNG&apos;s construction leader</p>
                <h3 className="text-xl font-black text-white tracking-tight mb-1.5">
                  Ready to work with SK Petroteck?
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">Aviation fuel, industrial fuel infrastructure, training, and construction — all in one specialist team.</p>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/contact">
                  <button className="group inline-flex items-center gap-2 h-10 px-6 bg-[#dc2626] text-white text-xs font-black uppercase tracking-[0.15em] rounded-lg hover:bg-[#b91c1c] transition-colors">
                    Get a Quote
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a href="tel:+67573199471">
                  <button className="inline-flex items-center gap-2 h-10 px-6 border border-white/15 text-white/70 text-xs font-semibold uppercase tracking-[0.15em] rounded-lg hover:border-white/40 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                    Call Now
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main footer grid — 5 columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Column 1–2: Brand (spans 2 on lg) */}
          <div className="col-span-2 lg:col-span-1">
            <p className="text-xs text-[#5a6374] leading-relaxed mb-5">
              Papua New Guinea&apos;s specialist in aviation fuel systems, industrial fuel infrastructure, training &amp; competency, and building construction.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-[#dc2626] text-[10px] font-mono font-semibold uppercase tracking-[0.2em] mb-5 pb-2 border-b border-[#1e293b]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-xs text-[#5a6374] hover:text-[#dc2626] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-[#dc2626] text-[10px] font-mono font-semibold uppercase tracking-[0.2em] mb-5 pb-2 border-b border-[#1e293b]">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-xs text-[#5a6374] hover:text-[#dc2626] transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Projects */}
          <div>
            <h3 className="text-[#dc2626] text-[10px] font-mono font-semibold uppercase tracking-[0.2em] mb-5 pb-2 border-b border-[#1e293b]">
              Projects
            </h3>
            <ul className="space-y-2.5 mb-6">
              {projects.map((p) => (
                <li key={p.label}>
                  <Link href={p.href} className="text-xs text-[#5a6374] hover:text-[#dc2626] transition-colors leading-relaxed block">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="text-[#dc2626] text-[10px] font-mono font-semibold uppercase tracking-[0.2em] mb-5 pb-2 border-b border-[#1e293b]">
              Contact
            </h3>
            <ul className="space-y-3.5 mb-5">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-3.5 h-3.5 text-[#dc2626] mt-0.5 shrink-0" />
                <span className="text-xs text-[#5a6374] leading-relaxed">P.O. Box 4753, Boroko, NCD, Papua New Guinea</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                <a href="mailto:skaipu@skpl.com.pg" className="text-xs text-[#5a6374] hover:text-[#dc2626] transition-colors">
                  skaipu@skpl.com.pg
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                <a href="tel:+67573199471" className="text-xs text-[#5a6374] hover:text-[#dc2626] transition-colors">
                  (+675) 7319 9471
                </a>
              </li>
            </ul>
            <div className="border-l-2 border-[#dc2626] pl-3 py-1">
              <p className="text-[#dc2626] text-[10px] font-mono font-semibold">24/7 Emergency Line</p>
              <p className="text-[#5a6374] text-[10px] font-mono">Project enquiry? Call now.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#5a6374] font-mono">
            &copy; {new Date().getFullYear()} SK Petroteck Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((l, i) => (
              <span key={l.label} className="flex items-center gap-4">
                <Link href={l.href} className="text-[10px] text-[#5a6374] hover:text-[#8e9aad] font-mono transition-colors">{l.label}</Link>
                {i < legalLinks.length - 1 && <span className="text-[#1e293b] text-xs">·</span>}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-[#5a6374] font-mono hidden md:block">
            Fueling Progress. Ensuring Safety. Building Trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
