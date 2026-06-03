import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[0.85rem] leading-relaxed text-fog-muted">
              Autonomous AI CRM infrastructure for B2B revenue teams. We build
              the pipeline that runs itself.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol
              title="Infrastructure"
              items={[
                ["Apollo-to-Clay data", "#infrastructure"],
                ["Autonomous outreach", "#infrastructure"],
                ["CRM AI integration", "#infrastructure"],
              ]}
            />
            <FooterCol
              title="Company"
              items={[
                ["How it runs", "#pipeline"],
                ["Engagements", "#pricing"],
                ["Command center", "/platform"],
              ]}
            />
            <FooterCol
              title="Contact"
              items={[
                ["Book an audit", "#contact"],
                ["tharitech.co.za", "#"],
                ["tharitechptyltd@gmail.com", "mailto:tharitechptyltd@gmail.com"],
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-[0.75rem] text-fog-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Thari-Tech (Pty) Ltd · All rights reserved</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-dot" />
            Infrastructure operational
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div>
      <h4 className="mb-3 font-display text-[0.7rem] uppercase tracking-[0.18em] text-fog-faint">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {items.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-[0.82rem] text-fog-muted transition-colors duration-200 hover:text-cyan"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
