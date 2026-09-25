import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
        <div style={{ width: 160, height: 160, background: "#2F8A84" }} />
      </div>
    ),
    size
  );
}
