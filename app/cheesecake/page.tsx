import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProductGrid } from "@/components/product/product-grid";
import { WhatsAppCTASection } from "@/components/sections/whatsapp-cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { SectionTitle } from "@/components/ui/section-title";
import { products, faqs } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Cheesecake",
  description:
    "Cheesecakes cremosos e irresistíveis em fatias ou inteiros. Equilíbrio perfeito entre leveza e cremosidade.",
};

const cheesecakeFatias = products.filter(
  (p) => p.category === "cheesecake" && p.unit === "fatia"
);
const cheesecakeInteiros = products.filter(
  (p) => p.category === "cheesecake" && p.unit === "cheesecake inteiro"
);

export default function CheesecakePage() {
  return (
    <>
      <PageHero
        eyebrow="Cremoso e irresistível"
        title="Cheesecakes que equilibram leveza, cremosidade e encanto"
        subtitle="Base amanteigada, recheio sedoso e coberturas que encantam os olhos antes mesmo do paladar."
      />

      {/* Fatias */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-[#f6efe8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle
              eyebrow="Disponível agora"
              title="Fatias de cheesecake"
              subtitle="Cada fatia é uma experiência completa — cremosidade, textura e sabor em perfeito equilíbrio."
            />
          </div>
          <ProductGrid products={cheesecakeFatias} columns={3} />
        </div>
      </section>

      {/* Sobre a textura */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#5E0B13]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#c89a57] uppercase font-medium mb-6">
            Nossa filosofia
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#f1e7dd] font-medium leading-tight mb-6">
            "O cheesecake perfeito é aquele que equilibra leveza e intensidade em cada mordida."
          </h2>
          <p className="text-[#e8d5b0]/70 text-base leading-relaxed max-w-xl mx-auto">
            Utilizamos apenas cream cheese de primeira linha, biscoito amanteigado artesanal e coberturas feitas com frutas frescas ou premium. O resultado é um cheesecake que se destaca pela textura sedosa e sabor equilibrado.
          </p>
        </div>
      </section>

      {/* Inteiros */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-[#eadbcd]/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle
              eyebrow="Para eventos"
              title="Cheesecakes inteiros"
              subtitle="Feitos sob encomenda para tornar suas celebrações ainda mais especiais."
            />
          </div>
          <ProductGrid products={cheesecakeInteiros} columns={2} />
        </div>
      </section>

      <FAQSection items={faqs.cheesecake} eyebrow="Dúvidas sobre cheesecake" />

      <WhatsAppCTASection
        title="Encante com sabor e sofisticação"
        subtitle="Peça seu cheesecake favorito pelo WhatsApp e receba com todo o cuidado."
      />
    </>
  );
}
