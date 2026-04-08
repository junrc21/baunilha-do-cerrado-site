"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, total, itemCount } =
    useCart();
  const router = useRouter();

  const fmt = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleFinalize = () => {
    closeCart();
    router.push("/carrinho");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-[#1a0305]/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[420px] bg-[#f6efe8] flex flex-col shadow-elegant-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#5E0B13] flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={16} className="text-[#c89a57]" strokeWidth={1.5} />
                <p className="font-serif text-[#f1e7dd] text-base font-medium">
                  Carrinho
                </p>
                {itemCount > 0 && (
                  <span className="bg-[#c89a57] text-[#4b1f1d] text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#e8d5b0]/60 hover:text-[#e8d5b0] hover:bg-white/10 transition-all"
                aria-label="Fechar carrinho"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-[#d9c7b4]/30 flex items-center justify-center mb-4">
                    <ShoppingBag size={24} className="text-[#7a4a47]/40" strokeWidth={1.5} />
                  </div>
                  <p className="font-serif text-lg text-[#4b1f1d] font-medium mb-1">
                    Carrinho vazio
                  </p>
                  <p className="text-sm text-[#7a4a47]/70">
                    Adicione produtos para continuar.
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[18px] border border-[#d9c7b4]/50 shadow-elegant p-3 flex gap-3"
                  >
                    {/* Image */}
                    <div className="relative w-20 h-20 rounded-[12px] overflow-hidden flex-shrink-0 border border-[#d9c7b4]/40">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-center"
                        sizes="80px"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <p className="font-serif text-sm text-[#4b1f1d] font-medium leading-snug">
                          {item.name}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-6 h-6 rounded-full flex items-center justify-center text-[#7a4a47]/40 hover:text-[#6A1018] hover:bg-[#6A1018]/8 transition-all flex-shrink-0"
                          aria-label="Remover"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>

                      {/* Flavors compact */}
                      {item.flavors.length > 0 && (
                        <p className="text-[10px] text-[#7a4a47]/60 mt-0.5 leading-snug truncate">
                          {(() => {
                            const counts: Record<string, number> = {};
                            for (const f of item.flavors) counts[f] = (counts[f] || 0) + 1;
                            return Object.entries(counts)
                              .map(([f, c]) => `${c > 1 ? `${c}× ` : ""}${f}`)
                              .join(", ");
                          })()}
                        </p>
                      )}

                      {/* Qty + price */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1.5 bg-[#f6efe8] rounded-full border border-[#d9c7b4]/60 px-2 py-1">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="w-5 h-5 rounded-full flex items-center justify-center text-[#6A1018] hover:bg-[#6A1018]/10 transition-colors"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="font-serif text-sm text-[#4b1f1d] font-medium w-4 text-center">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="w-5 h-5 rounded-full flex items-center justify-center text-[#6A1018] hover:bg-[#6A1018]/10 transition-colors"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                        <p className="font-serif text-sm text-[#6A1018] font-medium">
                          {fmt(item.price * item.qty)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="flex-shrink-0 border-t border-[#d9c7b4]/40 bg-white px-5 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-base text-[#4b1f1d] font-medium">
                    Total
                  </span>
                  <span className="font-serif text-xl text-[#6A1018] font-medium">
                    {fmt(total)}
                  </span>
                </div>
                <button
                  onClick={handleFinalize}
                  className="w-full py-4 rounded-full bg-[#6A1018] hover:bg-[#571018] text-[#f1e7dd] text-[11px] tracking-widest uppercase font-medium transition-all duration-200 hover:shadow-elegant-md flex items-center justify-center gap-2"
                >
                  Finalizar pedido
                  <ArrowRight size={14} />
                </button>
                <p className="text-[10px] text-[#7a4a47]/50 text-center">
                  Complementos e endereço no próximo passo
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
