"use client";

import type { ReactNode } from "react";
import { CalendarClock, MapPin, Sparkles, TrendingUp } from "lucide-react";
import { Avatar } from "@/components/brand/Crest";
import { Highlight } from "@/components/demo/Highlight";
import { useDemo } from "@/components/demo/DemoProvider";
import { ALEX } from "@/data/demo";
import { cn } from "@/lib/cn";
import type { FanTab } from "@/data/demo";
import { EventsTab } from "@/components/fan/EventsTab";
import { InsightsTab } from "@/components/fan/InsightsTab";
import { JourneyTab } from "@/components/fan/JourneyTab";
import { ServiceTab } from "@/components/fan/ServiceTab";
import { Timeline } from "@/components/fan/Timeline";

const TABS: { id: FanTab; label: string }[] = [
  { id: "timeline", label: "Unified timeline" },
  { id: "events", label: "Events & EOI" },
  { id: "insights", label: "Insights & segments" },
  { id: "journey", label: "Engagement journey" },
  { id: "service", label: "Service" },
];

export function FanWorkspace() {
  const { tab, setTab, goToBeat } = useDemo();

  return (
    <div className="mx-auto max-w-6xl px-8 py-6">
      <div className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-muted">
        <span>Person Account</span>
        <span className="text-line">/</span>
        <span className="text-navy">{ALEX.personAccountId}</span>
        <span className="ml-auto rounded-full border border-gold/30 bg-gold-soft/50 px-2 py-0.5 text-[10px] font-semibold text-navy">
          Powered by Data 360
        </span>
      </div>

      <Highlight id="summary" className="rounded-2xl">
        <section className="overflow-hidden rounded-2xl border border-line bg-paper shadow-card">
          <div className="flex gap-6 p-6">
            <Avatar name={ALEX.name} size="lg" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-display text-3xl text-navy">{ALEX.name}</h1>
                <span className="rounded-full bg-navy px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-tier">
                  {ALEX.tier}
                </span>
                <span className="rounded-full bg-cream px-2.5 py-0.5 text-[11px] font-medium text-navy">
                  {ALEX.membership} · {ALEX.tenure}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">
                {ALEX.role}, {ALEX.company} · {ALEX.location}
              </p>
              <p className="mt-1 flex items-center gap-4 text-xs text-muted">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-navy" />
                  {ALEX.seat} · {ALEX.seatDetail}
                </span>
                <span>Member since {ALEX.memberSince}</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 border-t border-line">
            <Metric
              icon={<TrendingUp className="h-4 w-4" />}
              label="Combined LTV"
              value={ALEX.ltvLabel}
              hint="Tickets + merch + venue interest"
            />
            <Metric
              icon={<Sparkles className="h-4 w-4" />}
              label="Engagement score"
              value={`${ALEX.engagement}`}
              hint="Calculated insight · High"
            />
            <Metric
              icon={<MapPin className="h-4 w-4" />}
              label="Primary seat"
              value="West Stand Lower"
              hint="Block 105 | Row 10 | Seat 88"
            />
            <Metric
              icon={<CalendarClock className="h-4 w-4" />}
              label="Supporter segment"
              value="Matchday Regular"
              hint="& Corporate VIP Prospect"
            />
          </div>
        </section>
      </Highlight>

      <div className="mt-5 flex gap-1 border-b border-line">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => {
              setTab(t.id);
              if (t.id === "timeline") goToBeat("tickets");
              if (t.id === "events") goToBeat("eoi");
              if (t.id === "insights") goToBeat("segment");
              if (t.id === "journey") goToBeat("journey");
              if (t.id === "service") goToBeat("whatsapp");
            }}
            className={cn(
              "-mb-px border-b-2 px-4 py-2.5 text-sm font-medium transition",
              tab === t.id
                ? "border-navy text-navy"
                : "border-transparent text-muted hover:text-ink",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="py-6">
        {tab === "timeline" && <Timeline />}
        {tab === "events" && <EventsTab />}
        {tab === "insights" && <InsightsTab />}
        {tab === "journey" && <JourneyTab />}
        {tab === "service" && <ServiceTab />}
      </div>
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
  hint,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="px-5 py-4 first:pl-6 last:pr-6">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-muted">
        <span className="text-navy">{icon}</span>
        {label}
      </div>
      <div className="mt-1 font-display text-2xl text-navy">{value}</div>
      <div className="text-[11px] text-muted">{hint}</div>
    </div>
  );
}
