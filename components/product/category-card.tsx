"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  cta: string;
  image?: string;
  index?: number;
  className?: string;
}

export function CategoryCard({
  name,
  tagline,
  description,
  href,
  cta,
  image,
  index = 0,
  className,
}: CategoryCardProps) {
  const src = image || "/images/product-tin.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <Link href={href} className="group block h-full">
        <article
          className={cn(
            "relative h-full bg-white rounded-[22px] overflow-hidden border border-[#d9c7b4]/50 shadow-elegant hover:shadow-elegant-md transition-all duration-400 hover:-translate-y-1.5",
            className
          )}
        >
          <div className="relative overflow-hidden m-3 rounded-[18px] aspect-[4/3]">
            <Image
              src={src}
              alt={name}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-[#5E0B13]/0 group-hover:bg-[#5E0B13]/10 transition-colors duration-400" />
          </div>

          <div className="px-5 pb-6 pt-3">
            <p className="text-[10px] tracking-[0.3em] text-[#c89a57] uppercase font-medium mb-1.5">
              {tagline}
            </p>
            <h3 className="font-serif text-2xl text-[#4b1f1d] font-medium mb-2">
              {name}
            </h3>
            <p className="text-[#7a4a47] text-sm leading-relaxed mb-5">
              {description}
            </p>
            <div className="flex items-center gap-2 text-[#6A1018] text-[11px] tracking-widest uppercase font-medium">
              <span>{cta}</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
