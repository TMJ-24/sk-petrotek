import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    label: "Who We Are",
    title: "PNG's Infrastructure Partner",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80&fit=crop",
    href: "/about",
  },
  {
    label: "What We Do",
    title: "Aviation, Fuel & Construction",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80&fit=crop",
    href: "/services",
  },
  {
    label: "Our Impact",
    title: "Projects Across PNG.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80&fit=crop",
    href: "/projects",
  },
];

export default function HighlightStrip() {
  return (
    <section className="grid grid-cols-3 h-[240px]">
      {cards.map((card, i) => (
        <Link
          key={card.label}
          href={card.href}
          className={`highlight-card relative overflow-hidden group flex flex-col justify-end ${
            i < cards.length - 1 ? "border-r border-white/10" : ""
          }`}
        >
          {/* Background image */}
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {/* Gradient overlay — strong bottom, dissolve top */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-[#111217]/55 to-[#111217]/10 transition-opacity duration-300 group-hover:from-[#111217]/95" />

          {/* Left amber accent — appears on hover */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <div className="relative z-10 p-5 lg:p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-4 bg-[#dc2626]" />
              <span className="text-[#dc2626] text-[10px] font-mono font-semibold uppercase tracking-[0.2em]">
                {card.label}
              </span>
            </div>
            <h3 className="text-white text-base lg:text-lg font-black leading-tight mb-3">
              {card.title}
            </h3>
            <div className="flex items-center gap-2 text-[#8e9aad] group-hover:text-[#dc2626] transition-colors text-[10px] font-mono uppercase tracking-wider">
              <span>Learn more</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
