import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";
import { BenefitsSection } from "@/components/sections/home/benefits-section";
import { CategoriesSection } from "@/components/sections/home/categories-section";
import { FeaturedProductsSection } from "@/components/sections/home/featured-products-section";
import { AddonsSection } from "@/components/sections/home/addons-section";
import { HowItWorksSection } from "@/components/sections/home/how-it-works-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { WhatsAppCTASection } from "@/components/sections/whatsapp-cta-section";

export const metadata: Metadata = {
  title: "Baunilha do Cerrado | Confeitaria premium para presentear e celebrar",
  description:
    "Cookies artesanais, bolos e cheesecakes feitos com ingredientes selecionados e muito carinho, para transformar qualquer momento em especial.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <AddonsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <WhatsAppCTASection
        title="Encomende do seu jeito"
        subtitle="Fale com a gente no WhatsApp e monte seu pedido personalizado com todo o cuidado que você merece."
      />
    </>
  );
}
