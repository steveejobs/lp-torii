"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ScrollExpansionHeroProps = {
  bgDesktopSrc: string;
  bgMobileSrc: string;
  bgMobileAltSrc: string;
  videoDesktopSrc: string;
  videoMobileSrc: string;
  title: string;
  eyebrow: string;
  text: string;
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollExpansionHero({
  bgDesktopSrc,
  bgMobileSrc,
  bgMobileAltSrc,
  videoDesktopSrc,
  videoMobileSrc,
  title,
  eyebrow,
  text,
}: ScrollExpansionHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const metricsRef = useRef({ top: 0, height: 1, viewport: 1 });
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMedia = () => {
      setIsMobile(mobileQuery.matches);
      setReducedMotion(reducedQuery.matches);
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
      if (!isVisible || reducedMotion) return;
      const { top, height, viewport } = metricsRef.current;
      const start = top - viewport * 0.75;
      const end = top + height - viewport * 0.45;
      setProgress(clamp((window.scrollY - start) / Math.max(end - start, 1)));
    };

    const requestProgress = () => {
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
        if (visible) {
          updateMetrics();
          requestProgress();
        }
      },
      { threshold: 0.28 },
    );

    updateMetrics();
    observer.observe(section);
    window.addEventListener("resize", updateMetrics);

    if (isVisible && !reducedMotion) {
      window.addEventListener("scroll", requestProgress, { passive: true });
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateMetrics);
      window.removeEventListener("scroll", requestProgress);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [isVisible, reducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [isVisible, isMobile]);

  const effectiveProgress = reducedMotion ? 1 : progress;
  const videoTranslate = isMobile
    ? 18 - effectiveProgress * 18
    : 38 - effectiveProgress * 56;
  const videoScale = isMobile
    ? 0.98 + effectiveProgress * 0.02
    : 0.92 + effectiveProgress * 0.1;
  const videoOpacity = 0.72 + effectiveProgress * 0.28;

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[var(--torii-black)] text-white"
      aria-label={title}
    >
      <div className="relative min-h-[620px] py-14 md:min-h-[760px] md:py-20">
        <Image
          src={bgDesktopSrc}
          alt=""
          fill
          sizes="100vw"
          className="hidden object-cover opacity-80 md:block"
        />
        <Image
          src={bgMobileSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-75 md:hidden"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,16,0.82),rgba(16,16,16,0.38),rgba(196,30,47,0.12))]" />

        <div className="container-page relative z-10 grid min-h-[520px] items-center gap-8 md:min-h-[620px] md:grid-cols-[0.78fr_1.22fr]">
          <div className="max-w-xl">
            <span className="eyebrow text-white">{eyebrow}</span>
            <h2 className="mt-5 text-4xl font-black leading-[1.02] md:text-6xl">
              {title}
            </h2>
            <p className="mt-5 max-w-md text-base font-semibold leading-7 text-white/78 md:text-lg">
              {text}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[760px]">
            <div
              className="relative overflow-hidden rounded-lg border border-white/18 bg-black/36 shadow-[0_34px_90px_rgba(0,0,0,0.38)]"
              style={{
                opacity: videoOpacity,
                transform: `translate3d(${isMobile ? 0 : videoTranslate}px, ${isMobile ? videoTranslate : 0}px, 0) scale(${videoScale})`,
              }}
            >
              <video
                key={isMobile ? videoMobileSrc : videoDesktopSrc}
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                poster={isMobile ? bgMobileAltSrc : bgDesktopSrc}
                className="aspect-[16/10] h-full w-full object-cover md:aspect-[16/9]"
                controls={false}
                disablePictureInPicture
              >
                <source
                  src={isMobile ? videoMobileSrc : videoDesktopSrc}
                  type="video/mp4"
                />
              </video>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 md:hidden">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/12 bg-black/20">
                <Image
                  src={bgMobileSrc}
                  alt=""
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/12 bg-black/20">
                <Image
                  src={bgMobileAltSrc}
                  alt=""
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
