interface LogoProps {
  size?: number;
  withWordmark?: boolean;
}

/** Node-network mark: a hub linked to four satellites. */
export function Logo({ size = 28, withWordmark = true }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <g stroke="#4F3CF0" strokeWidth="3" opacity="0.45">
          <line x1="50" y1="50" x2="22" y2="26" />
          <line x1="50" y1="50" x2="78" y2="26" />
          <line x1="50" y1="50" x2="22" y2="74" />
          <line x1="50" y1="50" x2="78" y2="74" />
        </g>
        <circle cx="22" cy="26" r="5" fill="#4F3CF0" />
        <circle cx="78" cy="26" r="5" fill="#4F3CF0" />
        <circle cx="22" cy="74" r="5" fill="#4F3CF0" />
        <circle cx="78" cy="74" r="5" fill="#4F3CF0" />
        <circle cx="50" cy="50" r="9" fill="#4F3CF0" />
      </svg>
      {withWordmark && (
        <span className="font-display text-[1.15rem] font-semibold tracking-tight text-ink">
          Thari<span className="text-accent">.</span>Tech
        </span>
      )}
    </span>
  );
}
