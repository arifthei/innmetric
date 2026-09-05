"use client";

import { FormEvent, useState } from "react";

const ROLES = [
  "Owner or managing director",
  "General manager",
  "Revenue, e-commerce or distribution",
  "Operations or cluster",
  "Other",
];

const PROPERTY_TYPES = [
  "Independent hotel",
  "Resort",
  "Aparthotel",
  "Small hotel group",
  "Other hotel-operated property",
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
          unchanged. Email hello@innmetric.com for a live review. Do not include
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
        This form does not send. Production innmetric.com is unchanged.
      </div>
      <p className="honeypot">
        <label>
          Do not fill this field <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="property-name">Property name</label>
          <input id="property-name" name="property-name" type="text" required maxLength={120} />
        </div>
        <div className="form-group">
          <label htmlFor="city-country">City and country</label>
          <input id="city-country" name="city-country" type="text" required maxLength={120} />
        </div>
        <div className="form-group">
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="contact-name" type="text" required maxLength={100} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" required maxLength={254} />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select id="role" name="role" required defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {ROLES.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="property-type">Property type</label>
          <select id="property-type" name="property-type" required defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="rooms">Number of rooms</label>
          <input id="rooms" name="rooms" type="text" required maxLength={40} />
        </div>
        <div className="form-group">
          <label htmlFor="booking-engine">Direct booking engine</label>
          <input
            id="booking-engine"
            name="booking-engine"
            type="text"
            required
            maxLength={120}
          />
        </div>
        <div className="form-group full">
          <label htmlFor="otas">Active OTAs</label>
          <input id="otas" name="otas" type="text" required maxLength={240} />
        </div>
        <div className="form-group full">
          <label htmlFor="systems">PMS and channel manager if known</label>
          <input id="systems" name="systems" type="text" maxLength={200} />
        </div>
        <div className="form-group full">
          <label htmlFor="summary">Problem summary</label>
          <textarea
            id="summary"
            name="summary"
            required
            maxLength={5000}
            placeholder="What the team sees, which channels are involved and who can approve access."
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
          Send review request
        </button>
        <span className="form-note">
          If you need a live request, email hello@innmetric.com and do not include
          passwords or guest data.
        </span>
      </div>
    </form>
  );
}
