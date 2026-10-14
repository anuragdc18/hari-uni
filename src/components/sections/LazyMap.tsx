"use client";

import { useEffect, useRef, useState } from "react";

/** Defers the third-party map iframe until it is near the viewport (keeps initial JS/network light). */
export function LazyMap({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!ref.current || load) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [load]);

  return (
    <div ref={ref} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-sand-300 bg-sand-100 shadow-card lg:aspect-[16/11]">
      {load ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button type="button" onClick={() => setLoad(true)} className="absolute inset-0 flex items-center justify-center text-sm font-medium text-stone-500">
          Load map
        </button>
      )}
    </div>
  );
}
