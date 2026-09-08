"use client";

import { FormEvent, useState } from "react";

const ROLES = [
  "Owner or managing director",
  "General manager",
  "Revenue or distribution lead",
  "Commercial or e-commerce lead",
  "Operations or cluster lead",
  "Other",
];

const PROPERTY_COUNTS = ["1", "2 to 5", "6 to 20", "More than 20"];

const SYSTEMS = [
  { id: "pms", label: "PMS" },
  { id: "channel-manager", label: "Channel manager" },
  { id: "booking-engine", label: "Booking engine" },
  { id: "ota", label: "OTA extranets" },
  { id: "rms", label: "RMS" },
];

const PROBLEMS = [
  "Available rooms cannot be booked online",
  "A public rate differs from what we expected",
  "Reopened dates still show closed on a channel",
  "A previous booking problem has returned",
  "Something else",
];

export function ReviewForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-receipt">
        <span className="label">Local preview</span>
        <h2>The request was not sent.</h2>
        <p className="section-lead">
          This preview form does not send. Please email{" "}
          <a href="mailto:hello@innmetric.com">hello@innmetric.com</a> with your
          hotel, the problem and what you want to change. Do not include
          passwords or guest data.
        </p>
        <button className="button" type="button" onClick={() => setSent(false)}>
          Return to the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="local-notice">
        <strong>Local preview</strong>
        This form does not send. Please email{" "}
        <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>.
      </div>
      <p className="honeypot">
        <label>
          Do not fill this field <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="contact-name" type="text" required maxLength={100} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" required maxLength={254} />
        </div>
        <div className="form-group">
          <label htmlFor="role">Your role</label>
          <select id="role" name="role" defaultValue="" required>
            <option value="" disabled>
              Choose one
            </option>
            {ROLES.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="properties">Number of properties</label>
          <select id="properties" name="properties" defaultValue="" required>
            <option value="" disabled>
              Choose one
            </option>
            {PROPERTY_COUNTS.map((count) => (
              <option key={count}>{count}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="hotel">Hotel or group name</label>
          <input id="hotel" name="hotel" type="text" required maxLength={200} />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website (optional)</label>
          <input
            id="website"
            name="website"
            type="url"
            inputMode="url"
            placeholder="https://"
            maxLength={200}
          />
        </div>
        <fieldset className="form-group full check-group">
          <legend>Systems in use (optional)</legend>
          <div className="check-grid">
            {SYSTEMS.map((system) => (
              <label className="check" key={system.id} htmlFor={`system-${system.id}`}>
                <input
                  id={`system-${system.id}`}
                  name="systems"
                  type="checkbox"
                  value={system.label}
                />
                <span>{system.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="form-group full">
          <label htmlFor="problem">What needs attention?</label>
          <select id="problem" name="problem" defaultValue="" required>
            <option value="" disabled>
              Choose the closest match
            </option>
            {PROBLEMS.map((problem) => (
              <option key={problem}>{problem}</option>
            ))}
          </select>
        </div>
        <div className="form-group full">
          <label htmlFor="outcome">What is happening and what would you like to change?</label>
          <textarea
            id="outcome"
            name="outcome"
            required
            maxLength={5000}
            placeholder="Tell us where the problem shows and the result your team needs. For example: reopened dates should be available on our agreed channels. No passwords or guest details."
          />
        </div>
        <div className="form-group full">
          <label className="consent" htmlFor="consent">
            <input id="consent" name="consent" type="checkbox" value="yes" required />
            <span>I agree that InnMetric may contact me about this request.</span>
          </label>
        </div>
      </div>
      <div className="form-actions">
        <button className="button lg" type="submit">
          Send enquiry
        </button>
        <span className="form-note">
          Prefer email? Write to{" "}
          <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>.
        </span>
      </div>
    </form>
  );
}
