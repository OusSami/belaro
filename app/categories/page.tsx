import Link from "next/link";
import { CATEGORIES, getProductsByCategory } from "@/lib/products";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse digital products by category.",
};

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Categories</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Find exactly what you need by browsing our specialized categories.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CATEGORIES.map((category) => {
          const productsCount = getProductsByCategory(category.slug).length;
          
          return (
            <Link 
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group flex flex-col justify-between p-8 rounded-2xl border border-border bg-card hover:border-primary transition-all hover:shadow-md"
            >
              <div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{category.name}</h2>
                <p className="text-muted-foreground mb-6">{category.description}</p>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <span className="text-sm font-medium">{productsCount} products</span>
                <span className="text-primary font-medium flex items-center">
                  Browse <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
