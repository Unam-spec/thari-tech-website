import { Check } from "lucide-react";
import { Section, Eyebrow } from "../primitives/Section";
import { GlowCard } from "../primitives/GlowCard";
import { Button } from "../primitives/Button";

type Tier = {
  name: string;
  monthly: string;
  setup: string;
  tagline: string;
  features: string[];
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Catch",
    monthly: "R1,800",
    setup: "from R6,000 setup",
    tagline: "For the business that just wants to stop missing enquiries.",
    features: [
      "Instant replies, 24/7",
      "Lead capture on one channel",
      "WhatsApp or your website",
      "Never miss an after-hours enquiry",
    ],
  },
  {
    name: "Convert",
    monthly: "R3,500",
    setup: "from R12,000 setup",
    tagline: "Replies, qualifying and booking across your main channels.",
    features: [
      "Everything in Catch",
      "Smart qualifying of every enquiry",
      "Auto-booking into your calendar",
      "Across your main channels",
      "Monthly tuning",
    ],
    popular: true,
  },
  {
    name: "Managed",
    monthly: "R6,000",
    setup: "from R20,000 setup",
    tagline: "The full pipeline, managed and reported on, end to end.",
    features: [
      "Everything in Convert",
      "Full pipeline with follow-ups",
      "Priority fixes",
      "Monthly report: leads in, booked, closed",
    ],
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="reveal">
      <div className="max-w-2xl">
        <Eyebrow>Plans</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-display text-ink">
          Start where it hurts most.
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          A one-time setup to build and wire your system, then a simple monthly
          fee to run and improve it. Stop missing enquiries first, then scale up
          to full qualifying, booking, and follow-ups.
        </p>
      </div>

      <div className="mt-14 grid items-stretch gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <GlowCard
            key={t.name}
            highlighted={t.popular}
            className={t.popular ? "md:-translate-y-3" : ""}
          >
            <div className="flex h-full flex-col p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                  {t.name}
                </h3>
                {t.popular && (
                  <span className="rounded-pill border border-accent/40 bg-accent-soft px-2.5 py-0.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-accent">
                    Most popular
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-[2.6rem] font-semibold leading-none text-ink">
                  {t.monthly}
                </span>
                <span className="text-[0.95rem] text-ink-soft">/mo</span>
              </div>
              <p className="mt-1.5 text-[0.8rem] font-medium text-accent">{t.setup}</p>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-ink-soft">
                {t.tagline}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.86rem] text-ink">
                    <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={t.popular ? "solid" : "outline"}
                className="mt-7 w-full"
              >
                Book a walkthrough
              </Button>
            </div>
          </GlowCard>
        ))}
      </div>

      <p className="mt-6 text-center text-[0.82rem] text-ink-faint">
        Setup is a one-time build. No long contracts, cancel the monthly anytime.
      </p>
    </Section>
  );
}
