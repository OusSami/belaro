import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/lib/constants";

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated={new Date().toLocaleDateString()}
      intro={`This Cookie Policy explains how ${COMPANY_NAME} ("we", "us", and "ours") uses cookies and similar technologies to recognize you when you visit our website.`}
    >
      <LegalSection title="What are cookies?">
        <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
      </LegalSection>

      <LegalSection title="Why do we use cookies?">
        <p>We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, such as shopping cart functionality and secure checkout. We refer to these as "essential" or "strictly necessary" cookies.</p>
      </LegalSection>

      <LegalSection title="Third-Party Cookies">
        <p>At this time, we do not use any third-party analytics, advertising, or payment-processing cookies on this website. Should we integrate a third-party service that sets its own cookies — such as a payment processor or an analytics provider — in the future, we will update this section to name that provider and link to its privacy policy before the integration goes live.</p>
      </LegalSection>

      <LegalSection title="Managing Cookies">
        <p>Most web browsers let you control cookies through their settings, including blocking or deleting cookies already stored on your device. Because these settings vary by browser, please check your browser's help menu for instructions. Please note that blocking essential cookies may affect the functionality of this website, such as your ability to keep items in your shopping cart.</p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>If you have any questions about our use of cookies or other technologies, please email us at {COMPANY_EMAIL}.</p>
      </LegalSection>
    </LegalLayout>
  );
}
