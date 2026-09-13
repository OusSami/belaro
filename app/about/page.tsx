import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Belaro.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-8">About Belaro</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p>
          Belaro was founded with a simple mission: to provide independent creators, designers, and developers with high-quality, professional design assets that save time and elevate their work.
        </p>
        <h2>Our Story</h2>
        <p>
          Started in 2024, we noticed a gap in the market for truly premium, meticulously crafted digital products that didn't require a subscription. We decided to build a marketplace where quality always comes before quantity.
        </p>
        <h2>What We Believe</h2>
        <ul>
          <li><strong>Quality over quantity:</strong> We curate only the best assets.</li>
          <li><strong>Fair pricing:</strong> One-time payments, no hidden subscriptions.</li>
          <li><strong>Empowering creators:</strong> Our tools are meant to speed up your workflow.</li>
        </ul>
      </div>
    </div>
  );
}
