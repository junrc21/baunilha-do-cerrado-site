"use client";

import { motion } from "framer-motion";
import { ShoppingBag, PenLine, CalendarClock, Heart, ArrowRight, ArrowDown } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { howItWorks } from "@/data/site-data";

const iconMap: Record<string, React.ElementType> = {
  ShoppingBag, PenLine, CalendarClock, Heart,
};

export function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#eadbcd]/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <SectionTitle eyebrow="Simples assim" title="Como funciona" subtitle="Do pedido à entrega, cuidamos de cada detalhe com a mesma atenção." center />
        </div>

        {/* Mobile: vertical stepper */}
        <div className="flex flex-col gap-0 sm:hidden">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.icon] || Heart;
            const isLast = i === howItWorks.length - 1;
            return (
              <div key={step.step} className="flex gap-4">
                {/* Left: number + line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#6A1018] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#f1e7dd] text-sm font-semibold">{step.step}</span>
                  </div>
                  {!isLast && <div className="w-px flex-1 bg-[#d9c7b4] my-2" />}
                </div>
                {/* Right: content */}
                <div className={`pb-6 flex-1 pt-1 ${isLast ? "" : ""}`}>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <Icon size={16} className="text-[#c89a57]" strokeWidth={1.5} />
                    <h3 className="font-serif text-lg text-[#4b1f1d] font-medium">{step.title}</h3>
                  </div>
                  <p className="text-[#7a4a47] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: horizontal cards */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.icon] || Heart;
            const isLast = i === howItWorks.length - 1;
            return (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative w-16 h-16 rounded-2xl bg-white border border-[#d9c7b4]/60 flex items-center justify-center shadow-elegant mb-4"
                >
                  <Icon size={24} className="text-[#c89a57]" strokeWidth={1.5} />
                  <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#6A1018] flex items-center justify-center">
                    <span className="text-[10px] text-[#f1e7dd] font-medium">{step.step}</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.1 }}
                  className="px-2"
                >
                  <h3 className="font-serif text-lg text-[#4b1f1d] font-medium mb-2">{step.title}</h3>
                  <p className="text-[#7a4a47] text-sm leading-relaxed">{step.description}</p>
                </motion.div>
                {!isLast && (
                  <div className="hidden lg:flex absolute top-8 left-full w-full items-center justify-center -translate-x-1/2 pointer-events-none">
                    <ArrowRight size={16} className="text-[#d9c7b4]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
