"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollExpandMediaProps = {
  mediaType: "video" | "image";
  mediaSrc: string;
  mobileMediaSrc?: string;
  posterSrc?: string;
  mobilePosterSrc?: string;
  bgImageSrc: string;
  mobileBgImageSrc?: string;
  title: string;
  date: string;
  scrollToExpand: string;
  textBlend?: boolean;
  children?: ReactNode;
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollExpandMedia({
  mediaType,
  mediaSrc,
  mobileMediaSrc,
  posterSrc,
  mobilePosterSrc,
  bgImageSrc,
  mobileBgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend = false,
  children,
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
      const start = top - viewport * 0.72;
      const end = top + height - viewport * 0.44;
      setProgress(clamp((window.scrollY - start) / Math.max(end - start, 1)));
    };

    const requestProgress = () => {
      if (
        frameRef.current === null &&
        !mobileRef.current &&
        !reducedMotionRef.current
      ) {
        frameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        visibleRef.current = visible;
        setIsVisible(visible);
        if (visible) {
          updateMetrics();
          requestProgress();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 },
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
    if (!video || mediaType !== "video") return;

    if (isVisible && !reducedMotion) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [isVisible, reducedMotion, mediaType, isMobile]);

  const activeMediaSrc = isMobile && mobileMediaSrc ? mobileMediaSrc : mediaSrc;
  const activePosterSrc =
    isMobile && mobilePosterSrc ? mobilePosterSrc : posterSrc;
  const activeBgImageSrc =
    isMobile && mobileBgImageSrc ? mobileBgImageSrc : bgImageSrc;
  const effectiveProgress = isMobile || reducedMotion ? 1 : progress;
  const photoOpacity = isMobile ? 0.22 : 1 - effectiveProgress * 0.76;
  const mediaOpacity = isMobile ? 1 : 0.18 + effectiveProgress * 0.82;
  const mediaScale = isMobile ? 1 : 0.9 + effectiveProgress * 0.1;
  const mediaTranslate = isMobile ? 0 : 26 - effectiveProgress * 26;

  const mediaStyle: CSSProperties = {
    opacity: mediaOpacity,
    transform: `translate3d(0, ${mediaTranslate}px, 0) scale(${mediaScale})`,
    willChange: isMobile || reducedMotion ? undefined : "opacity, transform",
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#fffaf4] py-14 md:py-20"
      aria-label={title}
    >
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">{date}</span>
            <h2 className="mt-5 text-3xl font-black leading-[1.04] text-neutral-950 md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-md text-base font-semibold leading-7 text-neutral-600 md:text-lg">
              {scrollToExpand}
            </p>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg border border-black/10 bg-neutral-950 shadow-[0_30px_80px_rgba(16,16,16,0.16)]">
              <div className="relative aspect-[4/5] md:aspect-[16/9]">
                <Image
                  src={activeBgImageSrc}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 92vw, 760px"
                  className="object-cover object-center"
                  style={{ opacity: photoOpacity }}
                />
                {mediaType === "video" ? (
                  <video
                    key={activeMediaSrc}
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={activePosterSrc}
                    className="absolute inset-0 h-full w-full object-cover"
                    controls={false}
                    disablePictureInPicture
                    style={mediaStyle}
                  >
                    <source src={activeMediaSrc} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={activeMediaSrc}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 92vw, 760px"
                    className="object-cover object-center"
                    style={mediaStyle}
                  />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.38))]" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-white md:bottom-5 md:left-5 md:right-5">
                  <p
                    className={`text-sm font-black uppercase tracking-wide ${
                      textBlend ? "mix-blend-screen" : ""
                    }`}
                  >
                    Foto para vídeo
                  </p>
                  <p className="rounded-full bg-white/88 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-neutral-950 backdrop-blur">
                    Torii
                  </p>
                </div>
              </div>
            </div>

            {children ? (
              <div className="mt-5 text-sm font-bold leading-7 text-neutral-600 md:text-base">
                {children}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
