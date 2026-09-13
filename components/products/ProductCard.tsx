"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { useCart } from "@/lib/cart";
import { ShoppingCart, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); 
    dispatch({ type: "ADD_ITEM", payload: product });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  // Assign slightly random badge colors based on category length for variety
  const badgeColors: ("default" | "accent" | "blue" | "green")[] = ["accent", "blue", "green", "default"];
  const badgeColor = badgeColors[product.category.length % badgeColors.length];

  return (
    <Link 
      href={`/products/${product.slug}`} 
      className="group flex flex-col bg-card border-2 border-primary shadow-hard hover:shadow-hard-lg transition-all hover:-translate-y-1 h-full"
    >
      <div className="aspect-[4/3] w-full overflow-hidden border-b-2 border-primary relative bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={badgeColor}>
            {product.category.replace("-", " ")}
          </Badge>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-black tracking-tight leading-tight mb-3">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-primary/70 flex-1 font-medium">
          {product.description}
        </p>
        <div className="mt-6 flex items-center justify-between border-t-2 border-primary pt-4">
          <p className="font-black text-xl">{formatPrice(product.price)}</p>
          <button 
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex items-center justify-center w-10 h-10 border-2 border-primary transition-colors ${
              isAdded ? "bg-accent-tertiary text-primary" : "bg-accent hover:bg-primary hover:text-white"
            }`}
          >
            {isAdded ? <Check className="h-5 w-5 stroke-[3]" /> : <ShoppingCart className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </Link>
  );
}
