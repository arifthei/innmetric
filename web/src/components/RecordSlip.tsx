export function RecordSlip() {
  return (
    <aside className="work-file" aria-label="Illustrative control record">
      <div className="work-file-head">
        <span>Control record</span>
        <span className="work-file-status">Not bookable</span>
      </div>
      <dl>
        <div>
          <dt>Property</dt>
          <dd>Independent hotel</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>Open in PMS / not bookable</dd>
        </div>
        <div>
          <dt>Condition</dt>
          <dd>Recorded stay dates and occupancy</dd>
        </div>
      </dl>
      <p className="work-file-note">Illustrative example. Not a client record.</p>
    </aside>
  );
}
