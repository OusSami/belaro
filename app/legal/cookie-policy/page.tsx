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

      <h2>Contact Us</h2>
      <p>If you have any questions about our use of cookies or other technologies, please email us at {COMPANY_EMAIL}.</p>
    </div>
  );
}
