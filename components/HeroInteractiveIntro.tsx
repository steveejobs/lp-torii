import Image from "next/image";
import { images } from "@/lib/site";

const burnShapes = [
  {
    key: "core",
    className: "hero-burn-shape hero-burn-shape--core",
    d: "M43.2 48.4C48.9 43.5 58.4 45.6 62.1 52.3C65.8 59.1 61.2 68.7 52.4 71.7C44.2 74.5 34.5 70.9 32.7 62.8C31 55.3 37 53.7 43.2 48.4Z",
  },
  {
    key: "upper",
    className: "hero-burn-shape hero-burn-shape--upper",
    d: "M45.7 37.6C51.1 33.4 60.3 35.6 63.8 41.2C67.6 47.4 64 56.6 55.6 59.2C48.5 61.5 39.4 58.8 36.6 52.2C33.9 45.7 40.1 42 45.7 37.6Z",
  },
  {
    key: "right",
    className: "hero-burn-shape hero-burn-shape--right",
    d: "M62.7 48.7C70.1 47.1 76.7 51.8 78.5 58.7C80.4 66.3 74.2 74.7 65.2 75.9C57.1 77 50.7 71.6 50.4 64.2C50.1 56.8 55.8 50.1 62.7 48.7Z",
  },
  {
    key: "lower",
    className: "hero-burn-shape hero-burn-shape--lower",
    d: "M36.7 61.2C43.9 56.3 55 59.3 58.4 67.2C61.7 74.9 55.7 85.2 45.8 87.5C36.1 89.7 25.7 84.1 24.8 74.9C24 67.2 30.6 65.3 36.7 61.2Z",
  },
  {
    key: "left",
    className: "hero-burn-shape hero-burn-shape--left",
    d: "M28.8 48.3C34.1 43.2 42.2 45 45.6 51.2C49.1 57.7 45.1 66.1 37.2 68.3C29.8 70.4 21.3 66.7 19.6 59.4C18.1 53 23.7 53.2 28.8 48.3Z",
  },
  {
    key: "side",
    className: "hero-burn-shape hero-burn-shape--side",
    d: "M52.4 26.1C62.4 20.9 77.8 25.7 83.6 36.8C90.4 49.9 82 66 66.8 69.9C53.7 73.2 39.5 66.8 35.2 54.2C31.1 42.1 41.9 31.5 52.4 26.1Z",
  },
];

function BurnShapeLayer({
  className,
  filter,
}: {
  className: string;
  filter?: string;
}) {
  return (
    <g className={className} filter={filter}>
      {burnShapes.map((shape) => (
        <path key={shape.key} className={shape.className} d={shape.d} />
      ))}
    </g>
  );
}

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
            <line
              x1="0"
              y1="3.7"
              x2="4"
              y2="3.55"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.05"
            />
          </pattern>
          <filter
            id="hero-burn-organic-edge"
            x="-35"
            y="-35"
            width="170"
            height="170"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.052 0.09"
              numOctaves="3"
              seed="18"
              result="burnNoise"
            >
              <animate
                attributeName="baseFrequency"
                begin="0.12s"
                dur="2.3s"
                values="0.052 0.09;0.038 0.072;0.047 0.082"
                fill="freeze"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="burnNoise"
              scale="3.8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter
            id="hero-burn-warm-blur"
            x="-30"
            y="-30"
            width="160"
            height="160"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
          <mask id="hero-burn-paper-mask" maskUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="white" />
            <BurnShapeLayer
              className="hero-burn-shapes hero-burn-shapes--mask"
              filter="url(#hero-burn-organic-edge)"
            />
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
        <circle className="hero-burn-ignition" cx="44" cy="58" r="1.18" />
        <BurnShapeLayer
          className="hero-burn-edge hero-burn-edge--glow"
          filter="url(#hero-burn-warm-blur)"
        />
        <BurnShapeLayer
          className="hero-burn-edge hero-burn-edge--toast"
          filter="url(#hero-burn-organic-edge)"
        />
        <BurnShapeLayer
          className="hero-burn-edge hero-burn-edge--char"
          filter="url(#hero-burn-organic-edge)"
        />
        <BurnShapeLayer
          className="hero-burn-edge hero-burn-edge--heat"
          filter="url(#hero-burn-organic-edge)"
        />
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
