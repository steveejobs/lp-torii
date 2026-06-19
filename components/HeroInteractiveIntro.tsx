import Image from "next/image";
import { images } from "@/lib/site";

function HeroBurnReveal() {
  return (
    <div className="hero-burn-reveal" aria-hidden="true">
      <svg
        className="hero-burn-reveal__svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <pattern
            id="hero-paper-grain"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="0.8" cy="1.1" r="0.08" fill="rgba(82,53,31,0.3)" />
            <circle cx="2.7" cy="0.9" r="0.06" fill="rgba(255,255,255,0.45)" />
            <circle cx="3.2" cy="3.1" r="0.07" fill="rgba(82,53,31,0.22)" />
            <path
              d="M0 3.7 C1.2 3.4 2.5 3.9 4 3.5"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.05"
              fill="none"
            />
          </pattern>
          <mask id="hero-burn-paper-mask" maskUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="white" />
            <g className="hero-burn-hole-mask">
              <path
                d="M42.9 48.1 C47.9 47.8 52.2 51.4 52.1 56.4 C52 62 47.8 66.8 42.3 66.3 C37.2 65.8 33.4 62 33.6 56.9 C33.8 51.7 38.3 48.4 42.9 48.1 Z"
                fill="black"
              />
              <path
                d="M50.1 55.4 C54.3 54.4 58.4 56.7 59.4 61 C60.4 65.3 57.1 69.1 52.7 69.5 C49.2 69.8 45.4 67.3 45.1 63.2 C44.8 59.5 46.9 56.1 50.1 55.4 Z"
                fill="black"
              />
              <path
                d="M37.4 59.6 C40.1 60 42.4 62.4 41.7 65.2 C40.9 68.4 37.5 70.2 34.5 68.8 C31.8 67.5 30.8 64.3 32.4 61.9 C33.5 60.2 35.1 59.2 37.4 59.6 Z"
                fill="black"
              />
            </g>
          </mask>
        </defs>
        <rect
          className="hero-burn-paper-base"
          width="100"
          height="100"
          mask="url(#hero-burn-paper-mask)"
        />
        <rect
          className="hero-burn-paper-grain"
          width="100"
          height="100"
          fill="url(#hero-paper-grain)"
          mask="url(#hero-burn-paper-mask)"
        />
        <g className="hero-burn-edge-glow">
          <path d="M42.9 48.1 C47.9 47.8 52.2 51.4 52.1 56.4 C52 62 47.8 66.8 42.3 66.3 C37.2 65.8 33.4 62 33.6 56.9 C33.8 51.7 38.3 48.4 42.9 48.1 Z" />
          <path d="M50.1 55.4 C54.3 54.4 58.4 56.7 59.4 61 C60.4 65.3 57.1 69.1 52.7 69.5 C49.2 69.8 45.4 67.3 45.1 63.2 C44.8 59.5 46.9 56.1 50.1 55.4 Z" />
          <path d="M37.4 59.6 C40.1 60 42.4 62.4 41.7 65.2 C40.9 68.4 37.5 70.2 34.5 68.8 C31.8 67.5 30.8 64.3 32.4 61.9 C33.5 60.2 35.1 59.2 37.4 59.6 Z" />
        </g>
        <g className="hero-burn-edge-char">
          <path d="M42.9 48.1 C47.9 47.8 52.2 51.4 52.1 56.4 C52 62 47.8 66.8 42.3 66.3 C37.2 65.8 33.4 62 33.6 56.9 C33.8 51.7 38.3 48.4 42.9 48.1 Z" />
          <path d="M50.1 55.4 C54.3 54.4 58.4 56.7 59.4 61 C60.4 65.3 57.1 69.1 52.7 69.5 C49.2 69.8 45.4 67.3 45.1 63.2 C44.8 59.5 46.9 56.1 50.1 55.4 Z" />
          <path d="M37.4 59.6 C40.1 60 42.4 62.4 41.7 65.2 C40.9 68.4 37.5 70.2 34.5 68.8 C31.8 67.5 30.8 64.3 32.4 61.9 C33.5 60.2 35.1 59.2 37.4 59.6 Z" />
        </g>
      </svg>
    </div>
  );
}

export function HeroInteractiveIntro() {
  return (
    <section className="bg-[#fffdf9] pt-4 md:pt-6" aria-label="Abertura Torii">
      <div className="container-page">
        <div className="intro-stage relative isolate h-[76svh] min-h-[520px] overflow-hidden rounded-lg border border-black/10 bg-[#fffdf9] shadow-[0_28px_76px_rgba(16,16,16,0.1)] md:h-[84vh] md:min-h-[640px]">
          <Image
            src={images.heroIntro}
            alt="Preparo de sushi no Torii com acabamento delicado"
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 24px), (max-width: 1280px) calc(100vw - 32px), 1180px"
            className="absolute inset-0 object-cover object-[55%_50%] opacity-100 md:object-[54%_50%] lg:object-[55%_50%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.08)_48%,rgba(0,0,0,0.36)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.13)_38%,rgba(0,0,0,0.02)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(196,30,47,0.08),transparent_44%)]" />
          <HeroBurnReveal />

          <div className="hero-intro-copy relative z-40 flex h-full max-w-[520px] flex-col justify-end p-6 md:p-10">
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
