import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-soft px-5 py-14 sm:px-8 lg:px-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[0.9rem] leading-relaxed text-ink-soft">
              Autonomous AI revenue infrastructure for B2B teams. We build the
              pipeline that runs itself.
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
                ["Why", "#problem"],
                ["Process", "#process"],
                ["Engagements", "#pricing"],
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

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-[0.78rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Thari Tech (Pty) Ltd. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
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
      <h4 className="mb-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {items.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-[0.85rem] text-ink-soft transition-colors duration-200 hover:text-accent"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
