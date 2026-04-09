import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pedido confirmado",
  description: "Seu pedido foi recebido com carinho pela Baunilha do Cerrado.",
};

const mockOrder = {
  number: "#BC-2026-0042",
  date: "08 de abril de 2026",
  items: [
    { name: "Lata Vermelha — 6 Cookies", desc: "Chocolate Belga, Churros, Beijinho de Coco, Red Velvet, Clássico ×2", price: "R$ 98,00" },
    { name: "Teddy Bear", desc: "Complemento do presente", price: "R$ 59,00" },
    { name: "Cartão com Mensagem", desc: '"Com carinho para você, Laura."', price: "R$ 15,00" },
  ],
  subtotal: "R$ 172,00",
  delivery: "R$ 15,00",
  total: "R$ 187,00",
};

export default function PedidoConfirmadoPage() {
  return (
    <div className="min-h-screen bg-[#f6efe8] flex items-center justify-center px-5 sm:px-8 py-12 sm:py-16">
      <div className="max-w-2xl w-full">
        {/* Success icon */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-[#c89a57]/15 border border-[#c89a57]/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-[#c89a57]" strokeWidth={1.5} />
          </div>
          <p className="text-[10px] tracking-[0.4em] text-[#c89a57] uppercase font-medium mb-3">
            Pedido recebido
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4b1f1d] font-medium leading-tight mb-4">
            Seu pedido foi recebido com carinho
          </h1>
          <p className="text-[#7a4a47] text-base leading-relaxed max-w-lg mx-auto">
            Agora é com a gente. Em breve, você receberá a confirmação com todos os detalhes para entrega ou retirada.
          </p>
        </div>

        {/* Order summary */}
        <div className="bg-white rounded-[28px] p-5 sm:p-8 shadow-elegant-md border border-[#d9c7b4]/50 mb-8">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#d9c7b4]/40">
            <div>
              <p className="font-serif text-xl text-[#4b1f1d] font-medium">Resumo do Pedido</p>
              <p className="text-sm text-[#7a4a47] mt-0.5">{mockOrder.number}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] tracking-widest text-[#c89a57] uppercase font-medium">Data</p>
              <p className="text-sm text-[#4b1f1d]">{mockOrder.date}</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {mockOrder.items.map((item, i) => (
              <div key={i} className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-8 h-8 rounded-xl bg-[#c89a57]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-serif text-xs text-[#c89a57] font-semibold">BC</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-[#4b1f1d]">{item.name}</p>
                    <p className="text-xs text-[#7a4a47] leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <p className="font-serif text-sm text-[#6A1018] font-medium flex-shrink-0">
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-[#d9c7b4]/40 pt-5 space-y-2">
            <div className="flex justify-between text-sm text-[#7a4a47]">
              <span>Subtotal</span>
              <span>{mockOrder.subtotal}</span>
            </div>
            <div className="flex justify-between text-sm text-[#7a4a47]">
              <span>Entrega</span>
              <span>{mockOrder.delivery}</span>
            </div>
            <div className="flex justify-between font-serif text-lg text-[#4b1f1d] font-medium pt-2 border-t border-[#d9c7b4]/40">
              <span>Total</span>
              <span className="text-[#6A1018]">{mockOrder.total}</span>
            </div>
          </div>
        </div>

        {/* Next steps */}
        <div className="bg-white rounded-[22px] p-6 shadow-elegant border border-[#d9c7b4]/50 mb-8">
          <p className="font-serif text-lg text-[#4b1f1d] font-medium mb-4">Próximos passos</p>
          <div className="space-y-3">
            {[
              "Confirmação por WhatsApp em até 1 hora",
              "Preparo artesanal com todo o cuidado",
              "Notificação quando estiver pronto",
              "Entrega ou retirada conforme combinado",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#6A1018] flex items-center justify-center flex-shrink-0">
                  <span className="text-[9px] text-[#f1e7dd] font-medium">{i + 1}</span>
                </div>
                <p className="text-sm text-[#7a4a47]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-[#4b1f1d] text-[11px] tracking-widest uppercase font-medium transition-all duration-200 hover:shadow-gold"
          >
            <MessageCircle size={15} />
            Falar no WhatsApp
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-[#6A1018]/30 text-[#6A1018] hover:bg-[#6A1018] hover:text-[#f1e7dd] text-[11px] tracking-widest uppercase font-medium transition-all duration-200"
          >
            Continuar explorando
            <ArrowRight size={14} />
          </Link>
        </div>

        <p className="text-center text-[#7a4a47]/50 text-xs mt-8">
          Baunilha do Cerrado Confeitaria · Delicadeza, sabor e apresentação impecável.
        </p>
      </div>
    </div>
  );
}
