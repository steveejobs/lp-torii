import Image from "next/image";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  buildWhatsappLink,
  images,
  navLinks,
  whatsappMessages,
} from "@/lib/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/86 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20 md:gap-6">
        <a
          href="#topo"
          className="flex shrink-0 items-center gap-3"
          aria-label="Torii Restaurante Japonês"
        >
          <Image
            src={images.logo}
            alt="Torii Restaurante Japonês"
            width={190}
            height={64}
            priority
            className="h-auto max-h-11 w-[128px] max-w-[38vw] object-contain md:max-h-14 md:w-[164px] lg:w-[172px]"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-neutral-700 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-red-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <SocialIconLinks className="hidden xl:flex" />

        <a
          href={buildWhatsappLink(whatsappMessages.headerReservation)}
          className="btn btn-primary hidden md:inline-flex"
          target="_blank"
          rel="noreferrer"
        >
          Reservar
        </a>

        <a
          href={buildWhatsappLink(whatsappMessages.headerReservation)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--torii-red)] text-white shadow-[0_12px_26px_rgba(196,30,47,0.22)] transition hover:bg-[#a91726]"
          target="_blank"
          rel="noreferrer"
          aria-label="Reservar pelo WhatsApp"
          title="WhatsApp"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
        </a>
      </div>
    </header>
  );
}
