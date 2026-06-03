import { Section, Eyebrow } from "../primitives/Section";

const stages = [
  {
    id: "01",
    title: "Source",
    desc: "Decision-makers sourced from Apollo and enriched in Clay against your modeled ICP.",
  },
  {
    id: "02",
    title: "Qualify",
    desc: "AI scores intent in real time (budget, fit, and timing) before a human ever looks.",
  },
  {
    id: "03",
    title: "Engage",
    desc: "Personalized, multi-touch conversations that handle objections and book the call.",
  },
  {
    id: "04",
    title: "Close",
    desc: "Warm, qualified calls land on your reps' calendars. They do what they do best.",
  },
  {
    id: "05",
    title: "Sync",
    desc: "Every signal writes back to your CRM, enriched, scored, and stage-accurate.",
    accent: true,
  },
];

export function PipelineDiagram() {
  return (
    <Section id="pipeline" className="reveal">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <Eyebrow>The engine</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-display text-fog">
            A revenue engine that drives itself.
          </h2>
          <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-fog-muted">
            Five stages, fully wired. Each hands off to the next without a manual
            step, and the whole loop feeds back into one CRM. You watch it run;
            you don't push it.
          </p>
          <div className="mt-8 flex items-center gap-2 text-[0.8rem] text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-dot" />
            Continuous loop · no manual handoffs
          </div>
        </div>

        {/* Vertical connected node flow */}
        <ol className="relative">
          {/* spine */}
          <span
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan/50 via-line-strong to-amber/40"
          />
          {stages.map((s) => (
            <li key={s.id} className="relative flex gap-6 pb-9 last:pb-0">
              <span className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center">
                <span
                  className={`h-3 w-3 rounded-full ${
                    s.accent ? "bg-amber" : "bg-cyan"
                  }`}
                />
                <span
                  className={`absolute inset-0 rounded-full border ${
                    s.accent ? "border-amber/40" : "border-cyan/40"
                  }`}
                />
              </span>
              <div className="pt-0.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[0.72rem] font-medium tracking-[0.16em] text-fog-faint">
                    {s.id}
                  </span>
                  <h3
                    className={`font-display text-[1.25rem] font-bold leading-tight ${
                      s.accent ? "text-amber" : "text-fog"
                    }`}
                  >
                    {s.title}
                  </h3>
                </div>
                <p className="mt-1.5 max-w-md text-[0.9rem] leading-relaxed text-fog-muted">
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
