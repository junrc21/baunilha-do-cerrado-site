import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { ProductCard } from "@/components/product/product-card";
import { AddonCard } from "@/components/product/addon-card";
import { WhatsAppCTASection } from "@/components/sections/whatsapp-cta-section";
import { products, addons } from "@/data/site-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Presentear",
  description:
    "Latas presenteáveis com cookies artesanais. Monte o presente perfeito com nossos adicionais exclusivos.",
};

const latas = products.filter((p) => p.category === "presentear");

const steps = [
  { number: "01", title: "Escolha a lata", description: "4, 6 ou 12 cookies" },
  { number: "02", title: "Selecione os sabores", description: "Do clássico ao especial" },
  { number: "03", title: "Adicione mensagem ou ursinho", description: "Detalhes que marcam" },
  { number: "04", title: "Defina entrega ou retirada", description: "Rápido e seguro" },
];

export default function PresentearPage() {
  return (
    <>
      <PageHero
        eyebrow="A arte de presentear"
        title="Presentes feitos para encantar"
        subtitle="Escolha a lata, selecione seus sabores e adicione detalhes que tornam o gesto ainda mais especial."
      />

      {/* Latas */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#f6efe8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <SectionTitle
              eyebrow="Monte o seu"
              title="Monte o presente perfeito"
              subtitle="Cada lata é cuidadosamente montada com os melhores cookies artesanais, em embalagem que impressiona."
              center
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latas.map((lata, i) => (
              <ProductCard key={lata.slug} {...lata} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#eadbcd]/40">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <SectionTitle
              eyebrow="Simples e especial"
              title="Como funciona"
              center
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-[20px] p-6 border border-[#d9c7b4]/50 shadow-elegant h-full">
                  <p className="font-serif text-4xl text-[#c89a57]/30 font-semibold mb-4 leading-none">
                    {step.number}
                  </p>
                  <h3 className="font-serif text-lg text-[#4b1f1d] font-medium mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#7a4a47]">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-8 -right-3 z-10">
                    <ArrowRight size={16} className="text-[#d9c7b4]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adicionais */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#f6efe8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <SectionTitle
              eyebrow="Vai um extra?"
              title="Torne ainda mais especial"
              subtitle="Detalhes que transformam um presente em uma experiência verdadeiramente inesquecível."
              center
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, i) => (
              <AddonCard key={addon.slug} {...addon} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Emocional */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-[#5E0B13]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-[#f1e7dd] italic font-light leading-relaxed mb-6">
            "Um presente da Baunilha do Cerrado não é apenas um mimo — é um gesto que fica na memória."
          </p>
          <div className="h-px w-16 bg-[#c89a57]/40 mx-auto" />
        </div>
      </section>

      <WhatsAppCTASection
        title="Monte seu presente agora"
        subtitle="Fale com a gente e crie um presente personalizado com todo o carinho que a pessoa merece."
        ctaLabel="Criar meu presente"
      />
    </>
  );
}
