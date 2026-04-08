import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Plus, Minus, MessageCircle, Star } from "lucide-react";
import { products, addons, cookieFlavors } from "@/data/site-data";
import { ProductCard } from "@/components/product/product-card";
import { SectionTitle } from "@/components/ui/section-title";
import { WHATSAPP_LINK } from "@/lib/constants";
import { ProductPageClient } from "./product-page-client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Produto não encontrado" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const isLata = product.category === "presentear";

  const whatsappMsg = encodeURIComponent(
    `Olá! Gostaria de pedir: ${product.name} (${product.priceFormatted})`
  );

  return (
    <div className="bg-[#f6efe8] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <Link
          href={`/${product.category === "presentear" ? "presentear" : product.category}`}
          className="inline-flex items-center gap-2 text-sm text-[#7a4a47] hover:text-[#6A1018] transition-colors"
        >
          <ArrowLeft size={14} />
          Voltar
        </Link>
      </div>

      {/* Product */}
      <section className="pb-16 sm:pb-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Image */}
            <div className="lg:sticky lg:top-28">
              <div className="rounded-[28px] overflow-hidden border border-[#d9c7b4]/60 aspect-square relative shadow-elegant-md">
                <Image
                  src={product.image || "/images/product-tin.png"}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className={`flex-1 aspect-square rounded-[16px] overflow-hidden relative border ${
                      n === 1 ? "border-[#c89a57]" : "border-[#d9c7b4]/50"
                    }`}
                  >
                    <Image
                      src={product.image || "/images/product-tin.png"}
                      alt={`${product.name} — vista ${n}`}
                      fill
                      className="object-cover object-center"
                      sizes="10vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-medium bg-[#c89a57]/15 text-[#b88646] border border-[#c89a57]/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4b1f1d] font-medium leading-tight mb-3">
                {product.name}
              </h1>
              <p className="text-[#7a4a47] text-base italic mb-2">{product.tagline}</p>

              <div className="flex items-center gap-2 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#c89a57] fill-[#c89a57]" />
                ))}
                <span className="text-sm text-[#7a4a47]">(48 avaliações)</span>
              </div>

              <div className="mb-6">
                <p className="font-serif text-3xl text-[#6A1018] font-medium">
                  {product.priceFormatted}
                </p>
                {product.unit && (
                  <p className="text-sm text-[#7a4a47] mt-0.5">por {product.unit}</p>
                )}
              </div>

              <p className="text-[#7a4a47] leading-relaxed mb-8">
                {product.description}
              </p>

              <ProductPageClient product={product} isLata={isLata} whatsappMsg={whatsappMsg} />

              {/* Addons for latas */}
              {isLata && (
                <div className="mt-8 pt-8 border-t border-[#d9c7b4]/40">
                  <p className="font-serif text-lg text-[#4b1f1d] font-medium mb-4">
                    Adicionar ao presente
                  </p>
                  <div className="space-y-3">
                    {addons.map((addon) => (
                      <div
                        key={addon.slug}
                        className="flex items-center justify-between gap-4 bg-white rounded-[16px] px-5 py-4 border border-[#d9c7b4]/50"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-sm text-[#4b1f1d]">{addon.name}</p>
                          <p className="text-xs text-[#7a4a47]">{addon.description}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-serif text-sm text-[#6A1018] font-medium">
                            {addon.priceFormatted}
                          </p>
                          <button className="w-8 h-8 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-white flex items-center justify-center transition-all duration-200">
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="mt-8 pt-8 border-t border-[#d9c7b4]/40 grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { label: "100% Artesanal", sub: "Feito à mão" },
                  { label: "Ingredientes", sub: "Selecionados" },
                  { label: "Embalagem", sub: "Premium" },
                ].map((feat) => (
                  <div key={feat.label} className="text-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c89a57] mx-auto mb-2" />
                    <p className="font-medium text-xs text-[#4b1f1d]">{feat.label}</p>
                    <p className="text-[10px] text-[#7a4a47]">{feat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 px-6 bg-[#eadbcd]/40">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <SectionTitle
                eyebrow="Você também pode gostar"
                title="Produtos relacionados"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.slug} {...p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
