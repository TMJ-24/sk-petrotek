import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight, CheckCircle } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "Kukipi Primary School",
    location: "Gulf Province, PNG",
    year: "2024",
    scope: "Primary School Facility",
    image: "/01.jpeg",
    href: "/projects",
  },
  {
    id: "02",
    name: "Miaru Primary School",
    location: "Gulf Province, PNG",
    year: "2024",
    scope: "Primary School Facility",
    image: "/02.jpeg",
    href: "/projects",
  },
  {
    id: "03",
    name: "Savaiviri Primary School",
    location: "Gulf Province, PNG",
    year: "2025",
    scope: "Primary School Facility",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&fit=crop",
    href: "/projects",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#f8fafc] py-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[#dc2626] text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">
              Featured Work
            </span>
            <h2 className="text-xl lg:text-2xl font-black text-[#1a1a2a] tracking-tight mt-1">
              Schools That Changed <span className="text-[#dc2626]">a Province.</span>
            </h2>
            <p className="text-gray-400 text-xs font-mono mt-1">
              Contracted by the Open Member for Kerema, Eastern Gulf Province, PNG
            </p>
          </div>
          <Link href="/projects" className="shrink-0">
            <button className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-[#dc2626] transition-colors">
              View all projects
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Compact 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group relative overflow-hidden border border-gray-200 hover:border-[#dc2626]/40 transition-colors bg-white"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#0f172a]/30" />
                {/* Status badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#0f172a]/80 backdrop-blur-sm px-2.5 py-1">
                  <CheckCircle className="w-3 h-3 text-white" />
                  <span className="text-white text-[10px] font-mono uppercase tracking-wider">{project.year}</span>
                </div>
                {/* Number watermark */}
                <div className="absolute bottom-2 right-3 text-white/20 font-black text-5xl leading-none select-none">
                  {project.id}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-bold text-[#1a1a2a] leading-snug group-hover:text-[#dc2626] transition-colors">
                    {project.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#dc2626]" />
                    <span className="text-xs text-gray-500">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#dc2626]" />
                    <span className="text-xs text-gray-500">{project.scope}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[#dc2626] text-[10px] font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  View details <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Bottom red accent */}
              <div className="h-[2px] w-0 bg-[#dc2626] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
