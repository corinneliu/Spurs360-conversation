"use client";

import { AppShell } from "@/components/console/AppShell";
import { DemoProvider } from "@/components/demo/DemoProvider";

export default function Home() {
  return (
    <DemoProvider>
      <AppShell />
    </DemoProvider>
  );
}
