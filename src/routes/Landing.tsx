import { useReveal } from "../lib/useReveal";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/marketing/Hero";
import { ProofStrip } from "../components/marketing/ProofStrip";
import { Problem } from "../components/marketing/Problem";
import { Services } from "../components/marketing/Services";
import { Process } from "../components/marketing/Process";
import { Testimonials } from "../components/marketing/Testimonials";
import { Pricing } from "../components/marketing/Pricing";
import { FAQ } from "../components/marketing/FAQ";
import { CTASection } from "../components/marketing/CTASection";

/**
 * Page flow:
 *   1. Hero         — never miss another lead + 3D crystal
 *   2. ProofStrip   — reassurance metrics under the hero
 *   3. Problem      — agitate: the lead came in, you weren't there
 *   4. Services     — what it does: reply, qualify, book
 *   5. Process      — how it works, in three steps (customer → system → you)
 *   6. Testimonials — client proof (self-hides until entries are added)
 *   7. Pricing      — Catch / Convert / Managed plans
 *   8. FAQ          — objection handling + FAQPage schema
 *   9. CTASection   — book a free 15-minute walkthrough
 */
export function Landing() {
  useReveal();
  return (
    <div className="grain min-h-screen bg-paper">
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <Problem />
        <Services />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
