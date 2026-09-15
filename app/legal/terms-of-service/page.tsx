import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL } from "@/lib/constants";

export default function TermsOfService() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-p:font-medium">
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Overview</h2>
      <p>This website is operated by {COMPANY_NAME}. Throughout the site, the terms “we”, “us” and “our” refer to {COMPANY_NAME}. We offer this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>

      <h2>2. Online Store Terms</h2>
      <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence.</p>

      <h2>3. Products or Services</h2>
      <p>Our products are digital downloads. All sales are subject to our Refund Policy and License Agreement. We reserve the right to limit the sales of our products or Services to any person, geographic region or jurisdiction.</p>

      <h2>4. Billing and Account Information</h2>
      <p>We reserve the right to refuse any order you place with us. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.</p>
      
      <h2>5. Governing Law</h2>
      <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the State of Wyoming, United States.</p>

      <h2>6. Contact Information</h2>
      <p>Questions about the Terms of Service should be sent to us at {COMPANY_EMAIL}.</p>
      <p>
        <strong>{COMPANY_NAME}</strong><br />
        {COMPANY_ADDRESS}
      </p>
    </div>
  );
}
