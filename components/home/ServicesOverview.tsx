import Link from "next/link";
import { Plane, Droplets, GraduationCap, HardHat, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Plane,
    tag: "Aviation",
    title: "Aviation Fuel Systems",
    description: "Design, installation, and maintenance of aviation fuel storage and distribution systems to ICAO and PNG CASSI standards — airside, safely.",
    features: ["Fuel Storage & Distribution", "Refueling Equipment Install", "ICAO/CASSI Compliance", "Quality Management"],
    href: "/services",
    accentColor: "#dc2626",
  },
  {
    icon: Droplets,
    tag: "Industrial",
    title: "Industrial Fuel Infrastructure",
    description: "End-to-end delivery of industrial fuel depots, bulk storage tanks, pipeline systems, and commissioning for energy and resources clients across PNG.",
    features: ["Fuel Depot Construction", "Bulk Storage Tanks", "Pipeline Installation", "System Commissioning"],
    href: "/services",
    accentColor: "#dc2626",
  },
  {
    icon: GraduationCap,
    tag: "Training",
    title: "Training & Competency",
    description: "ICAO-aligned training programmes for aviation fuel handling, safety procedures, and emergency response — issued with certificates of competency.",
    features: ["Aviation Fuel Handling", "Safety & Emergency Procedures", "Competency Assessment", "On-Site Delivery"],
    href: "/services",
    accentColor: "#dc2626",
  },
  {
    icon: HardHat,
    tag: "Construction",
    title: "Building & Construction",
    description: "Quality civil and building construction for schools, community facilities, and government-contracted infrastructure across Papua New Guinea.",
    features: ["School & Facility Construction", "Civil & Structural Works", "Water & Electrical Systems", "Govt. Contract Execution"],
    href: "/projects",
    accentColor: "#dc2626",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-[#f8fafc] py-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-7">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#dc2626] text-xs font-mono font-semibold uppercase tracking-[0.2em]">
                Service Catalogue
              </span>
            </div>
            <h2 className="text-xl lg:text-2xl font-black text-[#1a1a2a] tracking-tight leading-tight max-w-xl">
              Four Specialist <span className="text-[#dc2626]">Verticals</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mt-3">
              From aviation fuel systems to school construction, SK Petroteck delivers safe, compliant, and quality outcomes across Papua New Guinea.
            </p>
          </div>
          <Link href="/services" className="shrink-0">
            <button className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gray-500 hover:text-[#dc2626] transition-colors">
              View full catalogue
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-5 border-2 rounded-xl transition-colors"
                    style={{ backgroundColor: `${service.accentColor}12`, borderColor: `${service.accentColor}40` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.accentColor }} />
                  </div>

                  <h3 className="text-base font-bold text-[#1a1a2a] mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <div className="w-3 h-px shrink-0" style={{ backgroundColor: service.accentColor }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-between">
                  <Link href={service.href}>
                    <button className="group/btn flex items-center gap-2 text-sm font-mono uppercase tracking-wider transition-colors hover:opacity-80" style={{ color: service.accentColor }}>
                      Learn more
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </Link>
                  <span className="text-xs font-mono px-2 py-1 border rounded-sm" style={{ color: service.accentColor, borderColor: `${service.accentColor}40`, backgroundColor: `${service.accentColor}08` }}>
                    {service.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
