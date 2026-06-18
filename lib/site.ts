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
  footer: "Olá, Torii! Vim pelo site e quero falar com a equipe pelo WhatsApp.",
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
  heroIntro: "/torii/hero-chef-preparo.jpg",
  foodGallery: [
    "/torii/gallery-food-01.png",
    "/torii/gallery-food-02.png",
    "/torii/gallery-food-03.png",
    "/torii/gallery-food-04.png",
    "/torii/gallery-food-05.png",
    "/torii/gallery-food-06.png",
    "/torii/gallery-food-07.png",
    "/torii/gallery-food-08.png",
    "/torii/gallery-food-09.png",
    "/torii/gallery-food-10.jpg",
    "/torii/gallery-food-11.jpg",
    "/torii/gallery-food-12.jpg",
    "/torii/gallery-food-13.jpg",
    "/torii/gallery-food-14.jpg",
    "/torii/gallery-food-15.jpg",
    "/torii/gallery-food-16.jpg",
    "/torii/gallery-food-17.jpg",
    "/torii/gallery-food-18.jpg",
    "/torii/gallery-food-19.jpg",
  ],
  scrollExperienceBg: "/torii/scroll-experience-bg.jpg",
  scrollExperienceMobile01: "/torii/scroll-experience-mobile-01.jpg",
  scrollExperienceMobile02: "/torii/scroll-experience-mobile-02.jpg",
  scrollExperienceVideo: "/torii/scroll-experience-video.mp4",
  scrollExperienceVideoMobile: "/torii/scroll-experience-video-mobile.mp4",
  ambiente1: "/torii/ambiente-interno-torii.png",
  ambiente2: "/torii/fachada-torii.png",
  ambiente3: "/torii/hero-chef-preparo.jpg",
};
