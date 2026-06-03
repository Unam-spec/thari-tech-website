import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  /** When true the card carries a persistent cyan node-glow (e.g. active state) */
  active?: boolean;
  accent?: "cyan" | "amber";
}

/**
 * Elevated surface that lifts via border-glow on hover — never a drop shadow.
 * The radial node-glow sits behind content as a light source, not a fill.
 */
export function GlowCard({
  children,
  className = "",
  active = false,
  accent = "cyan",
}: GlowCardProps) {
  const ring =
    accent === "amber"
      ? "hover:border-amber/50 hover:shadow-glow-amber"
      : "hover:border-cyan/45 hover:shadow-glow";
  const activeRing =
    accent === "amber"
      ? "border-amber/50 shadow-glow-amber"
      : "border-cyan/40 shadow-glow";

  return (
    <div
      className={`relative overflow-hidden rounded-card border bg-ink-800/70 transition-all duration-300 ease-ease ${
        active ? activeRing : `border-line ${ring}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
