import Image from "next/image";
import Link from "next/link";
import { img } from "@/assets/registry";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/** HARI seal + wordmark. The seal is the client's own logo-seal.png; white variant for dark surfaces. */
export function Logo({ tone = "dark", className, compact = false }: { tone?: "dark" | "light"; className?: string; compact?: boolean }) {
  const seal = tone === "light" ? img.logoSealWhite : img.logoSeal;
  return (
    <Link href="/" aria-label="HARI home" className={cn("group flex shrink-0 items-center gap-3", className)}>
      <Image src={seal} alt="HARI seal" width={64} height={62} sizes="64px" className={cn("w-auto transition-transform duration-500 group-hover:rotate-[8deg]", compact ? "h-11" : "h-12 sm:h-14 lg:h-16")} priority={undefined} />
      <span className={cn("flex flex-col leading-none", tone === "light" ? "text-white" : "text-ink-950")}>
        <span className={cn("font-display tracking-[0.08em]", compact ? "text-xl" : "text-2xl lg:text-[1.65rem]")}>{site.shortName}</span>
        {!compact && (
          <>
            <span className={cn("mt-1 hidden text-[0.68rem] font-medium leading-tight tracking-wide sm:block", tone === "light" ? "text-white/80" : "text-stone-700")}>{site.fullName}</span>
            <span className={cn("mt-0.5 hidden text-[0.62rem] uppercase tracking-[0.18em] sm:block", tone === "light" ? "text-gold-500" : "text-terracotta-600")}>{site.designation}</span>
          </>
        )}
      </span>
    </Link>
  );
}
