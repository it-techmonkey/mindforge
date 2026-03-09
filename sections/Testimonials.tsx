"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "MindForge completely transformed our digital presence. Their strategic approach combined with creative execution doubled our leads in just 3 months.",
    name: "Sarah Mitchell",
    role: "CEO, TechNova",
  },
  {
    quote:
      "Working with MindForge felt like having an in-house team that truly understands our brand. The results speak for themselves.",
    name: "James Carter",
    role: "Founder, GreenLeaf Co.",
  },
  {
    quote:
      "Their creativity is unmatched. Every campaign they delivered exceeded our expectations and resonated deeply with our audience.",
    name: "Priya Sharma",
    role: "Marketing Head, UrbanEdge",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-[#FFFFFF] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-soft-lavender/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal">
            What people say about us
          </h2>
        </motion.header>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`
                relative p-6 md:p-8 
                ${i === 0 ? "md:col-span-1 bg-charcoal text-white rounded-lg" : "bg-off-white/80 border-l-4 border-primary/40 rounded-r-lg"}
              `}
            >
              <p
                className={`leading-relaxed mb-6 ${
                  i === 0 ? "text-white/90" : "text-charcoal/85"
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-heading font-semibold text-sm ${
                    i === 0 ? "bg-primary/30 text-white" : "bg-primary/20 text-primary"
                  }`}
                >
                  {t.name.charAt(0)}
                </span>
                <div>
                  <cite
                    className={`not-italic font-semibold block ${
                      i === 0 ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {t.name}
                  </cite>
                  <span className={`text-sm block ${i === 0 ? "text-white/70" : "text-charcoal/60"}`}>
                    {t.role}
                  </span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
