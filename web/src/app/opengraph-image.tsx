import { ImageResponse } from "next/og";

export const alt =
  "InnMetric: You have rooms to sell. The booking page says otherwise.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#F3EDE0";
const INK = "#1C1917";
const ASAGI = "#2F8A84";
const MUTED = "#6F6A60";
const LINE = "#D6CDB8";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          borderBottom: `16px solid ${ASAGI}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 28, height: 28, background: ASAGI }} />
          <div style={{ fontSize: 40, fontWeight: 700, color: INK }}>
            innmetric
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: INK,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            You have rooms to sell. The booking page says otherwise.
          </div>
          <div style={{ fontSize: 30, color: MUTED, maxWidth: 960 }}>
            Hotel availability and rate problems, traced through your existing
            systems and checked after every approved change.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `2px solid ${LINE}`,
            paddingTop: 22,
            fontSize: 24,
            color: MUTED,
          }}
        >
          <span>Hotel distribution support</span>
          <span style={{ color: ASAGI }}>innmetric.com</span>
        </div>
      </div>
    ),
    size
  );
}
