"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Search,
  Palette,
  BarChart3,
  Share2,
  Mail,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description:
      "Targeted PPC, social ads, and programmatic campaigns that maximize your ROI.",
  },
  {
    icon: Search,
    title: "SEO & SEM",
    description:
      "Dominate search rankings with technical SEO, content strategy, and paid search.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description:
      "Craft a memorable identity with logo design, brand guidelines, and creative assets.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Data-driven decisions powered by advanced tracking, reporting, and market research.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Engage your audience with strategic content, community management, and influencer partnerships.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "High-converting email campaigns with automation, segmentation, and A/B testing.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-24 bg-[#FFFFFF] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-soft-lavender/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 lg:pl-12">
        <motion.header
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-left"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
            What we do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal leading-tight max-w-lg">
            Services that drive results
          </h2>
        </motion.header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative pl-6 border-l-2 border-soft-lavender/40 hover:border-primary/60 transition-colors duration-300 py-4 pr-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                {s.title}
              </h3>
              <p className="text-charcoal/75 text-[15px] leading-relaxed">
                {s.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
