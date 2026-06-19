import {
  facadeMedia,
  foodGalleryImages,
  homeHeroImage,
  internalEnvironmentMedia,
  locationMedia,
  logoMedia,
  scrollExperienceMedia,
} from "@/data/torii-media";

export const WHATSAPP_NUMBER = "5563992374088";
export const FULL_SITE_URL = "https://lp-torii.vercel.app";
export const ADDRESS = "Torii Restaurante Japonês, Araguaína - TO";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/CgjYuo1yPmZVKJbz7";
export const INSTAGRAM_URL =
  "https://www.instagram.com/toriirestaurantejapones/";
export const OPENING_HOURS =
  "Atendimento à noite — confirme horários pelo WhatsApp.";

export function createWhatsAppLink(message: string) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0&utm_source=ig`;
}

export const buildWhatsappLink = createWhatsAppLink;

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
  logo: logoMedia.src,
  ambienteInterno: internalEnvironmentMedia.src,
  fachada: facadeMedia.src,
  heroIntro: homeHeroImage.src,
  foodGallery: foodGalleryImages.map((item) => item.src),
  scrollExperienceBg: scrollExperienceMedia.background.src,
  scrollMainVideo: scrollExperienceMedia.video,
  scrollMainVideoMobile: scrollExperienceMedia.mobileVideo,
  locationFacade: locationMedia[0].src,
};
