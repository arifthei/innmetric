"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/services/", label: "Services" },
  { href: "/how-it-works/", label: "How it works" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
];

function withSlash(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const current = withSlash(pathname || "/");
  const [open, setOpen] = useState(false);

  return (
    <div className="site-top">
      <div className="preview-bar">
        <div className="frame">
          <span>
            <strong>Local preview</strong> innmetric.com is unchanged.
          </span>
          <span>npm run dev</span>
        </div>
      </div>
      <header>
        <div className="frame nav">
          <Link className="logo" href="/">
            <span className="logo-mark">IM</span>
            Inn<span>Metric</span>
          </Link>
          <nav
            id="site-nav"
            className={open ? "nav-links is-open" : "nav-links"}
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="button nav-cta" href="/contact/">
            <span className="cta-full">Request a distribution review</span>
            <span className="cta-short">Request a review</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </header>
    </div>
  );
}
