"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

interface WhatsAppCTASectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
}

export function WhatsAppCTASection({
  eyebrow = "Faça seu pedido",
  title = "Encomende do seu jeito",
  subtitle = "Fale com a gente no WhatsApp e monte seu pedido personalizado.",
  ctaLabel = "Fazer pedido pelo WhatsApp",
}: WhatsAppCTASectionProps) {
  return (
    <section className="bg-[#5E0B13] py-16 sm:py-24 px-5 sm:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#c89a57] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#c89a57] blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.35em] text-[#c89a57] uppercase font-medium mb-4">
            {eyebrow}
          </p>
          <h2
            className="font-serif text-[#f1e7dd] font-medium mb-4 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)" }}
          >
            {title}
          </h2>
          <p className="text-[#e8d5b0]/70 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto">
            {subtitle}
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-4 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-[#4b1f1d] text-[11px] tracking-widest uppercase font-medium transition-all duration-200 hover:shadow-gold min-h-[52px]"
          >
            <MessageCircle size={15} />
            {ctaLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
