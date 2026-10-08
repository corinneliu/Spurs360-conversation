"use client";

import { X } from "lucide-react";
import { useDemo } from "@/components/demo/DemoProvider";
import { cn } from "@/lib/cn";
import type { WorkspaceId } from "@/data/demo";

export function WorkspaceTabs() {
  const { workspace, openWorkspaces, setWorkspace, beatId } = useDemo();
  const tabs: WorkspaceId[] = ["home", ...openWorkspaces.filter((id) => id !== "home")];

  const labels: Record<WorkspaceId, string> = {
    home: "Spurs360 Home",
    fan: "Alex Chen · Person Account",
    whatsapp:
      beatId === "context"
        ? "Ask Spurs · Returning · 8 Sep"
        : "Ask Spurs · Alex Chen",
    case: "Case 0003847 · Damaged delivery",
  };

  return (
    <div className="flex h-10 shrink-0 items-end gap-px border-b border-line bg-[#e6eaee] px-2">
      {tabs.map((id) => {
        const active = workspace === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setWorkspace(id)}
            className={cn(
              "group flex h-8 max-w-[280px] items-center gap-2 rounded-t-md border border-b-0 px-3 text-[12px] transition",
              active
                ? "border-line bg-paper text-ink shadow-[0_-1px_0_#c5cdd6]"
                : "border-transparent bg-transparent text-muted hover:bg-white/50",
            )}
          >
            <span className="truncate">{labels[id]}</span>
            {id !== "home" && (
              <X className="h-3 w-3 opacity-0 group-hover:opacity-50" />
            )}
          </button>
        );
      })}
    </div>
  );
}
