import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProductGrid } from "@/components/product/product-grid";
import { WhatsAppCTASection } from "@/components/sections/whatsapp-cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { SectionTitle } from "@/components/ui/section-title";
import { products, faqs } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Cookies Artesanais",
  description:
    "Cookies artesanais e personalizados feitos com ingredientes selecionados. Perfeitos para presentear ou saborear.",
};

const cookieProducts = products.filter((p) => p.category === "cookies");

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Confeitaria artesanal"
        title="Cookies que encantam em cada mordida"
        subtitle="Feitos diariamente com ingredientes selecionados. Crocantes por fora, macios por dentro — irresistíveis."
      />

      {/* Products */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-[#f6efe8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle
              eyebrow="Nossa seleção"
              title="Sabores disponíveis"
              subtitle="Cada cookie é uma experiência única. Escolha o seu favorito ou monte uma caixinha especial."
            />
          </div>
          <ProductGrid products={cookieProducts} columns={3} />
        </div>
      </section>

      {/* Cookies personalizados */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#eadbcd]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <SectionTitle
                eyebrow="Sob medida"
                title="Cookies personalizados"
                subtitle="Perfeitos para marcas, datas especiais e presentes que surpreendem nos detalhes."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Decoração personalizada com logo ou tema",
                  "Perfeito para eventos corporativos",
                  "Lembranças de aniversários e casamentos",
                  "Mínimo de 12 unidades por pedido",
                  "Prazo de 5 a 7 dias úteis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c89a57] mt-2 flex-shrink-0" />
                    <span className="text-[#7a4a47] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5561999999999?text=Olá! Quero saber mais sobre cookies personalizados."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-[#4b1f1d] text-[11px] tracking-widest uppercase font-medium transition-all duration-200"
              >
                Solicitar orçamento
              </a>
            </div>

            <div className="relative">
              <div className="rounded-[28px] bg-gradient-to-br from-[#f1e7dd] to-[#eadbcd] border border-[#d9c7b4]/60 aspect-[4/3] flex items-center justify-center shadow-elegant-md">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-[#c89a57]/20 border border-[#c89a57]/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-3xl text-[#c89a57] font-semibold">BC</span>
                  </div>
                  <p className="font-serif text-xl text-[#4b1f1d] font-medium mb-2">Cookie Personalizado</p>
                  <p className="text-sm text-[#7a4a47]">Com sua marca e estilo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latas */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-[#f6efe8]">
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle
            eyebrow="Para presentear"
            title="Cookies em latas presenteáveis"
            subtitle="Combine seus sabores favoritos em nossas latas elegantes. O presente perfeito para qualquer ocasião."
            center
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { name: "Lata com 4 cookies", price: "R$ 68,00", href: "/produto/lata-dourada-4-cookies" },
              { name: "Lata com 6 cookies", price: "R$ 98,00", href: "/produto/lata-vermelha-6-cookies" },
              { name: "Kit 3 latas — 12 cookies", price: "R$ 260,00", href: "/produto/kit-3-latas-12-cookies" },
            ].map((lata) => (
              <a
                key={lata.name}
                href={lata.href}
                className="group flex items-center gap-4 bg-white rounded-full px-6 py-4 border border-[#d9c7b4]/60 shadow-elegant hover:shadow-elegant-md hover:border-[#c89a57]/40 transition-all duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-[#c89a57]" />
                <div className="text-left">
                  <p className="font-medium text-[#4b1f1d] text-sm">{lata.name}</p>
                  <p className="font-serif text-[#6A1018] text-sm">{lata.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs.cookies} eyebrow="Dúvidas sobre cookies" />

      <WhatsAppCTASection
        title="Pronto para encomendar?"
        subtitle="Fale com a gente e escolha seus cookies favoritos."
        ctaLabel="Fazer pedido pelo WhatsApp"
      />
    </>
  );
}
