import Image from "next/image";
import { images } from "@/lib/site";

export function HeroMotionPlaceholder() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[24px] border border-black/10 bg-[#fffaf4] p-4 shadow-[0_28px_80px_rgba(16,16,16,0.1)] md:rounded-lg md:p-0">
      <div className="absolute right-5 top-5 hidden h-16 w-16 rounded-full bg-[var(--torii-red)] shadow-[0_18px_45px_rgba(196,30,47,0.2)] md:block md:h-24 md:w-24" />
      <div className="absolute left-5 top-7 hidden h-px w-32 origin-left animate-[lineSweep_4.5s_ease-in-out_infinite] bg-black md:left-8 md:block md:w-56" />
      <div className="absolute bottom-8 right-7 hidden h-px w-28 origin-left animate-[lineSweep_5.4s_ease-in-out_infinite] bg-black/80 md:block md:w-44" />

      <div className="md:hidden">
        <div className="relative h-[210px] overflow-hidden rounded-[24px] bg-neutral-950">
          <Image
            src={images.heroIntro}
            alt="Ambiente interno do Torii com luz quente"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            quality={86}
            loading="lazy"
            className="object-cover object-[58%_38%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/8 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.08em] text-white/82">
              TORII À NOITE
            </p>
            <p className="mt-2 max-w-[15rem] text-2xl font-black leading-[1.02] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.26)]">
              Noite japonesa em Araguaína.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {["Luz quente", "Madeira", "Ritmo de jantar"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border-b border-black/10 pb-3 text-xs font-black uppercase tracking-wide text-neutral-800 last:border-0 last:pb-0"
            >
              <span>{item}</span>
              <span className="h-1.5 w-8 rounded-full bg-[var(--torii-red)]/85" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative hidden aspect-[5/4] content-between p-8 md:grid">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.08em] text-[var(--torii-red)]">
            Torii à noite
          </p>
          <p className="mt-4 max-w-[15rem] text-4xl font-black leading-[0.95] text-neutral-950 md:text-5xl">
            Noite japonesa em Araguaína.
          </p>
        </div>

        <div className="grid gap-3">
          {["Luz quente", "Madeira", "Ritmo de jantar"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border-b border-black/12 pb-3 text-sm font-black uppercase tracking-wide text-neutral-800"
            >
              <span>{item}</span>
              <span className="h-2 w-8 rounded-full bg-[var(--torii-red)]" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-8 h-20 w-20 border-l border-t border-black/18" />
        <div className="absolute right-10 top-28 h-28 w-px bg-black/16" />
      </div>
    </div>
  );
}
