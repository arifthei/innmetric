export function SiteLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "wordmark wordmark-compact" : "wordmark"}>
      <span className="wordmark-text">
        innme
        <span className="wordmark-skew">t</span>
        ric
      </span>
      <span className="wordmark-dot" aria-hidden="true" />
    </span>
  );
}
