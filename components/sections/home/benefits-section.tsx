"use client";

import { motion } from "framer-motion";
import { Wheat, HandHeart, Sparkles, Gift, CalendarCheck } from "lucide-react";
import { benefits } from "@/data/site-data";

const iconMap: Record<string, React.ElementType> = {
  Wheat, HandHeart, Sparkles, Gift, CalendarCheck,
};

export function BenefitsSection() {
  return (
    <section className="py-12 sm:py-16 px-5 sm:px-8 bg-[#f6efe8] border-b border-[#d9c7b4]/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-8">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] || Sparkles;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-[#d9c7b4]/60 flex items-center justify-center mb-3 shadow-elegant transition-all duration-200 group-hover:border-[#c89a57]/40">
                  <Icon size={20} className="text-[#c89a57]" strokeWidth={1.5} />
                </div>
                <p className="font-serif text-sm sm:text-base text-[#4b1f1d] font-medium mb-1 leading-tight">
                  {benefit.title}
                </p>
                <p className="text-[11px] text-[#7a4a47] leading-relaxed hidden sm:block">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
