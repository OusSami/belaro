"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
  const { state, dispatch } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  
  // Redirect if empty
  useEffect(() => {
    if (state.items.length === 0) {
      router.push("/cart");
    }
  }, [state.items.length, router]);

  if (state.items.length === 0) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      dispatch({ type: "CLEAR_CART" });
      router.push("/order-success");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-8">
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email address</label>
                  <input type="email" id="email" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" />
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              <p className="text-sm text-muted-foreground mb-4">
                This is a demo store. No actual payment will be processed.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="card" className="block text-sm font-medium mb-1">Card number</label>
                  <input type="text" id="card" placeholder="0000 0000 0000 0000" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="exp" className="block text-sm font-medium mb-1">Expiration date</label>
                    <input type="text" id="exp" placeholder="MM/YY" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium mb-1">CVC</label>
                    <input type="text" id="cvc" placeholder="123" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-lg border border-border bg-muted/50 p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="divide-y divide-border mb-4">
              {state.items.map((item) => (
                <li key={item.id} className="py-3 flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.name} x {item.quantity}</span>
                  <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-2 pt-4 border-t border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(state.total)}</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-bold">{formatPrice(state.total)}</span>
              </div>
            </div>
            <div className="mt-6">
              <Button form="checkout-form" type="submit" size="lg" className="w-full" disabled={isProcessing}>
                {isProcessing ? "Processing..." : `Pay ${formatPrice(state.total)}`}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
