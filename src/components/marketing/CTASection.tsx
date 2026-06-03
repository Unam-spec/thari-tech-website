import { useState, type FormEvent } from "react";
import { MapPin, Mail, MessageSquare } from "lucide-react";
import { Section, Eyebrow } from "../primitives/Section";

const inputCls =
  "w-full rounded-card border border-line bg-ink-900/60 px-4 py-3 font-sans text-[0.95rem] text-fog outline-none transition-colors duration-200 placeholder:text-fog-faint focus:border-cyan/60";
const labelCls =
  "mb-1.5 block font-display text-[0.66rem] uppercase tracking-[0.14em] text-fog-faint";

export function CTASection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const company = String(f.get("company") || "").trim();
    const email = String(f.get("email") || "").trim();
    const stack = String(f.get("stack") || "");
    const goal = String(f.get("goal") || "").trim();
    if (!name || !email) return;

    const subject = encodeURIComponent(
      `Infrastructure audit request: ${company || name}`,
    );
    const body = encodeURIComponent(
      `New audit request from the Thari-Tech site\n\n` +
        `Name: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\n` +
        `Current CRM/stack: ${stack || "N/A"}\nGoal: ${goal || "N/A"}`,
    );
    window.open(
      `mailto:tharitechptyltd@gmail.com?subject=${subject}&body=${body}`,
      "_blank",
    );
    setSent(true);
  }

  return (
    <Section id="contact" className="reveal">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left — pitch + details */}
        <div>
          <Eyebrow>Get started</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-display text-fog">
            Book an infrastructure audit.
          </h2>
          <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-fog-muted">
            A 30-minute working session. We map your current pipeline, pinpoint
            where revenue leaks between channels and your CRM, and show you
            exactly what the autonomous build would replace. No pitch deck.
          </p>

          <div className="mt-10 space-y-4">
            {[
              [<MapPin size={16} key="m" />, "Remote · serving teams worldwide"],
              [<Mail size={16} key="e" />, "tharitechptyltd@gmail.com"],
              [<MessageSquare size={16} key="w" />, "Response within 2 business hours"],
            ].map(([icon, text], i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-card border border-line text-cyan">
                  {icon}
                </span>
                <span className="text-[0.9rem] text-fog-muted">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-card border border-line bg-ink-800/50 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className={labelCls} htmlFor="name">
                Full name
              </label>
              <input id="name" name="name" className={inputCls} placeholder="Jane Okafor" required />
            </div>
            <div className="sm:col-span-1">
              <label className={labelCls} htmlFor="company">
                Company
              </label>
              <input id="company" name="company" className={inputCls} placeholder="Acme RevOps" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="email">
                Work email
              </label>
              <input id="email" name="email" type="email" className={inputCls} placeholder="jane@acme.com" required />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="stack">
                Current CRM / stack
              </label>
              <select id="stack" name="stack" className={inputCls} defaultValue="">
                <option value="" disabled>
                  Select your CRM
                </option>
                <option>HubSpot</option>
                <option>Salesforce</option>
                <option>Pipedrive</option>
                <option>Spreadsheets / none</option>
                <option>Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="goal">
                What should the pipeline do autonomously?
              </label>
              <textarea
                id="goal"
                name="goal"
                rows={3}
                className={`${inputCls} resize-none`}
                placeholder="e.g. enrich net-new leads overnight and push scored, meeting-ready deals into our CRM"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-pill bg-amber px-6 py-3.5 font-display text-[0.95rem] font-medium text-ink-950 transition-all duration-[240ms] ease-ease hover:-translate-y-px hover:bg-amber-deep hover:shadow-glow-amber"
          >
            Request my audit
          </button>
          {sent && (
            <p className="mt-4 text-center text-[0.85rem] text-cyan">
              Opening your email client. We'll be in touch within 2 business hours.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
