import { ReactNode } from "react";

export function LegalLayout({ children, title, lastUpdated }: { children: ReactNode, title: string, lastUpdated: string }) {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </div>
    </div>
  );
}
