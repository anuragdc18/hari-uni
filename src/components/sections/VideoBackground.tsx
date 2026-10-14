"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const SRC = { mp4: "/videos/hero-720.mp4", mp4Small: "/videos/hero-480.mp4", poster: "/videos/hero-poster.jpg" };

/**
 * The HARI aerial hero video, fading in over a poster/photo. Skipped for reduced-motion
 * users and on data-saver / 2G connections, where the still photograph remains.
 */
export function VideoBackground({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || conn?.effectiveType === "2g" || conn?.effectiveType === "slow-2g") return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- depends on navigator after hydration
    setAllow(true);
  }, [reduce]);

  useEffect(() => {
    const v = ref.current;
    if (!v || !allow) return;
    const onCanPlay = () => {
      setReady(true);
      v.play().catch(() => undefined);
    };
    v.addEventListener("canplay", onCanPlay);
    v.load();
    return () => v.removeEventListener("canplay", onCanPlay);
  }, [allow]);

  if (!allow) return null;
  return (
    <video
      ref={ref}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out ${ready ? "opacity-100" : "opacity-0"} ${className}`}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      poster={SRC.poster}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={SRC.mp4} type="video/mp4" media="(min-width: 768px)" />
      <source src={SRC.mp4Small} type="video/mp4" />
    </video>
  );
}
