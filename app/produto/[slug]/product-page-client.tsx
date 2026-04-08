"use client";

import { useState } from "react";
import { Plus, Minus, ShoppingBag, Check } from "lucide-react";
import { cookieFlavors } from "@/data/site-data";
import { useCart } from "@/lib/cart-context";

interface Product {
  slug: string;
  name: string;
  priceFormatted: string;
  price?: number;
  image?: string;
  cookieCount?: number;
}

interface ProductPageClientProps {
  product: Product;
  isLata: boolean;
}

export function ProductPageClient({ product, isLata }: ProductPageClientProps) {
  const { addItem, openCart } = useCart();
  const [qty, setQty] = useState(1);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [observation, setObservation] = useState("");
  const [added, setAdded] = useState(false);

  const cookieCount = product.cookieCount || 0;

  const toggleFlavor = (flavor: string) => {
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors(selectedFlavors.filter((f) => f !== flavor));
    } else if (selectedFlavors.length < cookieCount) {
      setSelectedFlavors([...selectedFlavors, flavor]);
    }
  };

  const handleAddToCart = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price ?? 0,
      priceFormatted: product.priceFormatted,
      image: product.image ?? "/images/product-tin.png",
      cookieCount: product.cookieCount,
      qty,
      flavors: selectedFlavors,
      observation,
    });
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Flavor selector for latas */}
      {isLata && cookieCount > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium">
              Escolha os sabores
            </p>
            <p className="text-xs text-[#7a4a47]">
              {selectedFlavors.length}/{cookieCount} selecionados
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {cookieFlavors.map((flavor) => {
              const selected = selectedFlavors.includes(flavor);
              const disabled = !selected && selectedFlavors.length >= cookieCount;
              return (
                <button
                  key={flavor}
                  onClick={() => toggleFlavor(flavor)}
                  disabled={disabled}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${
                    selected
                      ? "bg-[#6A1018] border-[#6A1018] text-[#f1e7dd]"
                      : disabled
                      ? "bg-transparent border-[#d9c7b4]/50 text-[#7a4a47]/40 cursor-not-allowed"
                      : "bg-transparent border-[#d9c7b4] text-[#7a4a47] hover:border-[#c89a57] hover:text-[#6A1018]"
                  }`}
                >
                  {flavor}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Observation */}
      <div>
        <label className="block text-[11px] tracking-widest text-[#7a4a47] uppercase font-medium mb-2">
          Observações
        </label>
        <textarea
          rows={2}
          placeholder="Mensagem para o cartão, restrições, preferências..."
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
          className="w-full px-4 py-3 rounded-[12px] border border-[#d9c7b4] bg-white text-[#4b1f1d] text-sm placeholder:text-[#7a4a47]/40 focus:outline-none focus:ring-2 focus:ring-[#c89a57]/30 focus:border-[#c89a57] transition-colors resize-none"
        />
      </div>

      {/* Qty + CTA */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 bg-white rounded-full border border-[#d9c7b4] px-4 py-2">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#6A1018] hover:bg-[#6A1018]/8 transition-colors"
          >
            <Minus size={14} />
          </button>
          <span className="font-serif text-lg text-[#4b1f1d] font-medium w-6 text-center">
            {qty}
          </span>
          <button
            onClick={() => setQty(qty + 1)}
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#6A1018] hover:bg-[#6A1018]/8 transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`flex-1 inline-flex items-center justify-center gap-2.5 py-4 rounded-full text-[11px] tracking-widest uppercase font-medium transition-all duration-300 ${
            added
              ? "bg-[#2d7a2d] text-white"
              : "bg-[#6A1018] hover:bg-[#571018] text-[#f1e7dd] hover:shadow-elegant-md"
          }`}
        >
          {added ? (
            <>
              <Check size={15} />
              Adicionado!
            </>
          ) : (
            <>
              <ShoppingBag size={15} />
              Adicionar ao carrinho
            </>
          )}
        </button>
      </div>
    </div>
  );
}
