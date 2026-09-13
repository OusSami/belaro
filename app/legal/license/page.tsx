import { COMPANY_NAME, COMPANY_EMAIL } from "@/lib/constants";

export default function License() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-p:font-medium">
      <h1>License Agreement</h1>
      <p>By purchasing and downloading assets from {COMPANY_NAME}, you agree to the following license terms:</p>

      <h2>Standard Commercial License</h2>
      <p>All products come with a Standard Commercial License unless otherwise specified.</p>
      
      <h3>You may:</h3>
      <ul>
        <li>Use the assets for personal and commercial projects.</li>
        <li>Use the assets to create physical products (e.g. clothing, prints) for sale.</li>
        <li>Modify the assets to fit your design needs.</li>
      </ul>

      <h3>You may NOT:</h3>
      <ul>
        <li>Resell, redistribute, or share the original source files in any way.</li>
        <li>Include the assets in templates (e.g. Canva, Figma) where the end-user can extract the original asset.</li>
        <li>Claim the original design as your own.</li>
      </ul>

      <h2>Enterprise Licensing</h2>
      <p>If you are a company with over 50 employees or intend to use the assets in broadcast television, streaming media, or software applications, please contact us at {COMPANY_EMAIL} for an Enterprise License.</p>
    </div>
  );
}
