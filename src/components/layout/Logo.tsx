interface LogoProps {
  size?: number;
  withWordmark?: boolean;
}

/** Node-network mark: a hub linked to four satellites — the "pipeline" motif. */
export function Logo({ size = 30, withWordmark = true }: LogoProps) {
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
        <g stroke="#22E0D6" strokeWidth="2.5" opacity="0.5">
          <line x1="50" y1="50" x2="20" y2="24" />
          <line x1="50" y1="50" x2="80" y2="24" />
          <line x1="50" y1="50" x2="20" y2="76" />
          <line x1="50" y1="50" x2="80" y2="76" />
        </g>
        <circle cx="20" cy="24" r="5" fill="#22E0D6" />
        <circle cx="80" cy="24" r="5" fill="#22E0D6" />
        <circle cx="20" cy="76" r="5" fill="#22E0D6" />
        <circle cx="80" cy="76" r="5" fill="#22E0D6" />
        <circle cx="50" cy="50" r="9" fill="#22E0D6" />
        <circle cx="50" cy="50" r="15" stroke="#22E0D6" strokeWidth="2" opacity="0.4" />
      </svg>
      {withWordmark && (
        <span className="font-display text-[1.05rem] font-bold tracking-tight text-fog">
          Thari<span className="text-cyan">-Tech</span>
        </span>
      )}
    </span>
  );
}
