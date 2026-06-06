import { Section, Eyebrow } from "../primitives/Section";
import { Button } from "../primitives/Button";

const faqs: { q: string; a: string }[] = [
  {
    q: "What channels does it work on?",
    a: "WhatsApp and your website to start. On the Convert and Managed plans it runs across your main channels at once, so wherever a customer reaches out, they get an instant reply.",
  },
  {
    q: "How fast does it reply?",
    a: "Within seconds, 24/7, including nights, weekends, and the moments you're busy with a customer. No enquiry waits for you to be free.",
  },
  {
    q: "Will it sound like a robot?",
    a: "No. We set it up to ask your questions in your tone, so enquiries feel handled, not bounced to a generic bot. Anything it can't handle gets flagged straight to you.",
  },
  {
    q: "Do I need to change my tools?",
    a: "No. It plugs into the WhatsApp number, website, and calendar you already use. Nothing to rip out and relearn.",
  },
  {
    q: "How long does setup take?",
    a: "We build and wire the whole thing for you. Most setups are live within days of your walkthrough, not weeks.",
  },
  {
    q: "What does it cost?",
    a: "A one-time setup from R6,000 plus a monthly fee from R1,800. Plans scale up as you add smart qualifying, auto-booking, and managed follow-ups.",
  },
  {
    q: "What happens in the free walkthrough?",
    a: "A 15-minute call where we show the system handling your kind of enquiries and map out exactly what your setup would look like. No pressure, no pitch deck.",
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
            Still deciding whether this fits your business? Book a free
            walkthrough and we'll show it handling your kind of enquiries.
          </p>
          <Button href="#contact" variant="solid" className="mt-7">
            Book a free walkthrough
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
