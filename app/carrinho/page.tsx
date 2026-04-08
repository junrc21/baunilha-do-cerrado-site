"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Check, ArrowRight, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const UPSELLS = [
  {
    id: "teddy",
    name: "Teddy Bear",
    price: 59,
    priceFormatted: "R$ 59,00",
    image: "/images/teddy-bear.png",
    description: "Adicione um ursininho ao seu pedido.",
    hasMessage: false,
  },
  {
    id: "bouquet",
    name: "Bouquet de Flores",
    price: 139,
    priceFormatted: "R$ 139,00",
    image: "/images/bouquet.png",
    description: "Presenteie com um lindo buquê elegante.",
    hasMessage: false,
  },
  {
    id: "cartao",
    name: "Cartão Especial",
    price: 15,
    priceFormatted: "R$ 15,00",
    image: "/images/cartao-mensagem.png",
    description: "Inclua um cartão refinado com logo da confeitaria.",
    hasMessage: true,
  },
];

const steps = [
  { n: 1, label: "Produto" },
  { n: 2, label: "Complementos" },
  { n: 3, label: "Seus dados" },
];

const fmt = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function CarrinhoPage() {
  const router = useRouter();
  const { items, removeItem, updateQty, total: cartTotal, clearCart } = useCart();
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [cardMessage, setCardMessage] = useState("");
  const [observation, setObservation] = useState("");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));

  const addonsTotal = UPSELLS.reduce(
    (sum, u) => sum + (selected[u.id] ? u.price : 0),
    0
  );
  const total = cartTotal + addonsTotal;

  const handleFinalize = () => {
    const addons = UPSELLS.filter((u) => selected[u.id]).map((u) => ({
      id: u.id,
      name: u.name,
      price: u.price,
      priceFormatted: u.priceFormatted,
      message: u.id === "cartao" ? cardMessage : undefined,
    }));
    try {
      localStorage.setItem(
        "bc_checkout",
        JSON.stringify({ items, addons, observation, total, totalFormatted: fmt(total) })
      );
    } catch {}
    router.push("/checkout");
  };

  const mainUpsells = UPSELLS.filter((u) => u.id !== "cartao");
  const cartao = UPSELLS.find((u) => u.id === "cartao")!;

  return (
    <div className="min-h-screen bg-[#f6efe8]">
      {/* Step indicator */}
      <div className="bg-white border-b border-[#d9c7b4]/40">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-4">
          <div className="flex items-center justify-center">
            {steps.map((step, i) => (
              <div key={step.n} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all ${
                      step.n < 2
                        ? "bg-[#6A1018] border-[#6A1018] text-white"
                        : step.n === 2
                        ? "bg-[#c89a57] border-[#c89a57] text-white"
                        : "bg-white border-[#d9c7b4] text-[#7a4a47]/40"
                    }`}
                  >
                    {step.n < 2 ? <Check size={14} /> : step.n}
                  </div>
                  <span
                    className={`text-[10px] mt-1 tracking-wide whitespace-nowrap ${
                      step.n === 2
                        ? "text-[#c89a57] font-semibold"
                        : step.n < 2
                        ? "text-[#6A1018]"
                        : "text-[#7a4a47]/40"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`h-px w-14 sm:w-24 mx-3 mb-4 ${
                      step.n < 2 ? "bg-[#6A1018]/30" : "bg-[#d9c7b4]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Page title */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] tracking-[0.4em] text-[#c89a57] uppercase font-medium mb-3">
            Monte seu presente
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#4b1f1d] font-medium">
            Adicionar complementos
          </h1>
          <p className="text-[#7a4a47] text-sm mt-2">
            Escolha itens adicionais para deixar o presente ainda mais especial.
          </p>
        </motion.div>
      </div>

      {/* Empty cart */}
      {items.length === 0 && (
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pb-24 text-center py-16">
          <div className="w-20 h-20 rounded-full bg-[#d9c7b4]/30 flex items-center justify-center mx-auto mb-5">
            <ShoppingBag size={28} className="text-[#7a4a47]/40" strokeWidth={1.5} />
          </div>
          <p className="font-serif text-xl text-[#4b1f1d] font-medium mb-2">
            Seu carrinho está vazio
          </p>
          <p className="text-sm text-[#7a4a47] mb-6">
            Adicione produtos para continuar.
          </p>
          <Link
            href="/presentear"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6A1018] text-[#f1e7dd] text-[11px] tracking-widest uppercase font-medium transition-all hover:bg-[#571018]"
          >
            Ver produtos
          </Link>
        </div>
      )}

      {/* Main content */}
      {items.length > 0 && (
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pb-24">
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">

            {/* Sidebar — Order Summary */}
            <motion.aside
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:sticky lg:top-28"
            >
              <div className="bg-white rounded-[24px] border border-[#d9c7b4]/50 shadow-elegant overflow-hidden">
                <div className="bg-[#5E0B13] px-5 py-4 flex items-center gap-2">
                  <ShoppingBag size={15} className="text-[#c89a57]" strokeWidth={1.5} />
                  <p className="font-serif text-[#f1e7dd] text-base font-medium">
                    Resumo do Pedido
                  </p>
                </div>

                <div className="p-4 space-y-3 max-h-[50vh] overflow-y-auto">
                  {items.map((item) => {
                    const counts: Record<string, number> = {};
                    for (const f of item.flavors) counts[f] = (counts[f] || 0) + 1;
                    return (
                      <div
                        key={item.id}
                        className="flex gap-3 pb-3 border-b border-[#d9c7b4]/30 last:border-0 last:pb-0"
                      >
                        <div className="relative w-14 h-14 rounded-[10px] overflow-hidden flex-shrink-0 border border-[#d9c7b4]/40">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover object-center"
                            sizes="56px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-1">
                            <p className="font-serif text-[#4b1f1d] text-sm font-medium leading-snug">
                              {item.name}
                            </p>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-[#7a4a47]/30 hover:text-[#6A1018] transition-colors flex-shrink-0"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                          {Object.keys(counts).length > 0 && (
                            <p className="text-[10px] text-[#7a4a47]/60 mt-0.5 leading-snug">
                              {Object.entries(counts)
                                .map(([f, c]) => `${c > 1 ? `${c}× ` : ""}${f}`)
                                .join(", ")}
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-1.5">
                            <div className="flex items-center gap-1 bg-[#f6efe8] rounded-full border border-[#d9c7b4]/50 px-2 py-0.5">
                              <button onClick={() => updateQty(item.id, item.qty - 1)} className="text-[#6A1018]">
                                <Minus size={9} />
                              </button>
                              <span className="text-xs text-[#4b1f1d] font-medium w-3 text-center">{item.qty}</span>
                              <button onClick={() => updateQty(item.id, item.qty + 1)} className="text-[#6A1018]">
                                <Plus size={9} />
                              </button>
                            </div>
                            <p className="font-serif text-xs text-[#6A1018] font-medium">
                              {fmt(item.price * item.qty)}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Price breakdown */}
                <div className="px-4 pb-4 border-t border-[#d9c7b4]/40 pt-3 space-y-1.5">
                  <div className="flex justify-between text-xs text-[#7a4a47]">
                    <span>Produtos</span>
                    <span>{fmt(cartTotal)}</span>
                  </div>
                  {UPSELLS.filter((u) => selected[u.id]).map((u) => (
                    <div key={u.id} className="flex justify-between text-xs text-[#7a4a47]">
                      <span>{u.name}</span>
                      <span>{u.priceFormatted}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-serif text-base text-[#4b1f1d] font-medium pt-2 border-t border-[#d9c7b4]/40">
                    <span>Total</span>
                    <span className="text-[#6A1018]">{fmt(total)}</span>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <button
                    onClick={handleFinalize}
                    className="w-full py-3 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-[#4b1f1d] text-[11px] tracking-widest uppercase font-medium transition-all duration-200 hover:shadow-gold"
                  >
                    Finalizar Pedido
                  </button>
                </div>
              </div>
            </motion.aside>

            {/* Right — Upsells + observations */}
            <div className="space-y-4">

              {/* 2-col upsell grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {mainUpsells.map((upsell, i) => {
                  const isSelected = !!selected[upsell.id];
                  const hasError = imgErrors[upsell.id];

                  return (
                    <motion.div
                      key={upsell.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                      className={`bg-white rounded-[22px] border shadow-elegant overflow-hidden transition-all duration-300 ${
                        isSelected ? "border-[#c89a57]/70 shadow-gold" : "border-[#d9c7b4]/50"
                      }`}
                    >
                      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#f1e7dd] to-[#eadbcd]">
                        {!hasError && (
                          <Image
                            src={upsell.image}
                            alt={upsell.name}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 640px) 100vw, 50vw"
                            onError={() =>
                              setImgErrors((prev) => ({ ...prev, [upsell.id]: true }))
                            }
                          />
                        )}
                        {isSelected && (
                          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#6A1018] flex items-center justify-center shadow-elegant">
                            <Check size={14} className="text-white" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div>
                            <p className="font-serif text-lg text-[#4b1f1d] font-medium leading-snug">
                              {upsell.name}
                            </p>
                            <p className="text-xs text-[#7a4a47] mt-1 leading-relaxed">
                              {upsell.description}
                            </p>
                          </div>
                          <p className="font-serif text-base text-[#6A1018] font-medium shrink-0">
                            {upsell.priceFormatted}
                          </p>
                        </div>
                        <button
                          onClick={() => toggle(upsell.id)}
                          className={`w-full py-2.5 rounded-full text-[11px] tracking-widest uppercase font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                            isSelected
                              ? "bg-[#6A1018] text-[#f1e7dd] hover:bg-[#571018]"
                              : "bg-[#c89a57]/15 text-[#6A1018] border border-[#c89a57]/40 hover:bg-[#c89a57] hover:text-[#4b1f1d]"
                          }`}
                        >
                          {isSelected ? (
                            <><Check size={12} /> Adicionado</>
                          ) : (
                            <><Plus size={12} /> Adicionar</>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Cartão Especial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4 }}
                className={`bg-white rounded-[22px] border shadow-elegant overflow-hidden transition-all duration-300 ${
                  selected[cartao.id] ? "border-[#c89a57]/70 shadow-gold" : "border-[#d9c7b4]/50"
                }`}
              >
                <div className="grid sm:grid-cols-[1fr_200px]">
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <p className="font-serif text-xl text-[#4b1f1d] font-medium">
                          {cartao.name}
                        </p>
                        <p className="text-sm text-[#7a4a47] mt-1">{cartao.description}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <p className="font-serif text-lg text-[#6A1018] font-medium">
                          {cartao.priceFormatted}
                        </p>
                        <button
                          onClick={() => toggle(cartao.id)}
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-elegant ${
                            selected[cartao.id]
                              ? "bg-[#6A1018] text-white"
                              : "bg-[#c89a57] text-white hover:bg-[#b88646]"
                          }`}
                        >
                          {selected[cartao.id] ? <Check size={15} /> : <Plus size={15} />}
                        </button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {selected[cartao.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <textarea
                            rows={3}
                            placeholder="Ex: Com carinho para você, Laura. Assinado Paula"
                            value={cardMessage}
                            onChange={(e) => setCardMessage(e.target.value)}
                            className="w-full mt-4 px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm placeholder:text-[#7a4a47]/40 focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors resize-none"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="relative hidden sm:block border-l border-[#d9c7b4]/40 bg-gradient-to-br from-[#f1e7dd] to-[#eadbcd]">
                    {!imgErrors[cartao.id] && (
                      <Image
                        src={cartao.image}
                        alt={cartao.name}
                        fill
                        className="object-cover object-center"
                        sizes="200px"
                        onError={() =>
                          setImgErrors((prev) => ({ ...prev, [cartao.id]: true }))
                        }
                      />
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Observations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.5 }}
                className="bg-white rounded-[22px] border border-[#d9c7b4]/50 shadow-elegant p-5"
              >
                <p className="font-serif text-lg text-[#4b1f1d] font-medium mb-3">
                  Observações
                </p>
                <textarea
                  rows={3}
                  placeholder="Horário preferencial de entrega, restrições alimentares, preferências..."
                  value={observation}
                  onChange={(e) => setObservation(e.target.value)}
                  className="w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm placeholder:text-[#7a4a47]/40 focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors resize-none"
                />
              </motion.div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2"
              >
                <p className="font-serif text-xl text-[#4b1f1d]">
                  Total:{" "}
                  <span className="text-[#6A1018] font-medium">{fmt(total)}</span>
                </p>
                <button
                  onClick={handleFinalize}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#6A1018] hover:bg-[#571018] text-[#f1e7dd] text-[11px] tracking-widest uppercase font-medium transition-all duration-200 hover:shadow-elegant-md"
                >
                  Finalizar Pedido
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
