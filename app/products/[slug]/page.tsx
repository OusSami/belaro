import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/products/AddToCartButton";
import { Badge } from "@/components/ui/Badge";
import { Check, ShieldCheck, Download } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <div className="space-y-4">
          <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-muted border border-border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-2">
            <Badge className="capitalize">{product.category.replace("-", " ")}</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{product.name}</h1>
          <p className="text-3xl font-medium mb-6 text-primary/80">{formatPrice(product.price)}</p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-6 mb-10">
            <h3 className="font-semibold text-lg">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center text-muted-foreground">
                  <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <AddToCartButton product={product} />
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-8">
            <div className="flex items-center">
              <Download className="h-4 w-4 mr-2" /> Instant Download
            </div>
            <div className="flex items-center">
              <ShieldCheck className="h-4 w-4 mr-2" /> Secure Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
