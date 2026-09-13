import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from "@/lib/constants";

export default function PrivacyPolicy() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-p:font-medium">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <p>This Privacy Policy describes how {COMPANY_NAME} ("we", "us", or "our") collects, uses, and shares your personal information when you visit or make a purchase from our website.</p>
      
      <h2>1. Personal Information We Collect</h2>
      <p>When you visit the site, we collect certain information about your device, your interaction with the site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support.</p>
      
      <h2>2. How We Use Your Personal Information</h2>
      <p>We use your personal Information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers.</p>
      
      <h2>3. Sharing Personal Information</h2>
      <p>We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example, we use Stripe to process payments.</p>
      
      <h2>4. Contact</h2>
      <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at {COMPANY_EMAIL} or by mail using the details provided below:</p>
      <p>
        <strong>{COMPANY_NAME}</strong><br />
        {COMPANY_ADDRESS}<br />
        Phone: {COMPANY_PHONE}
      </p>
    </div>
  );
}
