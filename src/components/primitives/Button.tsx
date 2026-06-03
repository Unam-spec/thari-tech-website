import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "amber" | "cyan" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 font-display font-medium rounded-pill transition-all duration-[240ms] ease-ease whitespace-nowrap select-none";

const variants: Record<Variant, string> = {
  // Primary value CTA — amber, used sparingly
  amber:
    "bg-amber text-ink-950 px-6 py-3 text-[0.95rem] hover:bg-amber-deep hover:-translate-y-px hover:shadow-glow-amber",
  // Standard action — cyan outline that fills on hover
  cyan: "border border-cyan/40 text-cyan px-6 py-3 text-[0.95rem] hover:bg-cyan hover:text-ink-950 hover:border-cyan",
  // Tertiary / secondary
  ghost:
    "border border-line-strong text-fog px-6 py-3 text-[0.95rem] hover:text-fog hover:border-fog/40",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({
  variant = "cyan",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
