import { notFound } from "next/navigation";
import { CATEGORIES, getProductsByCategory } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const category = CATEGORIES.find(c => c.slug === params.slug);
  if (!category) return { title: "Not Found" };
  return {
    title: `${category.name} | Categories`,
    description: category.description,
  };
}

export default function CategoryDetailPage({ params }: Props) {
  const category = CATEGORIES.find(c => c.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{category.name}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          {category.description}
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-muted/30 rounded-lg border border-border border-dashed">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground">We're currently working on adding products to this category.</p>
        </div>
      )}
    </div>
  );
}
