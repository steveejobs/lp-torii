import Image from "next/image";
import { buildWhatsappLink, images, navLinks, whatsappMessages } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/86 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-3 md:h-20">
        <a href="#topo" className="flex min-w-0 items-center gap-3" aria-label="Torii Restaurante Japonês">
          <Image
            src={images.logo}
            alt="Torii Restaurante Japonês"
            width={112}
            height={48}
            priority
            className="h-9 w-auto md:h-11"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-neutral-700 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-red-700">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsappLink(whatsappMessages.reservation)}
          className="btn btn-primary hidden md:inline-flex"
          target="_blank"
          rel="noreferrer"
        >
          Reservar
        </a>

        <a
          href={buildWhatsappLink(whatsappMessages.reservation)}
          className="btn btn-primary min-h-10 px-4 text-xs md:hidden"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
