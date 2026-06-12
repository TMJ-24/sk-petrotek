import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Mail, Phone, Clock, AlertTriangle } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";

const contactDetails = [
  { icon: MapPin, label: "Address", value: "Port Moresby, National Capital District, Papua New Guinea" },
  { icon: Mail, label: "Email", value: "info@skproteck.com.pg", href: "mailto:info@skproteck.com.pg" },
  { icon: Phone, label: "Phone", value: "+675 XXX XXXX", href: "tel:+675XXXXXXXX" },
  { icon: Clock, label: "Business Hours", value: "Mon – Fri: 8:00AM – 5:00PM | Emergency: 24/7" },
];

export default function ContactPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <section className="bg-[#0f172a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Breadcrumb crumbs={[{ label: "Contact" }]} />
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Get in Touch</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mt-2 mb-4">
              Let&apos;s Build <span className="text-[#dc2626]">Together</span>
            </h1>
            <p className="text-white/60 text-sm leading-relaxed">
              Whether you need a project quote, want to discuss a construction contract, or have an infrastructure enquiry — our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Form panel */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-sm font-bold text-[#1a1a2a] uppercase tracking-wider">Send Us a Message</h2>
                </div>
                <div className="p-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-4">

              {/* Contact details */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-100">
                  <h2 className="text-xs font-mono text-gray-400 uppercase tracking-widest">Contact Details</h2>
                </div>
                <div className="p-5 space-y-4">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <div key={detail.label} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#dc2626]/10 border border-[#dc2626]/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-[#dc2626]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-0.5">{detail.label}</p>
                          {detail.href ? (
                            <a href={detail.href} className="text-xs text-[#1a1a2a] hover:text-[#dc2626] transition-colors">
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-xs text-[#1a1a2a]">{detail.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-[#f8fafc] h-40 flex flex-col items-center justify-center text-center p-6 border-b border-gray-100">
                  <MapPin className="w-8 h-8 text-[#dc2626] mb-2" />
                  <p className="text-[#1a1a2a] font-bold text-sm">Port Moresby, PNG</p>
                  <p className="text-gray-400 text-xs font-mono mt-1">National Capital District</p>
                </div>
                <div className="px-4 py-2">
                  <p className="text-gray-400 text-xs font-mono text-center">Map integration available on request</p>
                </div>
              </div>

              {/* Emergency box */}
              <div className="bg-[#dc2626]/5 border border-[#dc2626]/20 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-[#dc2626]" />
                  <h3 className="text-[#dc2626] font-bold text-sm">Urgent Project Enquiries</h3>
                </div>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">Have an urgent project or contract enquiry? Our team is available to assist across PNG.</p>
                <a
                  href="tel:+675XXXXXXXX"
                  className="inline-flex items-center gap-2 bg-[#dc2626] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#b91c1c] transition-colors uppercase tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
