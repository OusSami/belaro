export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  image: string;
  features: string[];
};

export const CATEGORIES = [
  { name: "Tech Packs", slug: "tech-packs", description: "Industry-standard templates for factory production and specification." },
  { name: "Apparel Mockups", slug: "mockups", description: "High-resolution 3D and photo mockups for presenting your designs." },
  { name: "Digital Brushes", slug: "brushes", description: "Procreate and Illustrator brushes tailored for fashion sketching." },
  { name: "Patterns & Textures", slug: "patterns", description: "Seamless vector patterns, textures, and digital fabric prints." },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Streetwear Tech Pack Bundle",
    slug: "streetwear-tech-pack",
    description: "A comprehensive bundle of blank tech pack templates for hoodies, joggers, and oversized tees. Ready for factory use.",
    price: 45.00,
    category: "tech-packs",
    image: "/images/p1.jpg",
    features: ["Illustrator & PDF formats", "Measurement charts included", "Callout details", "Print & embroidery sections"],
  },
  {
    id: "p2",
    name: "Essential Heavyweight T-Shirt Mockup",
    slug: "heavyweight-tshirt-mockup",
    description: "Ultra-realistic, high-resolution mockup of a heavyweight boxy fit t-shirt with customizable colors and displacement mapping.",
    price: 24.00,
    category: "mockups",
    image: "/images/p2.jpg",
    features: ["4K Resolution PSD", "Displacement maps", "Front and back views", "Smart object integration"],
  },
  {
    id: "p3",
    name: "Procreate Fashion Sketch Brushes",
    slug: "procreate-fashion-brushes",
    description: "A set of 40 custom brushes designed specifically for digital fashion illustration on the iPad.",
    price: 18.00,
    category: "brushes",
    image: "/images/p3.jpg",
    features: ["40 Custom Brushes", "Pencil, marker, & watercolor effects", "Fabric texture brushes", "Installation guide"],
  },
  {
    id: "p4",
    name: "Vector Denim Textures & Rips",
    slug: "vector-denim-textures",
    description: "Highly detailed vector denim textures, seams, and distressed rips for Adobe Illustrator CADs.",
    price: 30.00,
    category: "patterns",
    image: "/images/p4.jpg",
    features: ["100% Vector scalable", "25 distressed overlays", "10 seamless denim swatches", "AI & EPS formats"],
  },
  {
    id: "p5",
    name: "Activewear Tech Pack Template",
    slug: "activewear-tech-pack",
    description: "Specialized tech pack templates for activewear, including leggings and sports bras with flatlock stitching details.",
    price: 35.00,
    category: "tech-packs",
    image: "/images/p5.jpg",
    features: ["Detailed stitch callouts", "Stretch ratio charts", "Hardware specification sheets", "Fully editable vectors"],
  },
  {
    id: "p6",
    name: "Oversized Vintage Hoodie Mockup",
    slug: "oversized-hoodie-mockup",
    description: "Studio-lit mockup of an oversized, drop-shoulder vintage wash hoodie.",
    price: 28.00,
    category: "mockups",
    image: "/images/p6.jpg",
    features: ["Vintage wash effect layer", "Front, back, and hood-up views", "Transparent background", "Smart objects"],
  },
  {
    id: "p7",
    name: "Illustrator Stitch & Trim Brushes",
    slug: "illustrator-stitch-brushes",
    description: "Over 100 pattern brushes for Adobe Illustrator to quickly draw zippers, flatlock, zig-zag stitches, and drawcords.",
    price: 22.00,
    category: "brushes",
    image: "/images/p7.jpg",
    features: ["100+ Vector Brushes", "Zippers, buttons, & drawstrings", "Single & double needle stitches", "Color-changeable"],
  },
  {
    id: "p8",
    name: "Seamless Floral Print Patterns",
    slug: "seamless-floral-patterns",
    description: "A curated collection of 15 seamless, high-resolution floral prints ready for textile printing.",
    price: 40.00,
    category: "patterns",
    image: "/images/p8.jpg",
    features: ["15 Seamless patterns", "TIFF & PSD formats (300dpi)", "Separated color channels", "Commercial license included"],
  },
  {
    id: "p9",
    name: "Outerwear Puffer Jacket Tech Pack",
    slug: "puffer-jacket-tech-pack",
    description: "Complex technical pack template for quilted outerwear, detailing fill weights, quilting patterns, and hardware.",
    price: 50.00,
    category: "tech-packs",
    image: "/images/p9.jpg",
    features: ["Quilting specification page", "Hardware & trim BOM", "Internal pocket callouts", "Factory-ready formatting"],
  },
  {
    id: "p10",
    name: "3D Puffer Jacket Mockup",
    slug: "3d-puffer-jacket-mockup",
    description: "Next-gen 3D mockup of a puffer jacket. Edit materials to be glossy, matte, or metallic nylon.",
    price: 35.00,
    category: "mockups",
    image: "/images/p10.jpg",
    features: ["PSD Format with 3D layers", "Adjustable gloss/matte materials", "Customizable quilting lines", "High resolution"],
  },
  {
    id: "p11",
    name: "Sneaker Blueprint Tech Pack",
    slug: "sneaker-tech-pack",
    description: "A highly detailed exploded CAD blueprint for a chunky streetwear sneaker. Perfect for footwear designers sending concepts to manufacturing.",
    price: 55.00,
    category: "tech-packs",
    image: "/images/p11.jpg",
    features: ["Exploded view components", "Outsole tread details", "Material callouts", "Vector format"],
  },
  {
    id: "p12",
    name: "Natural Canvas Tote Bag Mockup",
    slug: "tote-bag-mockup",
    description: "Minimalist lifestyle photography mockup of a blank natural canvas tote bag hanging in a bright studio environment.",
    price: 15.00,
    category: "mockups",
    image: "/images/p12.jpg",
    features: ["High-res lifestyle photo", "Smart object placement", "Adjustable shadow opacity", "Clean modern aesthetic"],
  },
  {
    id: "p13",
    name: "Y2K Vector Graphic Pack",
    slug: "y2k-vector-graphics",
    description: "A vibrant asset pack of Y2K style vector graphics, featuring cyber sigilism, tribal shapes, and futuristic stars.",
    price: 25.00,
    category: "patterns",
    image: "/images/p13.jpg",
    features: ["Over 200 vector elements", "Fully editable strokes", "AI, EPS, SVG formats", "Trending cyber sigilism styles"],
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return MOCK_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return MOCK_PRODUCTS.filter((p) => p.category === categorySlug);
}
