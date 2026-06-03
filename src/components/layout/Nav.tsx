import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../primitives/Button";

const links = [
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#pipeline", label: "How it runs" },
  { href: "#pricing", label: "Engagements" },
  { href: "/platform", label: "Command center" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-line bg-ink-950/80 backdrop-blur-glass"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-16">
          <a href="/" aria-label="Thari-Tech home">
            <Logo />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-sans text-[0.88rem] text-fog-muted transition-colors duration-200 hover:text-fog"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              variant="cyan"
              className="hidden px-5 py-2 text-[0.85rem] sm:inline-flex"
            >
              Book an audit
            </Button>
            <button
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <span className="h-px w-5 bg-fog" />
              <span className="h-px w-5 bg-fog" />
              <span className="h-px w-5 bg-fog" />
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </>
  );
}
