import { Counter } from "@/components/motion/Counter";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export interface Stat {
  value: string;
  label: string;
}

interface StatGridProps {
  stats: readonly Stat[];
  columns?: 2 | 3 | 4;
  tone?: "light" | "dark";
  className?: string;
  compact?: boolean;
}

/** Animated statistic grid with count-up numbers. */
export function StatGrid({ stats, columns = 4, tone = "light", className, compact }: StatGridProps) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <Stagger className={cn("grid grid-cols-1 gap-px overflow-hidden rounded-2xl", cols, tone === "light" ? "bg-sand-300" : "bg-white/10", className)}>
      {stats.map((s) => (
        <StaggerItem key={s.label + s.value} className={cn("flex flex-col gap-2", compact ? "p-6" : "p-7 lg:p-9", tone === "light" ? "bg-white" : "bg-ink-900/60")}>
          <Counter value={s.value} className={cn("stat-value", tone === "dark" && "text-white", compact && "!text-[clamp(1.75rem,3vw,2.5rem)]")} />
          <span className={cn("text-sm leading-snug", tone === "light" ? "text-stone-500" : "text-sand-200/80")}>{s.label}</span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/** Inline stat row used inside heroes (no card chrome). */
export function StatRow({ stats, tone = "dark", className }: { stats: readonly Stat[]; tone?: "light" | "dark"; className?: string }) {
  return (
    <Stagger className={cn("flex flex-wrap gap-x-10 gap-y-6", className)} delay={0.3}>
      {stats.map((s) => (
        <StaggerItem key={s.label} className={cn("border-l-2 pl-4", tone === "dark" ? "border-gold-500/70" : "border-terracotta-500/70")}>
          <Counter value={s.value} className={cn("stat-value !text-[clamp(1.9rem,3.2vw,2.75rem)]", tone === "dark" ? "text-white" : "text-ink-900")} />
          <div className={cn("mt-1 text-xs font-medium uppercase tracking-[0.14em]", tone === "dark" ? "text-sand-200/70" : "text-stone-500")}>{s.label}</div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
