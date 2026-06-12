import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featured = {
  category: "Featured Update",
  date: "December 2025",
  title: "SK Petroteck Completes Three Schools in Gulf Province with Two More Underway",
  excerpt: "SK Petroteck has successfully completed the Kukipi, Miaru, and Savaiviri Primary Schools, with construction actively progressing on Kukia and Putei Primary Schools. The projects set a new benchmark for rural education infrastructure in Papua New Guinea.",
  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&fit=crop",
  href: "/projects",
};

const news = [
  {
    category: "Projects",
    date: "April 2026",
    title: "Kukia Primary School Construction Reaches Structural Milestone",
    excerpt: "Structural works on the Kukia Primary School are progressing ahead of schedule, with classroom blocks now at roof level.",
    href: "/projects",
  },
  {
    category: "Contracts",
    date: "March 2026",
    title: "SK Petroteck Awarded New Infrastructure Contract in Kerema District",
    excerpt: "A new civil works contract has been awarded under the Open Member for Kerema's community development programme.",
    href: "/contact",
  },
  {
    category: "Community",
    date: "March 2026",
    title: "Community Engagement: Kerema District Schools Handover Ceremony",
    excerpt: "SK Petroteck formally hands over completed school facilities to the Open Member for Kerema and local community leaders.",
    href: "/projects",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-white py-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#dc2626] text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">
                Latest Updates
              </span>
            </div>
            <h2 className="text-xl lg:text-2xl font-black text-[#1a1a2a] tracking-tight">
              News &amp; <span className="text-[#dc2626]">Announcements</span>
            </h2>
          </div>
          <Link href="/projects">
            <button className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-[#dc2626] transition-colors shrink-0">
              View all updates
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Featured large card */}
          <Link href={featured.href} className="lg:col-span-3 group relative h-[420px] overflow-hidden flex flex-col justify-end border border-gray-200 hover:border-gray-300 transition-colors">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-[#111217]/50 to-transparent" />
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Status chip */}
            <div className="absolute top-4 right-4 bg-[#111217]/80 backdrop-blur-sm border border-white/10 px-3 py-1.5">
              <span className="text-[#73bf69] text-[10px] font-mono uppercase tracking-wider">✓ Completed · 2025</span>
            </div>

            <div className="relative z-10 p-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#dc2626] text-[10px] font-mono uppercase tracking-[0.2em]">{featured.category}</span>
                <span className="text-white/40 text-[10px] font-mono">· {featured.date}</span>
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-black leading-tight mb-3 max-w-lg">{featured.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-md mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-[#dc2626] text-xs font-mono uppercase tracking-wider">
                <span>Read more</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* News list */}
          <div className="lg:col-span-2 flex flex-col justify-between bg-white border border-gray-200">
            {news.map((item, i) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group p-6 hover:bg-gray-50 transition-colors ${i < news.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#dc2626] text-[9px] font-mono uppercase tracking-[0.15em] bg-[#dc2626]/10 border border-[#dc2626]/20 px-1.5 py-0.5">
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-[10px] font-mono">{item.date}</span>
                </div>
                <h4 className="text-[#1a1a2a] text-sm font-bold leading-snug mb-2 group-hover:text-[#dc2626] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.excerpt}</p>
                <span className="text-[#dc2626] text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
