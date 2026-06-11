import Image from "next/image";
import { MapPin, Calendar, Building2, CheckCircle, Clock, Users, Award } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";

const completedProjects = [
  {
    id: "01",
    name: "Kukipi Primary School",
    location: "Gulf Province, PNG",
    year: "2024",
    scope: "Primary School Facility",
    status: "Completed",
    contract: "Open Member for Kerema",
    image: "/01.jpeg",
    description: "Successfully delivered a fully equipped primary school facility for the Kukipi community. The project included classroom blocks, ablution facilities, a water supply system, and paved access pathways — completed within schedule under the Open Member for Kerema's education development initiative.",
    highlights: [
      "Fully furnished classrooms",
      "Ablution blocks and water supply",
      "External paving and pathways",
      "Electrical installation throughout",
      "Completed on time and within budget",
    ],
  },
  {
    id: "02",
    name: "Miaru Primary School",
    location: "Gulf Province, PNG",
    year: "2024",
    scope: "Primary School Facility",
    status: "Completed",
    contract: "Open Member for Kerema",
    image: "/02.jpeg",
    description: "Delivered a modern primary school facility for the Miaru community, providing students with quality learning infrastructure. SK Proteck collaborated closely with local community leaders throughout the build to ensure the facility met the needs of the district.",
    highlights: [
      "Modern classroom blocks",
      "Dedicated library space",
      "Community consultation process",
      "Solar lighting integration",
      "Local materials and labour sourced",
    ],
  },
  {
    id: "03",
    name: "Savaiviri Primary School",
    location: "Gulf Province, PNG",
    year: "2025",
    scope: "Primary School Facility",
    status: "Completed",
    contract: "Open Member for Kerema",
    description: "Completed the Savaiviri Primary School facility, setting a new benchmark for rural education infrastructure in Gulf Province. The facility is designed to serve the growing student population and supports the district's long-term education goals.",
    highlights: [
      "Full classroom blocks",
      "Administration and staff facilities",
      "Solar lighting integration",
      "Rainwater harvesting system",
      "Fully handed over to community",
    ],
  },
];

const inProgressProjects = [
  {
    id: "04",
    name: "Kukia Primary School",
    location: "Gulf Province, PNG",
    scope: "Primary School Facility",
    status: "In Progress",
    contract: "Open Member for Kerema",
    description: "Currently under active construction, the Kukia Primary School will provide the Kukia community with a modern educational facility. Works are progressing on schedule with classroom blocks and associated infrastructure underway.",
    highlights: [
      "Classroom block construction",
      "Ablution and water facilities",
      "Site works and access pathways",
      "Electrical and solar installation",
    ],
  },
  {
    id: "05",
    name: "Putei Primary School",
    location: "Gulf Province, PNG",
    scope: "Primary School Facility",
    status: "In Progress",
    contract: "Open Member for Kerema",
    description: "The Putei Primary School is currently in active construction phase. SK Proteck is working closely with the local community and contracting authority to ensure timely and quality delivery of this important education facility.",
    highlights: [
      "Classroom block construction",
      "Ablution and water facilities",
      "Site works underway",
      "Community engagement ongoing",
    ],
  },
];

const metrics = [
  { label: "Total Projects", value: "5", sub: "Gulf Province, PNG", color: "#dc2626" },
  { label: "Completed", value: "3", sub: "Fully handed over", color: "#16a34a" },
  { label: "In Progress", value: "2", sub: "Active construction", color: "#d97706" },
  { label: "Delivery Rate", value: "100%", sub: "On time, every time", color: "#dc2626" },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <section className="bg-[#0f172a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "Projects" }]} />
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Our Projects</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mt-2 mb-4">
              Building Futures <span className="text-[#dc2626]">in Gulf Province</span>
            </h1>
            <p className="text-white/60 text-sm leading-relaxed">
              Contracted by the Open Member for Kerema, SK Proteck has delivered three completed school projects and has two more currently under construction across Gulf Province.
            </p>
          </div>

          {/* Metrics */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="bg-[#131c2e] border border-[#1e293b] rounded-xl px-6 py-5">
                <div className="w-8 h-0.5 rounded-full mb-4" style={{ backgroundColor: m.color }} />
                <p className="text-4xl font-black leading-none tracking-tight mb-3" style={{ color: m.color }}>{m.value}</p>
                <p className="text-white/60 text-[10px] font-mono uppercase tracking-[0.18em] leading-tight">{m.label}</p>
                <p className="text-white/25 text-[10px] font-mono mt-1">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Project Details</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Completed Projects</h2>
          </div>
          <div className="space-y-5">
            {completedProjects.map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm transition-all">
                <div className="flex flex-col lg:flex-row">
                  {/* Left panel */}
                  <div className="bg-[#f8fafc] lg:w-52 p-6 flex flex-col justify-between border-r border-gray-200">
                    <div>
                      <span className="text-5xl font-black text-gray-100 leading-none select-none">{project.id}</span>
                      <div className="flex items-center gap-1.5 mt-3 bg-[#dc2626]/10 border border-[#dc2626]/20 rounded-lg px-2 py-1 w-fit">
                        <CheckCircle className="w-3 h-3 text-[#dc2626]" />
                        <span className="text-xs text-[#dc2626] font-mono">{project.status}</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-start gap-2 text-xs text-gray-500">
                        <MapPin className="w-3 h-3 text-[#dc2626] mt-0.5 shrink-0" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3 text-[#dc2626] shrink-0" />
                        Completed {project.year}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Building2 className="w-3 h-3 text-[#dc2626] shrink-0" />
                        {project.scope}
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-500">
                        <Award className="w-3 h-3 text-[#dc2626] mt-0.5 shrink-0" />
                        {project.contract}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    {"image" in project && project.image && (
                      <div className="relative h-48 w-full mb-5 overflow-hidden rounded-lg">
                        <Image
                          src={project.image as string}
                          alt={project.name}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                      </div>
                    )}
                    <h3 className="text-base font-bold text-[#1a1a2a] mb-3">{project.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>
                    <div>
                      <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Users className="w-3 h-3 text-[#dc2626]" />
                        Project Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
                            <CheckCircle className="w-3 h-3 text-[#dc2626] shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Progress Projects */}
      <section className="py-8 border-b border-gray-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Active Construction</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">In Progress</h2>
          </div>
          <div className="space-y-5">
            {inProgressProjects.map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm transition-all">
                <div className="flex flex-col lg:flex-row">
                  {/* Left panel */}
                  <div className="bg-[#f8fafc] lg:w-52 p-6 flex flex-col justify-between border-r border-gray-200">
                    <div>
                      <span className="text-5xl font-black text-gray-100 leading-none select-none">{project.id}</span>
                      <div className="flex items-center gap-1.5 mt-3 bg-amber-50 border border-amber-200 rounded-lg px-2 py-1 w-fit">
                        <Clock className="w-3 h-3 text-amber-600" />
                        <span className="text-xs text-amber-600 font-mono">{project.status}</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-start gap-2 text-xs text-gray-500">
                        <MapPin className="w-3 h-3 text-[#dc2626] mt-0.5 shrink-0" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Building2 className="w-3 h-3 text-[#dc2626] shrink-0" />
                        {project.scope}
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-500">
                        <Award className="w-3 h-3 text-[#dc2626] mt-0.5 shrink-0" />
                        {project.contract}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <h3 className="text-base font-bold text-[#1a1a2a] mb-3">{project.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>
                    <div>
                      <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Users className="w-3 h-3 text-[#dc2626]" />
                        Scope of Works
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
                            <Clock className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0f172a] rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Empowering Communities Through Construction
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-sm leading-relaxed">
              Each school built represents hundreds of students gaining access to quality education in Papua New Guinea&apos;s Gulf Province — a direct result of SK Proteck&apos;s commitment to community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
