import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../primitives/Button";

const links = [
  { href: "#problem", label: "Why" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Engagements" },
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
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          className={`mx-auto flex h-14 w-full max-w-[1180px] items-center justify-between rounded-pill pl-5 pr-2.5 transition-all duration-300 ease-ease ${
            scrolled
              ? "border border-line bg-paper/80 shadow-soft backdrop-blur-glass"
              : "border border-transparent bg-transparent"
          }`}
        >
          <a href="/" aria-label="Thari Tech home">
            <Logo />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-sans text-[0.9rem] font-medium text-ink-soft transition-colors duration-200 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              href="#contact"
              variant="solid"
              className="hidden px-5 py-2.5 text-[0.85rem] sm:inline-flex"
            >
              Book an audit
            </Button>
            <button
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <span className="h-0.5 w-5 rounded bg-ink" />
              <span className="h-0.5 w-5 rounded bg-ink" />
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </>
  );
}
