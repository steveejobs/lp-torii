"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { foodGalleryMedia } from "@/data/torii-media";

type GalleryItem = {
  src: string;
  alt: string;
};

const categories = [
  "Sushis e sashimis",
  "Temakis",
  "Pokes",
  "Combinados",
  "Pecas especiais",
];

function GalleryCard({
  item,
  index,
  compact = false,
}: {
  item: GalleryItem;
  index: number;
  compact?: boolean;
}) {
  return (
    <figure
      className={`group relative shrink-0 overflow-hidden rounded-[18px] bg-neutral-950 shadow-[0_18px_42px_rgba(16,16,16,0.09)] ${
        compact
          ? "h-[220px] w-[72vw]"
          : index % 5 === 0
            ? "h-[250px] w-[360px]"
            : index % 3 === 0
              ? "h-[250px] w-[300px]"
              : "h-[250px] w-[250px]"
      }`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes={
          compact
            ? "(max-width: 768px) 72vw, 300px"
            : "(max-width: 768px) 72vw, 360px"
        }
        quality={88}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.02]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
    </figure>
  );
}

function GalleryLoop({
  items,
  direction,
  animationState,
  indexOffset = 0,
}: {
  items: GalleryItem[];
  direction: "left" | "right";
  animationState: "running" | "paused";
  indexOffset?: number;
}) {
  return (
    <div
      className={`gallery-marquee ${
        direction === "left" ? "gallery-marquee-left" : "gallery-marquee-right"
      } flex w-max gap-4`}
      style={{ animationPlayState: animationState }}
    >
      <div className="flex gap-4">
        {items.map((item, index) => (
          <GalleryCard
            key={`${item.src}-${direction}`}
            item={item}
            index={index + indexOffset}
          />
        ))}
      </div>
      <div className="flex gap-4" aria-hidden="true">
        {items.map((item, index) => (
          <GalleryCard
            key={`${item.src}-${direction}-loop`}
            item={item}
            index={index + indexOffset}
          />
        ))}
      </div>
    </div>
  );
}

export function FoodGallerySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const galleryItems = useMemo<GalleryItem[]>(
    () => foodGalleryMedia.map((item) => ({ src: item.src, alt: item.alt })),
    [],
  );

  const midpoint = Math.ceil(galleryItems.length / 2);
  const firstRow = galleryItems.slice(0, midpoint);
  const secondRow = galleryItems.slice(midpoint);
  const animationState = isVisible && !reducedMotion ? "running" : "paused";

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncReducedMotion = () => {
      setReducedMotion(reducedQuery.matches);
      if (reducedQuery.matches) setIsVisible(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    reducedQuery.addEventListener("change", syncReducedMotion);
    syncReducedMotion();

    return () => {
      observer.disconnect();
      reducedQuery.removeEventListener("change", syncReducedMotion);
    };
  }, []);

  return (
    <section
      id="destaques"
      ref={sectionRef}
      className="overflow-hidden bg-[#f7f2ec] pb-12 pt-10 md:pb-16 md:pt-12"
    >
      <div className="container-page">
        <div className="grid gap-7 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <span className="eyebrow">DA COZINHA TORII</span>
            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[1.02] text-neutral-950 md:text-6xl">
              Uma galeria de sabores para abrir o apetite.
            </h2>
          </div>
          <p className="max-w-xl text-base font-semibold leading-7 text-neutral-600 md:justify-self-end md:text-lg">
            Sushis, temakis, pokes, combinados e pecas especiais em uma selecao
            pensada para a noite.
          </p>
        </div>
      </div>

      <div
        className={`mt-10 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible || reducedMotion
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-2 md:hidden">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.src} item={item} index={index} compact />
          ))}
        </div>

        <div className="hidden space-y-4 md:block">
          <GalleryLoop
            items={firstRow}
            direction="left"
            animationState={animationState}
          />
          <GalleryLoop
            items={secondRow}
            direction="right"
            animationState={animationState}
            indexOffset={2}
          />
        </div>
      </div>

      <div className="container-page">
        <div className="no-scrollbar mt-7 flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-center md:overflow-visible md:pb-0">
          {categories.map((category, index) => (
            <span
              key={category}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-wide transition ${
                index === 0
                  ? "border-[var(--torii-red)] bg-white text-[var(--torii-red)] shadow-[0_10px_24px_rgba(196,30,47,0.08)]"
                  : "border-black/10 bg-white/78 text-neutral-700 hover:border-[var(--torii-red)]/40 hover:text-neutral-950"
              }`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
