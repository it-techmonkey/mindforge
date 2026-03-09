"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16"
        >
          {/* Brand block */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block tap-highlight-none">
              <Link
                href="#home"
                className="font-heading text-2xl font-bold text-white hover:text-soft-lavender transition-colors duration-300 block"
                aria-label="MindForge Home"
              >
                MindForge.
              </Link>
            </motion.div>
            <p className="mt-5 text-white/70 text-base leading-relaxed max-w-sm">
              Strategy meets creativity. We build brands that stand out with
              data-driven marketing that grows your business.
            </p>
            <motion.a
              href="mailto:hello@mindforge.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex items-center gap-3 text-soft-lavender hover:text-white transition-colors duration-300 group tap-highlight-none"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-medium">hello@mindforge.com</span>
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.div whileTap={{ scale: 0.98 }} className="tap-highlight-none inline-block">
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 py-2 -my-1 px-1 -mx-1 rounded-lg hover:bg-white/5 active:bg-white/10 inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-5">
              Services
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <motion.div whileTap={{ scale: 0.98 }} className="tap-highlight-none inline-block">
                    <Link
                      href={s.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 py-2 -my-1 px-1 -mx-1 rounded-lg hover:bg-white/5 active:bg-white/10 inline-block"
                    >
                      {s.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

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
