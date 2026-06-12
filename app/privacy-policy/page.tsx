import Breadcrumb from "@/components/layout/Breadcrumb";
import { Shield, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | SK Petroteck",
  description: "SK Petroteck's Privacy Policy — how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you submit a contact form or request a quote, we collect your name, email address, phone number, company name, and the details of your enquiry.",
      "We may also collect technical information such as your IP address, browser type, and pages visited when you use our website, solely for analytics and security purposes.",
      "We do not collect sensitive personal information unless it is voluntarily provided by you in the course of a service engagement.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To respond to your enquiries, provide quotations, and deliver the services you have requested.",
      "To communicate updates about your service requests, project progress, or construction milestones.",
      "To improve our website and service offerings based on aggregated, non-identifiable usage data.",
      "We do not sell, rent, or trade your personal information to third parties.",
    ],
  },
  {
    title: "Data Storage & Security",
    content: [
      "Your information is stored securely on servers located in the Asia-Pacific region. We use industry-standard encryption and access controls to protect your data.",
      "We retain your personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable Papua New Guinea law.",
      "In the event of a data breach that may affect your rights, we will notify you as soon as reasonably practicable.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Our website uses essential cookies to ensure basic functionality. We do not use tracking or advertising cookies.",
      "You may disable cookies in your browser settings; however, some features of the website may not function correctly as a result.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "We may use third-party tools such as email providers and analytics platforms to operate our website and communicate with clients. These providers are contractually bound to handle your data securely and solely for the purposes we specify.",
      "Our website may contain links to external sites. We are not responsible for the privacy practices of those sites.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to request access to the personal information we hold about you, to request corrections, or to request deletion where no legal obligation requires us to retain it.",
      "To exercise any of these rights, please contact us using the details below. We will respond within 30 days.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. The date of the most recent revision will be displayed at the top of this page. Continued use of our website following any update constitutes acceptance of the revised policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <section className="bg-[#0f172a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "Privacy Policy" }]} />
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-[#dc2626]/10 border border-[#dc2626]/20 rounded-xl flex items-center justify-center">
                <Shield className="w-3 h-3 text-[#dc2626]" />
              </div>
              <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Legal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
              Privacy <span className="text-[#dc2626]">Policy</span>
            </h1>
            <p className="text-white/50 text-sm leading-relaxed">
              Last updated: April 2025
            </p>
            <p className="text-white/60 text-sm leading-relaxed mt-3">
              SK Petroteck Ltd is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you interact with our website or services.
            </p>
          </div>
        </div>
      </section>

      {/* Policy sections */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-8">
            {sections.map((section, i) => (
              <div key={section.title} className="border-b border-gray-100 pb-8 last:border-0">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-7 h-7 bg-[#dc2626] rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white font-black text-[10px]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="text-base font-bold text-[#1a1a2a] tracking-tight">{section.title}</h2>
                </div>
                <div className="pl-11 space-y-3">
                  {section.content.map((para, j) => (
                    <p key={j} className="text-sm text-gray-500 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section className="border-t border-gray-200 bg-[#f8fafc] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Questions?</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1 mb-5">Contact Our Data Officer</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#dc2626] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#1a1a2a] mb-0.5">Registered Office</p>
                  <p className="text-xs text-gray-500">SK Petroteck Ltd, P.O. Box 4753, Boroko, NCD, Papua New Guinea</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#dc2626] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#1a1a2a] mb-0.5">Email</p>
                  <a href="mailto:skaipu@skpl.com.pg" className="text-xs text-[#dc2626] hover:underline">
                    skaipu@skpl.com.pg
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
