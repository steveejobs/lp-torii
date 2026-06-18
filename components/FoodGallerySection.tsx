"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { images } from "@/lib/site";

const galleryImages = [
  {
    src: images.foodGallery01,
    alt: "Uramakis com molho sendo servido",
    className: "md:col-span-5 md:row-span-2",
    sizes: "(max-width: 768px) 86vw, 42vw",
  },
  {
    src: images.foodGallery02,
    alt: "Sushi com salmão em close",
    className: "md:col-span-3 md:row-span-1",
    sizes: "(max-width: 768px) 76vw, 24vw",
  },
  {
    src: images.foodGallery03,
    alt: "Sushi servido em ambiente de luz baixa",
    className: "md:col-span-4 md:row-span-2",
    sizes: "(max-width: 768px) 76vw, 34vw",
  },
  {
    src: images.foodGallery04,
    alt: "Sushi em prato com wasabi",
    className: "md:col-span-4 md:row-span-1",
    sizes: "(max-width: 768px) 76vw, 34vw",
  },
  {
    src: images.foodGallery05,
    alt: "Uramaki em destaque com fundo desfocado",
    className: "md:col-span-3 md:row-span-2",
    sizes: "(max-width: 768px) 76vw, 24vw",
  },
  {
    src: images.foodGallery06,
    alt: "Peças de sushi em mesa clara",
    className: "md:col-span-5 md:row-span-1",
    sizes: "(max-width: 768px) 86vw, 42vw",
  },
];

const categories = [
  "Sushis e sashimis",
  "Temakis",
  "Pokes",
  "Combinados",
  "Peças especiais",
];

export function FoodGallerySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(reducedQuery.matches);

    const syncReducedMotion = () => {
      setReducedMotion(reducedQuery.matches);
      if (reducedQuery.matches) setIsVisible(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
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
      className="section-pad overflow-hidden bg-[#f7f2ec]"
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
            Sushis, temakis, pokes, combinados e peças especiais em uma seleção
            pensada para a noite.
          </p>
        </div>

        <div
          id="destaques-gallery"
          className="no-scrollbar mt-10 flex gap-3 overflow-x-auto pb-2 md:grid md:auto-rows-[178px] md:grid-cols-12 md:gap-4 md:overflow-visible md:pb-0 lg:auto-rows-[196px]"
        >
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative h-[320px] min-w-[76vw] overflow-hidden rounded-lg bg-neutral-950 shadow-[0_20px_60px_rgba(16,16,16,0.08)] transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-auto md:min-w-0 ${
                image.className
              } ${
                isVisible || reducedMotion
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 scale-[0.985] opacity-0"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={image.sizes}
                quality={88}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/5 opacity-80" />
            </figure>
          ))}
        </div>

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
