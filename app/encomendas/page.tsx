import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { FAQSection } from "@/components/sections/faq-section";
import { WhatsAppCTASection } from "@/components/sections/whatsapp-cta-section";
import { faqs } from "@/data/site-data";
import { MessageCircle, Calendar, Heart, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Encomendas",
  description:
    "Faça sua encomenda personalizada. Eventos, aniversários, corporativo e presentes especiais com a Baunilha do Cerrado.",
};

const occasions = [
  {
    icon: Heart,
    title: "Aniversários",
    description: "Bolos personalizados, cookies temáticos e kits de presente para celebrar com elegância.",
  },
  {
    icon: Calendar,
    title: "Eventos e celebrações",
    description: "Mesa de doces, kits para convidados e lembrancinha personalizadas para o seu evento.",
  },
  {
    icon: Building2,
    title: "Corporativo",
    description: "Brindes premium, kits com logo da empresa e soluções para presentear clientes e equipes.",
  },
  {
    icon: MessageCircle,
    title: "Presentes personalizados",
    description: "Crie um presente único com nome, mensagem e embalagem especial para qualquer ocasião.",
  },
];

export default function EncomendasPage() {
  return (
    <>
      <PageHero
        eyebrow="Feito para você"
        title="Encomendas que encantam do início ao fim"
        subtitle="Conte o que você imagina e retornaremos com uma proposta alinhada ao seu momento."
      />

      {/* Occasions */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#f6efe8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <SectionTitle
              eyebrow="Para toda ocasião"
              title="Cada momento merece cuidado especial"
              center
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-[22px] p-6 sm:p-8 border border-[#d9c7b4]/50 shadow-elegant text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#c89a57]/10 border border-[#c89a57]/20 flex items-center justify-center mx-auto mb-5">
                    <Icon size={22} className="text-[#c89a57]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-[#4b1f1d] font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#7a4a47] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#eadbcd]/40">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <SectionTitle
              eyebrow="Formulário de encomenda"
              title="Fale sobre o seu pedido"
              subtitle="Preencha os dados abaixo e entraremos em contato para montar a proposta ideal."
              center
            />
          </div>

          <div className="bg-white rounded-[28px] p-5 sm:p-8 md:p-12 shadow-elegant-md border border-[#d9c7b4]/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm placeholder:text-[#7a4a47]/50 focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="(61) 99999-9999"
                    className="w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm placeholder:text-[#7a4a47]/50 focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors"
                    required
                  />
                </div>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2">
                    Tipo de pedido *
                  </label>
                  <select className="w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors appearance-none cursor-pointer">
                    <option value="">Selecione...</option>
                    <option>Cookies artesanais</option>
                    <option>Lata presenteável</option>
                    <option>Bolo inteiro</option>
                    <option>Cheesecake</option>
                    <option>Corporativo / Evento</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2">
                    Data desejada
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2">
                  Quantidade estimada
                </label>
                <input
                  type="text"
                  placeholder="Ex: 50 cookies, 2 bolos, 1 lata..."
                  className="w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm placeholder:text-[#7a4a47]/50 focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2">
                  Descreva seu pedido *
                </label>
                <textarea
                  rows={5}
                  placeholder="Conte tudo sobre o que você imagina — sabores, decoração, embalagem, tema, mensagem..."
                  className="w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-[#f6efe8] text-[#4b1f1d] text-sm placeholder:text-[#7a4a47]/50 focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2">
                  Referência visual (opcional)
                </label>
                <div className="w-full px-4 py-6 rounded-[12px] border-2 border-dashed border-[#d9c7b4] bg-[#f6efe8] text-center cursor-pointer hover:border-[#c89a57]/50 transition-colors">
                  <p className="text-[#7a4a47]/60 text-sm">
                    Arraste um arquivo ou clique para selecionar
                  </p>
                  <p className="text-[10px] text-[#7a4a47]/40 mt-1">PNG, JPG ou PDF até 10MB</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#6A1018] hover:bg-[#571018] text-[#f1e7dd] text-[11px] tracking-widest uppercase font-medium transition-all duration-200 hover:shadow-elegant-md"
              >
                Enviar minha encomenda
              </button>
            </form>
          </div>

          <p className="text-center text-[#7a4a47]/60 text-sm mt-6">
            Você também pode falar diretamente pelo{" "}
            <a href="https://wa.me/5561999999999" target="_blank" rel="noopener noreferrer" className="text-[#c89a57] hover:underline">
              WhatsApp
            </a>
          </p>
        </div>
      </section>

      <FAQSection items={faqs.geral} eyebrow="Dúvidas sobre encomendas" />

      <WhatsAppCTASection
        title="Prefere falar diretamente?"
        subtitle="Nossa equipe está pronta para te atender e ajudar a montar a proposta perfeita."
        ctaLabel="Falar pelo WhatsApp"
      />
    </>
  );
}
