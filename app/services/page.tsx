import { Plane, Droplets, GraduationCap, HardHat, CheckCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";

const services = [
  {
    icon: Plane,
    title: "Aviation Fuel Systems",
    tag: "Aviation",
    description: "Design, installation, commissioning, and maintenance of aviation fuel storage and distribution systems to ICAO and PNG CASSI standards — keeping airside operations safe and compliant.",
    features: [
      "Airside fuel storage design & installation",
      "Aviation refueling equipment setup",
      "Fuel system commissioning & testing",
      "ICAO and PNG CASSI compliance",
      "Fuel quality management & sampling",
    ],
  },
  {
    icon: Droplets,
    title: "Industrial Fuel Infrastructure",
    tag: "Industrial",
    description: "End-to-end delivery of industrial fuel depots, bulk storage tanks, pipelines, and fuel distribution systems for energy, resources, and commercial clients across Papua New Guinea.",
    features: [
      "Fuel depot design & construction",
      "Bulk storage tank installation",
      "Pipeline installation & commissioning",
      "Fuel system testing & certification",
      "Preventive maintenance programmes",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Competency",
    tag: "Training",
    description: "ICAO-aligned training programmes for aviation fuel handling, safety procedures, emergency response, and fuel operations — delivered on-site with certificates of competency issued.",
    features: [
      "Aviation fuel handling training",
      "Fuel safety & emergency procedures",
      "ICAO-compliant competency assessment",
      "On-site delivery at client facilities",
      "Certificate of competency issuance",
    ],
  },
  {
    icon: HardHat,
    title: "Building & Construction",
    tag: "Construction",
    description: "Quality civil and building construction for government-contracted education infrastructure, community facilities, and associated civil works across Papua New Guinea.",
    features: [
      "Primary school facility construction",
      "Civil & structural works",
      "Ablution & water supply systems",
      "Solar & electrical installation",
      "Government contract execution",
    ],
  },
];

const steps = [
  { step: "01", title: "Enquiry", desc: "Contact us via phone, email, or our website form with your project requirements." },
  { step: "02", title: "Assessment", desc: "We assess your site, scope, and technical requirements in detail." },
  { step: "03", title: "Proposal", desc: "You receive a detailed scope of works and fixed-price quotation." },
  { step: "04", title: "Delivery", desc: "Our specialist team executes — safely, on time, and to specification." },
];

const clients = [
  "Airlines PNG",
  "Puma Energy PNG Ltd",
  "ADF",
  "Trans Wonderland",
  "WR Carpenters",
  "Liquid International",
  "Fast Air Services",
  "NGI Containers",
  "Harness Energy Services",
  "BSP Group",
  "NFA PNG",
  "Kerema DDA",
];

export default function ServicesPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <section className="bg-[#0f172a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "Services" }]} />
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Service Catalogue</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mt-2 mb-4">
              Four Specialist <span className="text-[#dc2626]">Service Verticals</span>
            </h1>
            <p className="text-white/60 text-sm leading-relaxed">
              SK Petroteck Limited delivers aviation fuel systems, industrial fuel infrastructure, training &amp; competency, and building construction — safely and to specification across Papua New Guinea.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-white border border-gray-200 rounded-xl hover:border-[#dc2626]/30 hover:shadow-sm transition-all overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#dc2626]/10 border border-[#dc2626]/20">
                        <Icon className="w-4 h-4 text-[#dc2626]" />
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-[#dc2626]/30 bg-[#dc2626]/5 text-[#dc2626]">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#1a1a2a] mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-1.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-gray-500">
                          <CheckCircle className="w-3 h-3 text-[#dc2626] shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-8 border-b border-gray-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">How We Work</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Our Service Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={step.step} className="relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-all">
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 z-10" />
                )}
                <div className="text-4xl font-black text-[#dc2626]/15 mb-3 font-mono">{step.step}</div>
                <h3 className="font-bold text-[#1a1a2a] text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Who We Serve</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Our Clients</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {clients.map((client) => (
              <span
                key={client}
                className="text-xs font-mono px-3 py-1.5 border border-gray-200 rounded-full text-gray-600 bg-[#f8fafc] hover:border-[#dc2626]/30 hover:text-[#dc2626] transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
