"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 md:py-20 bg-charcoal text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-soft-lavender/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12"
        >
          <div className="md:max-w-xl">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Ready to scale your business?
            </h2>
            <p className="text-white/75 text-base md:text-lg leading-relaxed">
              Let&apos;s discuss how our marketing expertise can transform your
              business. Get a free strategy consultation today.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button asChild variant="primary" size="lg">
              <a href="mailto:hello@mindforge.com">
                Book Your Free Strategy Call
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
