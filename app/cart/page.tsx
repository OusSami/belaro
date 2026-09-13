"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Trash2, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const isEmpty = state.items.length === 0;

  if (isEmpty) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild size="lg">
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-lg border border-border bg-background shadow-sm">
            <ul className="divide-y divide-border">
              {state.items.map((item) => (
                <li key={item.id} className="p-6 flex flex-col sm:flex-row gap-6">
                  <div className="h-24 w-24 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-md border border-border bg-muted relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium">
                          <Link href={`/products/${item.slug}`} className="hover:underline">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-lg font-medium">{formatPrice(item.price)}</p>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground capitalize">{item.category.replace("-", " ")}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-border rounded-md">
                        <button 
                          onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: Math.max(1, item.quantity - 1) } })}
                          className="px-3 py-1 hover:bg-muted"
                        >-</button>
                        <span className="px-3 py-1 border-x border-border text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity + 1 } })}
                          className="px-3 py-1 hover:bg-muted"
                        >+</button>
                      </div>
                      <button
                        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                        className="text-sm font-medium text-destructive hover:text-destructive/80 flex items-center"
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="rounded-lg border border-border bg-muted/50 p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(state.total)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Taxes</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-bold">{formatPrice(state.total)}</span>
              </div>
            </div>
            <div className="mt-6">
              <Button asChild size="lg" className="w-full">
                <Link href="/checkout">
                  Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-center text-muted-foreground">
              Secure checkout. Digital products are delivered instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
