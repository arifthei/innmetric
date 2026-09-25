import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C1917",
        }}
      >
        <div style={{ width: 56, height: 56, background: "#2F8A84" }} />
      </div>
    ),
    size
  );
}
