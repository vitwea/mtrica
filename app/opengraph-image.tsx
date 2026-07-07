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
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: "white",
            letterSpacing: -3,
          }}
        >
          Mtrica
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            color: "rgba(255,255,255,0.65)",
            wordSpacing: "18px",
          }}
        >
          Mide. Decide. Crece.
        </div>
      </div>
    ),
    { ...size }
  );
}