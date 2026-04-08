"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";
import { testimonials } from "@/data/site-data";

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#f6efe8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14">
          <SectionTitle
            eyebrow="O que dizem sobre nós"
            title="Quem prova, volta"
            center
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[22px] p-5 sm:p-8 border border-[#d9c7b4]/50 shadow-elegant"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#c89a57] text-base">★</span>
                ))}
              </div>
              <p className="font-serif text-[#4b1f1d] text-lg italic leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#c89a57]/15 border border-[#c89a57]/25 flex items-center justify-center">
                  <span className="font-serif text-sm text-[#c89a57] font-medium">
                    {t.name[0]}
                  </span>
                </div>
                <p className="font-medium text-sm text-[#4b1f1d]">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Cookies Artesanais", image: "/images/product-tin.png" },
            { label: "Bolos Autorais", image: "/images/gateau-chocolat.png" },
            { label: "Cheesecakes", image: "/images/tranche-gateau.png" },
            { label: "Latas Presenteáveis", image: "/images/product-tin.png" },
          ].map(({ label, image }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="aspect-square rounded-[18px] border border-[#d9c7b4]/50 overflow-hidden relative"
            >
              <Image
                src={image}
                alt={label}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#5E0B13]/20" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#3d0a10]/80 to-transparent">
                <p className="text-[10px] text-[#e8d5b0] font-medium tracking-wide leading-tight">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
