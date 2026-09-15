import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from "@/lib/constants";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated={new Date().toLocaleDateString()}
      intro={`This Privacy Policy describes how ${COMPANY_NAME} ("we", "us", or "our") collects, uses, and shares your personal information when you visit or make a purchase from our website.`}
    >
      <LegalSection title="1. Personal Information We Collect">
        <p>When you visit the site, we collect certain information about your device, your interaction with the site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support.</p>
      </LegalSection>

      <LegalSection title="2. How We Use Your Personal Information">
        <p>We use your personal Information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers.</p>
      </LegalSection>

      <LegalSection title="3. Sharing Personal Information">
        <p>We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above.</p>
        <p>At this time, checkout on this site does not process live payments through a third-party payment processor or analytics provider. If and when we integrate a payment processor (such as Stripe or PayPal) or an analytics tool to operate the store, we will update this section to name the specific provider(s) in use and link to their respective privacy policies before any such integration goes live.</p>
      </LegalSection>

      <LegalSection title="4. Data Retention">
        <p>We keep your personal information only for as long as necessary to provide you with our services, fulfill the purposes described in this Privacy Policy, and comply with our legal, tax, and accounting obligations. When we no longer have a legitimate business need to retain your personal information, we will either delete it or anonymize it, or, if this is not possible (for example, because your information has been stored in backup archives), we will securely store it and isolate it from any further use until deletion is possible. We may also retain certain information for as long as needed to establish, exercise, or defend legal claims, or to resolve disputes.</p>
      </LegalSection>

      <LegalSection title="5. GDPR — Rights for Visitors in the European Economic Area">
        <p>If you are located in the European Economic Area (EEA), we process your personal information on the following legal bases: (a) your <strong>consent</strong>, for non-essential activities such as marketing communications you opt in to receive, and (b) our <strong>legitimate interest</strong>, for essential functionality such as operating the site, processing orders, preventing fraud, and providing customer support.</p>
        <p>Subject to applicable law, you have the right to: request access to the personal information we hold about you; request that we correct or update inaccurate or incomplete information; request that we delete your personal information; object to our processing of your personal information; and withdraw any consent you previously gave us, at any time and without affecting the lawfulness of processing carried out before you withdrew it. To exercise any of these rights, please contact us using the details below.</p>
      </LegalSection>

      <LegalSection title="6. Children's Privacy">
        <p>Our website and services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we will take steps to delete that information as soon as possible. If you believe we may have collected information from a child under 13, please contact us using the details below.</p>
      </LegalSection>

      <LegalSection title="7. Contact">
        <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at {COMPANY_EMAIL} or by mail using the details provided below:</p>
        <p>
          <strong>{COMPANY_NAME}</strong><br />
          {COMPANY_ADDRESS}<br />
          Phone: {COMPANY_PHONE}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
