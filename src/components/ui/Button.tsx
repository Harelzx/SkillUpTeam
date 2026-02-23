"use client";

import { motion } from "motion/react";
import { ArrowIcon } from "@/components/icons/CustomIcons";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "small";
  arrow?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "default",
  arrow = false,
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const sizeClasses =
    size === "small"
      ? "px-5 py-2.5 text-sm"
      : "px-8 py-4 text-base";

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-l from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25"
      : "bg-white text-brand-500 border border-brand-200 hover:border-brand-300 hover:bg-brand-50";

  const classes = `relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl font-semibold cursor-pointer transition-colors ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {/* Shimmer overlay for primary variant */}
      {variant === "primary" && (
        <span
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <span
            className="absolute top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-l from-transparent via-white/20 to-transparent"
            style={{ animation: "shimmer 3s ease-in-out infinite" }}
          />
        </span>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {arrow && <ArrowIcon className="h-4 w-4" />}
      </span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
