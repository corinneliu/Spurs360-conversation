"use client";

import { Bell, Search } from "lucide-react";
import { Avatar } from "@/components/brand/Crest";

export function TopBar() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-6 border-b border-white/10 bg-[#000a3c] px-4 text-cream">
      <div className="flex items-center gap-3 min-w-[240px]">
        <img
          src="/spurs-crest.png"
          alt="Tottenham Hotspur"
          className="h-9 w-9"
        />
        <div className="leading-tight">
          <div className="font-hero text-[17px] text-white">
            Tottenham Hotspur
          </div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
            Spurs360 · Data 360
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-center">
        <label className="relative w-full max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            defaultValue=""
            placeholder="Search supporters, cases, events…"
            className="h-9 w-full rounded-md border border-white/10 bg-white/8 pl-10 pr-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-gold/50 focus:bg-white/12"
          />
        </label>
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Data 360 connected
        </span>
        <button
          type="button"
          className="relative rounded-md p-2 text-white/70 hover:bg-white/8 hover:text-white"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-crimson" />
        </button>
        <div className="flex items-center gap-2 pl-1">
          <Avatar name="Jordan Hale" size="sm" />
          <div className="hidden lg:block leading-tight">
            <div className="text-xs font-medium text-white">Jordan Hale</div>
            <div className="text-[10px] text-white/50">Fan Services</div>
          </div>
        </div>
      </div>
    </header>
  );
}
