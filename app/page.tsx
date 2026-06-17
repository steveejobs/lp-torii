import Image from "next/image";
import { Header } from "@/components/Header";
import { HeroMotionPlaceholder } from "@/components/HeroMotionPlaceholder";
import { SectionIntro } from "@/components/SectionIntro";
import {
  ADDRESS,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  OPENING_HOURS,
  buildWhatsappLink,
  images,
  navLinks,
  whatsappMessages
} from "@/lib/site";

const experiences = [
  {
    title: "Rodízio no salão",
    text: "Uma noite completa para famílias, casais e grupos.",
    cta: "Reservar rodízio",
    href: buildWhatsappLink(whatsappMessages.rodizio)
  },
  {
    title: "Delivery",
    text: "Japonês em casa com praticidade e cuidado na apresentação.",
    cta: "Pedir delivery",
    href: buildWhatsappLink(whatsappMessages.delivery)
  },
  {
    title: "Retirada",
    text: "Faça o pedido e retire no restaurante com mais agilidade.",
    cta: "Pedir para retirada",
    href: buildWhatsappLink(whatsappMessages.pickup)
  }
];

const kitchenHighlights = [
  { title: "Sushis e sashimis", image: images.prato1 },
  { title: "Temakis", image: images.prato2 },
  { title: "Pokes", image: images.prato3 },
  { title: "Combinados", image: images.prato1 },
  { title: "Peças especiais do rodízio", image: images.prato2 }
];

const reviews = [
  "Atendimento excelente e comida muito bem servida.",
  "Ambiente agradável para ir com a família.",
  "Ótima opção de japonês em Araguaína."
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="topo" className="overflow-hidden pt-16 md:pt-20">
        <section className="relative min-h-[calc(100svh-64px)] border-b border-black/10 bg-[#fffdf9] py-10 md:min-h-[calc(100svh-80px)] md:py-16">
          <div className="absolute left-[-72px] top-20 h-40 w-40 rounded-full border border-red-700/15 md:left-10 md:h-64 md:w-64" />
          <div className="absolute right-[-80px] top-24 h-44 w-44 rounded-full bg-[var(--torii-red)]/8 md:right-12 md:h-72 md:w-72" />

          <div className="container-page grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div className="relative z-10 animate-[riseIn_700ms_ease_both]">
              <span className="eyebrow">Araguaína - TO</span>
              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.98] text-neutral-950 md:text-7xl">
                Torii Restaurante Japonês
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600 md:text-xl">
                Rodízio, delivery e experiências japonesas para aproveitar a noite em Araguaína.
              </p>
              <div className="mt-8 grid gap-3 sm:flex">
                <a
                  href={buildWhatsappLink(whatsappMessages.reservation)}
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
                <span>Sol vermelho, madeira quente e noite japonesa em clima familiar.</span>
              </div>
            </div>

            <HeroMotionPlaceholder />
          </div>
        </section>

        <section className="border-b border-black/10 bg-white">
          <div className="container-page flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-4 text-center text-xs font-black uppercase tracking-wide text-neutral-700 md:text-sm">
            {["Rodízio à noite", "Delivery", "Retirada", "Araguaína - TO", "Reserva pelo WhatsApp"].map((item, index) => (
              <span key={item} className="flex items-center gap-4">
                {index > 0 ? <span className="h-4 w-px bg-black/20" aria-hidden="true" /> : null}
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="experiencias" className="section-pad bg-[#fffdf9]">
          <div className="container-page">
            <SectionIntro
              eyebrow="Experiências"
              title="Escolha como aproveitar o Torii."
              copy="Três caminhos claros para a mesma cozinha japonesa: salão, delivery ou retirada."
            />
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {experiences.map((item) => (
                <article key={item.title} className="fine-border group rounded-lg bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-8 h-px w-16 bg-[var(--torii-red)] transition-all duration-500 group-hover:w-24" />
                  <h3 className="text-2xl font-black text-neutral-950">{item.title}</h3>
                  <p className="mt-4 min-h-14 text-base leading-7 text-neutral-600">{item.text}</p>
                  <a href={item.href} className="btn btn-dark mt-6 w-full" target="_blank" rel="noreferrer">
                    {item.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ambiente" className="section-pad bg-white">
          <div className="container-page">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <SectionIntro
                eyebrow="Ambiente"
                title="Um ambiente pensado para aproveitar a noite com conforto."
                copy="Mesas para casais, famílias e grupos, com salão climatizado e atendimento à noite."
              />
              <p className="border-l border-black/20 pl-5 text-sm font-bold leading-7 text-neutral-600">
                Fachada preta, madeira quente, balcão escuro e detalhes vermelhos criam uma presença elegante sem perder o clima acolhedor.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
              <div className="image-soft aspect-[4/3] md:aspect-[16/10]">
                <Image src={images.ambiente1} alt="Salão do Torii à noite" width={980} height={620} className="h-full w-full object-cover" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                <div className="image-soft aspect-[4/3]">
                  <Image src={images.fachada} alt="Fachada preta do Torii" width={520} height={390} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="image-soft aspect-[4/3]">
                  <Image src={images.ambiente2} alt="Balcão e mesas do Torii" width={520} height={390} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="destaques" className="section-pad bg-[#f7f2ec]">
          <div className="container-page">
            <SectionIntro
              eyebrow="Cozinha"
              title="Destaques para abrir o apetite antes de escolher sua experiência."
              copy="Pratos japoneses com apresentação cuidada, variedade e clima de jantar."
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {kitchenHighlights.map((item, index) => (
                <article key={`${item.title}-${index}`} className="group overflow-hidden rounded-lg bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/3]">
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <h3 className="p-4 text-base font-black text-neutral-950">{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad relative bg-[var(--torii-black)] text-white">
          <div className="absolute left-0 top-0 h-px w-full bg-white/16" />
          <div className="absolute right-8 top-10 h-24 w-24 rounded-full bg-[var(--torii-red)] md:h-36 md:w-36" />
          <div className="container-page relative grid gap-9 md:grid-cols-[1fr_0.9fr] md:items-center">
            <SectionIntro
              eyebrow="Rodízio à noite"
              title="Para sentar, aproveitar e experimentar variedade durante a noite."
              copy="Uma escolha para quem quer jantar com calma, compartilhar a mesa e provar mais variedade."
              light
            />
            <div className="rounded-lg border border-white/12 bg-white/6 p-6 backdrop-blur">
              <ul className="grid gap-3 text-base font-bold text-white/82">
                {["Ideal para famílias", "Casais", "Grupos", "Jantar à noite"].map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="h-2 w-2 rounded-full bg-[var(--torii-red)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={buildWhatsappLink(whatsappMessages.rodizio)}
                className="btn btn-primary mt-7"
                target="_blank"
                rel="noreferrer"
              >
                Reservar mesa
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-page">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <span className="eyebrow">Prova social</span>
                <div className="mt-5 rounded-lg border border-black/10 bg-[#fffdf9] p-6">
                  <p className="text-2xl font-black text-[var(--torii-red)]">★★★★★</p>
                  <p className="mt-2 text-lg font-black text-neutral-950">Avaliações no Google</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {reviews.map((review) => (
                  <blockquote key={review} className="fine-border rounded-lg bg-white p-5 text-base font-bold leading-7 text-neutral-700 shadow-sm">
                    “{review}”
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="localizacao" className="section-pad bg-[#fffdf9]">
          <div className="container-page grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <SectionIntro
                eyebrow="Localização"
                title="Reserve sua mesa ou trace a rota."
                copy="Confira endereço, horário e fale com a equipe para reservar antes de sair."
              />
              <div className="mt-7 space-y-4 text-base leading-7 text-neutral-700">
                <p>
                  <strong className="text-neutral-950">Endereço:</strong> {ADDRESS}
                </p>
                <p>
                  <strong className="text-neutral-950">Horário:</strong> {OPENING_HOURS}
                </p>
                <p>
                  <strong className="text-neutral-950">Instagram:</strong>{" "}
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="font-bold text-[var(--torii-red)]">
                    @torii
                  </a>
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:flex">
                <a href={buildWhatsappLink(whatsappMessages.reservation)} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Reservar pelo WhatsApp
                </a>
                <a href={GOOGLE_MAPS_URL} className="btn btn-outline" target="_blank" rel="noreferrer">
                  Abrir rota
                </a>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-black/10 bg-neutral-200 shadow-[0_22px_60px_rgba(16,16,16,0.1)]">
              <div className="absolute inset-0 opacity-70 [background:linear-gradient(90deg,transparent_0_48%,rgba(16,16,16,.14)_48%_49%,transparent_49%_100%),linear-gradient(0deg,transparent_0_45%,rgba(16,16,16,.12)_45%_46%,transparent_46%_100%)] [background-size:86px_86px]" />
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--torii-red)] shadow-[0_14px_40px_rgba(196,30,47,.26)]" />
              <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/92 p-4 shadow-lg backdrop-blur">
                <p className="text-sm font-black text-neutral-950">Torii Restaurante Japonês</p>
                <p className="mt-1 text-xs font-bold text-neutral-600">Araguaína - TO</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-white py-8">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src={images.logo} alt="" width={92} height={40} className="h-9 w-auto" />
            <p className="text-sm font-black text-neutral-950">Torii Restaurante Japonês · Araguaína - TO</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-bold text-neutral-600">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-red-700">
                {link.label}
              </a>
            ))}
            <a href={buildWhatsappLink(whatsappMessages.reservation)} target="_blank" rel="noreferrer" className="text-[var(--torii-red)]">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
