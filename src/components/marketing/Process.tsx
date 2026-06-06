import { Section, Eyebrow } from "../primitives/Section";

type Step = {
  id: string;
  actor: "You" | "We" | "It";
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  payoff?: boolean;
};

const steps: Step[] = [
  {
    id: "01",
    actor: "You",
    title: "Book the audit",
    desc: "A 30-minute working session. You walk us through the current pipeline; we map exactly where revenue leaks between your tools and your CRM.",
    stat: "30 min",
    statLabel: "No pitch deck",
  },
  {
    id: "02",
    actor: "We",
    title: "Build the stack",
    desc: "Data engine, autonomous agents, and CRM wiring, engineered and tuned to your ICP. You approve the plan; we ship the infrastructure.",
    stat: "~3 wks",
    statLabel: "To live pipeline",
  },
  {
    id: "03",
    actor: "It",
    title: "Runs without you",
    desc: "The pipeline sources, qualifies, messages, and books on its own, writing every signal back to one CRM. You review outcomes, not tasks.",
    stat: "24/7",
    statLabel: "Autonomous",
    payoff: true,
  },
];

export function Process() {
  return (
    <Section id="process" className="reveal bg-paper-soft">
      <div className="max-w-2xl">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-display text-ink">
          Three moves. Then it runs without you.
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          No six-month transformation project. We audit, we build, and the
          infrastructure takes over, usually inside a few weeks.
        </p>
      </div>

      <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px bg-line-strong md:block"
        />
        {steps.map((s) => (
          <li key={s.id} className="relative">
            <span
              className={`relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border font-display text-[1.1rem] font-semibold ${
                s.payoff
                  ? "border-accent bg-accent text-white"
                  : "border-line-strong bg-paper text-ink"
              }`}
            >
              {s.id}
            </span>

            <span
              className={`mt-6 inline-flex items-center rounded-pill border px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${
                s.payoff
                  ? "border-accent/40 bg-accent-soft text-accent"
                  : "border-line-strong text-ink-soft"
              }`}
            >
              {s.actor}
            </span>

            <h3 className="mt-4 font-display text-[1.4rem] font-semibold leading-tight text-ink">
              {s.title}
            </h3>
            <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
              {s.desc}
            </p>

            <div className="mt-6 flex items-baseline gap-2.5 border-t border-line pt-5">
              <span className={`font-display text-[1.5rem] font-semibold leading-none ${s.payoff ? "text-accent" : "text-ink"}`}>
                {s.stat}
              </span>
              <span className="text-[0.74rem] uppercase tracking-[0.12em] text-ink-faint">
                {s.statLabel}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
