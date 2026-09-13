import { MOCK_PRODUCTS, CATEGORIES } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products",
  description: "Browse our entire collection of premium digital design assets.",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">All Products</h1>
        <p className="text-xl text-muted-foreground">
          Browse our entire collection of premium fashion design assets.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 rounded-2xl glass p-6 border-white/5">
            <h3 className="font-semibold mb-6 text-lg">Filters</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">Category</h4>
                <div className="space-y-3">
                  {CATEGORIES.map(cat => (
                    <label key={cat.slug} className="flex items-center space-x-3 text-sm cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 border border-border rounded bg-background group-hover:border-accent transition-colors">
                        <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                        <div className="w-3 h-3 rounded-sm bg-accent scale-0 peer-checked:scale-100 transition-transform" />
                      </div>
                      <span className="group-hover:text-foreground text-muted-foreground transition-colors">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
