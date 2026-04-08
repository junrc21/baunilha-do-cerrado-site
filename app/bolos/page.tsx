import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProductGrid } from "@/components/product/product-grid";
import { WhatsAppCTASection } from "@/components/sections/whatsapp-cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { SectionTitle } from "@/components/ui/section-title";
import { products, faqs } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Bolos",
  description:
    "Bolos autorais em fatias ou inteiros para celebrar com elegância. Feitos sob encomenda com ingredientes selecionados.",
};

const bolosFatias = products.filter((p) => p.category === "bolos" && p.unit === "fatia");
const bolosInteiros = products.filter((p) => p.category === "bolos" && p.unit === "bolo inteiro");

export default function BolosPage() {
  return (
    <>
      <PageHero
        eyebrow="Confeitaria artesanal"
        title="Bolos autorais para celebrar com elegância"
        subtitle="Em fatias ou inteiros, nossos bolos unem sabor, apresentação impecável e delicadeza em cada detalhe."
      />

      {/* Fatias */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-[#f6efe8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle
              eyebrow="Para saborear"
              title="Em fatias"
              subtitle="Perfeito para um momento especial só seu ou para dividir com quem você ama."
            />
          </div>
          <ProductGrid products={bolosFatias} columns={3} />
        </div>
      </section>

      {/* Inteiros */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-[#eadbcd]/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle
              eyebrow="Para celebrar"
              title="Bolos inteiros"
              subtitle="Feitos sob encomenda para tornar cada celebração inesquecível."
            />
          </div>
          <ProductGrid products={bolosInteiros} columns={2} />
        </div>
      </section>

      {/* Encomenda sob medida */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#f6efe8]">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            eyebrow="Personalizado"
            title="Monte o bolo dos seus sonhos"
            subtitle="Escolha o sabor, recheio e decoração. Trabalhamos juntos para criar o bolo perfeito para a sua celebração."
            center
          />
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { label: "Sabores únicos", text: "Combinações exclusivas com ingredientes premium" },
              { label: "Decoração autoral", text: "Cada bolo é uma obra de arte, assinada com cuidado" },
              { label: "Entrega com segurança", text: "Embalagem especial para preservar cada detalhe" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-[20px] p-6 border border-[#d9c7b4]/50 shadow-elegant text-center">
                <div className="w-2 h-2 rounded-full bg-[#c89a57] mx-auto mb-3" />
                <p className="font-serif text-lg text-[#4b1f1d] font-medium mb-2">{item.label}</p>
                <p className="text-sm text-[#7a4a47] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/5561999999999?text=Olá! Gostaria de encomendar um bolo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-[#6A1018] hover:bg-[#571018] text-[#f1e7dd] text-[11px] tracking-widest uppercase font-medium transition-all duration-200 hover:shadow-elegant-md"
          >
            Encomendar pelo WhatsApp
          </a>
        </div>
      </section>

      <FAQSection items={faqs.bolos} eyebrow="Dúvidas sobre bolos" />

      <WhatsAppCTASection
        title="Vamos criar algo especial?"
        subtitle="Entre em contato e planeje o bolo perfeito para o seu momento."
      />
    </>
  );
}
