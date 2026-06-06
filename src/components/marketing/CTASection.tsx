import { useState, type FormEvent } from "react";
import { MapPin, Mail, MessageSquare } from "lucide-react";
import { Section, Eyebrow } from "../primitives/Section";

const inputCls =
  "w-full rounded-card border border-white/15 bg-white/[0.06] px-4 py-3 font-sans text-[0.95rem] text-paper outline-none transition-colors duration-200 placeholder:text-paper/35 focus:border-accent-bright/70";
const labelCls =
  "mb-1.5 block font-sans text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-paper/50";

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

    const subject = encodeURIComponent(`Infrastructure audit request: ${company || name}`);
    const body = encodeURIComponent(
      `New audit request from the Thari Tech site\n\n` +
        `Name: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\n` +
        `Current CRM/stack: ${stack || "N/A"}\nGoal: ${goal || "N/A"}`,
    );
    window.open(`mailto:tharitechptyltd@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
  }

  return (
    <Section id="contact" className="reveal">
      <div className="relative overflow-hidden rounded-xl2 bg-ink p-7 text-paper shadow-lift sm:p-10 lg:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[6%] -top-[20%] h-[420px] w-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(110,91,255,0.28), transparent 65%)" }}
        />
        <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left — pitch */}
          <div>
            <span className="eyebrow !text-accent-bright">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-bright" />
              Get started
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.05] tracking-display text-white">
              Book an infrastructure audit.
            </h2>
            <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-paper/75">
              A 30-minute working session. We map your current pipeline, pinpoint
              where revenue leaks between your tools and your CRM, and show you
              exactly what the autonomous build would replace. No pitch deck.
            </p>

            <div className="mt-10 space-y-4">
              {[
                [<MapPin size={16} key="m" />, "Remote, serving teams worldwide"],
                [<Mail size={16} key="e" />, "tharitechptyltd@gmail.com"],
                [<MessageSquare size={16} key="w" />, "Response within 2 business hours"],
              ].map(([icon, text], i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-card border border-white/15 text-accent-bright">
                    {icon}
                  </span>
                  <span className="text-[0.9rem] text-paper/75">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="rounded-card border border-white/12 bg-white/[0.04] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="name">Full name</label>
                <input id="name" name="name" className={inputCls} placeholder="Jane Okafor" required />
              </div>
              <div>
                <label className={labelCls} htmlFor="company">Company</label>
                <input id="company" name="company" className={inputCls} placeholder="Acme RevOps" />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="email">Work email</label>
                <input id="email" name="email" type="email" className={inputCls} placeholder="jane@acme.com" required />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="stack">Current CRM / stack</label>
                <select id="stack" name="stack" className={`${inputCls} [&>option]:text-ink`} defaultValue="">
                  <option value="" disabled>Select your CRM</option>
                  <option>HubSpot</option>
                  <option>Salesforce</option>
                  <option>Pipedrive</option>
                  <option>Spreadsheets / none</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="goal">What should the pipeline do autonomously?</label>
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
              className="mt-6 w-full rounded-pill bg-accent px-6 py-3.5 font-sans text-[0.95rem] font-semibold text-white transition-all duration-[260ms] ease-ease hover:-translate-y-0.5 hover:bg-accent-bright hover:shadow-accent"
            >
              Request my audit
            </button>
            {sent && (
              <p className="mt-4 text-center text-[0.85rem] text-accent-bright">
                Opening your email client. We'll be in touch within 2 business hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}
