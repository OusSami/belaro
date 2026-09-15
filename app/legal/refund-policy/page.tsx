import { COMPANY_NAME, COMPANY_EMAIL } from "@/lib/constants";

export default function RefundPolicy() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-p:font-medium">
      <h1>Refund Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>Digital Products</h2>
      <p>Due to the nature of digital products, which are non-tangible and irrevocable goods, <strong>all sales are final</strong>. We do not issue refunds for digital products once the order is confirmed and the product is sent or downloaded.</p>
      
      <p>By purchasing from {COMPANY_NAME}, you agree and acknowledge that you are purchasing a digital good that cannot be physically returned, and thus no refunds will be provided.</p>

      <h2>Exceptions</h2>
      <p>We stand behind our products. If you experience technical issues downloading or accessing your files, please contact our support team at {COMPANY_EMAIL} and we will ensure you receive the files you purchased. Refunds may only be granted at the sole discretion of {COMPANY_NAME} in the event of proven gross misrepresentation of a product.</p>

      <h2>Duplicate or Accidental Payments</h2>
      <p>If you were charged more than once for the same order, or a payment was made in error, please contact us at {COMPANY_EMAIL} with your order details. Duplicate or accidental payments of this kind are eligible for a refund of the extra or erroneous charge.</p>

      <h2>Payment Disputes</h2>
      <p>If something about your order doesn't look right, please reach out to us at {COMPANY_EMAIL} before filing a chargeback or payment dispute with your bank or card issuer. We aim to resolve billing issues directly and quickly, and a chargeback can delay a resolution and may result in the loss of access to your purchased files while the dispute is investigated.</p>

      <h2>Contact</h2>
      <p>If you have any questions about our refund policy, please contact us at {COMPANY_EMAIL}.</p>
    </div>
  );
}
