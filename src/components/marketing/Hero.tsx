import { Button } from "../primitives/Button";
import { PipelineNodes } from "./PipelineNodes";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24 lg:px-16">
      {/* Cyan light source — radial, low opacity, behind content (not a fill gradient) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[10%] -top-[20%] h-[620px] w-[620px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,224,214,0.10) 0%, transparent 65%)",
        }}
      />
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — copy */}
        <div className="max-w-xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-pill border border-cyan/25 bg-cyan/5 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-dot" />
            <span className="font-display text-[0.68rem] uppercase tracking-[0.18em] text-cyan">
              Autonomous revenue infrastructure
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[1.02] tracking-display text-fog">
            Qualify leads at 2&nbsp;AM.
            <br />
            <span className="text-cyan">Close them by 9.</span>
          </h1>

          <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-fog-muted">
            Thari-Tech builds self-driving revenue engines: an Apollo-to-Clay
            data pipeline feeding autonomous Email & LinkedIn agents, wired
            directly into a deep, AI-native CRM. Not campaigns. Infrastructure
            that runs every hour you don't.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="amber">
              Book an infrastructure audit
            </Button>
            <Button href="#pipeline" variant="ghost">
              See how it runs
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
            {[
              ["24/7", "Autonomous uptime"],
              ["3.4×", "Pipeline velocity"],
              ["1", "Unified source of truth"],
            ].map(([num, label]) => (
              <div key={label}>
                <dd className="font-display text-[1.7rem] font-bold leading-none text-fog">
                  {num}
                </dd>
                <dt className="mt-1.5 text-[0.72rem] leading-snug text-fog-faint">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — live pipeline node visual */}
        <div className="relative">
          <PipelineNodes />
        </div>
      </div>
    </section>
  );
}
