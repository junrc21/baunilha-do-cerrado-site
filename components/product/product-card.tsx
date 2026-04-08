"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PremiumBadge } from "@/components/ui/premium-badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  unit?: string;
  tags?: string[];
  image?: string;
  featured?: boolean;
  className?: string;
  index?: number;
}

export function ProductCard({
  slug,
  name,
  tagline,
  priceFormatted,
  unit,
  tags = [],
  image,
  className,
  index = 0,
}: ProductCardProps) {
  const src = image || "/images/product-tin.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/produto/${slug}`} className="group block h-full">
        <article
          className={cn(
            "relative h-full bg-white rounded-[22px] overflow-hidden border border-[#d9c7b4]/50 shadow-elegant hover:shadow-elegant-md transition-all duration-400 hover:-translate-y-1",
            className
          )}
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-[18px] m-3 aspect-[4/3]">
            <Image
              src={src}
              alt={name}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {/* Tags */}
            {tags.length > 0 && (
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                {tags.map((tag) => (
                  <PremiumBadge key={tag} variant="gold">
                    {tag}
                  </PremiumBadge>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="px-5 pb-5 pt-3">
            <h3 className="font-serif text-xl text-[#4b1f1d] font-medium leading-tight mb-1.5">
              {name}
            </h3>
            <p className="text-[#7a4a47] text-sm leading-relaxed mb-4 line-clamp-2">
              {tagline}
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-serif text-xl text-[#6A1018] font-medium">
                  {priceFormatted}
                </p>
                {unit && (
                  <p className="text-[10px] text-[#7a4a47]/60 tracking-wide uppercase">
                    por {unit}
                  </p>
                )}
              </div>
              <div className="w-9 h-9 rounded-full bg-[#6A1018]/8 flex items-center justify-center transition-all duration-200 group-hover:bg-[#6A1018] group-hover:text-white text-[#6A1018]">
                <ArrowRight size={15} />
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
