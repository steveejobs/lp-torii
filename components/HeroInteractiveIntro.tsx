import Image from "next/image";
import { images } from "@/lib/site";

const revealShapes = [
  {
    key: "main",
    className: "hero-organic-shape hero-organic-shape--main",
    d: "M35.3 30.7C48.8 20.6 69.8 25.4 78.4 39.7C87.2 54.5 77.6 75.2 57.3 81.6C39.8 87.1 20.7 78.9 16.1 63.1C12.2 49.7 24.2 39 35.3 30.7Z",
  },
  {
    key: "right",
    className: "hero-organic-shape hero-organic-shape--right",
    d: "M62.5 19.8C79.4 16.7 94.2 30.5 95.1 49.6C96 68.6 80.8 86.1 61.2 84.3C44.8 82.8 35.8 69.2 40 53.7C44 39.3 49.6 22.2 62.5 19.8Z",
  },
  {
    key: "lower",
    className: "hero-organic-shape hero-organic-shape--lower",
    d: "M31.8 55.4C47.1 44.4 72.2 50.4 80.1 67.3C88.2 84.6 73.5 101.8 50.3 101.3C29.4 100.9 8.6 87.9 8.9 72.6C9.1 61.1 21.6 62.7 31.8 55.4Z",
  },
];

function RevealShapeLayer() {
  return (
    <g className="hero-organic-shapes" filter="url(#hero-organic-soft-edge)">
      {revealShapes.map((shape) => (
        <path key={shape.key} className={shape.className} d={shape.d} />
      ))}
    </g>
  );
}

function HeroOrganicReveal() {
  return (
    <div className="hero-organic-reveal" aria-hidden="true">
      <svg
        className="hero-organic-reveal__svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <pattern
            id="hero-washi-fiber"
            width="9"
            height="9"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.6" cy="2.2" r="0.09" fill="#5f5a51" />
            <circle cx="5.4" cy="1.3" r="0.07" fill="#ffffff" />
            <circle cx="7.2" cy="6.6" r="0.08" fill="#5f5a51" />
            <circle cx="3.1" cy="7.7" r="0.06" fill="#ffffff" />
          </pattern>
          <pattern
            id="hero-shoji-grid"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M25 0H0V25"
              fill="none"
              stroke="#111111"
              strokeOpacity="1"
              strokeWidth="0.16"
            />
          </pattern>
          <filter
            id="hero-organic-soft-edge"
            x="-18"
            y="-18"
            width="136"
            height="136"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="1.25" />
          </filter>
          <mask id="hero-organic-paper-mask" maskUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="white" />
            <RevealShapeLayer />
          </mask>
        </defs>
        <rect
          className="hero-organic-paper"
          width="100"
          height="100"
          mask="url(#hero-organic-paper-mask)"
        />
        <rect
          className="hero-washi-fiber"
          width="100"
          height="100"
          fill="url(#hero-washi-fiber)"
          mask="url(#hero-organic-paper-mask)"
        />
        <rect
          className="hero-shoji-grid"
          width="100"
          height="100"
          fill="url(#hero-shoji-grid)"
          mask="url(#hero-organic-paper-mask)"
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
          <HeroOrganicReveal />

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
