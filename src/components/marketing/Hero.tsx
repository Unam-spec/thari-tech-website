import { Suspense, lazy } from "react";
import { Button } from "../primitives/Button";

// Code-split the WebGL scene so three.js stays out of the initial bundle.
const Crystal = lazy(() => import("../three/Crystal"));

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-10 sm:px-8 md:pb-24 md:pt-16 lg:px-16">
      <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — editorial type */}
        <div className="relative z-10 max-w-xl">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-pill border border-line bg-panel/60 px-3.5 py-1.5 shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              Autonomous revenue infrastructure
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.8rem,6.4vw,5rem)] font-semibold leading-[0.98] tracking-display text-ink">
            Qualify leads
            <br />
            at 2&nbsp;AM.{" "}
            <span className="italic text-accent">Close</span>
            <br />
            them by 9.
          </h1>

          <p className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
            Thari Tech builds self-driving revenue engines: an Apollo-to-Clay
            data pipeline feeding autonomous Email & LinkedIn agents, wired into
            a deep, AI-native CRM. Not campaigns. Infrastructure that runs every
            hour you don't.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="solid">
              Book an infrastructure audit
            </Button>
            <Button href="#process" variant="outline">
              See how it runs
            </Button>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
            {[
              ["24/7", "Autonomous uptime"],
              ["3.4×", "Pipeline velocity"],
              ["1", "Source of truth"],
            ].map(([num, label]) => (
              <div key={label}>
                <dd className="font-display text-[2rem] font-semibold leading-none text-ink">
                  {num}
                </dd>
                <dt className="mt-2 text-[0.74rem] leading-snug text-ink-faint">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — 3D crystal */}
        <div className="relative h-[340px] sm:h-[440px] lg:h-[560px]">
          {/* soft accent light source behind the crystal */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgba(79,60,240,0.18), transparent 62%)",
            }}
          />
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center">
                <div className="h-48 w-48 animate-float rounded-full bg-gradient-to-br from-accent/30 to-accent-bright/10 blur-2xl" />
              </div>
            }
          >
            <Crystal />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
