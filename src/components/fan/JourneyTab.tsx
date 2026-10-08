"use client";

import { Highlight } from "@/components/demo/Highlight";
import { useDemo } from "@/components/demo/DemoProvider";
import { JOURNEY_STEPS } from "@/data/demo";

export function JourneyTab() {
  const { goToBeat } = useDemo();

  return (
    <Highlight id="journey" className="rounded-2xl">
      <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Marketing Cloud Engagement
            </p>
            <h2 className="mt-1 font-display text-2xl text-navy">
              Corporate Suite Invitation
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Automated journey for supporters in the Corporate Event Prospects
              segment. Personalized by B2B Sales — a guided tour of Tottenham
              Spur Stadium ahead of Indianapolis Colts v Washington Commanders on 4 October.
            </p>
          </div>
          <span className="rounded-full bg-gold-soft px-3 py-1 text-[11px] font-semibold text-navy">
            In journey · email opened
          </span>
        </div>

        <ol className="mt-8 grid grid-cols-5 gap-3">
          {JOURNEY_STEPS.map((step, i) => (
            <li
              key={step.id}
              className="relative rounded-xl border border-line bg-cream p-4"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                {String(i + 1).padStart(2, "0")} · {step.kicker}
              </div>
              <h3 className="mt-2 font-display text-lg leading-snug text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex items-center justify-between rounded-xl bg-navy px-5 py-4 text-cream">
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-gold">
              Next best commercial move
            </div>
            <div className="font-display text-xl">
              Hold the stadium tour for 4 Oct · Indianapolis Colts v Washington Commanders
            </div>
          </div>
          <button
            type="button"
            onClick={() => goToBeat("whatsapp")}
            className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy"
          >
            Meanwhile, Ask Spurs →
          </button>
        </div>
      </div>
    </Highlight>
  );
}
