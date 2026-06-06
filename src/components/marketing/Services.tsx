import { Database, Bot, Workflow, ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "../primitives/Section";

type Pillar = {
  index: string;
  icon: typeof Database;
  channel: string;
  title: string;
  desc: string;
  specs: string[];
  flagship?: boolean;
};

const pillars: Pillar[] = [
  {
    index: "01",
    icon: Database,
    channel: "Layer 01 — Data",
    title: "The Apollo-to-Clay data engine",
    desc: "Every autonomous system is only as good as the data underneath it. We engineer a continuous pipeline from Apollo into Clay, enriching, scoring, and AI-personalizing every record against a modeled ICP before a single message goes out.",
    specs: [
      "Apollo-to-Clay pipeline construction",
      "Target ICP modeling",
      "AI-personalized enrichment",
      "Automated data scraping & refresh",
    ],
  },
  {
    index: "02",
    icon: Bot,
    channel: "Layer 02 — Outreach",
    title: "Autonomous messaging agents",
    desc: "AI agents run Email and LinkedIn outreach end to end: opening, personalizing at the individual level, handling objections, and booking pre-qualified meetings straight to your reps' calendars. No campaigns to babysit.",
    specs: [
      "Email & LinkedIn sender integration",
      "Autonomous objection handling",
      "Adaptive multi-touch sequencing",
      "Pre-qualified calendar bookings",
    ],
  },
  {
    index: "03",
    icon: Workflow,
    channel: "Layer 03 — Closed loop",
    title: "Self-driving CRM",
    desc: "We deploy a custom AI-native CRM and wire intelligence directly into it. Conversations, scores, and outcomes sync in real time, so stages, owners, and next-actions update themselves. The CRM stops being a record-keeper and becomes the revenue department.",
    specs: [
      "Custom CRM deployment",
      "Direct AI-to-CRM API syncing",
      "Self-updating stages & next-actions",
      "Closed-loop revenue reporting",
    ],
    flagship: true,
  },
];

export function Services() {
  return (
    <Section id="infrastructure" className="reveal bg-paper-soft">
      <div className="max-w-2xl">
        <Eyebrow>Infrastructure</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-display text-ink">
          Three layers. One self-driving pipeline.
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          We don't sell a tool or a freelancer with a script. We engineer the
          entire stack, from data to outreach to CRM, as AI-driven personalized
          infrastructure that runs every hour you don't.
        </p>
      </div>

      <div className="mt-16 space-y-16 md:space-y-24">
        {pillars.map((p, i) => (
          <SplitRow key={p.index} pillar={p} flip={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}

function SplitRow({ pillar, flip }: { pillar: Pillar; flip: boolean }) {
  const Icon = pillar.icon;
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      {/* Copy column */}
      <div className={flip ? "md:order-2" : "md:order-1"}>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-card border border-accent/25 bg-accent-soft text-accent">
            <Icon size={20} strokeWidth={1.6} />
          </span>
          <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
            {pillar.channel}
          </span>
        </div>
        <h3 className="mt-6 font-display text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-tight tracking-display text-ink">
          {pillar.title}
        </h3>
        <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
          {pillar.desc}
        </p>
      </div>

      {/* Spec panel — flagship inverts to ink for premium contrast */}
      <div className={flip ? "md:order-1" : "md:order-2"}>
        <div
          className={`relative overflow-hidden rounded-card p-7 shadow-soft sm:p-8 ${
            pillar.flagship
              ? "bg-ink text-paper"
              : "border border-line bg-panel"
          }`}
        >
          <div
            className={`relative flex items-center justify-between border-b pb-4 ${
              pillar.flagship ? "border-white/15" : "border-line"
            }`}
          >
            <span
              className={`font-display text-[2.6rem] font-semibold leading-none ${
                pillar.flagship ? "text-white/25" : "text-ink/15"
              }`}
            >
              {pillar.index}
            </span>
            <span
              className={`font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] ${
                pillar.flagship ? "text-accent-bright" : "text-accent"
              }`}
            >
              {pillar.flagship ? "Flagship" : "Included"}
            </span>
          </div>
          <ul className="relative mt-5 space-y-3">
            {pillar.specs.map((s) => (
              <li
                key={s}
                className={`flex items-start gap-2.5 text-[0.9rem] ${
                  pillar.flagship ? "text-paper" : "text-ink"
                }`}
              >
                <ArrowUpRight
                  size={15}
                  className={`mt-0.5 shrink-0 ${
                    pillar.flagship ? "text-accent-bright" : "text-accent"
                  }`}
                />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
