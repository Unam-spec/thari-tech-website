import { Section, Eyebrow } from "../primitives/Section";

const stages = [
  { id: "01", title: "Source", desc: "Decision-makers sourced from Apollo and enriched in Clay against your modeled ICP." },
  { id: "02", title: "Qualify", desc: "AI scores intent in real time (budget, fit, and timing) before a human ever looks." },
  { id: "03", title: "Engage", desc: "Personalized, multi-touch conversations that handle objections and book the call." },
  { id: "04", title: "Close", desc: "Warm, qualified calls land on your reps' calendars. They do what they do best." },
  { id: "05", title: "Sync", desc: "Every signal writes back to your CRM, enriched, scored, and stage-accurate.", accent: true },
];

export function PipelineDiagram() {
  return (
    <Section id="pipeline" className="reveal">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Eyebrow>The engine</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-display text-ink">
            A revenue engine that drives itself.
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
            Five stages, fully wired. Each hands off to the next without a manual
            step, and the whole loop feeds back into one CRM. You watch it run;
            you don't push it.
          </p>
          <div className="mt-8 flex items-center gap-2 text-[0.85rem] font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            Continuous loop, no manual handoffs
          </div>
        </div>

        <ol className="relative">
          <span
            aria-hidden
            className="absolute bottom-2 left-[15px] top-2 w-px bg-gradient-to-b from-accent/60 via-line-strong to-accent/30"
          />
          {stages.map((s) => (
            <li key={s.id} className="relative flex gap-6 pb-9 last:pb-0">
              <span className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center">
                <span className={`h-3 w-3 rounded-full ${s.accent ? "bg-accent" : "bg-ink"}`} />
                <span className={`absolute inset-0 rounded-full border ${s.accent ? "border-accent/40" : "border-line-strong"} bg-paper`} style={{ zIndex: -1 }} />
              </span>
              <div className="pt-0.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[0.78rem] font-medium tracking-[0.12em] text-ink-faint">
                    {s.id}
                  </span>
                  <h3 className={`font-display text-[1.3rem] font-semibold leading-tight ${s.accent ? "text-accent" : "text-ink"}`}>
                    {s.title}
                  </h3>
                </div>
                <p className="mt-1.5 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
