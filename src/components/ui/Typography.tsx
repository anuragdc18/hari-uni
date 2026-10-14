import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";

export function Eyebrow({ children, className, plain }: { children: ReactNode; className?: string; plain?: boolean }) {
  return <p className={cn("eyebrow", plain && "eyebrow-plain", className)}>{children}</p>;
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  text?: string;
  as?: "h1" | "h2" | "h3";
  size?: "lg" | "md" | "sm";
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
  animate?: boolean;
}

export function SectionHeading({ eyebrow, title, text, as = "h2", size = "md", align = "left", className, children, animate = true }: SectionHeadingProps) {
  const sizeClass = size === "lg" ? "display-lg" : size === "sm" ? "display-sm" : "display-md";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal delay={0.05} direction="none">
          <Eyebrow className={cn("mb-5", align === "center" && "justify-center")}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      {animate ? <TextReveal as={as} text={title} className={sizeClass} /> : <HeadingTag as={as} className={sizeClass}>{title}</HeadingTag>}
      {text && (
        <Reveal delay={0.15}>
          <p className="lead mt-5">{text}</p>
        </Reveal>
      )}
      {children}
    </div>
  );
}

function HeadingTag({ as, className, children }: { as: "h1" | "h2" | "h3"; className?: string; children: ReactNode }) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("prose-x space-y-5 text-[1.0625rem] leading-[1.75] text-stone-700", className)}>{children}</div>;
}

export function Badge({ children, className, tone = "sand" }: { children: ReactNode; className?: string; tone?: "sand" | "ink" | "gold" | "forest" | "terracotta" | "glass" }) {
  const tones: Record<string, string> = {
    sand: "bg-sand-100 text-stone-700 border-sand-300",
    ink: "bg-ink-900 text-white border-ink-900",
    gold: "bg-gold-200/60 text-gold-600 border-gold-200",
    forest: "bg-forest-50 text-forest-700 border-forest-100",
    terracotta: "bg-terracotta-50 text-terracotta-700 border-terracotta-100",
    glass: "bg-white/15 text-white border-white/30 backdrop-blur",
  };
  return <span className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide", tones[tone], className)}>{children}</span>;
}

export function Numeral({ children, className, tone = "ink" }: { children: ReactNode; className?: string; tone?: "ink" | "light" | "terracotta" }) {
  const tones = { ink: "text-ink-900/50", light: "text-white/50", terracotta: "text-terracotta-500" };
  return <span className={cn("font-display text-sm tabular-nums tracking-[0.2em]", tones[tone], className)}>{children}</span>;
}
