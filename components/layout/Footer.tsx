import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t-2 border-primary bg-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="inline-block mb-6 hover:text-accent transition-colors">
              <Logo className="scale-125 origin-left" />
            </Link>
            <p className="text-base font-medium leading-relaxed max-w-xs mb-8">
              {SITE_DESCRIPTION}
            </p>
          </div>
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-black uppercase tracking-wider mb-6">Shop</h3>
              <ul className="space-y-4">
                {FOOTER_LINKS.shop.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-bold hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-black uppercase tracking-wider mb-6">Support</h3>
              <ul className="space-y-4">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-bold hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-black uppercase tracking-wider mb-6">Legal</h3>
              <ul className="space-y-4">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-bold hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t-2 border-primary flex flex-col md:flex-row items-center justify-between gap-4 font-bold text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME} Studio. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xl font-handwriting text-accent">
            Made for creators.
          </div>
        </div>
      </div>
    </footer>
  );
}
