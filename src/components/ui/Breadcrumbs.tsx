import Link from "next/link";
import { cn } from "@/lib/utils";

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items, tone = "light", className }: { items: Crumb[]; tone?: "light" | "dark"; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className={tone === "dark" ? "text-white/90" : "text-stone-900"}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className={cn("transition-colors hover:underline", tone === "dark" ? "text-white/70 hover:text-white" : "text-stone-500 hover:text-ink-900")}>
                  {item.name}
                </Link>
              )}
              {!last && (
                <span aria-hidden="true" className={tone === "dark" ? "text-white/40" : "text-stone-300"}>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
