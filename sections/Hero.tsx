"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const stats = [
  { value: "25+", label: "Clients Served", icon: Users },
  { value: "98%", label: "Client Retention", icon: BarChart3 },
  { value: "3x", label: "Avg. ROI Increase", icon: TrendingUp },
  { value: "5+", label: "Years Experience", icon: Award },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-off-white via-white to-soft-lavender/20 pt-20 md:pt-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -left-32 w-72 h-72 rounded-full bg-soft-lavender/30 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-semibold text-lg mb-4"
            >
              Strategy Meets Creativity
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1] tracking-tight"
            >
              We Build Brands That Stand Out
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-charcoal/80 max-w-xl leading-relaxed"
            >
              From strategy to execution, we deliver data-driven marketing
              solutions that grow your business and captivate your audience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button asChild variant="primary" size="lg">
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#case-studies">View Case Studies</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto rounded-3xl bg-gradient-to-br from-primary/10 to-soft-lavender/40 p-8 shadow-soft-lg flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {stats.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-soft text-center"
                  >
                    <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-heading text-2xl font-bold text-charcoal">
                      {item.value}
                    </div>
                    <div className="text-sm text-charcoal/70">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:hidden"
        >
          {stats.map((item, i) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-5 shadow-soft text-center"
            >
              <item.icon className="h-7 w-7 text-primary mx-auto mb-2" />
              <div className="font-heading text-xl font-bold text-charcoal">
                {item.value}
              </div>
              <div className="text-sm text-charcoal/70">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
