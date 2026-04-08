"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  eyebrow?: string;
  className?: string;
}

function FAQAccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border-b border-[#d9c7b4]/60 last:border-0"
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 min-h-[56px]"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={cn(
          "font-serif text-base sm:text-lg text-[#4b1f1d] font-medium transition-colors leading-snug",
          open && "text-[#6A1018]"
        )}>
          {item.question}
        </span>
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200",
          open ? "bg-[#6A1018] text-[#f1e7dd]" : "bg-[#6A1018]/8 text-[#6A1018]"
        )}>
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#7a4a47] text-sm leading-relaxed pb-5 pr-10">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection({ items, title = "Perguntas frequentes", eyebrow, className }: FAQSectionProps) {
  return (
    <section className={cn("py-16 sm:py-20 px-5 sm:px-8", className)}>
      <div className="max-w-3xl mx-auto">
        <SectionTitle eyebrow={eyebrow || "FAQ"} title={title} center className="mb-10 sm:mb-12" />
        <div className="bg-white rounded-[20px] sm:rounded-[24px] px-5 sm:px-8 py-2 shadow-elegant border border-[#d9c7b4]/40">
          {items.map((item, i) => (
            <FAQAccordionItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
