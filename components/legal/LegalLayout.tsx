import { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  intro?: ReactNode;
  children: ReactNode;
}

export function LegalLayout({ title, lastUpdated, intro, children }: LegalLayoutProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 pb-8 border-b-4 border-primary">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">{title}</h1>
          {lastUpdated && (
            <span className="inline-block bg-accent border-2 border-primary shadow-hard px-4 py-1.5 text-sm font-black uppercase tracking-wider text-primary">
              Last updated: {lastUpdated}
            </span>
          )}
          {intro && (
            <p className="mt-6 text-lg md:text-xl font-medium text-primary/80 max-w-2xl leading-relaxed">
              {intro}
            </p>
          )}
        </div>

        {/* Sections */}
        <div className="border-2 border-primary shadow-hard bg-card divide-y-2 divide-primary">
          {children}
        </div>
      </div>
    </div>
  );
}

interface LegalSectionProps {
  title?: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <div
      className="p-8 md:p-10 space-y-5 font-medium leading-relaxed text-primary/90
        [&>h3]:text-lg [&>h3]:font-black [&>h3]:uppercase [&>h3]:tracking-wide [&>h3]:text-primary
        [&_strong]:font-black [&_strong]:text-primary
        [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a:hover]:text-accent [&_a]:transition-colors
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
        [&_li]:leading-relaxed"
    >
      {title && (
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
