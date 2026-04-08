"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { CategoryCard } from "@/components/product/category-card";
import { categories } from "@/data/site-data";

export function CategoriesSection() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#f6efe8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14">
          <SectionTitle
            eyebrow="Explore"
            title="Nossas Categorias"
            subtitle="Cada produto criado com atenção ao detalhe, ingredientes selecionados e apresentação que impressiona."
            center
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} {...cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
