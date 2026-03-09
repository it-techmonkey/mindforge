"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#EAE1E1]/80 backdrop-blur-md shadow-soft" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="tap-highlight-none inline-block">
          <Link
            href="#home"
            className="font-heading text-xl font-bold text-charcoal hover:text-primary transition-colors duration-300 block"
            aria-label="MindForge Home"
          >
            MindForge.
          </Link>
        </motion.div>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block tap-highlight-none">
                <Link
                  href={link.href}
                  className="relative text-charcoal/90 hover:text-primary font-medium transition-colors duration-300 py-2 px-1 block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-out after:w-0 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="primary" size="default">
            <a href="#contact">Book a Strategy Call</a>
          </Button>
        </div>

        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-3 -m-2 text-charcoal hover:text-primary rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary tap-highlight-none min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
            aria-modal="true"
            role="dialog"
            aria-label="Mobile menu"
          >
            <div
              className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#FFFFFF] shadow-2xl p-6 sm:p-8 flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-heading text-xl font-bold text-charcoal">
                  MindForge.
                </span>
                <motion.button
                  type="button"
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 -m-2 rounded-xl hover:bg-off-white text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-primary tap-highlight-none min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.25 }}
                  >
                    <motion.div whileTap={{ scale: 0.98 }} className="tap-highlight-none">
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block py-4 px-3 text-lg font-medium text-charcoal hover:text-primary rounded-xl hover:bg-off-white/60 transition-colors duration-300 active:bg-soft-lavender/20"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Book a Strategy Call
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
