"use client";

import { ArrowRight, Database, MapPin, Ticket } from "lucide-react";
import { Avatar } from "@/components/brand/Crest";
import { Highlight } from "@/components/demo/Highlight";
import { useDemo } from "@/components/demo/DemoProvider";
import { ALEX, HOME_STATS, RECENT_FANS } from "@/data/demo";

export function HomeWorkspace() {
  const { goToBeat } = useDemo();

  return (
    <div className="mx-auto max-w-6xl px-8 py-8">
      <div className="overflow-hidden rounded-2xl bg-navy text-cream shadow-card">
        <div className="relative px-8 py-8">
          <div className="absolute inset-0 opacity-40 stadium-wash" />
          <div className="relative">
            <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
              Service Cloud · Data 360 · Marketing Cloud · Agentforce
            </p>
            <h1 className="mt-2 font-hero text-4xl text-white">
              Every fan is a Spur.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
              Spurs360 unifies Ticketmaster, the Spurs Shop, stadium hire, and
              service into one Person Account — so Tottenham Spur Stadium
              works 365 days a year, not just on matchday.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 divide-x divide-white/10 border-t border-white/10">
          {HOME_STATS.map((s) => (
            <div key={s.label} className="px-6 py-4">
              <div className="font-display text-2xl text-gold">{s.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/45">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-6">
        <Highlight id="search" className="col-span-2 rounded-2xl">
          <section className="rounded-2xl border border-line bg-paper p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl text-navy">Recently viewed</h2>
              <span className="text-[11px] uppercase tracking-wider text-muted">
                Person Accounts
              </span>
            </div>
            <div className="mt-4 space-y-2">
              {RECENT_FANS.map((fan) => {
                const locked = "locked" in fan && fan.locked;
                return (
                  <button
                    key={fan.id}
                    type="button"
                    disabled={locked}
                    onClick={() => goToBeat("summary")}
                    className="flex w-full items-center gap-4 rounded-xl border border-line bg-white px-4 py-3 text-left transition hover:border-navy/30 hover:shadow-soft disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Avatar name={fan.name} size="md" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-ink">{fan.name}</span>
                        <span
                          className={
                            fan.tier === "One Spur Gold"
                              ? "rounded-full bg-tier-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy"
                              : "rounded-full bg-gold-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy"
                          }
                        >
                          {fan.tier}
                        </span>
                      </div>
                      <div className="mt-0.5 flex items-center gap-3 text-xs text-muted">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {"seat" in fan ? fan.seat : ALEX.seat}
                        </span>
                        <span>{fan.company}</span>
                      </div>
                    </div>
                    {!locked && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-navy">
                        Open profile <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>
        </Highlight>

        <section className="rounded-2xl border border-line bg-paper p-6 shadow-soft">
          <h2 className="font-display text-xl text-navy">Live streams</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              ["Ticketmaster", "Season + NFL + concerts"],
              ["Spurs Shop POS", "In-stadium retail"],
              ["Commerce Cloud", "Kit & outerwear"],
              ["Ask Spurs", "Online digital assistant"],
              ["Stadium Wi-Fi", "Identity resolution"],
            ].map(([name, sub]) => (
              <li key={name} className="flex items-start gap-3">
                <Database className="mt-0.5 h-4 w-4 text-navy" />
                <div>
                  <div className="font-medium text-ink">{name}</div>
                  <div className="text-xs text-muted">{sub}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2 rounded-lg bg-cream px-3 py-2 text-xs text-muted">
            <Ticket className="h-3.5 w-3.5 text-crimson" />
            Next on: 4 Oct · Indianapolis Colts v Washington Commanders
          </div>
        </section>
      </div>
    </div>
  );
}
