import { Link } from "react-router-dom";
import { Logo } from "../components/layout/Logo";

/**
 * Phase 3 placeholder. The full "command center" dashboard preview is built in
 * the next phase — this keeps the /platform route valid and on-brand meanwhile.
 */
export function Platform() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <Logo size={40} />
      <p className="mt-8 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
        Command center
      </p>
      <h1 className="mt-3 max-w-md font-display text-[2rem] font-semibold leading-tight tracking-display text-ink">
        The autonomous pipeline console is being wired up.
      </h1>
      <Link
        to="/"
        className="mt-8 rounded-pill border border-ink/25 px-6 py-3 font-sans text-[0.9rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
      >
        Back to site
      </Link>
    </div>
  );
}
