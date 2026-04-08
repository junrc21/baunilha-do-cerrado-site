"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Gift, User, MapPin, ChevronDown } from "lucide-react";

interface CheckoutData {
  cart: {
    product: { name: string; priceFormatted: string; price: number; image: string };
    qty: number;
    flavors: string[];
  };
  addons: { name: string; priceFormatted: string }[];
  totalFormatted: string;
}

const steps = [
  { n: 1, label: "Produto" },
  { n: 2, label: "Complementos" },
  { n: 3, label: "Seus dados" },
];

const inputClass =
  "w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm placeholder:text-[#7a4a47]/40 focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors";

const labelClass =
  "block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2";

const STATES = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA",
  "MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN",
  "RS","RO","RR","SC","SP","SE","TO",
];

export default function CheckoutPage() {
  const router = useRouter();
  const [data, setData] = useState<CheckoutData | null>(null);
  const [isGift, setIsGift] = useState(false);
  const [form, setForm] = useState({
    name: "", whatsapp: "", email: "",
    cep: "", street: "", number: "", complement: "", neighborhood: "", city: "", state: "",
    recipientName: "", recipientWhatsapp: "", senderName: "",
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bc_checkout");
      if (saved) setData(JSON.parse(saved));
    } catch {}
  }, []);

  const set = (k: string, v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const order = {
        ...(data || {}),
        customer: { ...form, isGift },
        orderId: `BC-${Date.now().toString(36).toUpperCase().slice(-6)}`,
        date: new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" }),
      };
      localStorage.setItem("bc_order", JSON.stringify(order));
      localStorage.removeItem("bc_checkout");
    } catch {}
    router.push("/obrigado");
  };

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
                      step.n < 3
                        ? "bg-[#6A1018] border-[#6A1018] text-white"
                        : "bg-[#c89a57] border-[#c89a57] text-white"
                    }`}
                  >
                    {step.n < 3 ? <Check size={14} /> : step.n}
                  </div>
                  <span
                    className={`text-[10px] mt-1 tracking-wide whitespace-nowrap ${
                      step.n === 3 ? "text-[#c89a57] font-semibold" : "text-[#6A1018]"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="h-px w-14 sm:w-24 mx-3 mb-4 bg-[#6A1018]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[10px] tracking-[0.4em] text-[#c89a57] uppercase font-medium mb-3">
            Quase lá
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#4b1f1d] font-medium">
            Seus dados
          </h1>
          <p className="text-[#7a4a47] text-sm mt-2">
            Preencha as informações para finalizar seu pedido.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">

            {/* Left — Form */}
            <div className="space-y-5">

              {/* Personal info */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-[24px] border border-[#d9c7b4]/50 shadow-elegant p-5 sm:p-7"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-[#6A1018]/8 flex items-center justify-center">
                    <User size={15} className="text-[#6A1018]" strokeWidth={1.5} />
                  </div>
                  <p className="font-serif text-lg text-[#4b1f1d] font-medium">
                    Informações pessoais
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Nome completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(61) 99999-9999"
                      value={form.whatsapp}
                      onChange={(e) => set("whatsapp", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>E-mail</label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Delivery address */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white rounded-[24px] border border-[#d9c7b4]/50 shadow-elegant p-5 sm:p-7"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-[#6A1018]/8 flex items-center justify-center">
                    <MapPin size={15} className="text-[#6A1018]" strokeWidth={1.5} />
                  </div>
                  <p className="font-serif text-lg text-[#4b1f1d] font-medium">
                    Endereço de entrega
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>CEP *</label>
                    <input
                      type="text"
                      required
                      placeholder="00000-000"
                      value={form.cep}
                      onChange={(e) => set("cep", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Número *</label>
                    <input
                      type="text"
                      required
                      placeholder="123"
                      value={form.number}
                      onChange={(e) => set("number", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Rua *</label>
                    <input
                      type="text"
                      required
                      placeholder="Nome da rua ou avenida"
                      value={form.street}
                      onChange={(e) => set("street", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Complemento</label>
                    <input
                      type="text"
                      placeholder="Apto, bloco, casa..."
                      value={form.complement}
                      onChange={(e) => set("complement", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Bairro *</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu bairro"
                      value={form.neighborhood}
                      onChange={(e) => set("neighborhood", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Cidade *</label>
                    <input
                      type="text"
                      required
                      placeholder="Brasília"
                      value={form.city}
                      onChange={(e) => set("city", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Estado *</label>
                    <div className="relative">
                      <select
                        required
                        value={form.state}
                        onChange={(e) => set("state", e.target.value)}
                        className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                      >
                        <option value="">Selecione</option>
                        {STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7a4a47] pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Gift toggle */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-[24px] border border-[#d9c7b4]/50 shadow-elegant overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setIsGift(!isGift)}
                  className="w-full flex items-center justify-between p-5 sm:p-7 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#c89a57]/10 flex items-center justify-center">
                      <Gift size={15} className="text-[#c89a57]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-serif text-base text-[#4b1f1d] font-medium">
                        Este pedido é um presente?
                      </p>
                      <p className="text-xs text-[#7a4a47] mt-0.5">
                        Entregar diretamente para outra pessoa
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-12 h-6 rounded-full transition-all duration-300 relative flex-shrink-0 ${
                      isGift ? "bg-[#c89a57]" : "bg-[#d9c7b4]"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${
                        isGift ? "left-7" : "left-1"
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isGift && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-7 pt-2 border-t border-[#d9c7b4]/40">
                        <p className="text-[10px] tracking-widest text-[#c89a57] uppercase font-medium mb-4">
                          Dados do destinatário
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>Nome de quem vai receber *</label>
                            <input
                              type="text"
                              placeholder="Nome do destinatário"
                              value={form.recipientName}
                              onChange={(e) => set("recipientName", e.target.value)}
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>WhatsApp do destinatário</label>
                            <input
                              type="tel"
                              placeholder="(61) 99999-9999"
                              value={form.recipientWhatsapp}
                              onChange={(e) => set("recipientWhatsapp", e.target.value)}
                              className={inputClass}
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label className={labelClass}>Seu nome (quem está enviando) *</label>
                            <input
                              type="text"
                              placeholder="Assinado por..."
                              value={form.senderName}
                              onChange={(e) => set("senderName", e.target.value)}
                              className={inputClass}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Submit */}
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                type="submit"
                className="w-full py-4 rounded-full bg-[#6A1018] hover:bg-[#571018] text-[#f1e7dd] text-[11px] tracking-widest uppercase font-medium transition-all duration-200 hover:shadow-elegant-md flex items-center justify-center gap-2"
              >
                Confirmar pedido
                <Check size={14} />
              </motion.button>
            </div>

            {/* Right — Order mini-summary */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-28"
            >
              <div className="bg-white rounded-[24px] border border-[#d9c7b4]/50 shadow-elegant overflow-hidden">
                <div className="bg-[#5E0B13] px-5 py-4">
                  <p className="font-serif text-[#f1e7dd] text-base font-medium">
                    Resumo
                  </p>
                </div>
                <div className="p-5 space-y-3">
                  {data ? (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#7a4a47] leading-snug max-w-[60%]">
                          {data.cart.product.name} × {data.cart.qty}
                        </span>
                        <span className="text-[#4b1f1d] font-medium">
                          {data.cart.product.priceFormatted}
                        </span>
                      </div>
                      {data.addons.map((a, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-[#7a4a47]">{a.name}</span>
                          <span className="text-[#4b1f1d] font-medium">{a.priceFormatted}</span>
                        </div>
                      ))}
                      <div className="border-t border-[#d9c7b4]/40 pt-3 flex justify-between">
                        <span className="font-serif text-base text-[#4b1f1d] font-medium">
                          Total
                        </span>
                        <span className="font-serif text-base text-[#6A1018] font-medium">
                          {data.totalFormatted}
                        </span>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-[#7a4a47]">Carregando resumo...</p>
                  )}
                  <div className="pt-2 border-t border-[#d9c7b4]/40">
                    <p className="text-[10px] text-[#7a4a47]/70 leading-relaxed">
                      O pagamento será combinado diretamente via WhatsApp após a confirmação.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
}
