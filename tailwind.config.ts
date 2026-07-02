import type { Config } from "tailwindcss";

// Tokens 1:1 con el documento de Fase 3 (Diseño UX/UI — Mtrica)
// + colores funcionales (Fase 4): success/alert se usan solo para datos
// (deltas de métricas, estados en dashboards y casos de éxito), nunca como
// color de marca ni decorativo, para no diluir la identidad navy/bone/graphite.
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
        success: {
          DEFAULT: "#3F6B4E", // texto sobre fondo claro (p.ej. tarjetas blancas)
          light: "#7BC49B", // texto sobre fondo navy/oscuro
        },
        alert: {
          DEFAULT: "#A56A2E", // texto sobre fondo claro
          light: "#E2A876", // texto sobre fondo navy/oscuro
        },
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
