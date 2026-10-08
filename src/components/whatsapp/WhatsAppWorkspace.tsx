"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Send, Sparkles } from "lucide-react";
import { Highlight } from "@/components/demo/Highlight";
import { useDemo } from "@/components/demo/DemoProvider";
import {
  AGENT_LOG,
  AGENT_THREAD,
  CONTEXT_LOG,
  CONTEXT_MEMORY,
  CONTEXT_THREAD,
} from "@/data/demo";
import { cn } from "@/lib/cn";

function SpursMark({ className }: { className?: string }) {
  return (
    <img
      src="/spurs-crest.png"
      alt=""
      className={cn("rounded-full object-cover", className)}
    />
  );
}

type Line = (typeof AGENT_THREAD)[number];

export function WhatsAppWorkspace() {
  const {
    beatId,
    markTransferDone,
    transferDone,
    markContextDone,
    contextDone,
    goToBeat,
  } = useDemo();
  const isContext = beatId === "context";
  const thread = isContext ? CONTEXT_THREAD : AGENT_THREAD;
  const done = isContext ? contextDone : transferDone;
  const markDone = isContext ? markContextDone : markTransferDone;

  const [visible, setVisible] = useState(done ? thread.length : 0);
  const [playing, setPlaying] = useState(false);
  const timers = useRef<number[]>([]);
  const scroller = useRef<HTMLDivElement>(null);

  function clearTimers() {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }

  function play() {
    clearTimers();
    setPlaying(true);
    setVisible(0);
    let i = 0;
    const tick = () => {
      i += 1;
      setVisible(i);
      if (i < thread.length) {
        const delay = thread[i - 1].from === "system" ? 1400 : 900;
        timers.current.push(window.setTimeout(tick, delay));
      } else {
        setPlaying(false);
        markDone();
      }
    };
    timers.current.push(window.setTimeout(tick, 400));
  }

  useEffect(() => {
    clearTimers();
    setPlaying(false);
    setVisible(done ? thread.length : 0);
    if ((beatId !== "whatsapp" && beatId !== "context") || done) return;
    const t = window.setTimeout(play, 500);
    return () => window.clearTimeout(t);
    // Autoplay when the relevant Ask Spurs beat opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beatId]);

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [visible, playing]);

  const shown = thread.slice(0, visible);
  const complete = visible >= thread.length;
  const memoryUnlocked = isContext && (complete || visible >= 2);

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-[1.15fr_0.85fr] gap-8 px-8 py-8">
      <Highlight id={isContext ? "context" : "whatsapp"} className="rounded-2xl">
        <div
          className={cn(
            "flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-card",
            isContext ? "h-[800px]" : "h-[560px]",
          )}
        >
          <header className="flex items-center justify-between border-b border-white/10 bg-[#000a3c] px-5 py-4 text-cream">
            <div className="flex items-center gap-3">
              <div className="relative">
                <SpursMark className="h-10 w-10" />
                <Sparkles className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 text-gold" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-xl text-white">Ask Spurs</div>
                <div className="text-[11px] text-white/55">
                  {isContext
                    ? "Returning conversation · 8 Sep 2026"
                    : "Tottenham Spur · online assistant"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isContext && (
                <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[10px] font-medium text-gold">
                  Memory on
                </span>
              )}
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Online
              </div>
            </div>
          </header>

          <div ref={scroller} className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-5 py-5">
            <p className="text-center text-[11px] uppercase tracking-[0.16em] text-muted">
              {isContext
                ? "Session 2 of 2 · context carried from yesterday"
                : "tottenhamhotspur.com · live chat · powered by Agentforce"}
            </p>

            {isContext && (
              <div className="rounded-xl border border-line bg-white px-4 py-3 text-xs text-muted">
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                  Yesterday · 7 Sep 2026
                </div>
                <p className="mt-1 text-ink">
                  Seat transfer complete → <span className="font-semibold">Priya Nair</span>{" "}
                  · West Stand Lower · Block 105 | Row 10 | Seat 88 · Indianapolis Colts v Washington Commanders · 4 Oct
                </p>
              </div>
            )}

            {shown.map((m) => (
              <ChatLine key={m.id} line={m} wide={isContext} />
            ))}
            {playing && visible < thread.length && (
              <div className="flex items-center gap-2 text-xs text-muted">
                <SpursMark className="h-7 w-7" />
                <span className="rounded-2xl rounded-bl-md border border-line bg-white px-3 py-2">
                  Ask Spurs is working…
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-line bg-white px-4 py-3">
            <input
              readOnly
              value=""
              placeholder="Message Ask Spurs…"
              className="h-10 flex-1 rounded-full border border-line bg-cream px-4 text-sm text-ink placeholder:text-muted outline-none"
            />
            <button
              type="button"
              disabled
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Highlight>

      <div className="space-y-4">
        <div className="rounded-2xl border border-line bg-paper p-6 shadow-soft">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
            {isContext ? "Agentic context" : "Digital agent"}
          </p>
          <h2 className="mt-1 font-display text-2xl text-navy">
            {isContext ? "It already knows Priya" : "Ask Spurs"}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {isContext
              ? "Alex never repeats the colleague’s name. Ask Spurs retrieves yesterday’s transfer — Priya Nair, her email, the West Stand Lower seat — and only asks to confirm before moving the food & drinks package."
              : "The club’s always-on online agent. It verifies membership, calls Ticketmaster, updates the unified profile, and confirms the transfer — without a human queue."}
          </p>
          <button
            type="button"
            onClick={play}
            disabled={playing}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2 text-sm font-medium text-gold disabled:opacity-50"
          >
            <Play className="h-4 w-4" />
            {complete ? "Replay conversation" : "Play conversation"}
          </button>
        </div>

        {isContext ? (
          <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              Retrieved memory
            </h3>
            <ul className="mt-3 space-y-3">
              {CONTEXT_MEMORY.map((row) => (
                <li
                  key={row.label}
                  className={cn(
                    "flex items-start justify-between gap-4 text-sm",
                    memoryUnlocked ? "text-ink" : "text-muted/40",
                  )}
                >
                  <span>
                    <span className="block font-medium">{row.label}</span>
                    <span className="text-[11px] text-muted">{row.source}</span>
                  </span>
                  <span className="text-right font-medium">
                    {memoryUnlocked ? row.value : "—"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              Transaction log
            </h3>
            <ul className="mt-3 space-y-3">
              {AGENT_LOG.map((row, i) => {
                const unlocked = complete || visible >= 4;
                return (
                  <li
                    key={row.label}
                    className={cn(
                      "flex items-start justify-between gap-4 text-sm",
                      unlocked ? "text-ink" : "text-muted/40",
                    )}
                  >
                    <span className="font-medium">{row.label}</span>
                    <span className="text-right">
                      {unlocked || i === 0 ? row.value : "—"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {complete && !isContext && (
          <div className="flex items-center justify-between rounded-2xl bg-navy px-5 py-4 text-cream">
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-gold">
                Full transaction recorded
              </div>
              <div className="font-display text-lg">Zero human agent time</div>
            </div>
            <button
              type="button"
              onClick={() => goToBeat("case")}
              className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy"
            >
              High-touch case →
            </button>
          </div>
        )}

        {complete && isContext && (
          <div className="rounded-2xl bg-navy px-5 py-4 text-cream">
            <div className="text-[10px] uppercase tracking-[0.16em] text-gold">
              Context carried across conversations
            </div>
            <div className="font-display text-lg">Priya Nair recalled · package moved</div>
            <ul className="mt-3 space-y-1 text-sm text-white/75">
              {CONTEXT_LOG.map((row) => (
                <li key={row.label}>
                  <span className="text-gold">{row.label}:</span> {row.value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function ChatLine({ line, wide = false }: { line: Line; wide?: boolean }) {
  if (line.from === "system") {
    return (
      <div
        className={cn(
          "mx-auto flex items-center gap-2 border border-line bg-navy/90 px-3 py-1.5 text-[11px] text-gold",
          wide ? "max-w-full rounded-2xl" : "max-w-[90%] rounded-full",
        )}
      >
        <Sparkles className="h-3 w-3 shrink-0" />
        {line.text}
      </div>
    );
  }
  const mine = line.from === "alex";
  return (
    <div className={cn("flex items-end gap-2", mine && "flex-row-reverse")}>
      {!mine && <SpursMark className="mb-4 h-7 w-7 shrink-0" />}
      <div
        className={cn(
          "rounded-2xl px-4 py-3 text-[13px] leading-relaxed",
          wide ? "max-w-[96%]" : "max-w-[78%]",
          mine
            ? "rounded-br-md bg-navy text-cream"
            : "rounded-bl-md border border-line bg-white text-ink",
        )}
      >
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] opacity-60">
          {mine ? "Alex Chen" : "Ask Spurs"}
        </div>
        {line.text}
      </div>
    </div>
  );
}
