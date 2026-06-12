import type { Metadata } from "next";
import { Target, Eye, ShieldCheck, Award, Users, Zap, Heart, TrendingUp } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us | SK Petroteck Limited",
  description: "SK Petroteck Limited — Papua New Guinea's specialist in aviation fuel systems, industrial fuel infrastructure, training & competency, and building construction. Incorporated 2023, built on 20+ years of industry leadership.",
};

const values = [
  { icon: ShieldCheck, title: "Safety", desc: "Safety is non-negotiable in aviation and fuel operations. We uphold the highest standards in every system we install, every site we manage, and every course we deliver." },
  { icon: ShieldCheck, title: "Integrity", desc: "Full transparency and the highest professional standards in every client engagement, contract, and service delivery." },
  { icon: Award, title: "Quality", desc: "We do not compromise on quality. Every project is delivered to specification — aviation-compliant, structurally sound, and built to last." },
  { icon: Heart, title: "Partnership", desc: "We work alongside our clients as long-term partners — sharing knowledge, building local capability, and delivering outcomes that matter." },
  { icon: TrendingUp, title: "Innovation", desc: "We continuously improve our methods, adopt best practices, and bring modern fuel and construction solutions to Papua New Guinea." },
];

const team = [
  { name: "Sevesoa Kaipu", role: "Director", initials: "SK" },
  { name: "John Kaipu", role: "Director", initials: "JK" },
  { name: "Kevin L Sevesoa", role: "Director", initials: "KS" },
];

const milestones = [
  { year: "2023", event: "SK Petroteck Limited incorporated — IPA Registration No. 1-104989" },
  { year: "2023", event: "First school construction contracts secured under Open Member for Kerema" },
  { year: "2024", event: "Kukipi and Miaru Primary Schools delivered — Gulf Province, PNG" },
  { year: "2025", event: "Aviation fuel contract awarded — Trans Wonderland, Moro Airfield" },
  { year: "2025", event: "Savaiviri Primary School completed; Kukia and Putei Primary Schools commenced" },
  { year: "2025", event: "WR Carpenters fuel facility installation — Port Moresby, NCD" },
];

const certs = [
  { icon: Award, label: "IPA Registered", sub: "Reg. No. 1-104989" },
  { icon: ShieldCheck, label: "TIN Compliant", sub: "PNG Tax Authority" },
  { icon: Users, label: "Govt. Contractor", sub: "Kerema & NCD Districts" },
  { icon: Zap, label: "100% PNG Owned", sub: "Nationally Owned" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <section className="bg-[#0f172a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "About" }]} />
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">About SK Petroteck</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mt-2 mb-4">
              Incorporated 2023. <span className="text-[#dc2626]">Built on 20+ Years Expertise.</span>
            </h1>
            <p className="text-white/60 text-sm leading-relaxed">
              SK Petroteck Limited is a 100% Papua New Guinea–owned company specialising in aviation fuel systems, industrial fuel infrastructure, training &amp; competency, and building construction. Our leadership team brings over 20 years of combined industry experience from Shell, Puma Energy, and InterOil.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#dc2626]/10 border border-[#dc2626]/20 rounded-xl flex items-center justify-center">
                  <Target className="w-4 h-4 text-[#dc2626]" />
                </div>
                <h2 className="text-sm font-bold text-[#1a1a2a] uppercase tracking-wider">Our Mission</h2>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm">
                To deliver safe, compliant, and quality aviation fuel systems, industrial fuel infrastructure, training programmes, and construction projects across Papua New Guinea — fueling progress and building trust with every engagement.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#dc2626]/10 border border-[#dc2626]/20 rounded-xl flex items-center justify-center">
                  <Eye className="w-4 h-4 text-[#dc2626]" />
                </div>
                <h2 className="text-sm font-bold text-[#1a1a2a] uppercase tracking-wider">Our Vision</h2>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm">
                To be Papua New Guinea&apos;s most trusted provider of aviation fuel systems, industrial fuel infrastructure, and quality construction services — recognised for safety, integrity, and the communities we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-8 border-b border-gray-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Our Journey</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Company Milestones</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map((m, i) => (
              <div key={m.year + i} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#dc2626] rounded-xl flex items-center justify-center">
                    <span className="text-white font-black text-[10px] leading-tight text-center">{m.year}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">Step {String(i + 1).padStart(2, "0")}</p>
                  <p className="text-sm font-medium text-[#1a1a2a] leading-snug">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#dc2626]/30 hover:shadow-sm transition-all"
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-4 bg-[#dc2626]/10 border border-[#dc2626]/20">
                    <Icon className="w-4 h-4 text-[#dc2626]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1a1a2a] mb-2">{v.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-8 border-b border-gray-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Leadership</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Board of Directors</h2>
            <p className="text-gray-500 text-sm mt-1">Over 20 years of combined experience in Shell, Puma Energy, and InterOil operations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {team.map((member) => (
              <div key={member.name} className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:border-[#dc2626]/30 hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#0f172a] flex items-center justify-center shrink-0 text-white font-black text-sm">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a2a] text-sm">{member.name}</h3>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Credentials</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Certifications & Registrations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certs.map((cert) => {
              const Icon = cert.icon;
              return (
                <div key={cert.label} className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:border-[#dc2626]/30 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 bg-[#dc2626]/10 border border-[#dc2626]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[#dc2626]" />
                  </div>
                  <p className="text-[#1a1a2a] font-semibold text-xs">{cert.label}</p>
                  <p className="text-gray-400 text-xs font-mono mt-1">{cert.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
