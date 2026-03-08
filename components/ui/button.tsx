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
  "inline-flex items-center justify-center font-semibold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-soft active:scale-[0.98]",
  secondary:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary/5 active:scale-[0.98]",
  ghost: "text-charcoal hover:bg-soft-lavender/30",
};
const sizes = {
  default: "h-11 px-6 text-base",
  lg: "h-12 px-8 text-lg",
  sm: "h-9 px-4 text-sm",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild, children, ...props }, ref) => {
    const compClass = cn(base, variants[variant], sizes[size], className);
    if (asChild && children && typeof children === "object" && "type" in children) {
      const child = children as React.ReactElement;
      return (
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          {React.cloneElement(child, {
            className: cn(compClass, (child.props as { className?: string }).className),
          })}
        </motion.span>
      );
    }
    return (
      <motion.button
        ref={ref}
        className={compClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
