# Thari-Tech Revamp — Architecture & Global Style Proposal

**Phase 1 deliverable.** Awaiting approval before any Phase 2/3 code is written.

Positioning shift: low-ticket "manual lead generation" → **high-ticket B2B AI Automation & CRM Infrastructure consultancy**. Target: $5M+ ARR, enterprise-grade perception. Core offers: Autonomous WhatsApp/LinkedIn closers + deep Odoo CRM AI integration.

---

## 1. Audit summary (what exists today)

| Area | Current state | Verdict |
|---|---|---|
| Live site | Hand-written static `index.html` (inline `<style>`/`<script>`), dark `#0A0A0A` + green `#00C896`, Syne/DM Sans | Rebuild |
| React tree (`/src/app/**`) | Orphaned. Blue, generic "Smart Automation", Unsplash photos, 3-col shadow cards. Never mounts (no `#root`, no module script in HTML) | Delete / replace |
| Build pipeline | Vite + React + Tailwind installed but **not wired** — Tailwind theme empty, `lucide-react` unused | Activate properly |
| App dashboard | **Does not exist** | Greenfield (Phase 3) |
| Copy | "real human outreach, no bots", DFY lead-gen, solar/schools/logistics niches, R3.5k–12k pricing | Purge & rewrite |
| Deploy | GH Actions → `npm run build` → `peaceiris/actions-gh-pages` → `dist` on `gh-pages`. `base: "/"`, custom domain via `CNAME` | Keep; must stay green |

**Confirmed decisions:** (1) Wire up React+Vite+Tailwind properly. (2) Dashboard = high-fidelity visual mock with simulated live data. (3) Accent = electric cyan primary, amber as rare premium highlight.

---

## 2. Routing structure

Single-page marketing site + a dedicated dashboard route. Using `react-router-dom` (hash-free, but with a 404 fallback for GH Pages).

```
/                     → Marketing landing (Hero, Proof, Services, Pipeline, Pricing, CTA)
/platform             → "Command Center" dashboard preview (Phase 3, simulated data)
*                     → redirect to /
```

GH Pages SPA caveat: deep links to `/platform` 404 on refresh. Fix = copy `index.html` → `404.html` at build (tiny Vite plugin or postbuild script) + redirect shim. Documented in build notes.

---

## 3. Component hierarchy

```
src/
├── main.tsx                       # mounts <App/> into #root (added to index.html)
├── App.tsx                        # Router + global layout shell
├── routes/
│   ├── Landing.tsx                # composes marketing sections
│   └── Platform.tsx               # composes dashboard widgets
├── components/
│   ├── layout/
│   │   ├── Nav.tsx                # sticky frosted nav, "Book infrastructure audit" CTA
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── marketing/
│   │   ├── Hero.tsx              # outcome headline + live "pipeline node" motif
│   │   ├── LogoProof.tsx        # trust strip (metrics, not vague logos)
│   │   ├── Services.tsx         # asymmetric: WhatsApp/LinkedIn closers + Odoo AI
│   │   ├── PipelineDiagram.tsx  # "self-driving revenue engine" node graph
│   │   ├── Pricing.tsx          # 3 tiers, premium Odoo tier 2× visual weight
│   │   └── CTASection.tsx       # audit-booking, replaces "free trial"
│   ├── dashboard/
│   │   ├── CommandHeader.tsx    # status bar: agents live, sync health, ARR ticker
│   │   ├── PipelineBoard.tsx    # lead qualification stages, real-time-feeling
│   │   ├── AgentActivityFeed.tsx# autonomous WhatsApp/LinkedIn message log
│   │   ├── CRMSyncWidget.tsx    # Odoo sync status, records pushed
│   │   ├── QualificationGauge.tsx
│   │   └── RevenueWidget.tsx
│   └── primitives/
│       ├── Button.tsx          # variants: solid (amber), ghost, cyan-outline
│       ├── Badge.tsx
│       ├── GlowCard.tsx        # subtle border + node glow (NOT shadow box)
│       └── Section.tsx
├── lib/
│   ├── motion.ts               # shared easing/transition tokens
│   └── simulate.ts             # fake live data generators for dashboard
└── styles/
    └── index.css               # @tailwind layers + base + font-face
```

Icons: keep `lucide-react` (tree-shaken) for utility glyphs; bespoke SVG for the node/circuit motifs.

---

## 4. Global style system (Tailwind tokens)

The palette and type lock into `tailwind.config.js` `theme.extend` so nothing drifts back to AI-slop defaults. CSS variables mirror them for raw use.

### Color — "Corporate Tech: deep navy / charcoal + cyan, amber accent"

```js
// tailwind.config.js → theme.extend.colors
colors: {
  ink:    { 950:'#05070D', 900:'#080B14', 800:'#0C1019', 700:'#121826' }, // navy→charcoal bg ramp
  line:   'rgba(148,163,184,0.10)',   // hairline borders
  fog:    { DEFAULT:'#C7D0E0', muted:'rgba(199,208,224,0.55)', faint:'rgba(199,208,224,0.30)' },
  cyan:   { DEFAULT:'#22E0D6', bright:'#5FF6EE', deep:'#0FB5AC' }, // electric cyan — primary accent
  amber:  { DEFAULT:'#F5A524', deep:'#C97E0F' },                  // rare premium / value highlight
}
```

- **Backgrounds:** ramp from `ink-950` (page) through `ink-800`/`ink-700` (elevated surfaces). No flat black.
- **Banned:** purple→blue SaaS gradients. Glows are radial cyan at ≤8% opacity, used as light sources behind nodes — never as a fill gradient on buttons.
- **Amber discipline:** appears only on the premium pricing tier, the primary "value" stat, and at most one CTA. If it's everywhere, it's nowhere.

### Typography — premium tech, no Inter/Roboto/Arial

```js
fontFamily: {
  display: ['"Space Grotesk"', 'sans-serif'],  // headlines, numerics, nav
  sans:    ['"Plus Jakarta Sans"', 'sans-serif'], // body, UI
}
```

- Loaded via `<link>` preconnect in `index.html` (replacing the current Syne/DM Sans link).
- Type scale (clamp-based, fluid): display `clamp(2.6rem, 6vw, 5.25rem)` / h2 `clamp(1.9rem, 3.5vw, 3rem)` / body `1rem–1.0625rem`.
- Hierarchy is **typography-driven**: tight negative tracking on display (`-0.03em`), generous body leading (1.7), section eyebrows in cyan uppercase 0.68rem / 2px tracking.

### Surface & motion tokens

```js
borderRadius: { card:'14px', pill:'100px' },          // restrained, not the banned 16px-everywhere
backdropBlur: { glass:'14px' },                        // frosted glass used sparingly (nav, overlays)
boxShadow:   { glow:'0 0 0 1px rgba(34,224,214,0.18), 0 0 40px -12px rgba(34,224,214,0.25)' },
transitionTimingFunction: { ease:'cubic-bezier(0.22, 1, 0.36, 1)' }, // smooth ease-out for hovers
```

Hover/micro-interaction rules: 200–280ms, single `ease` curve, transform/opacity/border-color only (no layout thrash). Cards lift via border-glow, **not** drop shadows. Buttons: cyan-outline → fill on hover; amber CTA → subtle brightness + 1px translateY.

### Anti-generic guardrails (enforced in review)

- ❌ No Inter/Roboto/Arial · ❌ No purple-blue gradients · ❌ No repeating 3-col shadow-card grids · ❌ No vague headlines ("Build the future", "All-in-one platform").
- ✅ Asymmetric layouts, node/circuit motifs, outcome-specific copy ("Qualify leads at 2 AM with autonomous WhatsApp infrastructure").

---

## 5. Copy direction (replaces lead-gen messaging)

| Old | New |
|---|---|
| "We fill your pipeline. You close the deals." | "Autonomous pipelines that qualify, message, and close — while you sleep." |
| "Done-For-You Lead Generation" | "AI CRM Infrastructure for B2B revenue teams" |
| "real human outreach, no bots" | "AI-driven personalized infrastructure" |
| Solar/schools/logistics niches | Revenue-team / RevOps positioning |
| "Get 10 free leads" | "Book an infrastructure audit" |

Pricing reframed to high-ticket retainer/implementation tiers; **premium "Self-Driving CRM Integration (Odoo)" tier gets 2× visual weight** (wider column, amber border-glow, elevated surface).

---

## 6. Build / deploy considerations

- Add `<div id="root">` + `<script type="module" src="/src/main.tsx">` to `index.html`; strip the legacy inline body/style/script.
- Keep `base:"/"`, `CNAME`, sitemap/robots. Update `<title>`/meta/OG to new positioning + JSON-LD `Organization`/`Service`.
- Add `404.html` generation for the `/platform` deep-link SPA fallback.
- Verify `npm run build` succeeds locally before relying on the GH Action.
- README + `LOGO_NOTE` updated to reflect the real stack.

---

## 7. Proposed execution order (post-approval)

1. **Foundation** — Tailwind tokens, fonts, `index.html` wiring, router, primitives (`Button`/`GlowCard`/`Section`), delete dead components.
2. **Phase 2** — Nav → Hero → Services → PipelineDiagram → Pricing → CTA → Footer. Verify build.
3. **Phase 3** — `/platform` command-center dashboard with simulated live data.
4. Meta/SEO/copy sweep + final build verification.

> **Approve this and I'll start with the foundation + Phase 2.** Flag any palette, copy, or scope changes now — it's cheapest to adjust before code.
