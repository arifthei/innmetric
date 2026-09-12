"use client";

import { FormEvent, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { postEnquiry, SUBMIT_TIMEOUT_MS } from "@/lib/enquiry";
import { FORMS_ENABLED } from "@/lib/release";
import { t } from "@/lib/typeset";

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

function useClientReady() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ReviewForm() {
  const ready = useClientReady();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const inFlight = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (sent) headingRef.current?.focus();
  }, [sent]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!FORMS_ENABLED) {
      setSent(true);
      return;
    }
    if (inFlight.current || sending) return;

    const data = new FormData(event.currentTarget);
    inFlight.current = true;
    setSending(true);
    setError(false);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

    try {
      await postEnquiry(data, controller.signal);
      setSent(true);
    } catch {
      setError(true);
    } finally {
      clearTimeout(timer);
      inFlight.current = false;
      setSending(false);
    }
  }

  if (!FORMS_ENABLED && sent) {
    return (
      <div className="form-receipt">
        <span className="label">Local preview</span>
        <h2 ref={headingRef} tabIndex={-1}>
          The request was not sent.
        </h2>
        <p className="section-lead">
          {t("This preview form does not send. Please email")}{" "}
          <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>{" "}
          {t(
            "with your hotel, the problem and what you want to change. Do not include passwords or guest data."
          )}
        </p>
        <button className="button" type="button" onClick={() => setSent(false)}>
          Return to the form
        </button>
      </div>
    );
  }

  if (FORMS_ENABLED && sent) {
    return (
      <div className="form-receipt" aria-live="polite">
        <h2 ref={headingRef} tabIndex={-1}>
          Thanks. Your enquiry has been submitted.
        </h2>
        <p className="section-lead">
          {t(
            "A founder will review the details and reply from an @innmetric.com address."
          )}
        </p>
      </div>
    );
  }

  return (
    <form
      name="distribution-review"
      method="post"
      action={FORMS_ENABLED ? "/__forms.html" : "/contact/"}
      onSubmit={onSubmit}
    >
      <noscript>
        <p className="local-notice">
          JavaScript is off. Email{" "}
          <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>.
        </p>
      </noscript>
      {FORMS_ENABLED ? null : (
        <div className="local-notice">
          <strong>Local preview</strong>
          This form does not send. Please email{" "}
          <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>.
        </div>
      )}
      <input type="hidden" name="form-name" value="distribution-review" />
      <p className="honeypot">
        <label>
          Do not fill this field{" "}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="contact-name" type="text" autoComplete="name" required maxLength={100} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} />
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
          <input id="hotel" name="hotel" type="text" autoComplete="organization" required maxLength={200} />
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
          <label htmlFor="outcome">What is happening and what needs to change?</label>
          <textarea
            id="outcome"
            name="outcome"
            required
            maxLength={5000}
            aria-describedby="outcome-hint"
            placeholder="For example: reopened dates still show as closed on one channel. They should be available to book."
          />
          <p className="form-hint" id="outcome-hint">
            Include the affected channel and dates if useful. No passwords,
            payment details or guest data.
          </p>
        </div>
        <div className="form-group full">
          <label className="consent" htmlFor="consent">
            <input id="consent" name="consent" type="checkbox" value="yes" required />
            <span>I agree that InnMetric may contact me about this request.</span>
          </label>
          <p className="form-hint">
            How we handle your enquiry: <a href="/privacy/">Privacy Notice</a>.
          </p>
        </div>
      </div>
      {error ? (
        <p className="form-error" role="alert">
          We couldn&apos;t confirm your enquiry was sent. Your details are still
          here. Try again or email{" "}
          <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>.
        </p>
      ) : null}
      <div className="form-actions">
        <button className="button lg" type="submit" disabled={!ready || sending}>
          {sending ? "Sending..." : "Send enquiry"}
        </button>
        <span className="form-note">
          {FORMS_ENABLED
            ? "A founder will review your enquiry and reply about the next step."
            : "This preview does not send. Email us for a reply from a founder."}
        </span>
      </div>
      <p className="form-alternative">
        Prefer email? Write to{" "}
        <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>.
      </p>
    </form>
  );
}
