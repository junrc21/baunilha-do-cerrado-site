"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
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
  items: { name: string; priceFormatted: string; qty: number; flavors: string[] }[];
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
  items: [
    {
      name: "Lata Vermelha — 6 Cookies",
      priceFormatted: "R$ 98,00",
      qty: 1,
      flavors: ["Chocolate Belga", "Chocolate Belga", "Churros com Doce de Leite", "Churros com Doce de Leite", "Beijinho de Coco", "Beijinho de Coco"],
    },
  ],
  addons: [
    { name: "Teddy Bear", priceFormatted: "R$ 59,00" },
    { name: "Cartão Especial", priceFormatted: "R$ 15,00", message: "Com carinho para você, Laura. Assinado Paula" },
  ],
  observation: "",
  customer: { name: "Paula Mendes", whatsapp: "", isGift: true, recipientName: "Laura", senderName: "Paula" },
};

// Writing animation constants
const CHARS = "Obrigado!".split("");
const WRITE_START_MS = 900;     // ms before pen starts
const STAGGER_S = 0.13;         // seconds between each letter
const CHAR_DURATION_S = 0.26;   // seconds per letter reveal
const TOTAL_WRITE_S = STAGGER_S * (CHARS.length - 1) + CHAR_DURATION_S; // ~1.3s

// Sparkle positions and timing (start after writing finishes)
const SPARKLE_AFTER = WRITE_START_MS / 1000 + TOTAL_WRITE_S + 0.3;
const SPARKLES = [
  { x:  7, y: 18, size: 22, delay: SPARKLE_AFTER + 0.0, repeat: 5.0 },
  { x: 30, y:  2, size: 14, delay: SPARKLE_AFTER + 0.3, repeat: 4.5 },
  { x: 68, y:  8, size: 18, delay: SPARKLE_AFTER + 0.1, repeat: 6.0 },
  { x: 96, y: 30, size: 20, delay: SPARKLE_AFTER + 0.2, repeat: 5.5 },
  { x: 88, y: 72, size: 12, delay: SPARKLE_AFTER + 0.5, repeat: 4.0 },
  { x: 18, y: 85, size: 10, delay: SPARKLE_AFTER + 0.7, repeat: 6.5 },
  { x: 52, y: 95, size: 14, delay: SPARKLE_AFTER + 0.4, repeat: 5.2 },
  { x:  3, y: 55, size: 10, delay: SPARKLE_AFTER + 0.9, repeat: 4.8 },
];

// Per-character reveal: clip from right side, with generous insets for cursive strokes
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: WRITE_START_MS / 1000,
      staggerChildren: STAGGER_S,
    },
  },
};

// Polygon clip: extends massively outside the element box so no cursive
// glyph edge (swash, descender, ascender) is ever cut during the reveal.
const charVariants = {
  hidden: { clipPath: "polygon(-600% -600%, 0% -600%, 0% 700%, -600% 700%)" },
  visible: {
    clipPath: "polygon(-600% -600%, 700% -600%, 700% 700%, -600% 700%)",
    transition: { duration: CHAR_DURATION_S, ease: [0.2, 0, 0.5, 1] as [number, number, number, number] },
  },
};

function SparkleIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <radialGradient id="sg" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#fffbe0" />
          <stop offset="55%" stopColor="#f7e090" />
          <stop offset="100%" stopColor="#c89a30" />
        </radialGradient>
      </defs>
      <path
        d="M12 1 L13.3 10.7 L23 12 L13.3 13.3 L12 23 L10.7 13.3 L1 12 L10.7 10.7 Z"
        fill="url(#sg)"
      />
    </svg>
  );
}

function Sparkle({ x, y, size, delay, repeat }: { x: number; y: number; size: number; delay: number; repeat: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, translateX: "-50%", translateY: "-50%" }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0.8, 1, 0], scale: [0, 1, 0.85, 1.2, 0], rotate: [0, 12, -8, 20, 0] }}
      transition={{ duration: 1.6, delay, repeat: Infinity, repeatDelay: repeat, ease: "easeInOut" }}
    >
      <div style={{ filter: "drop-shadow(0 0 6px rgba(247,224,144,0.95)) drop-shadow(0 0 16px rgba(200,154,87,0.7))" }}>
        <SparkleIcon size={size} />
      </div>
    </motion.div>
  );
}

export default function ObrigadoPage() {
  const [order, setOrder] = useState<OrderData | null>(null);
  const [show, setShow] = useState(false);
  const [penVisible, setPenVisible] = useState(false);
  const [penX, setPenX] = useState(0);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const penProgress = useMotionValue(0);

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

  // Animate pen cursor linearly across the text width, in sync with stagger
  useEffect(() => {
    if (!show) return;
    const startDelay = setTimeout(() => {
      setPenVisible(true);
      animate(penProgress, 1, {
        duration: TOTAL_WRITE_S,
        ease: "linear",
        onUpdate: (v) => {
          if (textContainerRef.current) {
            setPenX(v * textContainerRef.current.offsetWidth);
          }
        },
        onComplete: () => {
          setTimeout(() => setPenVisible(false), 700);
        },
      });
    }, WRITE_START_MS);
    return () => clearTimeout(startDelay);
  }, [show]); // eslint-disable-line react-hooks/exhaustive-deps

  const flavorSummary = (flavors: string[]) => {
    const counts: Record<string, number> = {};
    for (const f of flavors) counts[f] = (counts[f] || 0) + 1;
    return Object.entries(counts)
      .map(([f, c]) => `${c > 1 ? `${c}× ` : ""}${f}`)
      .join(", ");
  };

  // Content appears after writing finishes
  const contentDelay = WRITE_START_MS / 1000 + TOTAL_WRITE_S;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 py-20 overflow-x-hidden relative"
      style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 38%, #7a0d18 0%, #5E0B13 45%, #3a0508 100%)",
      }}
    >
      {/* Velvet grain texture */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.18]" preserveAspectRatio="xMidYMid slice">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 120% 120% at 50% 50%, transparent 40%, rgba(20,0,3,0.55) 100%)"
      }} />

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">

        {/* Gold divider lines */}
        <div className="flex items-center w-full max-w-xs mb-8">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={show ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            style={{ originX: 1 }}
            className="flex-1 h-px bg-gradient-to-l from-[#c89a57] to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={show ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="mx-3 w-1.5 h-1.5 rounded-full bg-[#c89a57]"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={show ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="flex-1 h-px bg-gradient-to-r from-[#c89a57] to-transparent"
          />
        </div>

        {/* ✦ "Obrigado!" — letter-by-letter writing animation */}
        <div className="text-center mb-4 relative w-full flex justify-center" style={{ overflow: "visible" }}>
          {/* Sparkle stars */}
          <div className="absolute inset-0 pointer-events-none" style={{ overflow: "visible" }}>
            {SPARKLES.map((s, i) => <Sparkle key={i} {...s} />)}
          </div>

          {/* Filter wrapper is full-width so its rendering surface covers any glyph swash overflow */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1.2em 4em",
              filter: "drop-shadow(0 0 32px rgba(200,154,87,0.38)) drop-shadow(0 5px 14px rgba(0,0,0,0.5))",
            }}
          >
            {/* Staggered per-letter container */}
            <motion.div
              ref={textContainerRef}
              className="leading-none inline-flex items-baseline relative"
              style={{
                fontSize: "clamp(4rem, 16vw, 8rem)",
                fontFamily: "var(--font-script), 'Great Vibes', cursive",
              }}
              variants={containerVariants}
              initial="hidden"
              animate={show ? "visible" : "hidden"}
            >
              {CHARS.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={charVariants}
                  style={{
                    // Metallic top-to-bottom gradient per letter (natural calligraphy sheen)
                    background: "linear-gradient(175deg, #fdf5c8 0%, #f0d060 35%, #c08820 62%, #efd060 82%, #f9eeaa 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    // Slight letter-spacing adjustment for cursive
                    letterSpacing: char === "!" ? "-0.03em" : "0.01em",
                  }}
                >
                  {char}
                </motion.span>
              ))}

              {/* Glowing pen cursor — tracks rightmost edge of written text */}
              {penVisible && (
                <div
                  className="absolute pointer-events-none"
                  style={{
                    bottom: "18%",
                    left: penX,
                    transform: "translateX(-50%)",
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "#fffce0",
                    boxShadow: [
                      "0 0 4px 2px rgba(255,252,224,1)",
                      "0 0 12px 5px rgba(240,192,70,0.9)",
                      "0 0 28px 10px rgba(200,150,60,0.6)",
                      "0 0 55px 20px rgba(180,100,20,0.25)",
                    ].join(", "),
                  }}
                />
              )}
            </motion.div>
          </div>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: contentDelay + 0.4 }}
          className="text-center mb-10"
        >
          <p className="text-[10px] tracking-[0.45em] text-[#c89a57]/70 uppercase font-medium mb-3">
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
          transition={{ duration: 0.9, delay: contentDelay + 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-white/8 backdrop-blur-sm rounded-[28px] border border-[#c89a57]/20 overflow-hidden mb-8"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#c89a57]/15">
            <div>
              <p className="font-serif text-[#f1e7dd] text-base font-medium">Resumo do Pedido</p>
              <p className="text-[10px] text-[#c89a57]/70 tracking-widest mt-0.5">#{order?.orderId ?? "—"}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] tracking-widest text-[#c89a57]/60 uppercase">Data</p>
              <p className="text-sm text-[#e8d5b0]">{order?.date ?? "—"}</p>
            </div>
          </div>

          <div className="px-6 py-5 space-y-3">
            {order?.items.map((item, i) => (
              <div key={i} className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#c89a57]/20 flex items-center justify-center shrink-0">
                    <span className="font-serif text-[10px] text-[#c89a57]">BC</span>
                  </div>
                  <div>
                    <p className="text-sm text-[#f1e7dd] font-medium">
                      {item.name}{item.qty > 1 ? ` × ${item.qty}` : ""}
                    </p>
                    {item.flavors.length > 0 && (
                      <p className="text-[11px] text-[#e8d5b0]/50 mt-0.5">{flavorSummary(item.flavors)}</p>
                    )}
                  </div>
                </div>
                <span className="font-serif text-sm text-[#c89a57] shrink-0">{item.priceFormatted}</span>
              </div>
            ))}

            {order?.addons.map((addon, i) => (
              <div key={i} className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#c89a57]/20 flex items-center justify-center shrink-0">
                    <span className="font-serif text-[10px] text-[#c89a57]">+</span>
                  </div>
                  <div>
                    <p className="text-sm text-[#f1e7dd] font-medium">{addon.name}</p>
                    {addon.message && (
                      <p className="text-[11px] text-[#e8d5b0]/50 italic mt-0.5">&ldquo;{addon.message}&rdquo;</p>
                    )}
                  </div>
                </div>
                <span className="font-serif text-sm text-[#c89a57] shrink-0">{addon.priceFormatted}</span>
              </div>
            ))}

            <div className="border-t border-[#c89a57]/15 pt-4 flex justify-between items-center">
              <span className="font-serif text-base text-[#f1e7dd] font-medium">Total</span>
              <span className="font-serif text-xl text-[#c89a57] font-medium">{order?.totalFormatted ?? "—"}</span>
            </div>
          </div>

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
          transition={{ duration: 0.7, delay: contentDelay + 1.2 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-[#4b1f1d] text-[11px] tracking-widest uppercase font-medium transition-all duration-200"
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
          transition={{ duration: 1, delay: contentDelay + 1.6 }}
          className="mt-12 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-[#c89a57]/30" />
          <p className="text-[9px] tracking-[0.4em] text-[#c89a57]/40 uppercase">Feito com carinho · Brasília, DF</p>
          <div className="w-8 h-px bg-[#c89a57]/30" />
        </motion.div>
      </div>
    </div>
  );
}
