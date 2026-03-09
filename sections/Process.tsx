"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "We dive deep into your business, audience, and goals to build a clear picture of where you are and where you want to be.",
    icon: Search,
  },
  {
    number: "2",
    title: "Strategy",
    description:
      "A tailored roadmap: channels, messaging, and KPIs aligned with your growth targets and budget.",
    icon: Lightbulb,
  },
  {
    number: "3",
    title: "Execution",
    description:
      "Our team brings the plan to life with creative campaigns, optimizations, and continuous testing.",
    icon: Rocket,
  },
  {
    number: "4",
    title: "Scaling",
    description:
      "We double down on what works, refine what doesn't, and scale your wins for long-term growth.",
    icon: TrendingUp,
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-24 bg-off-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-soft-lavender/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
            How it works
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal">
            Our 4-step process
          </h2>
        </motion.header>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-soft-lavender/50" />
          <ul className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-14 md:pl-20"
              >
                <div className="absolute left-2 md:left-4 top-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary text-white flex items-center justify-center font-heading font-semibold text-sm shadow-soft z-10">
                  {step.number}
                </div>
                <div className="bg-[#FFFFFF] rounded-lg p-6 md:p-8 border border-soft-lavender/20 hover:border-soft-lavender/50 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-charcoal/75 text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
