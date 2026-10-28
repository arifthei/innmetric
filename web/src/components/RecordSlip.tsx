import { t } from "@/lib/typeset";

export function RecordSlip() {
  return (
    <aside className="work-file" aria-label="Illustrative booking investigation">
      <div className="work-file-head">
        <span>Worked example</span>
        <span className="work-file-status">Not bookable</span>
      </div>
      <p className="work-file-note">Illustrative scenario. Not a client record.</p>
      <dl>
        <div>
          <dt>Hotel intent</dt>
          <dd>{t("Sell a standard double for two adults, arriving 12 November and leaving 14 November.")}</dd>
        </div>
        <div>
          <dt>Guest check</dt>
          <dd>{t("The PMS shows availability. The direct booking engine returns no rooms for that stay.")}</dd>
        </div>
        <div>
          <dt>Comparison</dt>
          <dd>{t("The room, dates and occupancy match the hotel's intended offer. The intended rate and terms are recorded for the repeat check.")}</dd>
        </div>
        <div>
          <dt>Finding</dt>
          <dd>{t("The mismatch is recorded. Its cause is unconfirmed pending agreed account access.")}</dd>
        </div>
        <div>
          <dt>Next checks</dt>
          <dd>{t("Trace room mapping, inventory and restrictions across the PMS, channel manager and booking engine.")}</dd>
        </div>
        <div>
          <dt>Any repair</dt>
          <dd>{t("If a fault is confirmed, propose a correction and reversal steps within an agreed repair. Make the change only with named hotel approval.")}</dd>
        </div>
        <div>
          <dt>Result</dt>
          <dd>{t("Still open. After any approved correction, repeat the same booking check and record the result or the vendor action needed.")}</dd>
        </div>
      </dl>
    </aside>
  );
}
