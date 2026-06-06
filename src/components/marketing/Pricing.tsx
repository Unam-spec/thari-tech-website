import { Check } from "lucide-react";
import { Section, Eyebrow } from "../primitives/Section";
import { GlowCard } from "../primitives/GlowCard";
import { Button } from "../primitives/Button";

const tiers = [
  {
    name: "Growth Infrastructure",
    price: "$1,500",
    cadence: "/mo",
    focus: "Apollo-to-Clay data pipeline construction",
    desc: "The data engine. We build the enriched, AI-personalized pipeline that everything downstream runs on.",
    features: [
      "Apollo-to-Clay data pipeline",
      "Highly enriched, AI-personalized lead lists",
      "Target ICP modeling",
      "Automated data scraping",
    ],
    highlighted: false,
  },
  {
    name: "Autonomous Pipeline",
    price: "$3,000",
    cadence: "/mo",
    focus: "AI messaging agents & autonomous outreach",
    desc: "The outreach engine. AI agents that message, handle objections, and book pre-qualified meetings on autopilot.",
    features: [
      "Everything in Growth Infrastructure",
      "Email & LinkedIn sender integration",
      "Autonomous objection handling",
      "Pre-qualified meetings booked to calendar",
    ],
    highlighted: true,
  },
];

const enterprise = {
  name: "Enterprise CRM Engine",
  price: "$5,000+",
  cadence: "/mo",
  focus: "Full closed-loop CRM infrastructure",
  desc: "The whole revenue department, autonomous. A custom CRM deployment with AI wired directly into it, sourcing, closing, and reporting on itself.",
  features: [
    "Everything in Autonomous Pipeline",
    "Custom CRM deployment",
    "Direct AI-to-CRM API syncing",
    "Self-driving revenue department",
    "Dedicated infrastructure engineer",
    "SLA-backed uptime & support",
  ],
};

export function Pricing() {
  return (
    <Section id="pricing" className="reveal">
      <div className="max-w-2xl">
        <Eyebrow>Engagements</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-display text-ink">
          Priced like infrastructure. Not like ads.
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          Three layers of the same machine. Start with the data engine, add
          autonomous outreach, or hand us the entire closed-loop CRM. One closed
          enterprise account typically covers the year.
        </p>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-12">
        {tiers.map((t) => (
          <GlowCard
            key={t.name}
            highlighted={t.highlighted}
            className={`lg:col-span-3 ${t.highlighted ? "lg:-translate-y-2" : ""}`}
          >
            <div className="flex h-full flex-col p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                  {t.name}
                </h3>
                {t.highlighted && (
                  <span className="rounded-pill border border-accent/40 bg-accent-soft px-2.5 py-0.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-accent">
                    Most scaled
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-[2.5rem] font-semibold leading-none text-ink">
                  {t.price}
                </span>
                <span className="text-[0.95rem] text-ink-soft">{t.cadence}</span>
              </div>
              <p className="mt-2 text-[0.78rem] font-semibold text-accent">{t.focus}</p>
              <p className="mt-4 text-[0.88rem] leading-relaxed text-ink-soft">{t.desc}</p>

              <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.85rem] text-ink">
                    <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="#contact" variant="outline" className="mt-7 w-full">
                Start the build
              </Button>
            </div>
          </GlowCard>
        ))}

        {/* Enterprise — inverted ink panel, 2x width, primary tier */}
        <div className="relative overflow-hidden rounded-card bg-ink text-paper shadow-lift lg:col-span-6">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[8%] -top-[12%] h-[380px] w-[380px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(110,91,255,0.30), transparent 65%)" }}
          />
          <div className="relative flex h-full flex-col p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent-bright">
                {enterprise.name}
              </h3>
              <span className="rounded-pill border border-accent-bright/40 bg-white/10 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-accent-bright">
                Primary tier
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-[3.4rem] font-semibold leading-none text-white">
                {enterprise.price}
              </span>
              <span className="text-[1rem] text-paper/70">{enterprise.cadence}</span>
            </div>
            <p className="mt-2 text-[0.85rem] font-semibold text-accent-bright">{enterprise.focus}</p>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-paper/80">
              {enterprise.desc}
            </p>

            <ul className="mt-7 grid flex-1 gap-x-8 gap-y-3 border-t border-white/15 pt-7 sm:grid-cols-2">
              {enterprise.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[0.9rem] text-paper">
                  <Check size={15} className="mt-0.5 shrink-0 text-accent-bright" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-accent px-10 py-3.5 font-sans text-[0.95rem] font-semibold text-white transition-all duration-[260ms] ease-ease hover:-translate-y-0.5 hover:bg-accent-bright hover:shadow-accent sm:w-auto sm:self-start"
            >
              Book an infrastructure audit
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
