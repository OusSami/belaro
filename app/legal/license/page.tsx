import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/lib/constants";

export default function License() {
  return (
    <LegalLayout
      title="License Agreement"
      lastUpdated="September 12, 2026"
      intro={`By purchasing and downloading assets from ${COMPANY_NAME}, you agree to the following license terms:`}
    >
      <LegalSection title="Standard Commercial License">
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
      </LegalSection>

      <LegalSection title="Enterprise Licensing">
        <p>If you are a company with over 50 employees or intend to use the assets in broadcast television, streaming media, or software applications, please contact us at {COMPANY_EMAIL} for an Enterprise License.</p>
      </LegalSection>
    </LegalLayout>
  );
}
