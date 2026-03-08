"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  { label: "Digital Advertising", href: "#services" },
  { label: "SEO & SEM", href: "#services" },
  { label: "Branding & Design", href: "#services" },
  { label: "Analytics & Insights", href: "#services" },
  { label: "Social Media", href: "#services" },
  { label: "Email Marketing", href: "#services" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-true-black text-white">
      {/* Top separator - palette only */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-soft-lavender/20 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand block */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="#home"
              className="inline-block font-heading text-2xl font-bold text-white hover:text-soft-lavender transition-colors duration-300"
              aria-label="MindForge Home"
            >
              MindForge.
            </Link>
            <p className="mt-5 text-white/70 text-base leading-relaxed max-w-sm">
              Strategy meets creativity. We build brands that stand out with
              data-driven marketing that grows your business.
            </p>
            <a
              href="mailto:hello@mindforge.com"
              className="mt-6 inline-flex items-center gap-3 text-soft-lavender hover:text-white transition-colors duration-300 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-medium">hello@mindforge.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-5">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-5">
              Services
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 py-1 inline-block"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-white/50 text-sm">
            © {new Date().getFullYear()} MindForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
