import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { WhatsAppCTASection } from "@/components/sections/whatsapp-cta-section";
import { Wheat, HandHeart, Sparkles, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Conheça a história da Baunilha do Cerrado — confeitaria artesanal premium em Goiânia.",
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
        title="Superação, reconstrução e amor em cada doce"
        subtitle="A Baunilha do Cerrado nasceu de um recomeço. Uma história de coragem, resiliência e a descoberta de que é possível transformar dor em propósito."
      />

      {/* História */}
      <section className="py-24 px-6 bg-[#f6efe8]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 text-center">
            <SectionTitle
              eyebrow="Quem somos"
              title="História da Baunilha do Cerrado"
              center
            />
          </div>
          <div className="space-y-7">
            <p className="text-[#7a4a47] leading-relaxed text-base md:text-lg">
              A Baunilha do Cerrado nasceu em um período marcado por dor, mudanças e recomeços. A saída de Cuiabá aconteceu após a vivência de um momento familiar extremamente difícil, acompanhando de perto a fase final de uma doença. A experiência deixou marcas emocionais profundas e despertou a necessidade de reconstruir a própria vida.
            </p>
            <p className="text-[#7a4a47] leading-relaxed text-base md:text-lg">
              Nesse contexto, a confeitaria surgiu como um sonho antigo que passou a ganhar forma. Trabalhar com comida se tornou mais do que uma atividade profissional: virou caminho de cura, propósito e reencontro com a própria identidade. Esse processo veio acompanhado de terapia, autoconhecimento e retomada daquilo que fazia sentido de verdade, representando uma grande virada de chave.
            </p>
            <p className="text-[#7a4a47] leading-relaxed text-base md:text-lg">
              O início foi simples. Em plena pandemia, com poucos recursos, a produção começou com utensílios básicos e ingredientes comprados aos poucos. Os primeiros bolos foram feitos de forma modesta, mas tiveram rápida aceitação. As vendas cresceram, surgiram os bolos no pote, depois os bolos de aniversário, e o delivery ampliou ainda mais o alcance. A resposta positiva dos clientes confirmou que havia ali algo especial.
            </p>
            <p className="text-[#7a4a47] leading-relaxed text-base md:text-lg">
              A trajetória também enfrentou novas perdas familiares, encerrando ciclos importantes e trazendo novos desafios emocionais. Mesmo assim, a caminhada seguiu, fortalecida pelo aprendizado da resiliência e pela certeza de que era possível recomeçar.
            </p>

            {/* Pull quote */}
            <div className="border-l-2 border-[#c89a57] pl-6 py-2 my-8">
              <p className="font-serif text-xl md:text-2xl text-[#4b1f1d] italic leading-snug">
                "Hoje, a Baunilha do Cerrado é mais do que uma confeitaria. Representa superação, reconstrução e persistência."
              </p>
            </div>

            <p className="text-[#7a4a47] leading-relaxed text-base md:text-lg">
              Cada doce carrega uma história de recomeços e a prova de que é possível transformar dor em força e trabalho em propósito.
            </p>
          </div>

          {/* Stat badge */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-white rounded-[14px] px-5 py-3 shadow-elegant border border-[#d9c7b4]/50">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#c89a57] text-xs">★</span>
                ))}
              </div>
              <p className="text-[11px] text-[#7a4a47]">+500 pedidos com amor</p>
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
