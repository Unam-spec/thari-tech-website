/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Readable charcoal-gray ramp with a faint cool tint (never flat black)
        ink: {
          950: "#15171C",
          900: "#191C22",
          800: "#1F232B",
          700: "#282D37",
          600: "#343A45",
        },
        line: "rgba(148,163,184,0.10)",
        "line-strong": "rgba(148,163,184,0.18)",
        fog: {
          DEFAULT: "#C7D0E0",
          muted: "rgba(199,208,224,0.55)",
          faint: "rgba(199,208,224,0.30)",
        },
        // Electric cyan — primary accent (digital network / nodes)
        cyan: {
          DEFAULT: "#22E0D6",
          bright: "#5FF6EE",
          deep: "#0FB5AC",
        },
        // Amber — rare premium / value highlight only
        amber: {
          DEFAULT: "#F5A524",
          deep: "#C97E0F",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        display: "-0.03em",
      },
      borderRadius: {
        card: "14px",
        pill: "100px",
      },
      backdropBlur: {
        glass: "14px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,224,214,0.18), 0 0 40px -12px rgba(34,224,214,0.25)",
        "glow-amber": "0 0 0 1px rgba(245,165,36,0.25), 0 0 50px -10px rgba(245,165,36,0.30)",
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "pulse-dot": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "flow-dash": {
          to: { strokeDashoffset: "-16" },
        },
        ticker: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "flow-dash": "flow-dash 1s linear infinite",
        ticker: "ticker 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
