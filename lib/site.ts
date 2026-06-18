export const WHATSAPP_NUMBER = "5563992374088";
export const ADDRESS = "Torii Restaurante Japonês, Araguaína - TO";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/CgjYuo1yPmZVKJbz7";
export const INSTAGRAM_URL =
  "https://www.instagram.com/toriirestaurantejapones/";
export const OPENING_HOURS = "Horário editável: terça a domingo, à noite";

export function buildWhatsappLink(message: string) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0&utm_source=ig`;
}

export const whatsappMessages = {
  headerReservation:
    "Olá, Torii! Vim pelo site e quero reservar uma mesa. Podem me passar os horários disponíveis?",
  heroReservation:
    "Olá, Torii! Vim pelo site e quero reservar pelo WhatsApp para jantar no restaurante.",
  rodizio:
    "Olá, Torii! Quero reservar uma mesa para o rodízio no salão. Podem me informar os horários?",
  rodizioSection:
    "Olá, Torii! Quero reservar uma mesa para o rodízio à noite. Podem verificar disponibilidade?",
  delivery:
    "Olá, Torii! Quero fazer um pedido para delivery. Podem me enviar o cardápio e as opções?",
  pickup:
    "Olá, Torii! Quero fazer um pedido para retirada no restaurante. Podem me orientar?",
  locationReservation:
    "Olá, Torii! Estou vendo a localização no site e quero reservar uma mesa antes de sair.",
  location:
    "Olá, Torii! Quero confirmar o endereço e o horário de funcionamento.",
  footer:
    "Olá, Torii! Vim pelo site e quero falar com a equipe pelo WhatsApp.",
};

export const navLinks = [
  { label: "Experiências", href: "#experiencias" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Destaques", href: "#destaques" },
  { label: "Localização", href: "#localizacao" },
];

export const images = {
  logo: "/favicon%20torii/logo%20torii.png",
  fachada: "/torii/fachada-torii.png",
  ambienteInterno: "/torii/ambiente-interno-torii.png",
  pratoSushi01: "/torii/prato-sushi-01.png",
  pratoSushi02: "/torii/prato-sushi-02.png",
  pratoSushi03: "/torii/prato-sushi-03.png",
  pratoSushi04: "/torii/prato-sushi-04.png",
  pratoSushi05: "/torii/prato-sushi-05.png",
  pratoSushi06: "/torii/prato-sushi-06.png",
  pratoSushi07: "/torii/prato-sushi-07.png",
  pratoSushi08: "/torii/prato-sushi-08.png",
  pratoSushi09: "/torii/prato-sushi-09.png",
  heroIntro:
    "/imagens%20torii/anima%C3%A7%C3%A3o%20se%C3%A7%C3%A3o%201%20hero.jpg",
  foodGallery01: "/imagens%20torii/pexels-dashamak-15949773.jpg",
  foodGallery02: "/imagens%20torii/pexels-nadin-sh-78971847-18510259.jpg",
  foodGallery03: "/imagens%20torii/pexels-sabrina-martins-2149920013-31415308.jpg",
  foodGallery04: "/imagens%20torii/pexels-valeriya-38100818.jpg",
  foodGallery05: "/imagens%20torii/pexels-nandosmac-7717517.jpg",
  foodGallery06: "/imagens%20torii/pexels-anhelina-vasylyk-734724285-34303217.jpg",
  scrollExperienceBg: "/torii/scroll-experience-bg.jpg",
  scrollMainVideo: "/torii/scroll-experience-video-mobile.mp4",
  galleryVideo01: "/torii/scroll-experience-video.mp4",
  scrollExperienceMobile01: "/torii/scroll-experience-mobile-01.jpg",
  scrollExperienceMobile02: "/torii/scroll-experience-mobile-02.jpg",
  scrollExperienceVideo: "/torii/scroll-experience-video.mp4",
  scrollExperienceVideoMobile: "/torii/scroll-experience-video-mobile.mp4",
  ambiente1: "/torii/ambiente-interno-torii.png",
  ambiente2: "/torii/fachada-torii.png",
  ambiente3: "/torii/prato-sushi-06.png",
  prato1: "/torii/prato-sushi-01.png",
  prato2: "/torii/prato-sushi-02.png",
  prato3: "/torii/prato-sushi-03.png",
};
