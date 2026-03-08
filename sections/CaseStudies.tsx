"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    client: "TechNova",
    problem: "Low lead quality and wasted ad spend in a crowded B2B space.",
    metric: "+320%",
    metricLabel: "qualified leads",
    roas: "5x ROAS",
  },
  {
    client: "GreenLeaf Co.",
    problem: "Brand awareness and conversion rate were below industry benchmarks.",
    metric: "200%",
    metricLabel: "revenue growth",
    roas: "4.2x ROAS",
  },
  {
    client: "UrbanEdge",
    problem: "Inconsistent social presence and low engagement.",
    metric: "12x",
    metricLabel: "engagement rate",
    roas: "3.8x ROAS",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-semibold text-lg mb-3">
            Client Stories
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal">
            Results That Speak
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.client}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 border border-soft-lavender/20"
            >
              <div className="flex items-center gap-2 text-primary mb-4">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">{c.client}</span>
              </div>
              <p className="text-charcoal/80 text-sm mb-6 leading-relaxed">
                {c.problem}
              </p>
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <span className="font-heading text-4xl font-bold text-primary">
                  {c.metric}
                </span>
                <span className="text-charcoal/70 text-sm">{c.metricLabel}</span>
              </div>
              <p className="text-charcoal/80 font-medium">{c.roas}</p>
              <div className="mt-6 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                <span>View case study</span>
                <ArrowUpRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
