import type { Metadata } from "next";
import Image from "next/image";
import { InstagramMediaMarquee } from "@/components/InstagramMediaMarquee";
import { InstagramTestimonialsMarquee } from "@/components/InstagramTestimonialsMarquee";
import { InstagramVideoMoment } from "@/components/InstagramVideoMoment";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { toriiReviews } from "@/data/torii-reviews";
import {
  foodGalleryMedia,
  logoMedia,
  scrollExperienceMedia,
} from "@/data/torii-media";
import {
  ADDRESS,
  FULL_SITE_URL,
  GOOGLE_MAPS_URL,
  OPENING_HOURS,
  createWhatsAppLink,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(FULL_SITE_URL),
  title: "Torii Japanese Food | Links",
  description:
    "Reserve sua mesa, peça delivery ou veja a localização do Torii Japanese Food em Araguaína.",
  openGraph: {
    title: "Torii Japanese Food | Links",
    description:
      "Reserve sua mesa, peça delivery ou veja a localização do Torii Japanese Food em Araguaína.",
    url: "/instagram",
    images: [
      {
        url: logoMedia.src,
        width: 512,
        height: 512,
        alt: "Torii Japanese Food",
      },
    ],
  },
};

const whatsappLinks = {
  reservation: createWhatsAppLink(
    "Olá, vim pelo Instagram e quero reservar uma mesa no Torii.",
  ),
  delivery: createWhatsAppLink(
    "Olá, vim pelo Instagram e quero fazer um pedido para delivery.",
  ),
  pickup: createWhatsAppLink(
    "Olá, vim pelo Instagram e quero fazer um pedido para retirada.",
  ),
};

const instagramGalleryMedia = [
  foodGalleryMedia[9],
  foodGalleryMedia[2],
  foodGalleryMedia[5],
  foodGalleryMedia[11],
  foodGalleryMedia[14],
  foodGalleryMedia[17],
];

function IconRoute() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 21s7-5.35 7-12A7 7 0 0 0 5 9c0 6.65 7 12 7 12Zm0-9.4A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M13.2 5.25 20 12l-6.8 6.75-1.35-1.35 4.45-4.45H4v-1.9h12.3L11.85 6.6l1.35-1.35Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconBag() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M7.2 8V6.9a4.8 4.8 0 0 1 9.6 0V8h2.05l.85 12H4.3l.85-12H7.2Zm1.9 0h5.8V6.9a2.9 2.9 0 0 0-5.8 0V8Zm-2.18 1.8-.59 8.4h11.34l-.59-8.4H16.8v2.05h-1.9V9.8H9.1v2.05H7.2V9.8h-.28Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkButton({
  href,
  children,
  icon,
  primary = false,
  delay,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  primary?: boolean;
  delay: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`ig-rise flex min-h-[56px] items-center justify-between gap-4 rounded-[18px] border px-5 text-[0.95rem] font-black transition active:scale-[0.985] ${
        primary
          ? "border-neutral-950 bg-neutral-950 text-white shadow-[0_16px_34px_rgba(16,16,16,0.16)]"
          : "border-black/10 bg-white text-neutral-950 shadow-[0_10px_26px_rgba(16,16,16,0.05)]"
      }`}
      style={{ "--ig-delay": `${delay}ms` } as React.CSSProperties}
    >
      <span className="flex items-center gap-3">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            primary
              ? "bg-white/12 text-white"
              : "bg-[#fff4ec] text-[var(--torii-red)]"
          }`}
        >
          {icon}
        </span>
        {children}
      </span>
      <IconArrow />
    </a>
  );
}

export default function InstagramLinksPage() {
  return (
    <main className="min-h-svh bg-[radial-gradient(circle_at_top,rgba(196,30,47,0.08),transparent_30%),linear-gradient(180deg,#fffdf9,#f8f0e7)] px-4 py-5 text-neutral-950 sm:px-6 sm:py-8">
      <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-[28px] border border-black/8 bg-[#fffdf9]/92 px-4 py-5 shadow-[0_24px_70px_rgba(16,16,16,0.1)] backdrop-blur sm:px-5">
        <header className="ig-rise text-center">
          <Image
            src={logoMedia.src}
            alt={logoMedia.alt}
            width={210}
            height={82}
            priority
            className="mx-auto h-auto w-[172px] object-contain"
          />
          <h1 className="mt-4 text-2xl font-black leading-tight">
            Torii Japanese Food
          </h1>
          <p className="mx-auto mt-2 max-w-[19rem] text-[1.68rem] font-black leading-[1.04]">
            O japonês da sua noite em Araguaína.
          </p>
          <p className="mx-auto mt-3 max-w-[20rem] text-sm font-bold leading-6 text-neutral-600">
            Rodízio, delivery e retirada para aproveitar a noite com comida
            japonesa.
          </p>
          <p className="mt-4 inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-3.5 py-2 text-xs font-black text-neutral-900 shadow-[0_10px_22px_rgba(16,16,16,0.04)]">
            <span className="mr-2 text-[var(--torii-red)]">★★★★★</span>
            4,4 no Google · 382 avaliações
          </p>
        </header>

        <InstagramMediaMarquee media={instagramGalleryMedia} />

        <nav className="mt-5 grid gap-3" aria-label="Links principais">
          <LinkButton
            href={whatsappLinks.reservation}
            icon={<WhatsAppIcon className="h-5 w-5" />}
            primary
            delay={150}
          >
            Reservar pelo WhatsApp
          </LinkButton>
          <LinkButton
            href={whatsappLinks.delivery}
            icon={<IconBag />}
            delay={220}
          >
            Pedir delivery
          </LinkButton>
          <LinkButton
            href={whatsappLinks.pickup}
            icon={<IconBag />}
            delay={290}
          >
            Pedir para retirada
          </LinkButton>
          <LinkButton href={FULL_SITE_URL} icon={<IconArrow />} delay={360}>
            Acessar site completo
          </LinkButton>
        </nav>

        <InstagramVideoMoment
          videoSrc={scrollExperienceMedia.mobileVideo}
          posterSrc={scrollExperienceMedia.background.src}
        />

        <InstagramTestimonialsMarquee reviews={toriiReviews} />

        <section
          className="ig-rise mt-5 rounded-[24px] bg-neutral-950 p-4 text-white shadow-[0_14px_34px_rgba(16,16,16,0.12)]"
          style={{ "--ig-delay": "640ms" } as React.CSSProperties}
        >
          <h2 className="text-2xl font-black leading-tight">
            Estamos em Araguaína.
          </h2>
          <div className="mt-3 space-y-2 text-sm font-bold leading-6 text-white/72">
            <p>{ADDRESS}</p>
            <p>{OPENING_HOURS}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-white text-sm font-black text-neutral-950 active:scale-[0.985]"
            >
              <IconRoute />
              Abrir rota
            </a>
            <a
              href={whatsappLinks.reservation}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--torii-red)] text-sm font-black text-white active:scale-[0.985]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Reservar
            </a>
          </div>
        </section>

        <footer className="ig-rise mt-5 pb-1 text-center text-xs font-black text-neutral-500">
          <p>Torii Japanese Food · Araguaína - TO</p>
        </footer>
      </div>
    </main>
  );
}
