export const WHATSAPP_NUMBER = "5563999999999";
export const ADDRESS = "Endereço editável, Araguaína - TO";
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=-7.192650,-48.204716";
export const INSTAGRAM_URL = "https://www.instagram.com/torii";
export const OPENING_HOURS = "Horário editável: terça a domingo, à noite";

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  reservation:
    "Olá, Torii! Quero reservar uma mesa para o rodízio. Podem me passar os horários disponíveis?",
  rodizio:
    "Olá, Torii! Quero reservar uma mesa para o rodízio no salão.",
  delivery:
    "Olá, Torii! Quero fazer um pedido para delivery. Podem me enviar as opções?",
  pickup:
    "Olá, Torii! Quero fazer um pedido para retirada no restaurante.",
  location:
    "Olá, Torii! Quero confirmar o endereço e horário de funcionamento."
};

export const navLinks = [
  { label: "Experiências", href: "#experiencias" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Destaques", href: "#destaques" },
  { label: "Localização", href: "#localizacao" }
];

export const images = {
  logo: "/torii/logo.png",
  ambiente1: "/torii/ambiente-1.jpg",
  ambiente2: "/torii/ambiente-2.jpg",
  ambiente3: "/torii/ambiente-3.jpg",
  fachada: "/torii/fachada.jpg",
  prato1: "/torii/prato-1.jpg",
  prato2: "/torii/prato-2.jpg",
  prato3: "/torii/prato-3.jpg"
};
