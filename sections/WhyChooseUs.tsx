"use client";

import { motion } from "framer-motion";
import { Target, Database, Users, FileBarChart } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Performance driven",
    description:
      "Every tactic is tied to your business goals. We focus on outcomes, not vanity metrics.",
  },
  {
    icon: Database,
    title: "Data-backed strategies",
    description:
      "Decisions are informed by analytics, testing, and market research—not guesswork.",
  },
  {
    icon: Users,
    title: "Dedicated team",
    description:
      "You get a consistent team that knows your brand and grows with you.",
  },
  {
    icon: FileBarChart,
    title: "Transparent reporting",
    description:
      "Clear dashboards and regular check-ins so you always know where you stand.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-semibold text-lg mb-3">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal">
            Built for Growth
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl bg-off-white/60 p-8 border border-soft-lavender/20 hover:border-soft-lavender/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                {f.title}
              </h3>
              <p className="text-charcoal/80 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
