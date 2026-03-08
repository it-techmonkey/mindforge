"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, audience, and goals to build a clear picture of where you are and where you want to be.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "A tailored roadmap: channels, messaging, and KPIs aligned with your growth targets and budget.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our team brings the plan to life with creative campaigns, optimizations, and continuous testing.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Scaling",
    description:
      "We double down on what works, refine what doesn’t, and scale your wins for long-term growth.",
    icon: TrendingUp,
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-semibold text-lg mb-3">
            How It Works
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal">
            Our 4-Step Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Desktop: horizontal timeline line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-soft-lavender/50" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow h-full flex flex-col">
                  <div className="hidden lg:flex absolute -top-10 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white items-center justify-center font-heading font-bold text-sm shadow-soft">
                    {step.number}
                  </div>
                  <div className="lg:mt-4 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
