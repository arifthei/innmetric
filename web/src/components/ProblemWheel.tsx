"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const CARDS = [
  {
    id: "01",
    title: "The room cannot be bought",
    body: "Your team sees rooms available for the dates a guest wants. The booking engine or OTA still shows nothing to book.",
  },
  {
    id: "02",
    title: "The public rate drifted",
    body: "The offer is different from what you intended. Occupancy, cancellation terms or stacked promotions may explain why.",
  },
  {
    id: "03",
    title: "The stop-sell never lifted",
    body: "The hotel is ready to sell those rooms again, but the channel still shows them as closed. The restriction needs another check.",
  },
  {
    id: "04",
    title: "The last fix came undone",
    body: "The room was bookable after the correction. Following a later update, the problem is back and the team needs to trace what changed.",
  },
] as const;

const RADIUS = 220;

function subscribeMedia(query: string, onChange: () => void) {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function useMedia(query: string) {
  return useSyncExternalStore(
    (onChange) => subscribeMedia(query, onChange),
    () => window.matchMedia(query).matches,
    () => false
  );
}

function useClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ProblemWheel() {
  const client = useClient();
  const reduced = useMedia("(prefers-reduced-motion: reduce)");
  const narrow = useMedia("(max-width: 860px)");
  const [rotation, setRotation] = useState(0);
  const dragging = useRef(false);
  const lastY = useRef(0);
  const spin = client && !reduced && !narrow;

  useEffect(() => {
    if (!spin) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;
      setRotation((value) => value + 8 * delta);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [spin]);

  if (!spin) {
    return (
      <ol className="problem-stack">
        {CARDS.map((card) => (
          <li className="problem-card" key={card.id}>
            <span className="ticket-id">Problem {card.id}</span>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </li>
        ))}
      </ol>
    );
  }

  const count = CARDS.length;
  const step = 360 / count;

  return (
    <div
      className="problem-wheel"
      aria-label="Illustrative distribution problems"
      onPointerDown={(event) => {
        dragging.current = true;
        lastY.current = event.clientY;
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (!dragging.current) return;
        const delta = event.clientY - lastY.current;
        lastY.current = event.clientY;
        setRotation((value) => value + delta * 0.5);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerLeave={() => {
        dragging.current = false;
      }}
    >
      <div className="problem-wheel-stage">
        {CARDS.map((card, index) => {
          const angle = ((index * step + rotation) * Math.PI) / 180;
          const y = Math.sin(angle) * RADIUS;
          const z = Math.cos(angle) * RADIUS;
          const depth = (z + RADIUS) / (2 * RADIUS);
          const scale = 0.55 + depth * 0.45;
          const opacity = 0.28 + depth * 0.72;
          return (
            <article
              className="problem-card problem-card-wheel"
              key={card.id}
              style={{
                transform: `translate(-50%, -50%) translateY(${y}px) translateZ(${z}px) scale(${scale})`,
                opacity,
                zIndex: Math.round(z + RADIUS),
                pointerEvents: depth > 0.6 ? "auto" : "none",
              }}
            >
              <span className="ticket-id">Problem {card.id}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          );
        })}
      </div>
      <p className="work-file-note">Illustrative cases. Not a live hotel record.</p>
    </div>
  );
}
