"use client";

import { useState } from "react";

const VERBS = [
  { id: "observed", label: "Observed", fields: ["property", "status", "condition"] },
  { id: "approved", label: "Approved", fields: ["approver"] },
  { id: "changed", label: "Changed", fields: ["channel"] },
  { id: "verified", label: "Verified", fields: ["live"] },
  { id: "rechecked", label: "Rechecked", fields: ["recheck"] },
] as const;

const ROWS = [
  { id: "property", label: "Property", value: "Independent GCC hotel" },
  { id: "channel", label: "Channel", value: "Direct and OTA" },
  { id: "status", label: "Status", value: "Open in PMS / not bookable" },
  {
    id: "condition",
    label: "Condition",
    value: "Recorded stay dates and occupancy",
  },
  {
    id: "approver",
    label: "Approver",
    value: "Named GM, owner or commercial lead",
  },
  { id: "live", label: "Live path", value: "Guest-facing OTA and direct engine" },
  { id: "recheck", label: "Recheck", value: "Agreed schedule after close" },
] as const;

type VerbId = (typeof VERBS)[number]["id"];

export function WorkFile() {
  const [verb, setVerb] = useState<VerbId>("observed");
  const active = VERBS.find((item) => item.id === verb) ?? VERBS[0];
  const hot = new Set<string>(active.fields);

  return (
    <aside className="work-file" aria-label="Illustrative control record">
      <div className="work-file-head">
        <span>Control record</span>
        <span className="work-file-status">Not bookable</span>
      </div>
      <div className="work-file-verbs" aria-label="Control verbs">
        {VERBS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={verb === item.id}
            onClick={() => setVerb(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <dl>
        {ROWS.map((row) => (
          <div key={row.id} className={hot.has(row.id) ? "is-hot" : undefined}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="work-file-note">The record the engagement produces.</p>
    </aside>
  );
}
