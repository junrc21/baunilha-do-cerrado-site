"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Home } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

interface OrderAddon {
  name: string;
  priceFormatted: string;
  message?: string;
}

interface OrderData {
  orderId: string;
  date: string;
  totalFormatted: string;
  cart: {
    product: { name: string; priceFormatted: string };
    qty: number;
    flavors: string[];
  };
  addons: OrderAddon[];
  observation: string;
  customer: {
    name: string;
    whatsapp: string;
    isGift: boolean;
    recipientName?: string;
    senderName?: string;
  };
}

const DEMO_ORDER: OrderData = {
  orderId: "BC-X7F2A1",
  date: "08 de abril de 2026",
  totalFormatted: "R$ 172,00",
  cart: {
    product: { name: "Lata Vermelha — 6 Cookies", priceFormatted: "R$ 98,00" },
    qty: 1,
    flavors: ["Chocolate Belga", "Chocolate Belga", "Churros com Doce de Leite", "Churros com Doce de Leite", "Beijinho de Coco", "Beijinho de Coco"],
  },
  addons: [
    { name: "Teddy Bear", priceFormatted: "R$ 59,00" },
    { name: "Cartão Especial", priceFormatted: "R$ 15,00", message: "Com carinho para você, Laura. Assinado Paula" },
  ],
  observation: "",
  customer: { name: "Paula Mendes", whatsapp: "", isGift: true, recipientName: "Laura", senderName: "Paula" },
};

export default function ObrigadoPage() {
  const [order, setOrder] = useState<OrderData | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bc_order");
      if (saved) {
        setOrder(JSON.parse(saved));
        localStorage.removeItem("bc_order");
      } else {
        setOrder(DEMO_ORDER);
      }
    } catch {
      setOrder(DEMO_ORDER);
    }
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  const flavorCounts =
    order?.cart.flavors.reduce<Record<string, number>>((acc, f) => {
      acc[f] = (acc[f] || 0) + 1;
      return acc;
    }, {}) ?? {};

  return (
    <div className="min-h-screen bg-[#5E0B13] flex flex-col items-center justify-center px-5 py-20 overflow-hidden relative">

      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#c89a57]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#c89a57]/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">

        {/* Gold horizontal lines */}
        <div className="flex items-center w-full max-w-xs mb-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={show ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ originX: 1 }}
            className="flex-1 h-px bg-gradient-to-l from-[#c89a57] to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={show ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mx-3 w-1.5 h-1.5 rounded-full bg-[#c89a57]"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={show ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="flex-1 h-px bg-gradient-to-r from-[#c89a57] to-transparent"
          />
        </div>

        {/* "Thank You!" signature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-3"
        >
          <span
            className="font-script text-[#c89a57] block leading-none"
            style={{ fontSize: "clamp(4rem, 16vw, 7rem)" }}
          >
            Thank You!
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-center mb-10"
        >
          <p className="text-[10px] tracking-[0.4em] text-[#c89a57]/70 uppercase font-medium mb-3">
            Baunilha do Cerrado
          </p>
          <p className="font-serif text-[#f1e7dd]/90 text-lg sm:text-xl font-light leading-relaxed">
            Seu pedido foi recebido com amor e carinho.
          </p>
          {order?.customer?.isGift && order?.customer?.recipientName && (
            <p className="font-serif text-[#e8d5b0]/60 text-base italic mt-1">
              Um presente especial para {order.customer.recipientName} 🤍
            </p>
          )}
        </motion.div>

        {/* Order summary card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-white/8 backdrop-blur-sm rounded-[28px] border border-[#c89a57]/20 overflow-hidden mb-8"
        >
          {/* Card header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#c89a57]/15">
            <div>
              <p className="font-serif text-[#f1e7dd] text-base font-medium">
                Resumo do Pedido
              </p>
              <p className="text-[10px] text-[#c89a57]/70 tracking-widest mt-0.5">
                #{order?.orderId ?? "—"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] tracking-widest text-[#c89a57]/60 uppercase">Data</p>
              <p className="text-sm text-[#e8d5b0]">{order?.date ?? "—"}</p>
            </div>
          </div>

          <div className="px-6 py-5 space-y-3">
            {/* Product */}
            {order && (
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#c89a57]/20 flex items-center justify-center shrink-0">
                    <span className="font-serif text-[10px] text-[#c89a57]">BC</span>
                  </div>
                  <div>
                    <p className="text-sm text-[#f1e7dd] font-medium">
                      {order.cart.product.name} × {order.cart.qty}
                    </p>
                    {Object.entries(flavorCounts).length > 0 && (
                      <p className="text-[11px] text-[#e8d5b0]/50 mt-0.5">
                        {Object.entries(flavorCounts)
                          .map(([f, c]) => `${c > 1 ? `${c}× ` : ""}${f}`)
                          .join(", ")}
                      </p>
                    )}
                  </div>
                </div>
                <span className="font-serif text-sm text-[#c89a57] shrink-0">
                  {order.cart.product.priceFormatted}
                </span>
              </div>
            )}

            {/* Addons */}
            {order?.addons.map((addon, i) => (
              <div key={i} className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#c89a57]/20 flex items-center justify-center shrink-0">
                    <span className="font-serif text-[10px] text-[#c89a57]">+</span>
                  </div>
                  <div>
                    <p className="text-sm text-[#f1e7dd] font-medium">{addon.name}</p>
                    {addon.message && (
                      <p className="text-[11px] text-[#e8d5b0]/50 italic mt-0.5">
                        "{addon.message}"
                      </p>
                    )}
                  </div>
                </div>
                <span className="font-serif text-sm text-[#c89a57] shrink-0">
                  {addon.priceFormatted}
                </span>
              </div>
            ))}

            {/* Total */}
            <div className="border-t border-[#c89a57]/15 pt-4 flex justify-between items-center">
              <span className="font-serif text-base text-[#f1e7dd] font-medium">Total</span>
              <span className="font-serif text-xl text-[#c89a57] font-medium">
                {order?.totalFormatted ?? "—"}
              </span>
            </div>
          </div>

          {/* Confirmation note */}
          <div className="px-6 py-4 bg-[#c89a57]/8 border-t border-[#c89a57]/15">
            <p className="text-[11px] text-[#e8d5b0]/60 text-center leading-relaxed">
              Você receberá a confirmação e detalhes de entrega via WhatsApp em breve.
            </p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-[#4b1f1d] text-[11px] tracking-widest uppercase font-medium transition-all duration-200 hover:shadow-gold"
          >
            <MessageCircle size={14} />
            Falar no WhatsApp
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-[#c89a57]/30 text-[#e8d5b0] hover:border-[#c89a57] hover:text-[#c89a57] text-[11px] tracking-widest uppercase font-medium transition-all duration-200"
          >
            <Home size={14} />
            Voltar ao início
          </Link>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-12 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-[#c89a57]/30" />
          <p className="text-[9px] tracking-[0.4em] text-[#c89a57]/40 uppercase">
            Feito com carinho · Brasília, DF
          </p>
          <div className="w-8 h-px bg-[#c89a57]/30" />
        </motion.div>
      </div>
    </div>
  );
}
