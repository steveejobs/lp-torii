import Image from "next/image";
import { images } from "@/lib/site";

const revealShapes = [
  {
    key: "core",
    className: "hero-organic-shape hero-organic-shape--core",
    d: "M39.8 49.8C46.3 43.9 58.2 45.7 63.6 52.9C69.1 60.3 64 70.8 53.9 73.9C44.7 76.7 33.5 72.4 31.3 63.6C29.6 56.7 34.2 54.9 39.8 49.8Z",
  },
  {
    key: "upper",
    className: "hero-organic-shape hero-organic-shape--upper",
    d: "M47.3 32.2C54.8 27.8 66.5 31.2 70.8 39.4C75.2 47.9 68.5 58.6 56.8 60.8C46.7 62.8 36.8 57.4 35.8 49.1C34.9 41.4 40.7 36.1 47.3 32.2Z",
  },
  {
    key: "right",
    className: "hero-organic-shape hero-organic-shape--right",
    d: "M66.1 45.3C75.1 43.9 83.4 50.1 84.4 59.5C85.4 69.7 76.3 78.2 64.2 77.3C54.1 76.5 48.4 68.8 50.7 60.4C52.8 52.6 58.8 46.5 66.1 45.3Z",
  },
  {
    key: "lower",
    className: "hero-organic-shape hero-organic-shape--lower",
    d: "M37.5 63.5C46.2 57.8 59.8 61.8 63.4 71.1C67.3 81 57.6 91.7 44.8 91.1C33.5 90.6 23.9 82.8 24.4 73.7C24.8 66.9 31.2 67.7 37.5 63.5Z",
  },
  {
    key: "left",
    className: "hero-organic-shape hero-organic-shape--left",
    d: "M25.5 43.5C34.4 38.2 45 41.8 48.2 51.1C51.3 60.2 43.6 70.1 31.9 70.4C20.9 70.7 12.2 63.4 13.3 54.8C14.1 48.1 19.8 46.8 25.5 43.5Z",
  },
  {
    key: "wide",
    className: "hero-organic-shape hero-organic-shape--wide",
    d: "M50.8 24.5C64.1 15.8 83.6 21.9 91.2 36.2C99.1 51.3 88.5 70.3 69 73.2C52.9 75.7 35.2 67 31.2 52.7C27.9 40.7 39.2 32.1 50.8 24.5Z",
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
          <filter
            id="hero-organic-soft-edge"
            x="-8"
            y="-8"
            width="116"
            height="116"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="0.36" />
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
