import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL } from "@/lib/constants";

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated={new Date().toLocaleDateString()}>
      <LegalSection title="1. Overview">
        <p>This website is operated by {COMPANY_NAME}. Throughout the site, the terms “we”, “us” and “our” refer to {COMPANY_NAME}. We offer this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
      </LegalSection>

      <LegalSection title="2. Online Store Terms">
        <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence.</p>
      </LegalSection>

      <LegalSection title="3. Products or Services">
        <p>Our products are digital downloads. All sales are subject to our Refund Policy and License Agreement. We reserve the right to limit the sales of our products or Services to any person, geographic region or jurisdiction.</p>
      </LegalSection>

      <LegalSection title="4. Billing and Account Information">
        <p>We reserve the right to refuse any order you place with us. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.</p>
      </LegalSection>

      <LegalSection title="5. Governing Law">
        <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the State of Wyoming, United States.</p>
      </LegalSection>

      <LegalSection title="6. Contact Information">
        <p>Questions about the Terms of Service should be sent to us at {COMPANY_EMAIL}.</p>
        <p>
          <strong>{COMPANY_NAME}</strong><br />
          {COMPANY_ADDRESS}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
