import Link from "next/link";
import { SITE_NAME, COMPANY_NAME, COMPANY_EMAIL, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-primary bg-primary text-white">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-3">{SITE_NAME}</h3>
          <p className="text-sm text-white/70 font-medium">
            High-quality digital design assets for modern creators.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-widest mb-4 text-accent">Shop</h4>
          <ul className="space-y-2">
            {FOOTER_LINKS.shop.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-widest mb-4 text-accent">Support</h4>
          <ul className="space-y-2">
            {FOOTER_LINKS.support.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-widest mb-4 text-accent">Company</h4>
          <ul className="space-y-2">
            {FOOTER_LINKS.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60 font-medium">
          <span>© {year} {COMPANY_NAME}. All rights reserved.</span>
          <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white transition-colors">
            {COMPANY_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
