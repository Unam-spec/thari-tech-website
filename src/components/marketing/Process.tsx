import { Section, Eyebrow } from "../primitives/Section";

/**
 * How the engagement works — two-party voice (You → We → It). Deliberately the
 * inverse of PipelineDiagram: that explains how the *engine* runs; this explains
 * how *we* get you there. The payoff step (It runs without you) carries amber.
 */
type Step = {
  id: string;
  actor: "You" | "We" | "It";
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  accent: "cyan" | "amber";
};

const steps: Step[] = [
  {
    id: "01",
    actor: "You",
    title: "Book the audit",
    desc: "A 30-minute working session. You walk us through the current pipeline; we map exactly where revenue leaks between your tools and your CRM.",
    stat: "30 min",
    statLabel: "No pitch deck",
    accent: "cyan",
  },
  {
    id: "02",
    actor: "We",
    title: "Build the stack",
    desc: "Data engine, autonomous agents, and CRM wiring, engineered and tuned to your ICP. You approve the plan; we ship the infrastructure.",
    stat: "~3 wks",
    statLabel: "To live pipeline",
    accent: "cyan",
  },
  {
    id: "03",
    actor: "It",
    title: "Runs without you",
    desc: "The pipeline sources, qualifies, messages, and books on its own, writing every signal back to one CRM. You review outcomes, not tasks.",
    stat: "24/7",
    statLabel: "Autonomous",
    accent: "amber",
  },
];

export function Process() {
  return (
    <Section id="process" className="reveal">
      <div className="max-w-2xl">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-display text-fog">
          Three moves. Then it runs without you.
        </h2>
        <p className="mt-5 text-[1rem] leading-relaxed text-fog-muted">
          No six-month transformation project. We audit, we build, and the
          infrastructure takes over, usually inside a few weeks.
        </p>
      </div>

      <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
        {/* connecting spine across the numerals (desktop) */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-cyan/40 via-line-strong to-amber/40 md:block"
        />
        {steps.map((s) => {
          const isAmber = s.accent === "amber";
          const accentText = isAmber ? "text-amber" : "text-cyan";
          const accentBorder = isAmber ? "border-amber/40" : "border-cyan/40";
          const accentBg = isAmber ? "bg-amber/10" : "bg-cyan/10";
          return (
            <li key={s.id} className="relative">
              {/* numeral node sitting on the spine */}
              <span
                className={`relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border ${accentBorder} ${accentBg} bg-ink-950 font-display text-[1.1rem] font-bold ${accentText}`}
              >
                {s.id}
              </span>

              <span
                className={`mt-6 inline-flex items-center gap-1.5 rounded-pill border ${accentBorder} ${accentBg} px-3 py-1 font-display text-[0.6rem] font-medium uppercase tracking-[0.18em] ${accentText}`}
              >
                {s.actor}
              </span>

              <h3 className="mt-4 font-display text-[1.4rem] font-bold leading-tight text-fog">
                {s.title}
              </h3>
              <p className="mt-3 max-w-sm text-[0.92rem] leading-relaxed text-fog-muted">
                {s.desc}
              </p>

              <div className="mt-6 flex items-baseline gap-2.5 border-t border-line pt-5">
                <span
                  className={`font-display text-[1.5rem] font-bold leading-none ${accentText}`}
                >
                  {s.stat}
                </span>
                <span className="text-[0.74rem] uppercase tracking-[0.12em] text-fog-faint">
                  {s.statLabel}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
