import Image from "next/image";
import type { StaticImageData } from "next/image";
import { img, type ImageKey } from "@/assets/registry";
import { cn } from "@/lib/utils";

interface PictureProps {
  src: ImageKey | StaticImageData;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Aspect ratio utility class e.g. "aspect-[4/3]". When omitted the wrapper must size itself. */
  ratio?: string;
  fill?: boolean;
  quality?: 60 | 75 | 85;
  position?: string;
}

export const resolveImage = (src: ImageKey | StaticImageData): StaticImageData => (typeof src === "string" ? img[src] : src);

/**
 * Thin wrapper around next/image for the HARI photo registry. Always renders with
 * responsive sizes, blur placeholder and object-fit cover.
 */
export function Picture({ src, alt, className, imgClassName, sizes = "(min-width: 1024px) 50vw, 100vw", priority, ratio, fill = true, quality = 75, position }: PictureProps) {
  const data = resolveImage(src);
  if (!fill) {
    return (
      <Image
        src={data}
        alt={alt}
        sizes={sizes}
        quality={quality}
        placeholder="blur"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className={cn("h-auto w-full", imgClassName, className)}
      />
    );
  }
  return (
    <div className={cn(/\babsolute\b|\bfixed\b/.test(className ?? "") ? "overflow-hidden" : "relative overflow-hidden", ratio, className)}>
      <Image
        src={data}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        placeholder="blur"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className={cn("object-cover", imgClassName)}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
