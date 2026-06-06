import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Owns vertical rhythm + max width only. Generous editorial whitespace.
 * Layouts inside are intentionally varied.
 */
export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-5 py-24 sm:px-8 md:py-32 lg:px-16 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1180px]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
