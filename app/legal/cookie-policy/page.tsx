import { COMPANY_NAME, COMPANY_EMAIL } from "@/lib/constants";

export default function CookiePolicy() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-p:font-medium">
      <h1>Cookie Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <p>This Cookie Policy explains how {COMPANY_NAME} ("we", "us", and "ours") uses cookies and similar technologies to recognize you when you visit our website.</p>

      <h2>What are cookies?</h2>
      <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>

      <h2>Why do we use cookies?</h2>
      <p>We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, such as shopping cart functionality and secure checkout. We refer to these as "essential" or "strictly necessary" cookies.</p>

      <h2>Third-Party Cookies</h2>
      <p>At this time, we do not use any third-party analytics, advertising, or payment-processing cookies on this website. Should we integrate a third-party service that sets its own cookies — such as a payment processor or an analytics provider — in the future, we will update this section to name that provider and link to its privacy policy before the integration goes live.</p>

      <h2>Managing Cookies</h2>
      <p>Most web browsers let you control cookies through their settings, including blocking or deleting cookies already stored on your device. Because these settings vary by browser, please check your browser's help menu for instructions. Please note that blocking essential cookies may affect the functionality of this website, such as your ability to keep items in your shopping cart.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about our use of cookies or other technologies, please email us at {COMPANY_EMAIL}.</p>
    </div>
  );
}
