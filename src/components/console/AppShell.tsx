"use client";

import { NavRail } from "@/components/console/NavRail";
import { PresenterBar } from "@/components/console/PresenterBar";
import { TopBar } from "@/components/console/TopBar";
import { WorkspaceTabs } from "@/components/console/WorkspaceTabs";
import { useDemo } from "@/components/demo/DemoProvider";
import { CaseWorkspace } from "@/components/case/CaseWorkspace";
import { FanWorkspace } from "@/components/fan/FanWorkspace";
import { HomeWorkspace } from "@/components/home/HomeWorkspace";
import { WhatsAppWorkspace } from "@/components/whatsapp/WhatsAppWorkspace";

export function AppShell() {
  const { workspace } = useDemo();

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-cream">
      <TopBar />
      <div className="flex min-h-0 flex-1">
        <NavRail />
        <div className="flex min-w-0 flex-1 flex-col">
          <WorkspaceTabs />
          <main className="min-h-0 flex-1 overflow-y-auto">
            {workspace === "home" && <HomeWorkspace />}
            {workspace === "fan" && <FanWorkspace />}
            {workspace === "whatsapp" && <WhatsAppWorkspace />}
            {workspace === "case" && <CaseWorkspace />}
          </main>
        </div>
      </div>
      <PresenterBar />
    </div>
  );
}
