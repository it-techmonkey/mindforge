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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-semibold text-lg mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal">
            Services That Drive Results
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((s) => (
            <motion.article
              key={s.title}
              variants={item}
              className="group rounded-2xl bg-off-white/60 hover:bg-white border border-soft-lavender/30 p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                {s.title}
              </h3>
              <p className="text-charcoal/80 leading-relaxed">{s.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
