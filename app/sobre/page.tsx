import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { WhatsAppCTASection } from "@/components/sections/whatsapp-cta-section";
import { Wheat, HandHeart, Sparkles, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Conheça a história da Baunilha do Cerrado — confeitaria artesanal premium em Brasília.",
};

const pillars = [
  {
    icon: Wheat,
    title: "Produção artesanal",
    description:
      "Cada item é produzido em pequenos lotes, com atenção total ao processo e ao resultado. Não abrimos mão da qualidade em nenhuma etapa.",
  },
  {
    icon: Sparkles,
    title: "Ingredientes selecionados",
    description:
      "Trabalhamos apenas com matérias-primas de qualidade superior: chocolate belga, manteiga artesanal, cream cheese premium e frutas frescas.",
  },
  {
    icon: HandHeart,
    title: "Apresentação impecável",
    description:
      "Acreditamos que a experiência começa antes do primeiro sabor. Cada embalagem, cada detalhe é pensado para encantar.",
  },
  {
    icon: Heart,
    title: "Cuidado do início ao fim",
    description:
      "Do pedido à entrega, acompanhamos cada etapa com atenção e carinho. A sua satisfação é o que nos move.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Nossa história"
        title="Delicadeza, cuidado e sabor em cada criação"
        subtitle="A Baunilha do Cerrado nasceu para transformar doces em experiências marcantes, com apresentação impecável, ingredientes selecionados e um olhar especial para os detalhes."
      />

      {/* História */}
      <section className="py-24 px-6 bg-[#f6efe8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                eyebrow="Quem somos"
                title="Uma confeitaria nascida do amor pela arte doce"
                subtitle="A Baunilha do Cerrado nasceu em Brasília com um propósito claro: criar doces que sejam, ao mesmo tempo, experiências sensoriais completas e gestos de afeto."
              />
              <div className="mt-8 space-y-5">
                <p className="text-[#7a4a47] leading-relaxed">
                  Nossa história começa com a paixão pela confeitaria artesanal e o desejo de oferecer produtos que vão além do sabor — que encantam pela apresentação, pela qualidade dos ingredientes e pelo cuidado em cada detalhe.
                </p>
                <p className="text-[#7a4a47] leading-relaxed">
                  Em Brasília, criamos uma confeitaria que traduz sofisticação acessível: produtos premium, feitos à mão, para quem valoriza o que é genuinamente bem-feito.
                </p>
                <p className="text-[#7a4a47] leading-relaxed">
                  Cada cookie, cada bolo, cada lata presenteável é criada com a mesma atenção e carinho que você merece receber.
                </p>
              </div>
            </div>

            <div className="relative pb-6">
              {/* Visual decorativo */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {["Cookies Artesanais", "Bolos Premium", "Cheesecakes", "Latas Presenteáveis"].map((label) => (
                  <div
                    key={label}
                    className="aspect-square rounded-[16px] sm:rounded-[20px] bg-gradient-to-br from-[#f1e7dd] to-[#eadbcd] border border-[#d9c7b4]/60 flex items-center justify-center shadow-elegant"
                  >
                    <div className="text-center p-3 sm:p-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#c89a57]/20 flex items-center justify-center mx-auto mb-2">
                        <span className="font-serif text-base sm:text-lg text-[#c89a57] font-semibold">BC</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-[#7a4a47] font-medium leading-tight">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Inline stat badge (not floating to avoid overflow on mobile) */}
              <div className="mt-4 inline-flex items-center gap-3 bg-white rounded-[14px] px-4 py-3 shadow-elegant border border-[#d9c7b4]/50">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#c89a57] text-xs">★</span>
                  ))}
                </div>
                <p className="text-[11px] text-[#7a4a47]">+500 pedidos com amor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-6 bg-[#eadbcd]/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <SectionTitle
              eyebrow="O que nos move"
              title="Nossos pilares"
              center
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-white rounded-[22px] p-8 border border-[#d9c7b4]/50 shadow-elegant">
                  <div className="w-12 h-12 rounded-2xl bg-[#c89a57]/10 border border-[#c89a57]/20 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#c89a57]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-[#4b1f1d] font-medium mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#7a4a47] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6 bg-[#5E0B13]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-3xl md:text-4xl text-[#f1e7dd] font-medium italic leading-tight">
            "Acreditamos que todo momento especial merece um doce à altura."
          </p>
          <p className="text-[#c89a57] text-sm tracking-widest uppercase mt-6">
            Baunilha do Cerrado
          </p>
        </div>
      </section>

      <WhatsAppCTASection
        title="Vamos criar algo especial juntos?"
        subtitle="Entre em contato e descubra como podemos tornar o seu momento ainda mais doce."
        ctaLabel="Falar com a gente"
      />
    </>
  );
}
