"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { AddonCard } from "@/components/product/addon-card";
import { addons } from "@/data/site-data";

export function AddonsSection() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#f6efe8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14 text-center">
          <SectionTitle
            eyebrow="Extras especiais"
            title="Adicione ao seu pedido"
            subtitle="Pequenos detalhes que transformam um presente em uma experiência inesquecível."
            center
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {addons.map((addon, i) => (
            <AddonCard key={addon.slug} {...addon} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
