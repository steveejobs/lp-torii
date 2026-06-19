"use client";

import Image from "next/image";
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
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => setReducedMotion(reducedQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
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
    const videos = [desktopVideoRef.current, mobileVideoRef.current].filter(
      Boolean,
    ) as HTMLVideoElement[];

    videos.forEach((video) => {
      if (isVisible && !reducedMotion) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [isVisible, reducedMotion]);

  const activeMobileSrc = mobileMediaSrc ?? mediaSrc;
  const activeMobilePoster = mobilePosterSrc ?? posterSrc;

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#fffdf9] px-4 pb-0 pt-10 md:px-0 md:pt-14"
      aria-label={title}
    >
      <div className="container-page">
        <div
          className={`relative isolate overflow-hidden rounded-lg border border-black/10 bg-neutral-950 shadow-[0_24px_70px_rgba(16,16,16,0.12)] transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible || reducedMotion
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <Image
            src={bgImageSrc}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[54%_50%] opacity-55"
            priority={false}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.62),rgba(0,0,0,0.26)_46%,rgba(0,0,0,0.34))]" />

          <div className="relative z-10 grid gap-6 p-4 md:grid-cols-[0.72fr_1.28fr] md:items-end md:p-6 lg:p-8">
            <div className="text-white">
              <p className="text-xs font-black uppercase text-white/76">
                {date}
              </p>
              <h2 className="mt-3 max-w-md text-3xl font-black leading-[1.02] md:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-sm text-base font-bold leading-7 text-white/76">
                {scrollToExpand}
              </p>
            </div>

            <div className="hidden overflow-hidden rounded-lg border border-white/20 bg-neutral-950 shadow-[0_28px_75px_rgba(0,0,0,0.3)] md:block">
              <video
                key={mediaSrc}
                ref={desktopVideoRef}
                muted
                loop
                playsInline
                preload="metadata"
                poster={posterSrc}
                className="aspect-[16/9] h-auto w-full object-cover"
                controls={false}
                disablePictureInPicture
              >
                <source src={mediaSrc} type="video/mp4" />
              </video>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-white/20 bg-neutral-950 shadow-[0_18px_46px_rgba(0,0,0,0.24)] md:hidden">
              <video
                key={activeMobileSrc}
                ref={mobileVideoRef}
                muted
                loop
                playsInline
                preload="metadata"
                poster={activeMobilePoster}
                className="aspect-[9/13] max-h-[520px] w-full object-cover"
                controls={false}
                disablePictureInPicture
              >
                <source src={activeMobileSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
