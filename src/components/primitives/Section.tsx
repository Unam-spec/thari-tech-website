import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Consistent section padding + max width. Layouts inside are intentionally
 * asymmetric — this only owns rhythm, not column structure.
 */
export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-5 py-20 sm:px-8 md:py-28 lg:px-16 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="h-px w-6 bg-cyan/60" />
      {children}
    </span>
  );
}
