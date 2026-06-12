import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0f172a]">

      {/* Full-bleed background image */}
      <Image
        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85&fit=crop"
        alt="Construction and infrastructure operations"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-[#0f172a]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/60 to-[#0f172a]/20" />

      {/* Ghost watermark */}
      <div
        className="text-stroke-amber absolute bottom-0 left-0 leading-none select-none pointer-events-none whitespace-nowrap"
        style={{ fontSize: "22vw", opacity: 0.03 }}
        aria-hidden
      >
        PETROTECK
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-24">
        <div className="max-w-3xl">

          {/* Overline */}
          <div className="animate-fade-up flex items-center gap-3 mb-6">
            <span className="text-white/70 text-[11px] font-mono font-semibold uppercase tracking-[0.25em]">
              Papua New Guinea&apos;s Aviation, Fuel &amp; Construction Specialists
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay font-black tracking-tight leading-tight mb-6">
            <span className="block text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-white">Fueling </span>
              <span className="text-[#dc2626]">Progress.</span>
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-white">Ensuring </span>
              <span className="text-[#dc2626]">Safety.</span>
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-white">Building </span>
              <span className="text-[#dc2626]">Trust.</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up-delay-2 text-white/60 text-base leading-relaxed max-w-xl mb-10">
            SK Petroteck Limited specialises in aviation fuel systems, industrial fuel infrastructure, training &amp; competency, and building construction — delivering quality across Papua New Guinea.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <button className="group inline-flex items-center gap-3 h-12 px-8 bg-[#dc2626] text-white text-sm font-black uppercase tracking-[0.15em] hover:bg-[#b91c1c] transition-colors">
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </Link>
            <Link href="/projects">
              <button className="inline-flex items-center gap-3 h-12 px-8 border border-white/20 text-white/70 text-sm font-semibold uppercase tracking-[0.15em] hover:border-[#dc2626] hover:text-white transition-colors">
                View Projects
              </button>
            </Link>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute right-6 sm:right-10 bottom-8 flex-col items-center gap-2 hidden sm:flex">
        <span className="text-white/30 text-[9px] font-mono uppercase tracking-[0.2em] [writing-mode:vertical-lr]">Scroll</span>
        <div className="relative w-px h-14 bg-white/10 overflow-hidden">
          <div
            className="absolute w-full bg-[#dc2626]"
            style={{ height: "30%", animation: "scroll-dot 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
