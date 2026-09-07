"use client";

import { FormEvent, useState } from "react";

const ROLES = [
  "Owner or managing director",
  "General manager",
  "Revenue, e-commerce or distribution",
  "Operations or cluster",
  "Other",
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
          This Next.js app does not post to Netlify. Production innmetric.com is
          unchanged. Email hello@innmetric.com with the hotel and the stay you
          expected to sell. Do not include passwords or guest data.
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
        This form does not send. Production innmetric.com is unchanged.
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
        <div className="form-group full">
          <label htmlFor="hotel">Hotel name or website</label>
          <input id="hotel" name="hotel" type="text" required maxLength={200} />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role (optional)</label>
          <select id="role" name="role" defaultValue="">
            <option value="">Skip for now</option>
            {ROLES.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </div>
        <div className="form-group full">
          <label htmlFor="summary">What to look at</label>
          <textarea
            id="summary"
            name="summary"
            required
            maxLength={5000}
            placeholder="Which stay. What you expected. What the guest saw."
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
          Send the stay
        </button>
        <span className="form-note">
          Prefer email? Write to hello@innmetric.com.
        </span>
      </div>
    </form>
  );
}
