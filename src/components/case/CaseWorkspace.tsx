"use client";

import { AlertTriangle, Check, Sparkles, Warehouse } from "lucide-react";
import { Highlight } from "@/components/demo/Highlight";
import { useDemo } from "@/components/demo/DemoProvider";
import { ALEX, CASE_RECORD } from "@/data/demo";
import { cn } from "@/lib/cn";

export function CaseWorkspace() {
  const { nbaDone, markNbaDone, goToBeat } = useDemo();

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-[1fr_320px] gap-6 px-8 py-6">
      <div className="space-y-4">
        <div className="rounded-2xl border border-line bg-paper p-5 shadow-soft">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                Case {CASE_RECORD.number} · {CASE_RECORD.origin}
              </p>
              <h1 className="mt-1 font-display text-2xl text-navy">{CASE_RECORD.subject}</h1>
              <p className="mt-1 text-sm text-muted">
                {ALEX.name} · {ALEX.email} · Opened {CASE_RECORD.opened}
              </p>
            </div>
            <span className="rounded-full bg-crimson/10 px-2.5 py-1 text-[11px] font-semibold text-crimson">
              {CASE_RECORD.status}
            </span>
          </div>
        </div>

        <Highlight id="case-summary" className="rounded-2xl">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-gold-soft p-5">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-light">
              <Sparkles className="h-4 w-4" />
              Agentforce case summary
            </div>
            <ul className="mt-3 space-y-2 text-sm text-ink">
              {CASE_RECORD.summary.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Highlight>

        <div className="flex items-start gap-3 rounded-xl border border-crimson/20 bg-crimson/5 px-4 py-3 text-sm text-crimson">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <span className="font-medium text-navy">{CASE_RECORD.alert}</span>
        </div>

        <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
          <h2 className="text-sm font-semibold text-navy">Case detail</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{CASE_RECORD.detail}</p>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-cream px-3 py-2">
              <div className="text-[10px] uppercase tracking-wider text-muted">Product</div>
              <div className="font-medium text-ink">{CASE_RECORD.product}</div>
            </div>
            <div className="rounded-lg bg-cream px-3 py-2">
              <div className="text-[10px] uppercase tracking-wider text-muted">
                Related enquiry
              </div>
              <div className="font-medium text-ink">
                Q4 Corporate Summit · {ALEX.inquiryValueLabel}
              </div>
            </div>
          </dl>
        </div>
      </div>

      <Highlight id="nba" className="rounded-2xl">
        <aside className="rounded-2xl border border-gold/40 bg-navy p-5 text-cream shadow-card">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
            Next Best Action
          </p>
          <h2 className="mt-2 font-display text-2xl text-white">Protect the relationship</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <Warehouse className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Dispatch instant replacement from the stadium warehouse
            </li>
            <li className="flex gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Issue complimentary VIP Lounge passes for the next home match
            </li>
          </ul>

          {nbaDone ? (
            <div className={cn("mt-6 rounded-xl bg-white/10 p-4 text-sm")}>
              <div className="font-semibold text-gold">Executed</div>
              <p className="mt-2 text-white/80">Pick ticket WH-8841 · stadium warehouse</p>
              <p className="text-white/80">Lounge passes issued for 4 Oct · Indianapolis Colts v Washington Commanders</p>
              <p className="mt-2 text-xs text-white/50">
                Case updated · Helena Voss notified on the B2B enquiry
              </p>
              <button
                type="button"
                onClick={() => goToBeat("context")}
                className="mt-4 w-full rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy"
              >
                Next day · Ask Spurs →
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={markNbaDone}
              className="mt-6 w-full rounded-lg bg-gold px-4 py-3 text-sm font-semibold text-navy hover:bg-gold-soft"
            >
              Execute with one click
            </button>
          )}
        </aside>
      </Highlight>
    </div>
  );
}
