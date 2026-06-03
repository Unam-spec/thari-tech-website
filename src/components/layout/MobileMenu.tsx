import { Logo } from "./Logo";
import { Button } from "../primitives/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col bg-ink-950/98 backdrop-blur-glass transition-opacity duration-300 ease-ease md:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-5">
        <Logo />
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-2xl leading-none text-fog-muted transition-colors hover:text-fog"
        >
          &#x2715;
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={onClose}
            className="border-b border-line py-4 font-display text-[1.6rem] font-medium tracking-tight text-fog transition-colors hover:text-cyan"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="p-6">
        <Button
          href="#contact"
          variant="amber"
          onClick={onClose}
          className="w-full"
        >
          Book an infrastructure audit
        </Button>
      </div>
    </div>
  );
}
