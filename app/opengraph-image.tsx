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
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10, position: "relative" }}>
          <div style={{ width: 34, height: 60, borderRadius: 6, backgroundColor: "#0F1526" }} />
          <div style={{ width: 34, height: 95, borderRadius: 6, backgroundColor: "#0F1526" }} />
          <div style={{ width: 34, height: 130, borderRadius: 6, backgroundColor: "#0F1526" }} />
          <div
            style={{
              position: "absolute",
              top: -20,
              left: -8,
              width: 140,
              height: 6,
              borderRadius: 3,
              backgroundColor: "#4C5FFF",
              transform: "rotate(-26deg)",
              transformOrigin: "left center",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -34,
              left: 108,
              width: 0,
              height: 0,
              borderTop: "9px solid transparent",
              borderBottom: "9px solid transparent",
              borderLeft: "14px solid #4C5FFF",
              transform: "rotate(-26deg)",
            }}
          />
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 96,
            fontWeight: 700,
            color: "white",
            letterSpacing: -2,
          }}
        >
          Mtrica
        </div>

        <div style={{ marginTop: 12, fontSize: 30, color: "rgba(255,255,255,0.65)" }}>
          Dashboards en Power BI para pymes
        </div>
      </div>
    ),
    { ...size }
  );
}