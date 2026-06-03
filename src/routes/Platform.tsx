import { Link } from "react-router-dom";
import { Logo } from "../components/layout/Logo";

/**
 * Phase 3 placeholder. The full "command center" dashboard preview is built in
 * the next phase — this keeps the /platform route valid and on-brand meanwhile.
 */
export function Platform() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink-950 px-6 text-center">
      <Logo size={40} />
      <p className="mt-8 font-display text-[0.7rem] uppercase tracking-[0.2em] text-cyan">
        Command center
      </p>
      <h1 className="mt-3 max-w-md font-display text-[1.8rem] font-bold leading-tight text-fog">
        The autonomous pipeline console is being wired up.
      </h1>
      <Link
        to="/"
        className="mt-8 rounded-pill border border-cyan/40 px-6 py-3 font-display text-[0.9rem] text-cyan transition-colors hover:bg-cyan hover:text-ink-950"
      >
        Back to site
      </Link>
    </div>
  );
}
