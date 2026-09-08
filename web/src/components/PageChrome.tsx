import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="section hero">
      <div className="frame">
        <Reveal className="intro">
          <span className="label">{eyebrow}</span>
          <h1>{title}</h1>
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
          <h2>{title}</h2>
          {lead ? <p className="section-lead">{lead}</p> : null}
          <div className="hero-actions">
            <Link className="button lg" href="/contact/">
              Let&apos;s Solve It!
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
