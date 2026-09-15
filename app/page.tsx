import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { MOCK_PRODUCTS, CATEGORIES } from "@/lib/products";
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from "@/lib/constants";
import { ArrowRight, Box, Layers, Mail, MapPin, Phone, Zap } from "lucide-react";

export default function Home() {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 3);

  return (
    <div className="flex flex-col pb-24 pt-16">
      {/* Hero Section */}
      <section className="relative px-4 py-24 md:py-32 lg:py-48 overflow-hidden">
        {/* Abstract Background Shape */}
        <div className="absolute top-10 right-[-5%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto">
          <div className="max-w-4xl relative mt-10 md:mt-0">
            <div className="absolute -top-12 left-0 md:-top-16 md:-left-12 rotate-[-10deg] text-accent-secondary font-handwriting text-3xl md:text-5xl">
              For your next collection
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] mb-8 uppercase">
              Fashion Assets <br className="hidden sm:block" />
              <span className="text-accent underline decoration-8 underline-offset-8">Perfected.</span>
            </h1>
            <p className="max-w-2xl text-xl md:text-2xl font-medium leading-snug mb-10 border-l-4 border-primary pl-6">
              Elevate your next project with industry-standard tech packs, photorealistic apparel mockups, and seamless patterns. No more wandering the aisles required.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" variant="accent" asChild>
                <Link href="/products">Browse Catalog</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/categories">View Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Brutalist Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-primary shadow-hard bg-card">
          <div className="flex flex-col p-8 border-b-2 md:border-b-0 md:border-r-2 border-primary relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 text-muted transition-transform group-hover:-translate-y-4 group-hover:-translate-x-4">
              <Layers size={160} strokeWidth={1} />
            </div>
            <div className="h-14 w-14 border-2 border-primary bg-accent-secondary flex items-center justify-center text-white mb-6 shadow-hard -rotate-3">
              <Layers className="h-7 w-7" />
            </div>
            <h3 className="font-black text-2xl uppercase mb-3 z-10">Industry Standard</h3>
            <p className="font-medium text-lg z-10">Factory-ready templates for seamless production.</p>
          </div>
          <div className="flex flex-col p-8 border-b-2 md:border-b-0 md:border-r-2 border-primary relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 text-muted transition-transform group-hover:-translate-y-4 group-hover:-translate-x-4">
              <Zap size={160} strokeWidth={1} />
            </div>
            <div className="h-14 w-14 border-2 border-primary bg-accent-tertiary flex items-center justify-center text-primary mb-6 shadow-hard rotate-3">
              <Zap className="h-7 w-7" />
            </div>
            <h3 className="font-black text-2xl uppercase mb-3 z-10">Instant Delivery</h3>
            <p className="font-medium text-lg z-10">Download your source files immediately after purchase.</p>
          </div>
          <div className="flex flex-col p-8 relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 text-muted transition-transform group-hover:-translate-y-4 group-hover:-translate-x-4">
              <Box size={160} strokeWidth={1} />
            </div>
            <div className="h-14 w-14 border-2 border-primary bg-accent flex items-center justify-center text-primary mb-6 shadow-hard -rotate-6">
              <Box className="h-7 w-7" />
            </div>
            <h3 className="font-black text-2xl uppercase mb-3 z-10">Premium Quality</h3>
            <p className="font-medium text-lg z-10">Highest resolution mockups and flawless vectors.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative">
        <div className="absolute -top-16 right-10 text-accent font-handwriting text-5xl rotate-6 hidden md:block">
          Must haves!
        </div>
        <div className="flex items-end justify-between mb-12 border-b-4 border-primary pb-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Trending Assets</h2>
          <Link href="/products" className="hidden sm:flex items-center text-xl font-bold hover:text-accent transition-colors">
            View all <ArrowRight className="ml-2 h-6 w-6 stroke-[3]" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center sm:hidden">
          <Button variant="outline" asChild className="w-full">
            <Link href="/products">View all products</Link>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-primary text-white p-8 md:p-16 border-2 border-primary shadow-hard relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Layers size={300} />
          </div>
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">Browse by Category</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl font-medium text-white/80">Find exactly what you need for your next collection.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {CATEGORIES.map((category) => (
              <Link 
                key={category.slug} 
                href={`/categories/${category.slug}`}
                className="group block p-8 bg-card border-2 border-primary shadow-hard hover:shadow-hard-lg hover:-translate-y-1 transition-all"
              >
                <h3 className="text-2xl font-black uppercase mb-3 text-primary group-hover:text-accent transition-colors">{category.name}</h3>
                <p className="font-medium text-primary/80">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-accent border-2 border-primary shadow-hard p-8 md:p-16 text-center relative">
          <div className="absolute -top-10 left-10 text-primary font-handwriting text-5xl -rotate-12 hidden md:block">
            Don't miss out!
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-primary">Join our newsletter</h2>
          <p className="font-bold mb-10 max-w-xl mx-auto text-xl text-primary/80">
            Get notified about new product drops, exclusive discounts, and freebies. No spam, ever.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex h-14 w-full border-2 border-primary bg-card px-6 py-2 text-lg font-bold placeholder:text-primary/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 shadow-inner"
              required
            />
            <Button size="lg" variant="default" className="h-14">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 relative">
        <div className="absolute -top-14 left-10 text-accent-secondary font-handwriting text-5xl -rotate-6 hidden md:block">
          Say hello!
        </div>
        <div className="flex items-end justify-between mb-12 border-b-4 border-primary pb-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Get in Touch</h2>
          <Link href="/contact" className="hidden sm:flex items-center text-xl font-bold hover:text-accent transition-colors">
            Contact page <ArrowRight className="ml-2 h-6 w-6 stroke-[3]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-primary shadow-hard bg-card">
          {/* Company Info */}
          <div className="p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-primary">
            <h3 className="text-2xl font-black uppercase mb-8 border-b-2 border-primary pb-4">Company Details</h3>

            <div className="space-y-6 font-bold">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1 text-accent shrink-0" />
                <div>
                  <p className="mb-1 text-primary/70 uppercase text-sm tracking-wider">Address</p>
                  <p>{COMPANY_NAME}</p>
                  <p>{COMPANY_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 mt-1 text-accent shrink-0" />
                <div>
                  <p className="mb-1 text-primary/70 uppercase text-sm tracking-wider">Email</p>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-accent transition-colors underline decoration-2 underline-offset-4 break-all">
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 mt-1 text-accent shrink-0" />
                <div>
                  <p className="mb-1 text-primary/70 uppercase text-sm tracking-wider">Phone</p>
                  <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`} className="hover:text-accent transition-colors underline decoration-2 underline-offset-4">
                    {COMPANY_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-black uppercase mb-8 border-b-2 border-primary pb-4">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-black uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  className="w-full h-12 border-2 border-primary bg-background px-4 font-bold focus:outline-none focus:ring-4 focus:ring-accent/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-black uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  className="w-full h-12 border-2 border-primary bg-background px-4 font-bold focus:outline-none focus:ring-4 focus:ring-accent/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-black uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className="w-full border-2 border-primary bg-background p-4 font-bold focus:outline-none focus:ring-4 focus:ring-accent/20 resize-none"
                  required
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
