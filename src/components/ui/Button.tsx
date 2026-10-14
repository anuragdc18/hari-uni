import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "ink" | "outline" | "light" | "outline-light";

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-4 w-4", className)} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  external?: boolean;
  download?: boolean;
}

export function ButtonLink({ href, children, variant = "primary", className, arrow = true, external, download }: ButtonLinkProps) {
  const classes = cn("btn", `btn-${variant}`, className);
  const ext = external ?? isExternal(href);
  const content = (
    <>
      {children}
      {arrow && <ArrowIcon className="btn-arrow" />}
    </>
  );
  if (ext || href.startsWith("#") || download) {
    return (
      <a href={href} className={classes} download={download} {...(ext && !href.startsWith("mailto:") && !href.startsWith("tel:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function Button({ children, variant = "primary", className, ...props }: ComponentPropsWithoutRef<"button"> & { variant?: Variant }) {
  return (
    <button className={cn("btn", `btn-${variant}`, className)} {...props}>
      {children}
    </button>
  );
}

export function ArrowLink({ href, children, className, external }: { href: string; children: ReactNode; className?: string; external?: boolean }) {
  const ext = external ?? isExternal(href);
  const inner = (
    <>
      {children}
      <ArrowIcon />
    </>
  );
  if (ext || href.startsWith("#")) {
    return (
      <a href={href} className={cn("link-arrow", className)} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cn("link-arrow", className)}>
      {inner}
    </Link>
  );
}
