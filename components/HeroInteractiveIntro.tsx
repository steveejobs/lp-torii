"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import InkReveal from "@/components/ui/ink-reveal";
import { images } from "@/lib/site";

type IntroStyle = React.CSSProperties & {
  "--x": string;
  "--y": string;
};

export function HeroInteractiveIntro() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const setVars = useCallback((x: number, y: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty("--x", `${x}%`);
    stage.style.setProperty("--y", `${y}%`);
  }, []);

  const flushPointer = useCallback(() => {
    frameRef.current = null;
    const stage = stageRef.current;
    const pointer = pointerRef.current;
    if (!stage || !pointer) return;
    const rect = rectRef.current ?? stage.getBoundingClientRect();
    setVars(
      ((pointer.x - rect.left) / rect.width) * 100,
      ((pointer.y - rect.top) / rect.height) * 100,
    );
  }, [setVars]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = false;
    let started = 0;

    const animateMobile = (time: number) => {
      if (!visible || !mobileQuery.matches || reducedQuery.matches) {
        frame = 0;
        return;
      }
      if (!started) started = time;
      const t = (time - started) / 1000;
      const x = 50 + Math.sin(t * 0.72) * 22;
      const y = 45 + Math.sin(t * 0.96 + 0.7) * 10;
      setVars(x, y);
      frame = requestAnimationFrame(animateMobile);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (reducedQuery.matches) {
          setVars(58, 44);
          return;
        }
        if (visible && mobileQuery.matches && !frame) {
          started = 0;
          frame = requestAnimationFrame(animateMobile);
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(stage);
    rectRef.current = stage.getBoundingClientRect();

    const cacheRect = () => {
      rectRef.current = stage.getBoundingClientRect();
    };
    window.addEventListener("resize", cacheRect);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", cacheRect);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [setVars]);

  return (
    <section className="bg-[#fffdf9] pt-4 md:pt-6" aria-label="Abertura Torii">
      <div className="container-page">
        <div
          ref={stageRef}
          className="intro-stage relative isolate h-[76svh] min-h-[520px] overflow-hidden rounded-lg border border-black/10 bg-[#fffdf9] shadow-[0_28px_76px_rgba(16,16,16,0.1)] md:h-[84vh] md:min-h-[640px]"
          style={{ "--x": "58%", "--y": "44%" } as IntroStyle}
          onMouseMove={(event) => {
            pointerRef.current = { x: event.clientX, y: event.clientY };
            if (frameRef.current === null) {
              frameRef.current = requestAnimationFrame(flushPointer);
            }
          }}
          onMouseEnter={(event) => {
            rectRef.current = event.currentTarget.getBoundingClientRect();
          }}
          onMouseLeave={() => {
            pointerRef.current = null;
          }}
        >
          <Image
            src={images.heroIntro}
            alt="Ambiente interno do Torii com luz quente e balcao iluminado"
            fill
            priority
            quality={92}
            sizes="(max-width: 768px) 100vw, 1180px"
            className="absolute inset-0 object-cover object-[58%_38%] opacity-100 md:object-[60%_38%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.08)_48%,rgba(0,0,0,0.36)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.13)_38%,rgba(0,0,0,0.02)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(196,30,47,0.08),transparent_44%)]" />
          <InkReveal
            maskColor={[16, 16, 16]}
            brushSize={210}
            lifetime={1320}
            stampStep={12}
            maxStamps={260}
            gradientStops={[1, 0.82, 0]}
            autoMobile={false}
            autoReveal
            autoRevealPath="horizontal"
            revealDelay={1580}
            revealFadeDuration={820}
            className="hidden md:block"
          />
          <InkReveal
            maskColor={[16, 16, 16]}
            brushSize={150}
            lifetime={1180}
            stampStep={16}
            maxStamps={150}
            gradientStops={[1, 0.84, 0]}
            autoReveal
            autoRevealPath="vertical"
            revealDelay={1320}
            revealFadeDuration={760}
            className="md:hidden"
          />

          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="intro-sun absolute h-28 w-28 rounded-full bg-[var(--torii-red)] opacity-95 shadow-[0_22px_58px_rgba(196,30,47,0.22)] md:h-44 md:w-44" />
            <div className="intro-line intro-line-a absolute h-px w-40 bg-black/80 md:w-72" />
            <div className="intro-line intro-line-b absolute h-px w-28 bg-black/50 md:w-52" />
          </div>

          <div className="relative z-30 flex h-full max-w-[520px] flex-col justify-end p-6 md:p-10">
            <Image
              src={images.logo}
              alt="Torii Restaurante Japonês"
              width={170}
              height={74}
              priority
              className="mb-5 h-auto w-[128px] drop-shadow-[0_8px_20px_rgba(0,0,0,0.2)] md:w-[170px]"
            />
            <p className="max-w-sm text-sm font-black uppercase tracking-[0.08em] text-white/82">
              Rodízio, delivery e retirada
            </p>
            <p className="mt-3 max-w-md text-2xl font-black leading-[1.05] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.28)] md:text-4xl">
              Para abrir a noite com presença, luz quente e cozinha japonesa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
