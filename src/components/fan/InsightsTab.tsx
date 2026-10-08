"use client";

import { Highlight } from "@/components/demo/Highlight";
import { useDemo } from "@/components/demo/DemoProvider";
import { ALEX, LTV_SPLIT } from "@/data/demo";

export function InsightsTab() {
  const { goToBeat } = useDemo();
  const total = LTV_SPLIT.reduce((s, x) => s + x.value, 0);
  const circumference = 2 * Math.PI * 42;
  const progress = (ALEX.engagement / 100) * circumference;

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
          Calculated insight
        </p>
        <h2 className="mt-1 font-display text-xl text-navy">Engagement score</h2>
        <div className="mt-4 flex items-center gap-5">
          <svg viewBox="0 0 100 100" className="h-28 w-28 -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#e4e8ed" strokeWidth="8" />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#132257"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${progress} ${circumference}`}
            />
          </svg>
          <div>
            <div className="font-display text-4xl text-navy">{ALEX.engagement}</div>
            <div className="text-sm text-muted">High · top 8% of Gold members</div>
          </div>
        </div>
        <ul className="mt-4 space-y-1 text-xs text-muted">
          <li>App check-ins · 24 this season</li>
          <li>Email engagement · 68%</li>
          <li>Wi-Fi sessions · 11</li>
          <li>Loyalty redemptions · 6</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
          Combined LTV
        </p>
        <h2 className="mt-1 font-display text-xl text-navy">{ALEX.ltvLabel}</h2>
        <p className="mt-1 text-xs text-muted">Tickets + merch + venue hire interest</p>
        <div className="mt-5 flex h-3 overflow-hidden rounded-full">
          {LTV_SPLIT.map((s) => (
            <div
              key={s.label}
              className={s.color}
              style={{ width: `${(s.value / total) * 100}%` }}
              title={`${s.label} £${s.value.toLocaleString()}`}
            />
          ))}
        </div>
        <ul className="mt-4 space-y-2 text-sm">
          {LTV_SPLIT.map((s) => (
            <li key={s.label} className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-muted">
                <span className={`h-2 w-2 rounded-full ${s.color}`} />
                {s.label}
              </span>
              <span className="font-medium text-ink">
                £{s.value.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Highlight id="segment" className="rounded-2xl">
        <div className="flex h-full flex-col rounded-2xl border border-gold/40 bg-navy p-6 text-cream shadow-card">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
            Dynamic audience
          </p>
          <h2 className="mt-2 font-display text-2xl text-white">{ALEX.dynamicSegment}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Salesforce automatically scored Alex’s engagement and membership
            depth, then added this profile to a live Data 360 segment used by
            Marketing Cloud and B2B sales.
          </p>
          <div className="mt-4 rounded-lg bg-white/8 px-3 py-2 text-xs text-white/80">
            Also: {ALEX.segment}
          </div>
          <button
            type="button"
            onClick={() => goToBeat("journey")}
            className="mt-auto rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy hover:bg-gold-soft"
          >
            Open the triggered journey
          </button>
        </div>
      </Highlight>
    </div>
  );
}
