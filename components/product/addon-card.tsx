"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddonCardProps {
  slug: string;
  name: string;
  description: string;
  priceFormatted: string;
  icon?: string;
  image?: string;
  index?: number;
  className?: string;
}

export function AddonCard({
  name,
  description,
  priceFormatted,
  image,
  index = 0,
  className,
}: AddonCardProps) {
  const src = image || "/images/product-tin.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className={cn(
          "group relative bg-white rounded-[22px] overflow-hidden border border-[#d9c7b4]/50 shadow-elegant hover:shadow-elegant-md transition-all duration-300",
          className
        )}
      >
        <div className="relative overflow-hidden m-3 rounded-[18px] aspect-[4/3]">
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="px-5 pb-5 pt-2">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="font-serif text-xl text-[#4b1f1d] font-medium mb-1.5">
                {name}
              </h3>
              <p className="text-[#7a4a47] text-sm leading-relaxed mb-3">
                {description}
              </p>
              <p className="font-serif text-lg text-[#6A1018] font-medium">
                {priceFormatted}
              </p>
            </div>
            <button
              className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-white flex items-center justify-center transition-all duration-200 hover:shadow-gold hover:scale-105 mt-1"
              aria-label={`Adicionar ${name}`}
            >
              <Plus size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
