import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { CONTACT_CTA } from "@/lib/copy";
import { t, TAIL } from "@/lib/typeset";

export function PageHero({
  eyebrow,
  title,
  children,
  contentClassName = "",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  contentClassName?: string;
}) {
  return (
    <section className="section hero">
      <div className="frame">
        <Reveal className={`intro ${contentClassName}`.trim()}>
          <span className="label">{eyebrow}</span>
          <h1>{t(title, TAIL.heading)}</h1>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand({
  eyebrow,
  title,
  lead,
  email = false,
  next,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  email?: boolean;
  next?: { href: string; label: string };
}) {
  return (
    <section className="section dark">
      <div className="frame">
        <Reveal className="intro intro-center">
          {eyebrow ? <span className="label">{eyebrow}</span> : null}
          <h2>{t(title)}</h2>
          {lead ? <p className="section-lead">{t(lead)}</p> : null}
          <div className="hero-actions">
            <Link className="button lg" href="/contact/">
              {CONTACT_CTA}
            </Link>
            {next ? (
              <Link className="button ghost lg" href={next.href}>
                {next.label}
              </Link>
            ) : null}
            {email ? (
              <a className="button ghost lg" href="mailto:hello@innmetric.com">
                Email hello@innmetric.com
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
