import type { workSteps } from "@/config/content";

/**
 * Process steps joined by a line that draws as you scroll (MotionController sets --p and
 * toggles .is-active). Without JS or with reduced motion the line is fully drawn.
 */
export function ProcessTimeline({ steps }: { steps: typeof workSteps }) {
  return (
    <div className="timeline" data-timeline>
      <span className="timeline-line" aria-hidden="true">
        <span className="timeline-fill" />
      </span>
      <ol className="grid gap-6 lg:grid-cols-4 lg:gap-5">
        {steps.map((step, i) => (
          <li key={step.title} className="step relative pl-14 lg:pl-0 lg:pt-14" data-step>
            <span className="step-dot" aria-hidden="true">
              {i + 1}
            </span>
            <div className="card p-6" data-spot>
              <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-7 text-muted">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
