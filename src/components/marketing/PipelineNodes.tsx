/**
 * Hero visual: a frosted "live" panel showing the autonomous pipeline as a
 * node graph with flowing connections, plus a ticking agent-activity strip.
 * Pure presentational — no real data, but engineered to read as a running system.
 */
export function PipelineNodes() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(34,224,214,0.14), transparent 60%)",
        }}
      />
      <div className="overflow-hidden rounded-card border border-line bg-ink-800/60 backdrop-blur-glass">
        {/* panel header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <span className="font-display text-[0.72rem] uppercase tracking-[0.16em] text-fog-faint">
            Pipeline · live
          </span>
          <span className="flex items-center gap-2 text-[0.72rem] text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-dot" />
            4 agents active
          </span>
        </div>

        {/* node graph */}
        <svg viewBox="0 0 320 200" className="w-full" role="img" aria-label="Autonomous pipeline flow">
          <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22E0D6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#22E0D6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* connecting paths with flowing dashes */}
          <g
            stroke="#22E0D6"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
            className="animate-flow-dash"
            opacity="0.55"
          >
            <path d="M40 100 H110" />
            <path d="M130 100 H200" />
            <path d="M220 70 L270 45" />
            <path d="M220 130 L270 155" />
          </g>

          {/* idle structural links */}
          <g stroke="rgba(148,163,184,0.25)" strokeWidth="1" fill="none">
            <path d="M220 100 H262" />
          </g>

          <Node x={40} y={100} label="Source" />
          <Node x={120} y={100} label="AI qualify" pulse />
          <Node x={210} y={100} label="Engage" pulse />
          <Node x={278} y={45} label="Won" accent="amber" />
          <Node x={278} y={100} label="Sync" />
          <Node x={278} y={155} label="Nurture" />
        </svg>

        {/* live agent activity strip */}
        <div className="space-y-2 border-t border-line px-5 py-4 font-mono text-[0.72rem]">
          <Row time="02:14" text="Email agent qualified lead · score 0.87" />
          <Row time="02:11" text="LinkedIn closer booked discovery call" tone="cyan" />
          <Row time="02:09" text="CRM synced 12 records" />
        </div>
      </div>
    </div>
  );
}

function Node({
  x,
  y,
  label,
  pulse = false,
  accent = "cyan",
}: {
  x: number;
  y: number;
  label: string;
  pulse?: boolean;
  accent?: "cyan" | "amber";
}) {
  const color = accent === "amber" ? "#F5A524" : "#22E0D6";
  return (
    <g>
      {pulse && <circle cx={x} cy={y} r="14" fill="url(#nodeGlow)" />}
      <circle cx={x} cy={y} r="6" fill={color} />
      <circle cx={x} cy={y} r="10" stroke={color} strokeWidth="1" opacity="0.4" fill="none" />
      <text
        x={x}
        y={y + 26}
        textAnchor="middle"
        fontSize="8.5"
        fill="#C7D0E0"
        fillOpacity="0.7"
        fontFamily="'Space Grotesk', sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

function Row({
  time,
  text,
  tone = "fog",
}: {
  time: string;
  text: string;
  tone?: "fog" | "cyan";
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-fog-faint">{time}</span>
      <span className={tone === "cyan" ? "text-cyan" : "text-fog-muted"}>
        {text}
      </span>
    </div>
  );
}
