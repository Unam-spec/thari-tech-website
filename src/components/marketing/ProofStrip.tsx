const metrics = [
  ["R0", "Ad spend in the pipeline"],
  ["18 min", "Median lead response time, autonomously"],
  ["92%", "Of qualified leads land in your CRM enriched"],
  ["3.4×", "More booked calls per rep, no extra headcount"],
];

export function ProofStrip() {
  return (
    <div className="reveal border-y border-line bg-ink-900/60">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 divide-x divide-y divide-line sm:grid-cols-4 sm:divide-y-0">
        {metrics.map(([num, label]) => (
          <div key={label} className="px-5 py-8 sm:px-8">
            <div className="font-display text-[1.9rem] font-bold leading-none text-cyan">
              {num}
            </div>
            <div className="mt-2 text-[0.78rem] leading-snug text-fog-muted">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
