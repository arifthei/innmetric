import { BOOKING_PROBLEMS, OVERVIEW } from "@/lib/overview";
import { t } from "@/lib/typeset";

export function BookingProblems() {
  return (
    <div className="booking-overview">
      <div className="problem-headings" aria-hidden="true">
        <span>The problem</span><span>What we fix</span><span>The aim</span>
      </div>
      <ol className="problem-paths" aria-label="Three booking problems and our work">
        {BOOKING_PROBLEMS.map((item, index) => (
          <li className="problem-path" key={item.name}>
            <div>
              <span className="label">0{index + 1} / {item.name}</span>
              <h2>{t(item.problem)}</h2>
            </div>
            <dl>
              <div className="path-fix">
                <dt>What we fix</dt>
                <dd>{t(item.fix)}</dd>
              </div>
              <div className="path-aim">
                <dt>The aim</dt>
                <dd>{t(item.aim)}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
      <p className="overview-method">{t(OVERVIEW.method)}</p>
    </div>
  );
}

export function TourismFlow() {
  return (
    <ol className="tourism-flow" aria-label="Proposed flow of collected savings">
      {OVERVIEW.steps.map((step) => (
        <li key={step.title}>
          <strong>{t(step.title)}</strong>
          <span>{t(step.detail)}</span>
        </li>
      ))}
    </ol>
  );
}
