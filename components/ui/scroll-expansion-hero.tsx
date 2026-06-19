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

function mapRange(
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
) {
  const mapped =
    outputMin +
    ((value - inputMin) / Math.max(inputMax - inputMin, 0.0001)) *
      (outputMax - outputMin);

  return clamp(
    mapped,
    Math.min(outputMin, outputMax),
    Math.max(outputMin, outputMax),
  );
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - clamp(value), 3);
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
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
  const visibleRef = useRef(false);
  const mobileRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMedia = () => {
      mobileRef.current = mobileQuery.matches;
      reducedMotionRef.current = reducedQuery.matches;
      setReducedMotion(reducedMotionRef.current);
      if (mobileRef.current || reducedMotionRef.current) setProgress(0);
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

    const updateProgress = () => {
      frameRef.current = null;

      if (
        !visibleRef.current ||
        mobileRef.current ||
        reducedMotionRef.current
      ) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const scrollable = Math.max(rect.height - viewportH, 1);
      const rawProgress = clamp(-rect.top / scrollable);

      setProgress(rawProgress);
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
        if (entry.isIntersecting) requestProgress();
      },
      { rootMargin: "0px", threshold: 0.01 },
    );

    observer.observe(section);
    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", requestProgress);
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
  }, [isVisible, reducedMotion]);

  const activeMediaSrc = mobileMediaSrc ?? mediaSrc;
  const activePosterSrc = mobilePosterSrc ?? posterSrc;
  const expansionProgress = reducedMotion
    ? 0
    : easeOutCubic(mapRange(progress, 0.08, 0.92, 0, 1));
  const textFadeProgress = reducedMotion
    ? 0
    : easeOutCubic(mapRange(progress, 0.08, 0.45, 0, 1));
  const textOpacity = 1 - textFadeProgress;

  const backgroundStyle: CSSProperties = {
    transform: !reducedMotion
      ? `translate3d(0, ${lerp(0, -14, expansionProgress)}px, 0) scale(${lerp(
          1.035,
          1.01,
          expansionProgress,
        )})`
      : undefined,
    willChange: !reducedMotion ? "transform" : undefined,
  };

  const desktopCardStyle: CSSProperties = {
    width: `${lerp(52, 88, expansionProgress)}vw`,
    height: `${lerp(48, 82, expansionProgress)}svh`,
    borderRadius: `${lerp(28, 10, expansionProgress)}px`,
    boxShadow: `0 34px 90px rgba(0,0,0,${lerp(0.32, 0.2, expansionProgress)})`,
    transform: "translate3d(-50%, -50%, 0) scale(1)",
    willChange: "width, height, border-radius",
  };

  const mobileCardStyle: CSSProperties = {
    width: "min(92vw, 420px)",
    height: "min(64svh, 560px)",
    borderRadius: "26px",
    boxShadow: "0 22px 58px rgba(0,0,0,0.24)",
    opacity: 1,
    transform: "translate3d(0, 0, 0) scale(1)",
  };

  const sectionClassName = reducedMotion
    ? "relative isolate hidden h-svh overflow-clip bg-[#fffdf9] md:block"
    : "relative isolate hidden h-[115svh] overflow-clip bg-[#fffdf9] md:block lg:h-[125svh]";

  return (
    <>
      <section ref={sectionRef} className={sectionClassName} aria-label={title}>
        <div className="sticky top-0 h-svh overflow-hidden">
          <Image
            src={bgImageSrc}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[54%_50%] opacity-100"
            priority={false}
            style={backgroundStyle}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.1)_42%,rgba(0,0,0,0.26))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_58%)]" />

          <div
            className="absolute left-1/2 top-[11svh] z-20 w-[min(calc(100%_-_32px),1180px)] max-w-[1180px] -translate-x-1/2 text-white"
            style={{
              opacity: textOpacity,
              transform: `translate3d(-50%, ${lerp(
                0,
                -18,
                textFadeProgress,
              )}px, 0)`,
              pointerEvents: textOpacity < 0.08 ? "none" : undefined,
            }}
          >
            <div className="max-w-[460px]">
              <p className="text-xs font-black uppercase text-white/78">
                {date}
              </p>
              <h2 className="mt-3 text-5xl font-black leading-[1.02]">
                {title}
              </h2>
              <p className="mt-4 max-w-[390px] text-base font-bold leading-7 text-white/78">
                {scrollToExpand}
              </p>
            </div>
          </div>

          <div
            className="absolute left-1/2 top-1/2 z-10 overflow-hidden border border-white/20 bg-neutral-950 shadow-[0_28px_75px_rgba(0,0,0,0.3)]"
            style={desktopCardStyle}
          >
            <video
              key={mediaSrc}
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
              <source src={mediaSrc} type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/14 to-transparent" />
          </div>
        </div>
      </section>

      <section
        className="relative isolate block overflow-hidden bg-[#fffdf9] px-4 py-10 md:hidden"
        aria-label={title}
      >
        <Image
          src={bgImageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[54%_50%] opacity-100"
          priority={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.1)_42%,rgba(0,0,0,0.26))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_58%)]" />

        <div className="relative z-20 mx-auto w-full max-w-[520px] text-white">
          <div className="max-w-[460px]">
            <p className="text-xs font-black uppercase text-white/78">{date}</p>
            <h2 className="mt-3 text-3xl font-black leading-[1.02]">{title}</h2>
            <p className="mt-4 max-w-[390px] text-base font-bold leading-7 text-white/78">
              {scrollToExpand}
            </p>
          </div>
        </div>

        <div
          className="relative z-10 mx-auto mt-8 overflow-hidden border border-white/20 bg-neutral-950 shadow-[0_28px_75px_rgba(0,0,0,0.3)] transition-[opacity,transform,width,height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={mobileCardStyle}
        >
          <video
            key={activeMediaSrc}
            muted
            loop
            playsInline
            preload="metadata"
            poster={activePosterSrc}
            autoPlay
            className="h-full w-full object-cover"
            controls={false}
            disablePictureInPicture
          >
            <source src={activeMediaSrc} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/14 to-transparent" />
        </div>
      </section>
    </>
  );
}
