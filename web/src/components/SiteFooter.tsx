import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";

export function SiteFooter() {
  return (
    <footer>
      <div className="frame footer-grid">
        <Link className="logo" href="/" aria-label="innmetric">
          <SiteLogo compact />
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
