"use client";

import {
  Headphones,
  House,
  Sparkles,
  Users,
} from "lucide-react";
import { useDemo } from "@/components/demo/DemoProvider";
import { cn } from "@/lib/cn";
import type { WorkspaceId } from "@/data/demo";

const ITEMS: { id: WorkspaceId; icon: typeof House; label: string }[] = [
  { id: "home", icon: House, label: "Home" },
  { id: "fan", icon: Users, label: "Fans" },
  { id: "whatsapp", icon: Sparkles, label: "Ask" },
  { id: "case", icon: Headphones, label: "Service" },
];

export function NavRail() {
  const { workspace, goToBeat, beat } = useDemo();

  return (
    <nav className="flex w-16 shrink-0 flex-col items-center gap-1 border-r border-white/10 bg-navy-mid py-3">
      {ITEMS.map((item) => {
        const Icon = item.icon;
        const active =
          workspace === item.id ||
          (item.id === "fan" && workspace === "fan");
        return (
          <button
            key={item.id}
            type="button"
            title={item.label}
            onClick={() => {
              if (item.id === "home") goToBeat("open");
              if (item.id === "fan") goToBeat("summary");
              if (item.id === "whatsapp") {
                goToBeat(beat.act === 4 ? "context" : "whatsapp");
              }
              if (item.id === "case") goToBeat("case");
            }}
            className={cn(
              "flex h-12 w-12 flex-col items-center justify-center gap-0.5 rounded-lg text-[9px] uppercase tracking-wider transition",
              active
                ? "bg-gold/15 text-gold"
                : "text-white/45 hover:bg-white/8 hover:text-white",
            )}
          >
            <Icon className="h-5 w-5" />
            {item.label}
          </button>
        );
      })}
      <div className="mt-auto flex flex-col items-center gap-2 pb-2">
        <Sparkles className="h-4 w-4 text-gold/70" />
        <span className="w-10 text-center text-[8px] uppercase leading-tight tracking-wider text-white/35">
          Agentforce
        </span>
      </div>
    </nav>
  );
}
