/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Editorial Light — warm bone canvas, ink type, electric indigo accent
        paper: {
          DEFAULT: "#F4F1EA", // page
          soft: "#EDE9DF", // alternating sections
          deep: "#E6E1D4", // deepest band
        },
        panel: {
          DEFAULT: "#FFFFFF", // cards / elevated surfaces
          soft: "#FBFAF6",
        },
        ink: {
          DEFAULT: "#14130F", // headlines
          soft: "#4B473E", // body
          faint: "#8C8678", // muted / eyebrow / captions
        },
        accent: {
          DEFAULT: "#4F3CF0", // electric indigo
          deep: "#3526C2",
          bright: "#6E5BFF",
          soft: "rgba(79,60,240,0.08)",
        },
        line: "rgba(20,19,15,0.10)",
        "line-strong": "rgba(20,19,15,0.18)",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Hanken Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        display: "-0.025em",
      },
      borderRadius: {
        card: "18px",
        xl2: "28px",
        pill: "100px",
      },
      backdropBlur: {
        glass: "16px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,19,15,0.04), 0 10px 30px -16px rgba(20,19,15,0.18)",
        lift: "0 28px 60px -28px rgba(20,19,15,0.30)",
        accent: "0 14px 44px -14px rgba(79,60,240,0.42)",
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 38s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
