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

const googleProofCards = [
  { label: "Nota no Google", value: "4,4" },
  { label: "Avaliações", value: "382" },
  { label: "Perfil", value: "Torii-Japanese" },
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

        <section className="border-y border-black/5 bg-[#fffaf4]">
          <Reveal
            threshold={0.35}
            className="container-page flex flex-col items-center justify-center gap-3 py-4 text-center md:flex-row md:gap-5"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-black text-neutral-900 shadow-[0_10px_24px_rgba(16,16,16,0.04)]">
              <span className="text-[var(--torii-red)]" aria-hidden="true">
                ★★★★★
              </span>
              <span>4,4 no Google · 382 avaliações</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                "Rodízio à noite",
                "Delivery",
                "Retirada",
                "Araguaína - TO",
                "Reserva pelo WhatsApp",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[#eee3d8] bg-white px-3.5 py-2 text-[0.72rem] font-black uppercase tracking-wide text-neutral-700 shadow-[0_8px_18px_rgba(16,16,16,0.025)]"
                >
                  <span
                    className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--torii-red)]"
                    aria-hidden="true"
                  />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="experiencias" className="section-pad bg-[#fffdf9]">
          <div className="container-page">
            <Reveal threshold={0.45}>
              <SectionIntro
                eyebrow="Experiências"
                title="Escolha como aproveitar o Torii."
                copy="Três caminhos claros para a mesma cozinha japonesa: salão, delivery ou retirada."
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
              <div className="image-soft aspect-[4/5] md:min-h-[620px]">
                <Image
                  src={images.ambienteInterno}
                  alt="Salão interno do Torii com balcão iluminado"
                  width={1122}
                  height={1402}
                  sizes="(max-width: 768px) 92vw, 46vw"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
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

        <section className="section-pad relative bg-[var(--torii-black)] text-white">
          <div className="absolute left-0 top-0 h-px w-full bg-white/16" />
          <div className="absolute right-8 top-10 h-24 w-24 rounded-full bg-[var(--torii-red)] md:h-36 md:w-36" />
          <Reveal
            threshold={0.45}
            className="container-page relative grid gap-9 md:grid-cols-[1fr_0.9fr] md:items-center"
          >
            <SectionIntro
              eyebrow="Rodízio à noite"
              title="Para sentar, aproveitar e experimentar variedade durante a noite."
              copy="Uma escolha para quem quer jantar com calma, compartilhar a mesa e provar mais variedade."
              light
            />
            <div className="rounded-lg border border-white/12 bg-white/6 p-6 backdrop-blur">
              <ul className="grid gap-3 text-base font-bold text-white/82">
                {["Ideal para famílias", "Casais", "Grupos", "Jantar à noite"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="h-2 w-2 rounded-full bg-[var(--torii-red)]" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
              <a
                href={buildWhatsappLink(whatsappMessages.rodizioSection)}
                className="btn btn-primary mt-7"
                target="_blank"
                rel="noreferrer"
              >
                Reservar mesa
              </a>
            </div>
          </Reveal>
        </section>

        <section className="section-pad bg-white">
          <div className="container-page">
            <Reveal
              threshold={0.42}
              className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start"
            >
              <div>
                <span className="eyebrow">Prova social</span>
                <div className="mt-5 rounded-lg border border-black/10 bg-[#fffdf9] p-6">
                  <p className="text-2xl font-black text-[var(--torii-red)]">
                    ★★★★★
                  </p>
                  <h2 className="mt-3 text-3xl font-black leading-tight text-neutral-950">
                    Quem conhece, volta.
                  </h2>
                  <p className="mt-3 text-base font-bold leading-7 text-neutral-600">
                    4,4 no Google com 382 avaliações de clientes do
                    Torii-Japanese.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {googleProofCards.map((item, index) => (
                  <Reveal key={item.label} delay={index * 80} threshold={0.22}>
                    <article className="fine-border rounded-lg bg-white p-5 shadow-sm">
                      <p className="text-xs font-black uppercase tracking-wide text-[var(--torii-red)]">
                        Avaliação do Google
                      </p>
                      <p className="mt-4 text-3xl font-black text-neutral-950">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm font-bold text-neutral-600">
                        {item.label}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
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
