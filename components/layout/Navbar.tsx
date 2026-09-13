"use client";

import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import { SITE_NAME, NAV_LINKS } from "@/lib/constants";
import { useCart } from "@/lib/cart";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { state } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b-2 border-primary bg-background">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link href="/" className="text-2xl font-black uppercase tracking-tighter">
          {SITE_NAME}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-black uppercase tracking-wide hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative flex h-10 w-10 items-center justify-center border-2 border-primary shadow-hard hover:-translate-y-0.5 hover:shadow-hard-lg transition-all"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-black text-primary border-2 border-primary">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            className="md:hidden flex h-10 w-10 items-center justify-center border-2 border-primary shadow-hard"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t-2 border-primary bg-background px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-black uppercase tracking-wide"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
