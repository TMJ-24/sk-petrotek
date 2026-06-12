import Breadcrumb from "@/components/layout/Breadcrumb";
import { FileText, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Terms of Use | SK Petroteck",
  description: "SK Petroteck's Terms of Use — the conditions governing use of our website and services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the SK Petroteck website (skproteck.com.pg), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.",
      "These terms apply to all visitors, clients, and others who access or use our website.",
    ],
  },
  {
    title: "Use of the Website",
    content: [
      "You may use this website for lawful purposes only. You must not use the site in any way that breaches applicable law or regulation in Papua New Guinea or your jurisdiction.",
      "You must not transmit any unsolicited or unauthorised advertising material, or any material that is false, misleading, or harmful.",
      "We reserve the right to restrict or terminate access to the website at our discretion, without notice.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content on this website — including text, images, logos, graphics, and design — is the property of SK Petroteck Ltd and is protected under applicable copyright law.",
      "You may not reproduce, distribute, modify, or republish any content from this website without our prior written consent.",
      "The SK Petroteck name and logo are trademarks of SK Petroteck Ltd. Unauthorised use is prohibited.",
    ],
  },
  {
    title: "Service Enquiries & Quotations",
    content: [
      "Information provided on this website regarding services, pricing, and availability is for general guidance only and does not constitute a binding offer or contract.",
      "A service agreement is only formed when SK Petroteck issues a written quotation and both parties have signed the relevant service contract.",
      "SK Petroteck reserves the right to decline any service enquiry at its sole discretion.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    content: [
      "This website is provided on an 'as is' basis. We make no warranties, express or implied, regarding the accuracy, completeness, or reliability of any content on this site.",
      "We do not warrant that the website will be available at all times, error-free, or free from viruses or other harmful components.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, SK Petroteck Ltd shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, this website.",
      "Our total liability to you in respect of any claim arising from your use of this website shall not exceed the amount paid by you for a specific service, if any.",
    ],
  },
  {
    title: "Links to Third-Party Sites",
    content: [
      "Our website may contain links to external websites for your convenience. SK Petroteck does not endorse or take responsibility for the content, privacy practices, or accuracy of any third-party sites.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms of Use are governed by and construed in accordance with the laws of Papua New Guinea. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the courts of Papua New Guinea.",
    ],
  },
  {
    title: "Changes to These Terms",
    content: [
      "We may update these Terms of Use at any time. Changes take effect when posted on this page, and the revision date will be updated accordingly. Continued use of the website following any update constitutes acceptance of the revised terms.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <section className="bg-[#0f172a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "Terms of Use" }]} />
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-[#dc2626]/10 border border-[#dc2626]/20 rounded-xl flex items-center justify-center">
                <FileText className="w-3 h-3 text-[#dc2626]" />
              </div>
              <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Legal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
              Terms of <span className="text-[#dc2626]">Use</span>
            </h1>
            <p className="text-white/50 text-sm leading-relaxed">
              Last updated: April 2025
            </p>
            <p className="text-white/60 text-sm leading-relaxed mt-3">
              Please read these Terms of Use carefully before using the SK Petroteck website. These terms govern your access to and use of our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms sections */}
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
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1 mb-5">Contact Us</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#dc2626] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#1a1a2a] mb-0.5">Registered Office</p>
                  <p className="text-xs text-gray-500">SK Petroteck Ltd, Port Moresby, NCD, Papua New Guinea</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#dc2626] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#1a1a2a] mb-0.5">Email</p>
                  <a href="mailto:info@skproteck.com.pg" className="text-xs text-[#dc2626] hover:underline">
                    info@skproteck.com.pg
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
