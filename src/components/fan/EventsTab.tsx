"use client";

import type { ReactNode } from "react";
import { Building2, Calendar, Users } from "lucide-react";
import { Highlight } from "@/components/demo/Highlight";
import { useDemo } from "@/components/demo/DemoProvider";
import { ALEX, EOI } from "@/data/demo";

export function EventsTab() {
  const { goToBeat } = useDemo();

  return (
    <div className="grid grid-cols-3 gap-6">
      <Highlight id="eoi" className="col-span-2 rounded-2xl">
        <article className="rounded-2xl border border-line bg-white p-6 shadow-card">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Lead · Web-to-lead · {EOI.id}
              </p>
              <h2 className="mt-1 font-display text-2xl text-navy">{EOI.name}</h2>
              <p className="mt-2 text-sm text-muted">{EOI.notes}</p>
            </div>
            <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
              {EOI.status}
            </span>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <Fact icon={<Users className="h-4 w-4" />} label="Guests" value={`${EOI.guests} people`} />
            <Fact icon={<Calendar className="h-4 w-4" />} label="Requested window" value={EOI.dateWindow} />
            <Fact icon={<Building2 className="h-4 w-4" />} label="Estimated hire value" value={EOI.value} />
            <Fact label="Company" value={EOI.company} />
            <Fact label="Source" value={EOI.origin} />
            <Fact label="Owner" value={EOI.owner} />
          </dl>

          <button
            type="button"
            onClick={() => goToBeat("segment")}
            className="mt-6 rounded-lg bg-navy px-4 py-2 text-sm font-medium text-gold hover:bg-navy-mid"
          >
            See why Data 360 tagged this supporter
          </button>
        </article>
      </Highlight>

      <aside className="space-y-4">
        <div className="rounded-2xl border border-line bg-paper p-5 shadow-soft">
          <h3 className="font-display text-lg text-navy">Why this matters</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Alex is not only a Gold season member. The same Person Account now
            carries a B2B stadium-hire motion — so sales, service, and marketing
            stop treating him as “just a fan.”
          </p>
        </div>
        <div className="rounded-2xl bg-navy p-5 text-cream">
          <p className="text-[10px] uppercase tracking-[0.18em] text-gold">Related profile</p>
          <p className="mt-2 font-display text-xl">{ALEX.name}</p>
          <p className="mt-1 text-sm text-white/65">
            {ALEX.tier} · {ALEX.inquiryValueLabel} open enquiry
          </p>
        </div>
      </aside>
    </div>
  );
}

function Fact({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-lg bg-cream px-3 py-2">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted">
        {icon && <span className="text-navy">{icon}</span>}
        {label}
      </div>
      <div className="mt-0.5 font-medium text-ink">{value}</div>
    </div>
  );
}
