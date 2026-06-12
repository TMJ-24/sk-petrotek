"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Main nav */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/Logo.jpeg"
                alt="SK Petroteck Limited"
                width={56}
                height={56}
                className="object-contain mix-blend-multiply"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative flex items-center gap-1 px-4 h-16 text-xs font-semibold uppercase tracking-[0.12em] transition-colors border-b-2",
                      active
                        ? "text-[#dc2626] border-[#dc2626]"
                        : "text-[#1e293b]/60 hover:text-[#1e293b] border-transparent hover:border-[#1e293b]/20"
                    )}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-50" />}
                  </Link>
                );
              })}
            </nav>

            {/* CTA group */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+67573199471"
                className="hidden xl:flex items-center gap-2 text-[#1e293b]/50 hover:text-[#1e293b] transition-colors text-xs font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                (+675) 7319 9471
              </a>
              <div className="hidden xl:block w-px h-5 bg-[#e2e8f0]" />
              <Link href="/contact">
                <button className="h-9 px-6 text-xs font-bold uppercase tracking-[0.12em] bg-[#dc2626] text-white hover:bg-[#b91c1c] transition-colors">
                  Get a Quote
                </button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[#1e293b]/50 hover:text-[#1e293b] transition-colors p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-200",
        mobileOpen ? "max-h-96" : "max-h-0"
      )}>
        <div className="bg-white border-b border-[#e2e8f0]">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] border-b border-[#dde2ea] transition-colors",
                  active
                    ? "text-[#dc2626] bg-[#dc2626]/5 border-l-2 border-l-[#dc2626]"
                    : "text-[#1e293b]/60 hover:text-[#1e293b] hover:bg-[#1e293b]/5"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="p-4">
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <button className="w-full h-10 text-xs font-bold uppercase tracking-[0.12em] bg-[#dc2626] text-white hover:bg-[#b91c1c] transition-colors">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
