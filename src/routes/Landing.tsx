import { useReveal } from "../lib/useReveal";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/marketing/Hero";
import { ProofStrip } from "../components/marketing/ProofStrip";
import { Problem } from "../components/marketing/Problem";
import { Services } from "../components/marketing/Services";
import { PipelineDiagram } from "../components/marketing/PipelineDiagram";
import { Process } from "../components/marketing/Process";
import { Pricing } from "../components/marketing/Pricing";
import { CTASection } from "../components/marketing/CTASection";

/**
 * Enterprise trust-building flow:
 *   1. Hero            — outcome-led promise + live pipeline visual
 *   2. ProofStrip      — proof immediately under the hero (authority)
 *   3. Problem         — agitate: the pain every revenue team voices
 *   4. Services        — split-screen explanation of the 3 infra layers
 *   5. PipelineDiagram — the self-driving engine, stage by stage
 *   6. Process         — how the engagement works (You → We → It)
 *   7. Pricing         — high-ticket RevOps tiers (Enterprise = primary)
 *   8. CTASection      — book an infrastructure audit
 */
export function Landing() {
  useReveal();
  return (
    <div className="min-h-screen bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950">
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <Problem />
        <Services />
        <PipelineDiagram />
        <Process />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
