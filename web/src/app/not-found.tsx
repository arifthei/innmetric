import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Page not found | InnMetric",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This path is not on the site.">
      <p className="lede">
        The page you asked for is not published. Return home or show us the
        stay.
      </p>
      <div className="hero-actions">
        <Link className="button lg" href="/">
          Return home
        </Link>
        <Link className="button ghost lg" href="/contact/">
          Let&apos;s Solve It!
        </Link>
      </div>
    </PageHero>
  );
}
