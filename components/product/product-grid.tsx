import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";

interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  unit?: string;
  tags?: string[];
  featured?: boolean;
  image?: string;
}

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ProductGrid({ products, columns = 3, className }: ProductGridProps) {
  const colClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-6", colClasses[columns], className)}>
      {products.map((product, i) => (
        <ProductCard key={product.slug} {...product} index={i} />
      ))}
    </div>
  );
}
