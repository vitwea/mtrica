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
          50: "#E7ECF3",
          100: "#C7D1E0",
          DEFAULT: "#28354F",
          hover: "#1D2740",
        },

        // Fondo exterior — ahora con contraste real
        canvas: "#CFC8BE",

        // Tarjetas — más claras que el canvas
        bone: "#E0E0DB",

        graphite: "#2A2829",

        success: {
          DEFAULT: "#3F6B4E",
          light: "#7BC49B",
        },

        alert: {
          DEFAULT: "#A56A2E",
          light: "#E2A876",
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
        section: "24px", // radio de las tarjetas de sección (Nav, Hero, cada bloque, Footer)
      },

      // Sombra premium (más suave y elegante)
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 16px 40px -20px rgba(0,0,0,0.18)",
      },

      maxWidth: {
        content: "1200px",
      },

      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        fadein: "fadein 0.4s ease",
      },
    },
  },
  plugins: [],
};

export default config;
