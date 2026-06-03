import { Section, Eyebrow } from "../primitives/Section";

/**
 * Pain-agitation wall — the frustrations every revenue team voices on an audit
 * call, presented as a masonry of overheard lines. Each one is, underneath, a
 * data / timing / routing problem the infrastructure removes. Sets up Services.
 */
const gripes: { quote: string; role: string }[] = [
  {
    quote: "Our SDRs spend half their day copy-pasting leads into the CRM.",
    role: "Head of Sales",
  },
  {
    quote: "By the time anyone follows up, the lead's already gone cold.",
    role: "RevOps lead",
  },
  {
    quote: "Half the “qualified” leads aren't even close to our ICP.",
    role: "Demand gen",
  },
  {
    quote:
      "Every rep prospects differently. Nothing about it is reproducible.",
    role: "VP Sales",
  },
  {
    quote: "The CRM is a graveyard. Nobody updates it after the first call.",
    role: "Founder",
  },
  {
    quote:
      "We pay for Apollo, Clay, and three other tools that don't talk to each other.",
    role: "Ops manager",
  },
];

export function Problem() {
  return (
    <Section id="problem" className="reveal">
      <div className="max-w-2xl">
        <Eyebrow>The real problem</Eyebrow>
        <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-display text-fog">
          Your pipeline isn't broken.
          <br className="hidden sm:block" /> The work around it is.
        </h2>
        <p className="mt-5 text-[1rem] leading-relaxed text-fog-muted">
          Talk to any revenue team and the same lines come up. Every one of them
          is a data, timing, or routing problem, the exact things software
          should have automated years ago.
        </p>
      </div>

      {/* Wall of frustrations — masonry via CSS columns for an organic, overheard feel */}
      <div className="mt-14 gap-4 [column-count:1] sm:[column-count:2] lg:[column-count:3]">
        {gripes.map((g) => (
          <figure
            key={g.quote}
            className="group mb-4 break-inside-avoid rounded-card border border-line bg-ink-800/40 p-6 transition-colors duration-300 ease-ease hover:border-cyan/30"
          >
            <span
              aria-hidden
              className="block font-display text-[2.6rem] leading-[0.6] text-fog/15 transition-colors duration-300 group-hover:text-cyan/30"
            >
              &ldquo;
            </span>
            <blockquote className="mt-3 font-sans text-[1.02rem] italic leading-relaxed text-fog">
              {g.quote}
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.14em] text-fog-faint">
              <span className="h-px w-4 bg-line-strong" />
              {g.role}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Pivot — agitate → reframe as infrastructure */}
      <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl font-display text-[1.15rem] font-medium leading-snug text-fog">
          None of this needs another rep.{" "}
          <span className="text-cyan">It needs infrastructure.</span>
        </p>
        <a
          href="#infrastructure"
          className="group inline-flex items-center gap-2 whitespace-nowrap font-display text-[0.9rem] font-medium text-cyan transition-colors duration-200 hover:text-cyan-bright"
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
