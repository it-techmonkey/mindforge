"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

const faqs = [
  {
    value: "what-services",
    question: "What marketing services do you offer?",
    answer:
      "We offer full-funnel marketing: digital advertising (PPC, social, programmatic), SEO & SEM, branding and design, analytics and insights, social media management, and email marketing. We can run a single channel or your entire growth stack.",
  },
  {
    value: "how-pricing",
    question: "How do you structure pricing?",
    answer:
      "We typically work on a combination of monthly retainer and performance-based elements, depending on scope. Every engagement starts with a strategy call so we can propose a model that fits your goals and budget.",
  },
  {
    value: "timeline",
    question: "How long until we see results?",
    answer:
      "It depends on the channels and goals. Paid campaigns can show early signals in weeks; SEO and brand work often take a few months to compound. We set clear milestones and report regularly so you always know where you stand.",
  },
  {
    value: "who-we-work-with",
    question: "Who do you work with?",
    answer:
      "We work with B2B and B2C brands of all sizes—from startups to mid-market and enterprise. Our sweet spot is companies that are ready to invest in growth and want a partner that combines strategy with execution.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-off-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-soft-lavender/30 to-transparent" aria-hidden />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-3xl md:text-4xl font-semibold text-charcoal text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion className="bg-[#FFFFFF] rounded-2xl shadow-soft p-6 md:p-8">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              trigger={faq.question}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
