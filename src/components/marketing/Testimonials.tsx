import { Section, Eyebrow } from "../primitives/Section";

/**
 * Client testimonials.
 *
 * ── HOW TO ENABLE IN THE FUTURE ────────────────────────────────────────────
 * Hidden right now. Add one or more entries to `testimonials` below and the
 * section renders itself automatically (already wired into Landing.tsx).
 * Empty the array to hide it again.
 *
 * Each entry: { quote, name, role, company, metric? }
 * ───────────────────────────────────────────────────────────────────────────
 */
type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  metric?: string;
};

const testimonials: Testimonial[] = [
  // {
  //   quote: "Thari Tech rebuilt our outbound as infrastructure. It books meetings while we sleep.",
  //   name: "Jane Okafor",
  //   role: "VP Revenue",
  //   company: "Acme RevOps",
  //   metric: "3.4× booked calls",
  // },
];

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" className="reveal">
      <div className="max-w-2xl">
        <Eyebrow>Proof</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-display text-ink">
          Revenue teams that stopped doing the busywork.
        </h2>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={`${t.name}-${t.company}`}
            className="flex flex-col rounded-card border border-line bg-panel p-7 shadow-soft transition-all duration-300 ease-ease hover:-translate-y-1 hover:shadow-lift"
          >
            {t.metric && (
              <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-pill border border-accent/30 bg-accent-soft px-3 py-1 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
                {t.metric}
              </span>
            )}
            <blockquote className="flex-1 font-display text-[1.15rem] font-normal leading-snug text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-display text-[0.8rem] font-semibold text-white">
                {t.name.charAt(0)}
              </span>
              <span className="text-[0.82rem] leading-tight">
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="text-ink-faint">
                  {t.role}, {t.company}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
