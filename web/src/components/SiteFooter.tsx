import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="frame footer-grid">
        <Link className="logo" href="/" style={{ fontSize: 15 }}>
          <span className="logo-mark">IM</span>
          Inn<span>Metric</span>
        </Link>
        <nav className="footer-links" aria-label="Footer">
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
        <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>
      </div>
    </footer>
  );
}
