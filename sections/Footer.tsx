"use client";

import Link from "next/link";
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  { label: "Digital Advertising" },
  { label: "SEO & SEM" },
  { label: "Branding & Design" },
  { label: "Analytics & Insights" },
  { label: "Social Media" },
  { label: "Email Marketing" },
];

const social = [
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-true-black text-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link
              href="#home"
              className="font-heading text-2xl font-bold text-white hover:text-soft-lavender transition-colors"
            >
              MindForge.
            </Link>
            <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-xs">
              Strategy meets creativity. We build brands that stand out with
              data-driven marketing that grows your business.
            </p>
            <a
              href="mailto:hello@mindforge.com"
              className="mt-4 inline-flex items-center gap-2 text-soft-lavender hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" aria-hidden />
              <span>hello@mindforge.com</span>
            </a>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <span className="text-white/70">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-lavender"
                  aria-label={s.label}
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} MindForge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
