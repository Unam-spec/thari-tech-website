interface LogoProps {
  size?: number;
  /** Optional: render the wordmark next to the mark. Off by default. */
  withWordmark?: boolean;
}

const BRAND_BLUE = "#2249C9";

/**
 * Thari Tech symbol — the angled "T" mark (two upward wings over a tapering
 * stem). Symbol only by request; pass withWordmark to show the name.
 */
export function Logo({ size = 30, withWordmark = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        aria-label="Thari Tech"
        role="img"
        className="shrink-0"
      >
        {/* left wing */}
        <path d="M8 47 L45 21 L45 35 L24 50 Z" fill={BRAND_BLUE} />
        {/* right wing */}
        <path d="M92 47 L55 21 L55 35 L76 50 Z" fill={BRAND_BLUE} />
        {/* stem — split tapering blade */}
        <path d="M44 25 L49 25 L49 80 L46.5 87 Z" fill={BRAND_BLUE} />
        <path d="M51 25 L56 25 L53.5 87 L51 80 Z" fill={BRAND_BLUE} />
      </svg>
      {withWordmark && (
        <span className="font-display text-[1.15rem] font-semibold tracking-tight text-ink">
          Thari Tech
        </span>
      )}
    </span>
  );
}
