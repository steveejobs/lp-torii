import Image from "next/image";
import { FoodGallerySection } from "@/components/FoodGallerySection";
import { Header } from "@/components/Header";
import { HeroInteractiveIntro } from "@/components/HeroInteractiveIntro";
import { HeroMotionPlaceholder } from "@/components/HeroMotionPlaceholder";
import { Reveal } from "@/components/Reveal";
import { ScrollExperienceFeature } from "@/components/ScrollExperienceFeature";
import { SectionIntro } from "@/components/SectionIntro";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import {
  ADDRESS,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  OPENING_HOURS,
  buildWhatsappLink,
  images,
  navLinks,
  whatsappMessages,
} from "@/lib/site";

const experiences = [
  {
    title: "Rodízio no salão",
    text: "Uma noite completa para famílias, casais e grupos.",
    cta: "Reservar rodízio",
    href: buildWhatsappLink(whatsappMessages.rodizio),
  },
  {
    title: "Delivery",
    text: "Japonês em casa com praticidade e cuidado na apresentação.",
    cta: "Pedir delivery",
    href: buildWhatsappLink(whatsappMessages.delivery),
  },
  {
    title: "Retirada",
    text: "Faça o pedido e retire no restaurante com mais agilidade.",
    cta: "Pedir para retirada",
    href: buildWhatsappLink(whatsappMessages.pickup),
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="topo" className="overflow-hidden pt-16 md:pt-20">
        <HeroInteractiveIntro />

        <section className="relative min-h-[calc(100svh-64px)] border-b border-black/10 bg-[#fffdf9] py-10 md:min-h-[calc(100svh-80px)] md:py-16">
          <div className="absolute left-[-72px] top-20 h-40 w-40 rounded-full border border-red-700/15 md:left-10 md:h-64 md:w-64" />
          <div className="absolute right-[-80px] top-24 h-44 w-44 rounded-full bg-[var(--torii-red)]/8 md:right-12 md:h-72 md:w-72" />

          <div className="container-page grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div className="relative z-10 animate-[riseIn_700ms_ease_both]">
              <Image
                src={images.logo}
                alt="Torii Restaurante Japonês"
                width={168}
                height={72}
                priority
                className="mb-6 hidden h-auto w-[132px] object-contain md:block md:w-[160px]"
              />
              <span className="eyebrow">Araguaína - TO</span>
              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.98] text-neutral-950 md:text-7xl">
                O japonês da sua noite em Araguaína.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600 md:text-xl">
                Rodízio, delivery e retirada em uma experiência japonesa para
                aproveitar à noite.
              </p>
              <div className="mt-8 grid gap-3 sm:flex">
                <a
                  href={buildWhatsappLink(whatsappMessages.heroReservation)}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reservar pelo WhatsApp
                </a>
                <a href="#localizacao" className="btn btn-outline">
                  Ver localização
                </a>
              </div>
              <div className="mt-9 flex items-center gap-4 border-l-2 border-[var(--torii-red)] pl-4 text-sm font-bold text-neutral-700">
                <span className="h-3 w-3 rounded-full bg-[var(--torii-red)]" />
                <span>
                  Sol vermelho, madeira quente e noite japonesa em clima
                  familiar.
                </span>
              </div>
            </div>

            <HeroMotionPlaceholder />
          </div>
        </section>

        <section id="experiencias" className="section-pad bg-[#fffdf9]">
          <div className="container-page">
            <Reveal threshold={0.45}>
              <SectionIntro
                eyebrow="Experiências"
                title="Escolha sua noite no Torii."
                copy="Rodízio no salão, delivery ou retirada: três formas diretas de aproveitar a cozinha japonesa à noite."
              />
            </Reveal>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {experiences.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 90}
                  threshold={0.22}
                  className="h-full"
                >
                  <article className="fine-border group h-full rounded-lg bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-8 h-px w-16 bg-[var(--torii-red)] transition-all duration-500 group-hover:w-24" />
                    <h3 className="text-2xl font-black text-neutral-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 min-h-14 text-base leading-7 text-neutral-600">
                      {item.text}
                    </p>
                    <a
                      href={item.href}
                      className="btn btn-dark mt-6 w-full"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.cta}
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="ambiente" className="section-pad bg-white">
          <div className="container-page">
            <Reveal threshold={0.5}>
              <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                <SectionIntro
                  eyebrow="Ambiente"
                  title="Um salão para aproveitar a noite com calma."
                  copy="Fachada preta, madeira quente, balcão iluminado e mesas para casais, famílias e grupos."
                />
                <p className="border-l border-black/20 pl-5 text-sm font-bold leading-7 text-neutral-600">
                  O salão combina luz baixa, madeira e contraste preto para
                  deixar o jantar confortável sem perder presença.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={120}
              threshold={0.22}
              className="mt-9 grid gap-4 md:grid-cols-[0.92fr_1.08fr]"
            >
              <div className="rounded-lg border border-black/10 bg-[#fffaf4] p-7 md:min-h-[620px] md:p-9">
                <div className="h-px w-20 bg-[var(--torii-red)]" />
                <p className="mt-8 max-w-sm text-4xl font-black leading-[1.02] text-neutral-950 md:text-5xl">
                  Ambiente quente, contraste preto e ritmo de jantar.
                </p>
                <p className="mt-5 max-w-md text-base font-bold leading-7 text-neutral-600 md:text-lg">
                  Madeira, luz baixa e atendimento direto para jantar com calma,
                  seja em casal, familia ou grupo.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                <div className="image-soft aspect-[16/9] md:aspect-[16/10]">
                  <Image
                    src={images.fachada}
                    alt="Fachada preta do Torii"
                    width={1672}
                    height={941}
                    loading="lazy"
                    sizes="(max-width: 768px) 92vw, 42vw"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="rounded-lg border border-black/10 bg-[#fffaf4] p-6 md:min-h-[260px]">
                  <div className="h-px w-20 bg-[var(--torii-red)]" />
                  <p className="mt-7 max-w-sm text-3xl font-black leading-tight text-neutral-950">
                    Luz baixa, madeira quente e ritmo de jantar.
                  </p>
                  <p className="mt-4 text-base font-bold leading-7 text-neutral-600">
                    Mesas para jantar com calma, atendimento direto e uma
                    atmosfera quente sem excesso visual.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <ScrollExperienceFeature />

        <FoodGallerySection />

        <section className="section-pad bg-white">
          <div className="container-page">
            <Reveal threshold={0.42} className="max-w-3xl">
              <p className="text-sm font-black text-[var(--torii-red)]">
                ★★★★★ 4,4 no Google · 382 avaliações
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.04] text-neutral-950 md:text-6xl">
                Quem conhece, volta.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-neutral-600 md:text-lg">
                Comida bem servida, ambiente agradável e atendimento à noite
                para jantar no salão, pedir em casa ou retirar no caminho.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="localizacao" className="section-pad bg-[#fffdf9]">
          <Reveal
            threshold={0.42}
            className="container-page grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center"
          >
            <div>
              <SectionIntro
                eyebrow="Localização"
                title="Reserve sua mesa ou trace a rota."
                copy="Confira endereço, horário e fale com a equipe para reservar antes de sair."
              />
              <div className="mt-7 space-y-4 text-base leading-7 text-neutral-700">
                <p>
                  <strong className="text-neutral-950">Endereço:</strong>{" "}
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[var(--torii-red)]"
                  >
                    {ADDRESS}
                  </a>
                </p>
                <p>
                  <strong className="text-neutral-950">Horário:</strong>{" "}
                  {OPENING_HOURS}
                </p>
                <p>
                  <strong className="text-neutral-950">Instagram:</strong>{" "}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[var(--torii-red)]"
                  >
                    @toriirestaurantejapones
                  </a>
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:flex">
                <a
                  href={buildWhatsappLink(whatsappMessages.locationReservation)}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reservar pelo WhatsApp
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir rota
                </a>
              </div>
            </div>

            <div className="relative min-h-[340px] overflow-hidden rounded-lg border border-black/10 bg-neutral-900 shadow-[0_22px_60px_rgba(16,16,16,0.1)] md:min-h-[430px]">
              <Image
                src={images.locationFacade}
                alt="Fachada do Torii à noite"
                fill
                sizes="(max-width: 768px) 92vw, 48vw"
                loading="lazy"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/10 to-transparent" />
              <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-[var(--torii-red)] shadow-[0_14px_40px_rgba(196,30,47,.26)] md:h-20 md:w-20" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/92 p-4 shadow-lg backdrop-blur">
                <p className="text-sm font-black text-neutral-950">
                  Torii Restaurante Japonês
                </p>
                <p className="mt-1 text-xs font-bold text-neutral-600">
                  Fachada preta para reconhecer na chegada.
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-white py-8">
        <Reveal
          threshold={0.35}
          className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <Image
              src={images.logo}
              alt=""
              width={132}
              height={58}
              className="h-auto w-[112px] object-contain"
            />
            <p className="text-sm font-black text-neutral-950">
              Torii Restaurante Japonês · Araguaína - TO
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-red-700"
              >
                {link.label}
              </a>
            ))}
            <SocialIconLinks />
            <a
              href={buildWhatsappLink(whatsappMessages.footer)}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--torii-red)]"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </footer>
    </>
  );
}
