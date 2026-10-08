"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDemo } from "@/components/demo/DemoProvider";
import { ACTS, BEATS } from "@/data/demo";
import { cn } from "@/lib/cn";

export function PresenterBar() {
  const { beat, beatId, goToAct, goToBeat, nextBeat, prevBeat } = useDemo();

  return (
    <div className="shrink-0 border-t border-navy/20 bg-navy text-cream">
      <div className="flex items-stretch">
        <div className="flex items-center gap-1 border-r border-white/10 px-3">
          {ACTS.map((act) => {
            const active = beat.act === act.id;
            return (
              <button
                key={act.id}
                type="button"
                onClick={() => goToAct(act.id)}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-left transition",
                  active ? "bg-gold text-navy" : "text-white/70 hover:bg-white/8 hover:text-white",
                )}
              >
                <div className="text-[9px] font-semibold uppercase tracking-[0.16em] opacity-70">
                  Act {act.id}
                </div>
                <div className="text-xs font-semibold leading-tight">{act.title}</div>
              </button>
            );
          })}
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-2">
          <p className="min-w-0 flex-1 text-[13px] leading-snug text-white/85">
            <span className="mr-2 font-semibold text-gold">{beat.label}.</span>
            {beat.say}
          </p>
          <div className="hidden xl:flex items-center gap-1">
            {BEATS.filter((b) => b.act === beat.act).map((b) => (
              <button
                key={b.id}
                type="button"
                title={b.label}
                onClick={() => goToBeat(b.id)}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[10px] font-medium transition",
                  b.id === beatId
                    ? "bg-white text-navy"
                    : "bg-white/10 text-white/70 hover:bg-white/16",
                )}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 border-l border-white/10 px-3">
          <button
            type="button"
            onClick={prevBeat}
            className="rounded-md p-2 text-white/70 hover:bg-white/10 hover:text-white"
            aria-label="Previous beat"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={nextBeat}
            className="rounded-md p-2 text-white/70 hover:bg-white/10 hover:text-white"
            aria-label="Next beat"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <span className="hidden sm:block pl-1 text-[10px] text-white/35">
            1–4 · ← →
          </span>
        </div>
      </div>
    </div>
  );
}
