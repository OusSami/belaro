import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions.",
};

const faqs = [
  {
    q: "What format do the products come in?",
    a: "Most of our UI kits are provided in Figma format (.fig). Icons come in SVG, PNG, and occasionally EPS formats. Fonts are delivered as OTF, TTF, and WOFF/WOFF2 for web."
  },
  {
    q: "Can I use these products for commercial projects?",
    a: "Yes, our standard license covers both personal and commercial use for a single user. You can use the assets in end products for sale, but you cannot resell or redistribute the assets themselves."
  },
  {
    q: "Do you offer refunds?",
    a: "Due to the digital nature of our products, all sales are final. However, if you experience technical issues with a file, please contact support and we will help resolve it."
  },
  {
    q: "How do I download my purchase?",
    a: "Immediately after payment, you will be redirected to a success page with a download link. You will also receive an email containing a secure link to download your files at any time."
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-border rounded-lg p-6 bg-card">
            <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
            <p className="text-muted-foreground">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
