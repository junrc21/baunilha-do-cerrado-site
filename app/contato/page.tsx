import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { FAQSection } from "@/components/sections/faq-section";
import { faqs } from "@/data/site-data";
import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { BRAND_EMAIL, WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato e Atendimento",
  description:
    "Entre em contato com a Baunilha do Cerrado. WhatsApp, e-mail e formulário disponíveis.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Fale conosco"
        title="Estamos aqui para cuidar de tudo com você"
        subtitle="Dúvidas, pedidos, encomendas especiais ou só um oi — adoramos conversar."
      />

      {/* Contact cards */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#f6efe8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                text: "(61) 99999-9999",
                sub: "Resposta rápida",
                href: WHATSAPP_LINK,
                highlight: true,
              },
              {
                icon: Mail,
                title: "E-mail",
                text: BRAND_EMAIL,
                sub: "Respondemos em 24h",
                href: `mailto:${BRAND_EMAIL}`,
              },
              {
                icon: Clock,
                title: "Horário",
                text: "Seg–Sáb: 9h–20h",
                sub: "Dom: 10h–17h",
              },
              {
                icon: MapPin,
                title: "Localização",
                text: "Goiânia, GO",
                sub: "Retirada disponível",
              },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <div
                  className={`bg-white rounded-[22px] p-7 border shadow-elegant h-full flex flex-col items-center text-center transition-all duration-200 ${
                    item.highlight
                      ? "border-[#c89a57]/40 hover:shadow-gold"
                      : "border-[#d9c7b4]/50 hover:shadow-elegant-md"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                      item.highlight
                        ? "bg-[#c89a57] text-white"
                        : "bg-[#c89a57]/10 text-[#c89a57]"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <p className="text-[10px] tracking-widest text-[#c89a57] uppercase font-medium mb-2">
                    {item.title}
                  </p>
                  <p className="font-serif text-base sm:text-lg text-[#4b1f1d] font-medium mb-1 break-all">{item.text}</p>
                  <p className="text-sm text-[#7a4a47]">{item.sub}</p>
                </div>
              );

              return item.href ? (
                <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>

          {/* WhatsApp CTA prominent */}
          <div className="bg-[#5E0B13] rounded-[28px] p-6 sm:p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#c89a57] blur-3xl" />
            </div>
            <div className="relative">
              <p className="text-[10px] tracking-[0.4em] text-[#c89a57] uppercase font-medium mb-4">
                Mais rápido assim
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#f1e7dd] font-medium mb-4">
                Fale pelo WhatsApp
              </h2>
              <p className="text-[#e8d5b0]/70 text-base mb-8 max-w-md mx-auto">
                O jeito mais rápido de tirar dúvidas, fazer pedidos e receber atendimento personalizado.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-[#4b1f1d] text-[11px] tracking-widest uppercase font-medium transition-all duration-200"
              >
                <MessageCircle size={15} />
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#eadbcd]/40">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <SectionTitle
              eyebrow="Formulário"
              title="Ou envie uma mensagem"
              subtitle="Para dúvidas, sugestões ou pedidos especiais."
              center
            />
          </div>
          <div className="bg-white rounded-[28px] p-5 sm:p-8 md:p-10 shadow-elegant border border-[#d9c7b4]/50">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm placeholder:text-[#7a4a47]/50 focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm placeholder:text-[#7a4a47]/50 focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  placeholder="Sobre o que deseja falar?"
                  className="w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm placeholder:text-[#7a4a47]/50 focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  placeholder="Sua mensagem..."
                  className="w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm placeholder:text-[#7a4a47]/50 focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#6A1018] hover:bg-[#571018] text-[#f1e7dd] text-[11px] tracking-widest uppercase font-medium transition-all duration-200"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      <div id="faq">
        <FAQSection items={faqs.geral} title="Perguntas frequentes" eyebrow="FAQ" />
      </div>
    </>
  );
}
