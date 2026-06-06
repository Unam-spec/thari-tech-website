const metrics = [
  ["24/7", "Answering, even at 2am"],
  ["<2 min", "To first reply, every time"],
  ["100%", "Of enquiries get a response"],
  ["0", "Extra staff to hire"],
];

export function ProofStrip() {
  return (
    <div className="reveal border-y border-line bg-paper-soft">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
        {metrics.map(([num, label]) => (
          <div key={label} className="px-5 py-9 sm:px-8">
            <div className="font-display text-[2.1rem] font-semibold leading-none text-ink">
              {num}
            </div>
            <div className="mt-2.5 text-[0.8rem] leading-snug text-ink-soft">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
