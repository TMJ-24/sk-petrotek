"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CheckCircle, Send, AlertCircle, Loader2 } from "lucide-react";

// Get your free access key at https://web3forms.com — enter skaipu@skpl.com.pg
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const serviceOptions = [
  "Aviation Fuel Systems",
  "Industrial Fuel Infrastructure",
  "Training & Competency",
  "Building & Construction",
  "Other",
];

const inputClass = "w-full h-9 bg-white border border-gray-200 rounded-lg px-3 text-xs text-[#1a1a2a] placeholder:text-gray-400 focus:outline-none focus:border-[#dc2626] transition-colors";
const labelClass = "text-xs font-mono text-gray-400 uppercase tracking-widest";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Enquiry — ${form.service || "General"} | ${form.name}`,
          from_name: "SK Petroteck Website",
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          company: form.company || "Not provided",
          service: form.service,
          message: form.message,
        }),
      });

      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-14 h-14 bg-[#dc2626]/10 border border-[#dc2626]/20 rounded-xl flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-[#dc2626]" />
        </div>
        <h3 className="text-base font-bold text-[#1a1a2a]">Message Sent</h3>
        <p className="text-gray-400 max-w-sm text-xs font-mono">
          Thank you for reaching out. Our team will get back to you within one business day.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
          }}
          className="h-8 px-4 text-xs font-mono uppercase tracking-wider border border-gray-200 text-gray-500 rounded-lg hover:border-[#dc2626] hover:text-[#dc2626] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-[#dc2626]">*</span>
          </label>
          <input id="name" name="name" value={form.name} onChange={handleChange}
            placeholder="John Smith" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className={labelClass}>Company / Organisation</label>
          <input id="company" name="company" value={form.company} onChange={handleChange}
            placeholder="Your Company Ltd" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-[#dc2626]">*</span>
          </label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="john@company.com" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
            placeholder="+675 XXX XXXX" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className={labelClass}>
          Service of Interest <span className="text-[#dc2626]">*</span>
        </label>
        <select id="service" name="service" value={form.service} onChange={handleChange} required
          className="w-full h-9 bg-white border border-gray-200 rounded-lg px-3 text-xs text-[#1a1a2a] focus:outline-none focus:border-[#dc2626] transition-colors">
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-[#dc2626]">*</span>
        </label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange}
          placeholder="Tell us about your project or requirements..."
          rows={5} required
          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-[#1a1a2a] placeholder:text-gray-400 focus:outline-none focus:border-[#dc2626] transition-colors resize-none" />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          Something went wrong. Please try again or email us directly at skaipu@skpl.com.pg.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group w-full h-10 inline-flex items-center justify-center gap-2 bg-[#dc2626] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#b91c1c] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center font-mono">
        By submitting you agree to our privacy policy. We never share your details.
      </p>
    </form>
  );
}
