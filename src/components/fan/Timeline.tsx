"use client";

import { useMemo, useState } from "react";
import {
  ShoppingBag,
  Smartphone,
  Ticket,
  Building2,
  Headphones,
  Sparkles,
} from "lucide-react";
import { Highlight } from "@/components/demo/Highlight";
import {
  CHANNEL_META,
  TIMELINE,
  type TimelineChannel,
  type TimelineItem,
} from "@/data/demo";
import { cn } from "@/lib/cn";

const FILTERS: Array<"all" | TimelineChannel> = [
  "all",
  "ticketing",
  "merchandise",
  "venue",
  "engagement",
  "service",
];

const ICONS: Record<TimelineChannel, typeof Ticket> = {
  ticketing: Ticket,
  merchandise: ShoppingBag,
  venue: Building2,
  engagement: Smartphone,
  service: Headphones,
};

export function Timeline() {
  const [filter, setFilter] = useState<"all" | TimelineChannel>("all");
  const items = useMemo(
    () =>
      filter === "all" ? TIMELINE : TIMELINE.filter((i) => i.channel === filter),
    [filter],
  );

  return (
    <div>
      <div className="mb-5 grid grid-cols-2 gap-4">
        <Highlight id="timeline-ticketing" className="rounded-2xl">
          <div className="rounded-2xl border border-line bg-navy p-5 text-cream">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
              Ticketmaster · synced
            </p>
            <h3 className="mt-1 font-display text-xl text-white">Ticketing feed</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Indianapolis Colts v Washington Commanders · NFL London Game · 4 Oct 2026</li>
              <li>2 × BIGBANG world tour · 15 Aug 2026</li>
              <li>2 × JAŸ-Z · 12 Jul 2026</li>
              <li>One Spur Gold season pass · West Stand Lower · Block 105 | Row 10 | Seat 88</li>
            </ul>
          </div>
        </Highlight>
        <Highlight id="timeline-merch" className="rounded-2xl">
          <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Spurs Shop POS · Commerce Cloud
            </p>
            <h3 className="mt-1 font-display text-xl text-navy">Merchandise</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>Customized 2026 Home Shirt · CHEN 8 · £89 · in-person</li>
              <li>Heritage puffer · online · shipped to Northbridge</li>
              <li>Rain shell · POS 12 minutes after full time</li>
            </ul>
          </div>
        </Highlight>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium capitalize transition",
              filter === f
                ? "bg-navy text-gold"
                : "bg-white text-muted ring-1 ring-line hover:text-ink",
            )}
          >
            {f === "all" ? "All activity" : CHANNEL_META[f].label}
          </button>
        ))}
      </div>

      <div className="relative space-y-3">
        {items.map((item) => (
          <TimelineRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function TimelineRow({ item }: { item: TimelineItem }) {
  const Icon = ICONS[item.channel];
  const isAgent = item.source.includes("Ask Spurs");

  return (
    <div className="flex gap-4 rounded-xl border border-line bg-white p-4 shadow-soft">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cream text-navy">
        {isAgent ? <Sparkles className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
            {item.source}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted">
            {CHANNEL_META[item.channel].blurb}
          </span>
          {item.amount && (
            <span className="ml-auto text-sm font-semibold text-navy">{item.amount}</span>
          )}
        </div>
        <div className="mt-0.5 font-medium text-ink">{item.title}</div>
        <p className="mt-0.5 text-sm text-muted">{item.detail}</p>
      </div>
      <div className="shrink-0 text-right text-xs text-muted">
        <div>{item.date}</div>
        {item.time && <div className="text-[11px]">{item.time}</div>}
      </div>
    </div>
  );
}
