import { Section, Eyebrow } from "../primitives/Section";
import { Button } from "../primitives/Button";

const faqs: { q: string; a: string }[] = [
  {
    q: "What exactly do you build?",
    a: "AI-driven revenue infrastructure: an Apollo-to-Clay data pipeline, autonomous Email and LinkedIn agents, and a custom AI-native CRM, all wired into one closed loop. You own the system; it runs without you.",
  },
  {
    q: "How is this different from hiring an SDR or an agency?",
    a: "An SDR or agency adds manual labor that stops when they stop. We engineer infrastructure that sources, qualifies, messages, and books on its own, 24/7, and keeps your CRM accurate automatically. It compounds instead of churning.",
  },
  {
    q: "How long until it's live?",
    a: "Most builds reach a live pipeline in about three weeks after the audit: data engine first, then the autonomous agents, then the CRM wiring and tuning to your ICP.",
  },
  {
    q: "Do I need to use a specific CRM?",
    a: "No. We deploy and wire a custom AI-native CRM as part of the engagement, or integrate with the stack you already run. The point is one source of truth that updates itself.",
  },
  {
    q: "What does an engagement cost?",
    a: "Engagements start at $1,500/mo for the data engine and scale to $5,000+/mo for the full closed-loop CRM infrastructure. One closed enterprise account typically covers the year.",
  },
  {
    q: "What happens in the infrastructure audit?",
    a: "A focused 30-minute working session. We map your current pipeline, pinpoint where revenue leaks between your tools and your CRM, and show you exactly what the autonomous build would replace. No pitch deck.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FAQ() {
  return (
    <Section id="faq" className="reveal bg-paper-soft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-display text-ink">
            Answers before you ask.
          </h2>
          <p className="mt-5 max-w-sm text-[1.05rem] leading-relaxed text-ink-soft">
            Still deciding whether autonomous infrastructure fits your team? Book
            the audit and we'll map it against your actual pipeline.
          </p>
          <Button href="#contact" variant="solid" className="mt-7">
            Book an infrastructure audit
          </Button>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[1.15rem] font-medium text-ink transition-colors duration-200 hover:text-accent [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink-soft transition-all duration-300 ease-ease group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-white"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[0.96rem] leading-relaxed text-ink-soft">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
