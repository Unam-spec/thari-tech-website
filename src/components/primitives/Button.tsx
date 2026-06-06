import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-pill transition-all duration-[260ms] ease-ease whitespace-nowrap select-none";

const variants: Record<Variant, string> = {
  // Primary — electric indigo
  solid:
    "bg-accent text-white px-6 py-3 text-[0.95rem] hover:bg-accent-deep hover:-translate-y-0.5 hover:shadow-accent",
  // Secondary — ink outline that fills on hover
  outline:
    "border border-ink/25 text-ink px-6 py-3 text-[0.95rem] hover:bg-ink hover:text-paper hover:border-ink",
  // Tertiary
  ghost: "text-ink-soft px-6 py-3 text-[0.95rem] hover:text-ink",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({
  variant = "solid",
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
