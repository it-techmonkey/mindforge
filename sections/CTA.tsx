"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-charcoal text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-soft-lavender/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how our marketing expertise can transform your
            business. Get a free strategy consultation today.
          </p>
          <Button asChild variant="primary" size="lg">
            <a href="mailto:hello@mindforge.com">
              Book Your Free Strategy Call
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
