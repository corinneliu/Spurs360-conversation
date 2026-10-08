"use client";

import { Sparkles, UserRound } from "lucide-react";
import { useDemo } from "@/components/demo/DemoProvider";

export function ServiceTab() {
  const { goToBeat, transferDone, contextDone } = useDemo();

  return (
    <div className="grid grid-cols-3 gap-6">
      <button
        type="button"
        onClick={() => goToBeat("whatsapp")}
        className="rounded-2xl border border-line bg-white p-6 text-left shadow-soft transition hover:border-navy/30"
      >
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
          <Sparkles className="h-3.5 w-3.5" />
          Scenario A · Autonomous
        </div>
        <h2 className="mt-2 font-display text-2xl text-navy">
          Ticket transfer with Ask Spurs
        </h2>
        <p className="mt-2 text-sm text-muted">
          Alex cannot attend Indianapolis Colts v Washington Commanders on 4 October. Ask Spurs verifies
          One Spur Gold status, calls Ticketmaster, and reassigns the West Stand Lower seat, Block 105 | Row 10 | Seat 88,
          to Priya Nair — zero human agent time.
        </p>
        <div className="mt-4 text-sm font-medium text-navy">
          {transferDone ? "Transfer complete · recorded on timeline" : "Open Ask Spurs →"}
        </div>
      </button>

      <button
        type="button"
        onClick={() => goToBeat("context")}
        className="rounded-2xl border border-line bg-white p-6 text-left shadow-soft transition hover:border-navy/30"
      >
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
          <Sparkles className="h-3.5 w-3.5" />
          Scenario C · Agentic context
        </div>
        <h2 className="mt-2 font-display text-2xl text-navy">
          Next-day food & drinks
        </h2>
        <p className="mt-2 text-sm text-muted">
          Alex returns the following morning. He forgot the hospitality package.
          Ask Spurs already knows the colleague is Priya Nair — context
          survives the conversation.
        </p>
        <div className="mt-4 text-sm font-medium text-navy">
          {contextDone ? "Package moved · Priya recalled" : "Open returning chat →"}
        </div>
      </button>

      <button
        type="button"
        onClick={() => goToBeat("case")}
        className="rounded-2xl border border-line bg-white p-6 text-left shadow-soft transition hover:border-navy/30"
      >
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
          <UserRound className="h-3.5 w-3.5" />
          Scenario B · High-touch
        </div>
        <h2 className="mt-2 font-display text-2xl text-navy">
          Damaged corporate merch
        </h2>
        <p className="mt-2 text-sm text-muted">
          A human agent picks up Case 0003847 with an Agentforce summary and a
          high-priority alert: One Spur Gold, £15,000 stadium enquiry in flight.
        </p>
        <div className="mt-4 text-sm font-medium text-navy">Open Service Console →</div>
      </button>
    </div>
  );
}
