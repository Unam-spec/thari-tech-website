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
    cta: "Start the build",
    elevated: false,
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
    cta: "Start the build",
    elevated: true,
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
        <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-display text-fog">
          Priced like infrastructure. Not like ads.
        </h2>
        <p className="mt-5 text-[1rem] leading-relaxed text-fog-muted">
          Three layers of the same machine. Start with the data engine, add
          autonomous outreach, or hand us the entire closed-loop CRM. One closed
          enterprise account typically covers the year.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-12">
        {/* Standard tiers */}
        {tiers.map((t) => (
          <GlowCard
            key={t.name}
            active={t.elevated}
            className={`lg:col-span-3 ${t.elevated ? "lg:-translate-y-2" : ""}`}
          >
            <div className="flex h-full flex-col p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-[0.72rem] uppercase tracking-[0.16em] text-fog-faint">
                  {t.name}
                </h3>
                {t.elevated && (
                  <span className="rounded-pill border border-cyan/40 bg-cyan/10 px-2.5 py-0.5 font-display text-[0.58rem] uppercase tracking-[0.16em] text-cyan">
                    Most scaled
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-[2.4rem] font-bold leading-none text-fog">
                  {t.price}
                </span>
                <span className="text-[0.95rem] text-fog-muted">{t.cadence}</span>
              </div>
              <p className="mt-2 text-[0.78rem] font-medium text-cyan">{t.focus}</p>
              <p className="mt-4 text-[0.85rem] leading-relaxed text-fog-muted">
                {t.desc}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[0.83rem] text-fog"
                  >
                    <Check size={14} className="mt-0.5 shrink-0 text-cyan" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="#contact" variant="cyan" className="mt-7 w-full">
                {t.cta}
              </Button>
            </div>
          </GlowCard>
        ))}

        {/* Enterprise — 2x weight, amber, primary tier */}
        <GlowCard active accent="amber" className="lg:col-span-6">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[8%] -top-[10%] h-[360px] w-[360px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(245,165,36,0.10), transparent 65%)",
            }}
          />
          <div className="relative flex h-full flex-col p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-[0.72rem] uppercase tracking-[0.18em] text-amber">
                {enterprise.name}
              </h3>
              <span className="rounded-pill border border-amber/40 bg-amber/10 px-3 py-1 font-display text-[0.6rem] uppercase tracking-[0.16em] text-amber">
                Primary tier
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-[3.4rem] font-bold leading-none text-fog">
                {enterprise.price}
              </span>
              <span className="text-[1rem] text-fog-muted">{enterprise.cadence}</span>
            </div>
            <p className="mt-2 text-[0.85rem] font-medium text-amber">
              {enterprise.focus}
            </p>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-fog-muted">
              {enterprise.desc}
            </p>

            <ul className="mt-7 grid flex-1 gap-x-8 gap-y-3 border-t border-line pt-7 sm:grid-cols-2">
              {enterprise.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-[0.88rem] text-fog"
                >
                  <Check size={15} className="mt-0.5 shrink-0 text-amber" />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              href="#contact"
              variant="amber"
              className="mt-8 w-full sm:w-auto sm:self-start sm:px-10"
            >
              Book an infrastructure audit
            </Button>
          </div>
        </GlowCard>
      </div>
    </Section>
  );
}
