"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 md:pt-24"
      style={{ backgroundColor: "#EAE1E1" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium text-sm uppercase tracking-wider mb-3"
              style={{ color: "#703043" }}
            >
              Strategy Meets Creativity
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight"
              style={{ color: "#1A1A1B" }}
            >
              We Build Brands That Stand Out
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base md:text-lg max-w-lg leading-relaxed opacity-80"
              style={{ color: "#1A1A1B" }}
            >
              From strategy to execution, we deliver data-driven marketing
              solutions that grow your business and captivate your audience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3 sm:gap-4"
            >
              <Button asChild variant="primary" size="lg">
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#services">View Services</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/80 rounded-lg p-4 border border-[#703043]/10"
                >
                  <item.icon className="h-6 w-6 mb-2" style={{ color: "#703043" }} />
                  <div className="font-heading text-xl font-bold" style={{ color: "#1A1A1B" }}>
                    {item.value}
                  </div>
                  <div className="text-xs opacity-70" style={{ color: "#1A1A1B" }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#703043]/20 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Marketing strategy and data-driven growth"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: "linear-gradient(to top, #703043, transparent 50%)" }}
                aria-hidden
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
