"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { Picture } from "@/components/ui/Picture";
import { ButtonLink } from "@/components/ui/Button";
import { TextReveal } from "@/components/motion/TextReveal";
import { homePage } from "@/content/home";

/**
 * Cinematic home hero: the HARI aerial video fades in over its poster frame, the headline
 * reveals word by word, and the media drifts gently as the user scrolls. Reduced-motion users
 * see the still poster with no autoplay.
 */
export function HomeHero() {
  const { hero } = homePage;
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const [allowVideo, setAllowVideo] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0, 0.5]);

  useEffect(() => {
    if (reduce) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || conn?.effectiveType === "2g" || conn?.effectiveType === "slow-2g") return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- depends on navigator, must run after hydration
    setAllowVideo(true);
  }, [reduce]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !allowVideo) return;
    const onCanPlay = () => {
      setReady(true);
      v.play().catch(() => undefined);
    };
    v.addEventListener("canplay", onCanPlay);
    v.load();
    return () => v.removeEventListener("canplay", onCanPlay);
  }, [allowVideo]);

  return (
    <section ref={sectionRef} data-header-tone="dark" className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-white">
      <motion.div style={{ y: mediaY, scale: mediaScale }} className="absolute inset-0 -z-20 will-change-transform">
        <Picture src={hero.poster} alt={hero.posterAlt} className="absolute inset-0" sizes="100vw" priority quality={75} />
        {allowVideo && (
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out ${ready ? "opacity-100" : "opacity-0"}`}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            poster={hero.video.poster}
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src={hero.video.mp4} type="video/mp4" />
          </video>
        )}
      </motion.div>
      <motion.div style={{ opacity: overlay }} aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/95 via-ink-950/35 to-ink-950/20" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-ink-950/50 to-transparent" />

      <div className="container-x relative pb-28 pt-40 lg:pb-36">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="eyebrow !text-gold-500"
        >
          Deemed-to-be University · UGC Distinct Category
        </motion.p>
        <TextReveal as="h1" text={hero.title} className="display-xl mt-6 max-w-5xl !text-white" immediate delay={0.45} />
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lead mt-7 max-w-2xl !text-sand-100/90"
        >
          {hero.text}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <ButtonLink href={hero.primary.href}>{hero.primary.label}</ButtonLink>
          <ButtonLink href={hero.secondary.href} variant="outline-light">
            {hero.secondary.label}
          </ButtonLink>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden="true"
        className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-white/60 lg:flex"
      >
        Scroll
        <span className="relative h-14 w-px overflow-hidden bg-white/20">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_2s_ease-in-out_infinite] bg-gold-500" />
        </span>
        <style>{`@keyframes scrollcue{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>
      </motion.div>
    </section>
  );
}
