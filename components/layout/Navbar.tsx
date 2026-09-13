"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { state } = useCart();
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        
        {/* Left Side: Mobile Menu Toggle & Logo */}
        <div className="flex items-center gap-4 md:gap-10">
          <button 
            className="md:hidden flex items-center justify-center p-2 -ml-2 text-primary hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-7 w-7 stroke-[2.5]" /> : <Menu className="h-7 w-7 stroke-[2.5]" />}
          </button>
          
          <Link href="/" className="flex items-center hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center text-sm font-bold uppercase tracking-wider transition-colors hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side: Cart */}
        <div className="flex items-center">
          <Link href="/cart" className="relative p-2 border-l-2 border-primary h-16 flex items-center justify-center w-16 hover:bg-accent transition-colors group">
            <ShoppingCart className="h-6 w-6 stroke-[2.5] group-hover:text-primary" />
            {itemCount > 0 && (
              <span className="absolute top-3 right-2 h-5 w-5 bg-primary text-white text-[11px] font-bold flex items-center justify-center rounded-full group-hover:bg-white group-hover:text-primary group-hover:border-2 group-hover:border-primary">
                {itemCount}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b-2 border-primary shadow-hard flex flex-col items-center py-6 gap-6 z-40">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-black uppercase tracking-wider transition-colors hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-16 h-1 bg-primary mt-2"></div>
        </div>
      )}
    </header>
  );
}
