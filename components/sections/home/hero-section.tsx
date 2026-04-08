"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative bg-[#5E0B13] overflow-hidden min-h-[85vh] flex items-center">
      {/* Background overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-transparent via-transparent to-[#5E0B13]/80 hidden lg:block" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#5E0B13] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#3d0a10]/40 to-transparent" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#c89a57]/8 blur-3xl hidden lg:block" />
      </div>

      {/* Product image — right half desktop, full background mobile */}
      <div className="absolute inset-0 lg:left-[45%]">
        <Image
          src="/images/hero-latas.png"
          alt="Latas presenteáveis Baunilha do Cerrado com cookies artesanais"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
        {/* Mobile overlay — makes text readable over image */}
        <div className="absolute inset-0 bg-[#5E0B13]/75 lg:hidden" />
        {/* Desktop left edge fade */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#5E0B13] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-28">
        <div className="lg:w-[52%]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[10px] tracking-[0.4em] text-[#c89a57] uppercase font-medium mb-5"
          >
            Baunilha do Cerrado · Confeitaria
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="font-serif font-medium text-[#f1e7dd] leading-[1.05] mb-5"
            style={{ fontSize: "clamp(2.2rem, 8vw, 4.5rem)" }}
          >
            Presentes feitos para{" "}
            <span className="italic text-[#c89a57]">encantar</span>
            {" "}em cada detalhe.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="text-[#e8d5b0]/75 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-md"
          >
            Cookies artesanais, bolos e cheesecakes com ingredientes selecionados e apresentação impecável.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/presentear"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-[#3d0a10] text-[11px] tracking-widest uppercase font-semibold transition-all duration-200 shadow-gold min-h-[44px]"
            >
              Ver latas presenteáveis
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/cookies"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#e8d5b0]/35 text-[#e8d5b0] hover:border-[#e8d5b0]/65 hover:bg-white/5 text-[11px] tracking-widest uppercase font-medium transition-all duration-200 min-h-[44px]"
            >
              Conhecer produtos
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex items-center gap-6 sm:gap-8 mt-10 pt-8 border-t border-[#c89a57]/15"
          >
            {[
              { value: "100%", label: "Artesanal" },
              { value: "5★", label: "Avaliação" },
              { value: "+500", label: "Pedidos" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-xl sm:text-2xl text-[#c89a57] font-semibold leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-[9px] sm:text-[10px] tracking-widest text-[#e8d5b0]/45 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L48 51.7C96 43.3 192 26.7 288 23.3C384 20 480 30 576 35C672 40 768 40 864 36.7C960 33.3 1056 26.7 1152 26.7C1248 26.7 1344 33.3 1392 36.7L1440 40V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#F6EFE8" />
        </svg>
      </div>
    </section>
  );
}
