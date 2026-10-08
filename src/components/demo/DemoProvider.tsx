"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  BEATS,
  type ActId,
  type DemoBeat,
  type FanTab,
  type HighlightId,
  type WorkspaceId,
} from "@/data/demo";

type DemoState = {
  workspace: WorkspaceId;
  openWorkspaces: WorkspaceId[];
  tab: FanTab;
  beatId: string;
  highlight?: HighlightId;
  nbaDone: boolean;
  transferDone: boolean;
  contextDone: boolean;
  setWorkspace: (id: WorkspaceId) => void;
  setTab: (tab: FanTab) => void;
  goToBeat: (id: string) => void;
  goToAct: (act: ActId) => void;
  nextBeat: () => void;
  prevBeat: () => void;
  markNbaDone: () => void;
  markTransferDone: () => void;
  markContextDone: () => void;
  beat: DemoBeat;
};

const DemoContext = createContext<DemoState | null>(null);

function ensureOpen(open: WorkspaceId[], id: WorkspaceId): WorkspaceId[] {
  if (id === "home") return open;
  if (open.includes(id)) return open;
  return [...open, id];
}

export function DemoProvider({ children }: { children: ReactNode }) {
  const [workspace, setWorkspaceState] = useState<WorkspaceId>("home");
  const [openWorkspaces, setOpenWorkspaces] = useState<WorkspaceId[]>([]);
  const [tab, setTab] = useState<FanTab>("timeline");
  const [beatId, setBeatId] = useState(BEATS[0].id);
  const [highlight, setHighlight] = useState<HighlightId | undefined>("search");
  const [nbaDone, setNbaDone] = useState(false);
  const [transferDone, setTransferDone] = useState(false);
  const [contextDone, setContextDone] = useState(false);

  const beat = BEATS.find((b) => b.id === beatId) ?? BEATS[0];

  const applyBeat = useCallback((next: DemoBeat) => {
    setBeatId(next.id);
    setWorkspaceState(next.workspace);
    setOpenWorkspaces((open) => ensureOpen(open, next.workspace));
    if (next.tab) setTab(next.tab);
    setHighlight(next.highlight);
  }, []);

  const goToBeat = useCallback(
    (id: string) => {
      const next = BEATS.find((b) => b.id === id);
      if (next) applyBeat(next);
    },
    [applyBeat],
  );

  const goToAct = useCallback(
    (act: ActId) => {
      const next = BEATS.find((b) => b.act === act);
      if (next) applyBeat(next);
    },
    [applyBeat],
  );

  const nextBeat = useCallback(() => {
    const i = BEATS.findIndex((b) => b.id === beatId);
    const next = BEATS[Math.min(i + 1, BEATS.length - 1)];
    applyBeat(next);
  }, [applyBeat, beatId]);

  const prevBeat = useCallback(() => {
    const i = BEATS.findIndex((b) => b.id === beatId);
    const next = BEATS[Math.max(i - 1, 0)];
    applyBeat(next);
  }, [applyBeat, beatId]);

  const setWorkspace = useCallback((id: WorkspaceId) => {
    setWorkspaceState(id);
    setOpenWorkspaces((open) => ensureOpen(open, id));
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
      if (e.key === "1") goToAct(1);
      if (e.key === "2") goToAct(2);
      if (e.key === "3") goToAct(3);
      if (e.key === "4") goToAct(4);
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        nextBeat();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prevBeat();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goToAct, nextBeat, prevBeat]);

  const value = useMemo<DemoState>(
    () => ({
      workspace,
      openWorkspaces,
      tab,
      beatId,
      highlight,
      nbaDone,
      transferDone,
      contextDone,
      setWorkspace,
      setTab,
      goToBeat,
      goToAct,
      nextBeat,
      prevBeat,
      markNbaDone: () => setNbaDone(true),
      markTransferDone: () => setTransferDone(true),
      markContextDone: () => setContextDone(true),
      beat,
    }),
    [
      workspace,
      openWorkspaces,
      tab,
      beatId,
      highlight,
      nbaDone,
      transferDone,
      contextDone,
      setWorkspace,
      goToBeat,
      goToAct,
      nextBeat,
      prevBeat,
      beat,
    ],
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
}
