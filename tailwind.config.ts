import type { Config } from "tailwindcss";

// Tokens 1:1 con el documento de Fase 3 (Diseño UX/UI — Mtrica)
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#28354F", // color de marca — CTAs, enlaces, acentos
          hover: "#1D2740", // hover de botón primario (~15% más oscuro)
        },
        bone: "#E0E0DB", // fondo alterno / tarjetas
        graphite: "#2A2829", // texto secundario
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "56px", fontWeight: "700" }],
        h1Mobile: ["34px", { lineHeight: "40px", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "44px", fontWeight: "700" }],
        h2Mobile: ["28px", { lineHeight: "36px", fontWeight: "700" }],
        h3: ["28px", { lineHeight: "36px", fontWeight: "600" }],
        h4: ["20px", { lineHeight: "28px", fontWeight: "600" }],
        bodyLg: ["18px", { lineHeight: "28px", fontWeight: "400" }],
        body: ["16px", { lineHeight: "26px", fontWeight: "400" }],
        ui: ["14px", { lineHeight: "20px", fontWeight: "500" }],
        caption: ["12px", { lineHeight: "16px", fontWeight: "400" }],
      },
      spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "48px",
        xl: "96px",
        "xl-mobile": "64px",
      },
      borderRadius: {
        card: "12px",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
