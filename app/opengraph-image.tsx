import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1D2740",
        }}
      >
        <svg width="340" height="118" viewBox="0 0 420 145">
          <rect x="0" y="95" width="26" height="45" rx="4" fill="#0F1526" />
          <rect x="38" y="70" width="26" height="70" rx="4" fill="#0F1526" />
          <rect x="76" y="45" width="26" height="95" rx="4" fill="#0F1526" />

          <path
            d="M4 88 C 30 60 55 35 80 21"
            fill="none"
            stroke="#4C5FFF"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M64 4 L94 12 L82 40 L67 26 Z"
            fill="#4C5FFF"
          />

          <text
            x="120"
            y="135"
            fontSize="95"
            fontWeight="700"
            fill="white"
          >
            trica
          </text>
        </svg>

        <div style={{ marginTop: 24, fontSize: 32, color: "rgba(255,255,255,0.65)" }}>
          Dashboards en Power BI para pymes
        </div>
      </div>
    ),
    { ...size }
  );
}