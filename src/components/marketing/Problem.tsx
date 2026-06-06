import { Section, Eyebrow } from "../primitives/Section";
import { WordReveal } from "./WordReveal";

/**
 * Pain-agitation wall — the frustrations every revenue team voices on an audit
 * call, as a masonry of overheard lines. Sets up Services.
 */
const gripes: { quote: string; role: string }[] = [
  { quote: "Our SDRs spend half their day copy-pasting leads into the CRM.", role: "Head of Sales" },
  { quote: "By the time anyone follows up, the lead's already gone cold.", role: "RevOps lead" },
  { quote: "Half the “qualified” leads aren't even close to our ICP.", role: "Demand gen" },
  { quote: "Every rep prospects differently. Nothing about it is reproducible.", role: "VP Sales" },
  { quote: "The CRM is a graveyard. Nobody updates it after the first call.", role: "Founder" },
  { quote: "We pay for Apollo, Clay, and three tools that don't talk to each other.", role: "Ops manager" },
];

export function Problem() {
  return (
    <Section id="problem" className="reveal">
      <div className="max-w-3xl">
        <Eyebrow>The real problem</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-display text-ink">
          Your pipeline isn't broken.
          <br className="hidden sm:block" /> The work around it is.
        </h2>
        <WordReveal
          text="Talk to any revenue team and the same lines come up. Every one is a data, timing, or routing problem, the exact things software should have automated years ago."
          className="mt-6 max-w-2xl font-display text-[clamp(1.15rem,2.2vw,1.6rem)] font-normal leading-snug tracking-display text-ink"
        />
      </div>

      {/* Wall of frustrations — masonry via CSS columns */}
      <div className="mt-14 gap-4 [column-count:1] sm:[column-count:2] lg:[column-count:3]">
        {gripes.map((g) => (
          <figure
            key={g.quote}
            className="group mb-4 break-inside-avoid rounded-card border border-line bg-panel p-6 shadow-soft transition-all duration-300 ease-ease hover:-translate-y-1 hover:shadow-lift"
          >
            <span
              aria-hidden
              className="block font-display text-[2.8rem] leading-[0.5] text-accent/25 transition-colors duration-300 group-hover:text-accent/60"
            >
              &ldquo;
            </span>
            <blockquote className="mt-3 font-sans text-[1.02rem] leading-relaxed text-ink">
              {g.quote}
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
              <span className="h-px w-4 bg-line-strong" />
              {g.role}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Pivot */}
      <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl font-display text-[clamp(1.2rem,2.4vw,1.5rem)] font-medium leading-snug text-ink">
          None of this needs another rep.{" "}
          <span className="text-accent">It needs infrastructure.</span>
        </p>
        <a
          href="#infrastructure"
          className="group inline-flex items-center gap-2 whitespace-nowrap font-sans text-[0.92rem] font-semibold text-accent transition-colors duration-200 hover:text-accent-deep"
        >
          See what we automate
          <span className="transition-transform duration-200 ease-ease group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>
    </Section>
  );
}
