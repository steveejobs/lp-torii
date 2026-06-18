"use client";

import { useEffect, useRef, useState } from "react";

type InstagramVideoMomentProps = {
  videoSrc: string;
  posterSrc: string;
};

export function InstagramVideoMoment({
  videoSrc,
  posterSrc,
}: InstagramVideoMomentProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => setReducedMotion(reducedQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.42 },
    );

    observer.observe(section);
    reducedQuery.addEventListener("change", syncReducedMotion);
    syncReducedMotion();

    return () => {
      observer.disconnect();
      reducedQuery.removeEventListener("change", syncReducedMotion);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && !reducedMotion) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [isVisible, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={`ig-video-reveal mt-6 rounded-[26px] border border-black/10 bg-white p-3 shadow-[0_14px_34px_rgba(16,16,16,0.07)] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="grid grid-cols-[0.82fr_1.18fr] items-center gap-3">
        <div className="px-1">
          <p className="text-[0.65rem] font-black uppercase tracking-wide text-[var(--torii-red)]">
            TORII À NOITE
          </p>
          <h2 className="mt-2 text-xl font-black leading-[1.04] text-neutral-950">
            Antes da sua noite começar.
          </h2>
          <div className="mt-4 h-px w-14 bg-[var(--torii-red)]" />
        </div>
        <div className="relative aspect-[9/14] max-h-[340px] overflow-hidden rounded-[24px] bg-neutral-950 shadow-[0_16px_36px_rgba(16,16,16,0.16)]">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
            className="h-full w-full object-cover"
            controls={false}
            disablePictureInPicture
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/24 to-transparent" />
        </div>
      </div>
    </section>
  );
}
