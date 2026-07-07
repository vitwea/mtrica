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
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
          <div style={{ width: 34, height: 60, borderRadius: 6, backgroundColor: "#0F1526" }} />
          <div style={{ width: 34, height: 95, borderRadius: 6, backgroundColor: "#0F1526" }} />
          <div style={{ width: 34, height: 130, borderRadius: 6, backgroundColor: "#0F1526" }} />
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
          Business Intelligence para pymes
        </div>
      </div>
    ),
    { ...size }
  );
}