"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollExpandMediaProps = {
  mediaSrc: string;
  mobileMediaSrc?: string;
  posterSrc?: string;
  mobilePosterSrc?: string;
  bgImageSrc: string;
  title: string;
  date: string;
  scrollToExpand: string;
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollExpandMedia({
  mediaSrc,
  mobileMediaSrc,
  posterSrc,
  mobilePosterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
}: ScrollExpandMediaProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const metricsRef = useRef({ top: 0, height: 1, viewport: 1 });
  const visibleRef = useRef(false);
  const mobileRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMedia = () => {
      mobileRef.current = mobileQuery.matches;
      reducedMotionRef.current = reducedQuery.matches;
      setIsMobile(mobileRef.current);
      setReducedMotion(reducedMotionRef.current);
      if (mobileRef.current || reducedMotionRef.current) setProgress(1);
    };

    syncMedia();
    mobileQuery.addEventListener("change", syncMedia);
    reducedQuery.addEventListener("change", syncMedia);

    return () => {
      mobileQuery.removeEventListener("change", syncMedia);
      reducedQuery.removeEventListener("change", syncMedia);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateMetrics = () => {
      const rect = section.getBoundingClientRect();
      metricsRef.current = {
        top: window.scrollY + rect.top,
        height: rect.height,
        viewport: window.innerHeight,
      };
    };

    const updateProgress = () => {
      frameRef.current = null;
      if (
        !visibleRef.current ||
        mobileRef.current ||
        reducedMotionRef.current
      ) {
        return;
      }

      const { top, height, viewport } = metricsRef.current;
      const start = top - viewport * 0.18;
      const end = top + height - viewport * 1.08;
      setProgress(clamp((window.scrollY - start) / Math.max(end - start, 1)));
    };

    const requestProgress = () => {
      if (
        frameRef.current === null &&
        visibleRef.current &&
        !mobileRef.current &&
        !reducedMotionRef.current
      ) {
        frameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          updateMetrics();
          requestProgress();
        }
      },
      { rootMargin: "16% 0px 16% 0px", threshold: 0.01 },
    );

    updateMetrics();
    observer.observe(section);
    window.addEventListener("resize", updateMetrics);
    window.addEventListener("scroll", requestProgress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateMetrics);
      window.removeEventListener("scroll", requestProgress);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
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
  }, [isVisible, reducedMotion, isMobile]);

  const easedProgress = reducedMotion ? 1 : 1 - Math.pow(1 - progress, 3);
  const activeMediaSrc = isMobile && mobileMediaSrc ? mobileMediaSrc : mediaSrc;
  const activePosterSrc =
    isMobile && mobilePosterSrc ? mobilePosterSrc : posterSrc;

  const desktopScale = 0.52 + easedProgress * 0.48;
  const desktopRadius = 28 - easedProgress * 12;
  const desktopShadow = 0.24 + easedProgress * 0.16;
  const textOpacity = clamp(1 - easedProgress * 1.85);
  const backgroundStyle: CSSProperties = {
    transform:
      !isMobile && !reducedMotion
        ? `translate3d(0, ${easedProgress * -18}px, 0) scale(${1.04 - easedProgress * 0.025})`
        : undefined,
    willChange: !isMobile && !reducedMotion ? "transform" : undefined,
  };

  const cardStyle: CSSProperties = isMobile
    ? {
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0, 0, 0) scale(1)"
          : "translate3d(0, 18px, 0) scale(0.96)",
      }
    : {
        borderRadius: `${desktopRadius}px`,
        boxShadow: `0 34px 90px rgba(0,0,0,${desktopShadow})`,
        transform: `translate3d(-50%, -50%, 0) scale(${desktopScale})`,
        willChange: "transform, border-radius",
      };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#fffdf9] md:h-[215vh]"
      aria-label={title}
    >
      <div className="relative min-h-[720px] overflow-hidden py-14 md:sticky md:top-0 md:flex md:h-screen md:min-h-0 md:items-center md:justify-center md:py-0">
        <Image
          src={bgImageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[58%_48%]"
          priority={false}
          style={backgroundStyle}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,249,0.16),rgba(16,16,16,0.08)_42%,rgba(16,16,16,0.18))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.04),rgba(0,0,0,0.18)_78%)]" />

        <div
          className="container-page relative z-10 mb-7 md:absolute md:left-1/2 md:top-[14vh] md:mb-0 md:-translate-x-1/2"
          style={{
            opacity: isMobile ? 1 : textOpacity,
            transform: isMobile
              ? undefined
              : `translate3d(-50%, ${easedProgress * -22}px, 0)`,
          }}
        >
          <div className="max-w-[460px] rounded-lg bg-white/82 p-5 shadow-[0_18px_50px_rgba(16,16,16,0.08)] backdrop-blur md:bg-white/70">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[var(--torii-red)]">
              {date}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-[1.02] text-neutral-950 md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base font-bold leading-7 text-neutral-700">
              {scrollToExpand}
            </p>
          </div>
        </div>

        <div className="container-page relative z-10 md:contents">
          <div
            className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[24px] border border-white/45 bg-black shadow-[0_28px_75px_rgba(0,0,0,0.28)] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:absolute md:left-1/2 md:top-1/2 md:mx-0 md:aspect-auto md:h-[72vh] md:max-h-[680px] md:w-[80vw] md:max-w-[1180px] md:rounded-[28px]"
            style={cardStyle}
          >
            <video
              key={activeMediaSrc}
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              poster={activePosterSrc}
              className="h-full w-full object-cover"
              controls={false}
              disablePictureInPicture
            >
              <source src={activeMediaSrc} type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/24 to-transparent md:h-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
