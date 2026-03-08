"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "MindForge completely transformed our digital presence. Their strategic approach combined with creative execution doubled our leads in just 3 months.",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechNova",
  },
  {
    quote:
      "Working with MindForge felt like having an in-house team that truly understands our brand. The results speak for themselves.",
    name: "James Carter",
    role: "Founder",
    company: "GreenLeaf Co.",
  },
  {
    quote:
      "Their creativity is unmatched. Every campaign they delivered exceeded our expectations and resonated deeply with our audience.",
    name: "Priya Sharma",
    role: "Marketing Head",
    company: "UrbanEdge",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-soft-lavender/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-semibold text-lg mb-3">
            Client Stories
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-2xl bg-soft-lavender/20 border border-soft-lavender/40 p-8 flex flex-col h-full transition-all duration-300 ease-out hover:-translate-y-6 hover:scale-[1.02] hover:shadow-soft-lg"
            >
              <Quote className="h-10 w-10 text-primary/60 mb-4" aria-hidden />
              <p className="text-charcoal leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-semibold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{t.name}</p>
                  <p className="text-sm text-charcoal/70">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
