import { Database, Bot, Workflow, ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "../primitives/Section";

type Pillar = {
  index: string;
  icon: typeof Database;
  channel: string;
  title: string;
  desc: string;
  specs: string[];
  accent: "cyan" | "amber";
};

const pillars: Pillar[] = [
  {
    index: "01",
    icon: Database,
    channel: "Layer 01 · Data",
    title: "The Apollo-to-Clay data engine",
    desc: "Every autonomous system is only as good as the data underneath it. We engineer a continuous pipeline from Apollo into Clay, enriching, scoring, and AI-personalizing every record against a modeled ICP before a single message goes out.",
    specs: [
      "Apollo-to-Clay pipeline construction",
      "Target ICP modeling",
      "AI-personalized enrichment",
      "Automated data scraping & refresh",
    ],
    accent: "cyan",
  },
  {
    index: "02",
    icon: Bot,
    channel: "Layer 02 · Outreach",
    title: "Autonomous messaging agents",
    desc: "AI agents run Email and LinkedIn outreach end to end: opening, personalizing at the individual level, handling objections, and booking pre-qualified meetings straight to your reps' calendars. No campaigns to babysit.",
    specs: [
      "Email & LinkedIn sender integration",
      "Autonomous objection handling",
      "Adaptive multi-touch sequencing",
      "Pre-qualified calendar bookings",
    ],
    accent: "cyan",
  },
  {
    index: "03",
    icon: Workflow,
    channel: "Layer 03 · Closed loop",
    title: "Self-driving CRM",
    desc: "We deploy a custom CRM and wire AI directly into it through the API. Conversations, scores, and outcomes sync in real time, so stages, owners, and next-actions update themselves. The CRM stops being a record-keeper and becomes the revenue department.",
    specs: [
      "Custom CRM deployment",
      "Direct AI-to-CRM API syncing",
      "Self-updating stages & next-actions",
      "Closed-loop revenue reporting",
    ],
    accent: "amber",
  },
];

export function Services() {
  return (
    <Section id="infrastructure" className="reveal">
      <div className="max-w-2xl">
        <Eyebrow>Infrastructure</Eyebrow>
        <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-display text-fog">
          Three layers. One self-driving pipeline.
        </h2>
        <p className="mt-5 text-[1rem] leading-relaxed text-fog-muted">
          We don't sell a tool or a freelancer with a script. We engineer the
          entire stack, from data to outreach to CRM, as AI-driven
          personalized infrastructure that runs every hour you don't.
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
  const isAmber = pillar.accent === "amber";
  const accentText = isAmber ? "text-amber" : "text-cyan";
  const accentBorder = isAmber ? "border-amber/25" : "border-cyan/25";
  const accentBg = isAmber ? "bg-amber/5" : "bg-cyan/5";

  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      {/* Copy column */}
      <div className={flip ? "md:order-2" : "md:order-1"}>
        <div className="flex items-center gap-3">
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-card border ${accentBorder} ${accentBg} ${accentText}`}
          >
            <Icon size={20} strokeWidth={1.6} />
          </span>
          <span className="font-display text-[0.66rem] uppercase tracking-[0.16em] text-fog-faint">
            {pillar.channel}
          </span>
        </div>
        <h3 className="mt-6 font-display text-[1.6rem] font-bold leading-tight text-fog">
          {pillar.title}
        </h3>
        <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-fog-muted">
          {pillar.desc}
        </p>
      </div>

      {/* Spec panel column */}
      <div className={flip ? "md:order-1" : "md:order-2"}>
        <div
          className={`relative overflow-hidden rounded-card border border-line bg-ink-800/60 p-7 sm:p-8`}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[15%] -top-[20%] h-[260px] w-[260px] rounded-full"
            style={{
              background: isAmber
                ? "radial-gradient(circle, rgba(245,165,36,0.08), transparent 70%)"
                : "radial-gradient(circle, rgba(34,224,214,0.08), transparent 70%)",
            }}
          />
          <div className="relative flex items-center justify-between border-b border-line pb-4">
            <span className="font-display text-[2.4rem] font-bold leading-none text-fog/15">
              {pillar.index}
            </span>
            <span
              className={`font-display text-[0.62rem] uppercase tracking-[0.16em] ${accentText}`}
            >
              Included
            </span>
          </div>
          <ul className="relative mt-5 space-y-3">
            {pillar.specs.map((s) => (
              <li
                key={s}
                className="flex items-start gap-2.5 text-[0.88rem] text-fog"
              >
                <ArrowUpRight
                  size={14}
                  className={`mt-0.5 shrink-0 ${accentText}`}
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
