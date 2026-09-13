"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { Check, ShoppingCart } from "lucide-react";

export function AddToCartButton({ product }: { product: Product }) {
  const { dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <Button 
      size="lg" 
      onClick={handleAddToCart}
      disabled={isAdded}
      className={`w-full sm:w-auto px-10 h-14 text-lg flex items-center gap-2 transition-all ${
        isAdded ? "bg-accent-tertiary text-primary hover:bg-accent-tertiary" : ""
      }`}
    >
      {isAdded ? (
        <>
          <Check className="h-5 w-5 stroke-[3]" /> Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="h-5 w-5" /> Add to Cart
        </>
      )}
    </Button>
  );
}
