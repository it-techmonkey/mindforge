"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg" | "sm";
  asChild?: boolean;
}

const base =
  "inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
const variants = {
  primary:
    "bg-primary text-[#FFFFFF] hover:opacity-90 shadow-soft hover:shadow-lg active:scale-[0.96] transition-all duration-300 ease-out",
  secondary:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary/5 active:scale-[0.96] transition-all duration-300 ease-out",
  ghost: "text-charcoal hover:bg-soft-lavender/30 transition-all duration-300",
};
const sizes = {
  default: "h-11 px-6 text-base",
  lg: "h-12 px-8 text-lg",
  sm: "h-9 px-4 text-sm",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild, children, type = "button", ...props }, ref) => {
    const compClass = cn(base, variants[variant], sizes[size], className);
    if (asChild && children && typeof children === "object" && "type" in children) {
      const child = children as React.ReactElement;
      return (
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block transition-transform duration-300 tap-highlight-none"
        >
          {React.cloneElement(child, {
            className: cn(compClass, (child.props as { className?: string }).className),
          })}
        </motion.span>
      );
    }
    return (
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.2 }}
        className="inline-block tap-highlight-none"
      >
        <button
          ref={ref}
          type={type}
          className={compClass}
          {...props}
        >
          {children}
        </button>
      </motion.span>
    );
  }
);

Button.displayName = "Button";

export { Button };
