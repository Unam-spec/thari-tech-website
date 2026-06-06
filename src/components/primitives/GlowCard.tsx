import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  /** Primary / featured surface — indigo border + accent glow */
  highlighted?: boolean;
}

/**
 * Elevated panel on the bone canvas. Lifts on hover with a soft shadow;
 * the highlighted variant carries the indigo accent for featured content.
 */
export function GlowCard({
  children,
  className = "",
  highlighted = false,
}: GlowCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-card border transition-all duration-300 ease-ease ${
        highlighted
          ? "border-accent/40 bg-panel shadow-accent"
          : "border-line bg-panel hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
      } ${className}`}
    >
      {children}
    </div>
  );
}
