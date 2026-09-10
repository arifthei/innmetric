"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type MouseEvent } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import { FORMS_ENABLED } from "@/lib/release";

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

  // A link to the page already on screen returns the reader to its top.
  // Next treats a same-URL navigation as a no-op, which reads as a dead link.
  // `scroll-behavior` on <html> makes this smooth and honours reduced motion.
  function onNavClick(href: string) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      setOpen(false);
      if (current === href) {
        event.preventDefault();
        window.scrollTo({ top: 0 });
      }
    };
  }

  return (
    <div className="site-top">
      {FORMS_ENABLED ? null : (
        <div className="preview-bar">
          <div className="frame">
            <span>
              <strong>Local preview</strong> innmetric.com is unchanged.
            </span>
            <span>npm run dev</span>
          </div>
        </div>
      )}
      <header>
        <div className="frame nav">
          <Link className="logo" href="/" aria-label="innmetric" onClick={onNavClick("/")}>
            <SiteLogo />
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
                onClick={onNavClick(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="button nav-cta" href="/contact/" onClick={onNavClick("/contact/")}>
            <span className="cta-full">Let&apos;s Solve It!</span>
            <span className="cta-short">Let&apos;s Solve It!</span>
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
