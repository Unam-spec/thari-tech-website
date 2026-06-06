import { Section, Eyebrow } from "../primitives/Section";

type Step = {
  id: string;
  tag: "Customer" | "System" | "You";
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  payoff?: boolean;
};

const steps: Step[] = [
  {
    id: "01",
    tag: "Customer",
    title: "They reach out",
    desc: "A customer messages you on WhatsApp or your website, at any hour, on any day.",
    stat: "Any hour",
    statLabel: "Day or night",
  },
  {
    id: "02",
    tag: "System",
    title: "It answers & qualifies",
    desc: "Our system replies instantly, asks the right questions, and filters the serious buyers from the browsers.",
    stat: "Seconds",
    statLabel: "To first reply",
  },
  {
    id: "03",
    tag: "You",
    title: "They're booked in",
    desc: "The qualified ones land straight in your calendar while you get on with the work.",
    stat: "Hands-free",
    statLabel: "Booked for you",
    payoff: true,
  },
];

export function Process() {
  return (
    <Section id="how" className="reveal bg-paper-soft">
      <div className="max-w-2xl">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-display text-ink">
          Three steps. Zero missed leads.
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          From the first message to a confirmed booking, it runs on its own.
          You only show up for the part that matters: the customer.
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
              {s.tag}
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
