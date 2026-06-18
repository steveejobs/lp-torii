export type ToriiMediaAsset = {
  src: string;
  alt: string;
};

export const logoMedia = {
  // logo-torii.png - usado apenas como marca. Nao usar como foto de secao.
  src: "/torii/logo-torii.png",
  alt: "Torii Restaurante Japones",
} satisfies ToriiMediaAsset;

export const facadeMedia = {
  // fachada-torii.png - usado em Ambiente e Localizacao. Nao usar em outro lugar.
  src: "/torii/fachada-torii.png",
  alt: "Fachada preta do Torii Restaurante Japones a noite",
} satisfies ToriiMediaAsset;

export const environmentMedia = [
  {
    // ambiente-interno-torii.png - usado em HeroInteractiveIntro e Ambiente. Nao usar em outro lugar.
    src: "/torii/ambiente-interno-torii.png",
    alt: "Salao interno do Torii com madeira, balcao preto e luz quente",
  },
] satisfies ToriiMediaAsset[];

export const heroMedia = [
  {
    // ambiente-interno-torii.png - uso 1 de 2 do ambiente interno no site.
    src: "/torii/ambiente-interno-torii.png",
    alt: "Ambiente interno do Torii com luz quente e balcao iluminado",
  },
] satisfies ToriiMediaAsset[];

export const scrollExperienceMedia = {
  // scroll-experience-bg.jpg - usado apenas como fundo da experiencia de scroll.
  background: {
    src: "/torii/scroll-experience-bg.jpg",
    alt: "",
  },
  // scroll-main-video.mp4 - usado apenas na experiencia de scroll desktop.
  video: "/torii/scroll-main-video.mp4",
  // scroll-main-video-mobile.mp4 - usado apenas na experiencia de scroll mobile.
  mobileVideo: "/torii/scroll-main-video-mobile.mp4",
} as const;

export const foodGalleryMedia = [
  // gallery-food-01.png - usado apenas na galeria.
  { src: "/torii/gallery-food-01.png", alt: "Combinado de sushi do Torii" },
  // gallery-food-02.png - usado apenas na galeria.
  { src: "/torii/gallery-food-02.png", alt: "Pecas especiais do Torii" },
  // gallery-food-03.png - usado apenas na galeria.
  { src: "/torii/gallery-food-03.png", alt: "Selecao de sashimis do Torii" },
  // gallery-food-04.png - usado apenas na galeria.
  { src: "/torii/gallery-food-04.png", alt: "Prato japones preparado pelo Torii" },
  // gallery-food-05.png - usado apenas na galeria.
  { src: "/torii/gallery-food-05.png", alt: "Sushi especial do Torii" },
  // gallery-food-06.png - usado apenas na galeria.
  { src: "/torii/gallery-food-06.png", alt: "Combinado japones do Torii" },
  // gallery-food-07.png - usado apenas na galeria.
  { src: "/torii/gallery-food-07.png", alt: "Pecas de sushi servidas no Torii" },
  // gallery-food-08.png - usado apenas na galeria.
  { src: "/torii/gallery-food-08.png", alt: "Prato de comida japonesa do Torii" },
  // gallery-food-09.png - usado apenas na galeria.
  { src: "/torii/gallery-food-09.png", alt: "Selecao japonesa do Torii" },
  // gallery-food-10.jpg - usado apenas na galeria.
  { src: "/torii/gallery-food-10.jpg", alt: "Sushi com acabamento especial do Torii" },
  // gallery-food-11.jpg - usado apenas na galeria.
  { src: "/torii/gallery-food-11.jpg", alt: "Prato japones em detalhe no Torii" },
  // gallery-food-12.jpg - usado apenas na galeria.
  { src: "/torii/gallery-food-12.jpg", alt: "Combinado de comida japonesa do Torii" },
  // gallery-food-13.jpg - usado apenas na galeria.
  { src: "/torii/gallery-food-13.jpg", alt: "Pecas especiais de sushi do Torii" },
  // gallery-food-14.jpg - usado apenas na galeria.
  { src: "/torii/gallery-food-14.jpg", alt: "Selecao de pratos japoneses do Torii" },
  // gallery-food-15.jpg - usado apenas na galeria.
  { src: "/torii/gallery-food-15.jpg", alt: "Sushi servido no Torii" },
  // gallery-food-16.jpg - usado apenas na galeria.
  { src: "/torii/gallery-food-16.jpg", alt: "Detalhe de prato japones do Torii" },
  // gallery-food-17.jpg - usado apenas na galeria.
  { src: "/torii/gallery-food-17.jpg", alt: "Pecas de sushi finalizadas no Torii" },
  // gallery-food-18.jpg - usado apenas na galeria.
  { src: "/torii/gallery-food-18.jpg", alt: "Comida japonesa do Torii em detalhe" },
  // gallery-food-19.jpg - usado apenas na galeria.
  { src: "/torii/gallery-food-19.jpg", alt: "Prato especial da cozinha Torii" },
  // gallery-food-20.jpg - antes hero-chef-preparo.jpg; usado apenas na galeria.
  { src: "/torii/gallery-food-20.jpg", alt: "Preparo de sushi na cozinha Torii" },
] satisfies ToriiMediaAsset[];

export const locationMedia = [
  {
    // fachada-torii.png - uso 2 de 2 da fachada no site.
    src: "/torii/fachada-torii.png",
    alt: "Fachada do Torii para reconhecer a chegada",
  },
] satisfies ToriiMediaAsset[];

export const unusedMedia = [
  {
    // scroll-experience-mobile-01.jpg - nao usar; a secao de scroll fica restrita a fundo + video.
    src: "/torii/scroll-experience-mobile-01.jpg",
    alt: "",
  },
  {
    // scroll-experience-mobile-02.jpg - nao usar; a secao de scroll fica restrita a fundo + video.
    src: "/torii/scroll-experience-mobile-02.jpg",
    alt: "",
  },
] satisfies ToriiMediaAsset[];
