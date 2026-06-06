import { Zap, Filter, CalendarCheck, ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "../primitives/Section";

type Pillar = {
  index: string;
  icon: typeof Zap;
  channel: string;
  title: string;
  desc: string;
  specs: string[];
  flagship?: boolean;
};

const pillars: Pillar[] = [
  {
    index: "01",
    icon: Zap,
    channel: "Step 01 — Respond",
    title: "Instant replies, day or night",
    desc: "The moment someone messages you on WhatsApp or your website, the system answers, in seconds, not hours. No enquiry sits unread, no after-hours message goes cold, and no customer is left waiting while you're busy or asleep.",
    specs: [
      "Replies in seconds, 24/7",
      "Works on WhatsApp and your website",
      "Catches after-hours and weekend enquiries",
      "Every message gets answered",
    ],
  },
  {
    index: "02",
    icon: Filter,
    channel: "Step 02 — Qualify",
    title: "Sorts serious buyers from time-wasters",
    desc: "The system asks the right questions up front, the way your best team member would, and figures out who's a real, ready-to-book customer. You stop spending hours on enquiries that were never going to buy.",
    specs: [
      "Asks your qualifying questions naturally",
      "Filters serious buyers from browsers",
      "Captures the details you need",
      "Sounds like your business, not a robot",
    ],
  },
  {
    index: "03",
    icon: CalendarCheck,
    channel: "Step 03 — Book",
    title: "Books them straight into your calendar",
    desc: "Qualified customers get offered your real availability and book themselves in, no back-and-forth. You just see confirmed appointments appear while you get on with the work.",
    specs: [
      "Auto-booking into your live calendar",
      "No back-and-forth scheduling",
      "Automated follow-ups on higher plans",
      "Confirmed bookings, hands-free",
    ],
    flagship: true,
  },
];

export function Services() {
  return (
    <Section id="infrastructure" className="reveal bg-paper-soft">
      <div className="max-w-2xl">
        <Eyebrow>What it does</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-display text-ink">
          Reply. Qualify. Book. Automatically.
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          We set up an always-on system that handles your incoming enquiries
          end to end, so every lead gets an instant answer and the good ones
          land in your calendar, without you lifting a finger.
        </p>
      </div>

      <div className="mt-16 space-y-16 md:space-y-24">
        {pillars.map((p, i) => (
          <SplitRow key={p.index} pillar={p} flip={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}

function SplitRow({ pillar, flip }: { pillar: Pillar; flip: boolean }) {
  const Icon = pillar.icon;
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      {/* Copy column */}
      <div className={flip ? "md:order-2" : "md:order-1"}>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-card border border-accent/25 bg-accent-soft text-accent">
            <Icon size={20} strokeWidth={1.6} />
          </span>
          <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
            {pillar.channel}
          </span>
        </div>
        <h3 className="mt-6 font-display text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-tight tracking-display text-ink">
          {pillar.title}
        </h3>
        <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
          {pillar.desc}
        </p>
      </div>

      {/* Spec panel — flagship inverts to ink for premium contrast */}
      <div className={flip ? "md:order-1" : "md:order-2"}>
        <div
          className={`relative overflow-hidden rounded-card p-7 shadow-soft sm:p-8 ${
            pillar.flagship
              ? "bg-ink text-paper"
              : "border border-line bg-panel"
          }`}
        >
          <div
            className={`relative flex items-center justify-between border-b pb-4 ${
              pillar.flagship ? "border-white/15" : "border-line"
            }`}
          >
            <span
              className={`font-display text-[2.6rem] font-semibold leading-none ${
                pillar.flagship ? "text-white/25" : "text-ink/15"
              }`}
            >
              {pillar.index}
            </span>
            <span
              className={`font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] ${
                pillar.flagship ? "text-accent-bright" : "text-accent"
              }`}
            >
              {pillar.flagship ? "Flagship" : "Included"}
            </span>
          </div>
          <ul className="relative mt-5 space-y-3">
            {pillar.specs.map((s) => (
              <li
                key={s}
                className={`flex items-start gap-2.5 text-[0.9rem] ${
                  pillar.flagship ? "text-paper" : "text-ink"
                }`}
              >
                <ArrowUpRight
                  size={15}
                  className={`mt-0.5 shrink-0 ${
                    pillar.flagship ? "text-accent-bright" : "text-accent"
                  }`}
                />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
