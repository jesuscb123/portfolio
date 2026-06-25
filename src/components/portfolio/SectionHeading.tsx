"use client";

import { Workflow } from "lucide-react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  kicker,
}: {
  eyebrow: string;
  title: string;
  kicker?: string;
}) {
  return (
    <Reveal>
      <div className="flex flex-col items-start gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground">
          <Workflow className="h-3 w-3 text-electric" />
          {eyebrow}
        </span>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {kicker && <p className="max-w-2xl text-sm text-muted-foreground">{kicker}</p>}
      </div>
    </Reveal>
  );
}
