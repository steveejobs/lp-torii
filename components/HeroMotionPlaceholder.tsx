import Image from "next/image";
import { images } from "@/lib/site";

const frames = [
  {
    src: images.ambiente1,
    alt: "Salão do Torii Restaurante Japonês com madeira, balcão preto e luz quente",
    className: "animate-[heroClipA_9s_ease-in-out_infinite]",
  },
  {
    src: images.heroIntro,
    alt: "Preparo de sushi do Torii em bancada",
    className: "animate-[heroClipB_9s_ease-in-out_infinite]",
  },
  {
    src: images.fachada,
    alt: "Fachada preta do Torii Restaurante Japonês à noite",
    className: "animate-[heroClipC_9s_ease-in-out_infinite]",
  },
];

export function HeroMotionPlaceholder() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_28px_80px_rgba(16,16,16,0.12)]">
      <div className="absolute right-5 top-5 z-20 h-16 w-16 rounded-full bg-[var(--torii-red)] shadow-[0_18px_45px_rgba(196,30,47,0.22)] md:h-24 md:w-24" />
      <div className="absolute left-5 top-7 z-20 h-px w-32 origin-left animate-[lineSweep_4.5s_ease-in-out_infinite] bg-black md:left-8 md:w-56" />
      <div className="absolute bottom-8 right-7 z-20 h-px w-28 origin-left animate-[lineSweep_5.4s_ease-in-out_infinite] bg-black/80 md:w-44" />

      <div className="relative aspect-[4/5] md:aspect-[5/4]">
        {frames.map((frame, index) => (
          <Image
            key={frame.src}
            src={frame.src}
            alt={frame.alt}
            fill
            sizes="(max-width: 768px) 92vw, 560px"
            priority={index === 0}
            className={`absolute inset-0 object-cover ${frame.className}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-white/10" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/20 bg-black/54 px-5 py-4 text-white backdrop-blur-md md:px-7">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-extrabold md:text-base">
            Salão, cozinha e fachada
          </p>
          <span
            className="h-2 w-10 rounded-full bg-[var(--torii-red)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
