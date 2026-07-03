import type { Config } from "tailwindcss";

// Tokens 1:1 con el documento de Fase 3 (Diseño UX/UI — Mtrica)
// + colores funcionales (Fase 4): success/alert se usan solo para datos.
//
// Fase 5: navy-950 (fondo oscuro real, hero/CTA) + accent (color vivo único,
// reservado a CTAs y a un puñado de detalles decorativos con opacidad baja).
//
// Fase 6 (auditoría): se añade `mist` — la tarjeta que va SOBRE una sección
// `bg-white`. Regla de oro del sistema: sección white → tarjeta mist;
// sección bone → tarjeta white; sección navy-950 → tarjeta navy-card o
// white/5. Nunca tarjeta y sección del mismo color exacto.
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
          950: "#0F1526",
          card: "#161D33",
        },

        canvas: "#CFC8BE", // fondo exterior de página — nunca fondo de tarjeta
        bone: "#E0E0DB",
        mist: "#F4F3F0", // tarjeta sobre sección bg-white
        graphite: "#2A2829",

        accent: {
          DEFAULT: "#4C5FFF",
          hover: "#3B4CE0",
        },

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
        // Fase 6: 36 → 42px — escala insuficiente para una consultora
        // premium de proyectos 5-20k€ (auditoría, punto E).
        h2: ["42px", { lineHeight: "48px", fontWeight: "700" }],
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
        section: "24px",
      },

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
