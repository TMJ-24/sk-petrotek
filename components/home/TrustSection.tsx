import { ShieldCheck, Clock, Users, ThumbsUp, Quote } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Aviation-Certified Team",
    desc: "Our specialists are trained to ICAO and PNG CASSI standards for aviation fuel handling, safety, and system compliance.",
    color: "#dc2626",
  },
  {
    icon: Clock,
    title: "24/7 Operational Support",
    desc: "Aviation and fuel operations don't stop. Our team is available around the clock to keep critical systems running safely.",
    color: "#dc2626",
  },
  {
    icon: Users,
    title: "Trusted by Leading Brands",
    desc: "Contracted by Airlines PNG, Puma Energy, ADF, Trans Wonderland, WR Carpenters, and government agencies across PNG.",
    color: "#dc2626",
  },
  {
    icon: ThumbsUp,
    title: "Guaranteed Quality",
    desc: "Every project and service is backed by our quality commitment, transparent reporting, and full defects liability.",
    color: "#dc2626",
  },
];

const testimonials = [
  {
    quote: "SK Petroteck delivered the Moro Airfield fuel management works safely and on schedule. Their aviation fuel expertise is outstanding.",
    author: "Trans Wonderland Ltd",
    role: "Moro Airfield, Southern Highlands, PNG",
    tag: "Aviation Client",
    tagColor: "#dc2626",
  },
  {
    quote: "SK Petroteck delivered our school construction projects on time and above expectations. Their professionalism and site management were outstanding.",
    author: "Office of the Open Member for Kerema",
    role: "Gulf Province, Papua New Guinea",
    tag: "Construction Client",
    tagColor: "#dc2626",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white border-b border-gray-200">

      {/* Trust points */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="mb-7">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[#dc2626] text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">Why SK Petroteck</span>
          </div>
          <h2 className="text-xl lg:text-2xl font-black text-[#1a1a2a] tracking-tight">
            Built on Trust &amp; <span className="text-[#dc2626]">Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-[#f8fafc] border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 shrink-0 flex items-center justify-center border-2 rounded-xl"
                    style={{ backgroundColor: `${point.color}12`, borderColor: `${point.color}40` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: point.color }} />
                  </div>
                  <h3 className="text-sm font-bold text-[#1a1a2a]">{point.title}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-start gap-4"
              >
                <Quote className="w-4 h-4 text-[#dc2626]/30 shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[#1a1a2a] font-bold text-xs">{t.author}</p>
                      <p className="text-gray-400 text-[10px] font-mono">{t.role}</p>
                    </div>
                    <span
                      className="text-[9px] font-mono px-2 py-0.5 border whitespace-nowrap shrink-0"
                      style={{ color: t.tagColor, borderColor: `${t.tagColor}40`, backgroundColor: `${t.tagColor}10` }}
                    >
                      {t.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
