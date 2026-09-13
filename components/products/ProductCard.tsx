import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-card border-2 border-primary shadow-hard hover:shadow-hard-lg hover:-translate-y-1 transition-all overflow-hidden"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-primary bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-black uppercase tracking-widest text-accent">
          {product.category.replace("-", " ")}
        </span>
        <h3 className="mt-2 text-xl font-black uppercase leading-tight tracking-tight">
          {product.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-primary/70 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-black">{formatPrice(product.price)}</span>
          <span className="text-sm font-black uppercase underline decoration-2 underline-offset-4 group-hover:text-accent">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
