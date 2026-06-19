import Image from "next/image";
import { images } from "@/lib/site";

function HeroBurnReveal() {
  return (
    <div className="hero-burn-reveal" aria-hidden="true">
      <div className="hero-burn-reveal__edge" />
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
