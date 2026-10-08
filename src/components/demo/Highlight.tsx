"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useDemo } from "@/components/demo/DemoProvider";
import { cn } from "@/lib/cn";
import type { HighlightId } from "@/data/demo";

export function Highlight({
  id,
  className,
  children,
}: {
  id: HighlightId;
  className?: string;
  children: ReactNode;
}) {
  const { highlight } = useDemo();
  const ref = useRef<HTMLDivElement>(null);
  const active = highlight === id;

  useEffect(() => {
    if (active) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [active]);

  return (
    <div
      ref={ref}
      className={cn(className, active && "demo-highlight")}
      data-highlight={id}
    >
      {children}
    </div>
  );
}
