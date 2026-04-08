"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  compact?: boolean;
}

export function PageHero({ eyebrow, title, subtitle, className, compact = false }: PageHeroProps) {
  return (
    <section className={cn(
      "bg-[#5E0B13] relative overflow-hidden",
      compact ? "py-12 sm:py-16" : "py-14 sm:py-24 md:py-32",
      className
    )}>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#c89a57] blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#c89a57] blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {eyebrow && (
            <p className="text-[10px] tracking-[0.4em] text-[#c89a57] uppercase font-medium mb-4 sm:mb-5">
              {eyebrow}
            </p>
          )}
          <h1
            className="font-serif font-medium text-[#f1e7dd] leading-tight mb-4 sm:mb-5"
            style={{ fontSize: "clamp(1.8rem, 6vw, 3.5rem)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-[#e8d5b0]/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#f6efe8] to-transparent" />
    </section>
  );
}
