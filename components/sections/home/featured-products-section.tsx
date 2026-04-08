"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/site-data";

const featured = products.filter((p) => p.featured).slice(0, 5);

export function FeaturedProductsSection() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#eadbcd]/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14">
          <SectionTitle
            eyebrow="Mais amados"
            title="Destaques que conquistam"
            subtitle="Os favoritos da nossa confeitaria — feitos com amor e escolhidos com cuidado."
            center
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.slug} {...product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
