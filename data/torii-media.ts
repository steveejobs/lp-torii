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

export const homeHeroImage = {
  // Uso exclusivo: primeira hero / Home 1. Nao usar em outras secoes.
  src: "/torii/imagem hero.jpg",
  alt: "Preparo de sushi no Torii com acabamento delicado",
} satisfies ToriiMediaAsset;

export const heroMedia = [homeHeroImage] satisfies ToriiMediaAsset[];

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
  {
    src: "/torii/gallery-food-04.png",
    alt: "Prato japones preparado pelo Torii",
  },
  // gallery-food-05.png - usado apenas na galeria.
  { src: "/torii/gallery-food-05.png", alt: "Sushi especial do Torii" },
  // gallery-food-06.png - usado apenas na galeria.
  { src: "/torii/gallery-food-06.png", alt: "Combinado japones do Torii" },
  // gallery-food-07.png - usado apenas na galeria.
  {
    src: "/torii/gallery-food-07.png",
    alt: "Pecas de sushi servidas no Torii",
  },
  // gallery-food-08.png - usado apenas na galeria.
  {
    src: "/torii/gallery-food-08.png",
    alt: "Prato de comida japonesa do Torii",
  },
  // gallery-food-09.png - usado apenas na galeria.
  { src: "/torii/gallery-food-09.png", alt: "Selecao japonesa do Torii" },
  // gallery-food-10.jpg - usado apenas na galeria.
  {
    src: "/torii/gallery-food-10.jpg",
    alt: "Sushi com acabamento especial do Torii",
  },
  // gallery-food-11.jpg - usado apenas na galeria.
  {
    src: "/torii/gallery-food-11.jpg",
    alt: "Prato japones em detalhe no Torii",
  },
  // gallery-food-12.jpg - usado apenas na galeria.
  {
    src: "/torii/gallery-food-12.jpg",
    alt: "Combinado de comida japonesa do Torii",
  },
  // gallery-food-13.jpg - usado apenas na galeria.
  {
    src: "/torii/gallery-food-13.jpg",
    alt: "Pecas especiais de sushi do Torii",
  },
  // gallery-food-14.jpg - usado apenas na galeria.
  {
    src: "/torii/gallery-food-14.jpg",
    alt: "Selecao de pratos japoneses do Torii",
  },
  // gallery-food-15.jpg - usado apenas na galeria.
  { src: "/torii/gallery-food-15.jpg", alt: "Sushi servido no Torii" },
  // gallery-food-16.jpg - usado apenas na galeria.
  {
    src: "/torii/gallery-food-16.jpg",
    alt: "Detalhe de prato japones do Torii",
  },
  // gallery-food-17.jpg - usado apenas na galeria.
  {
    src: "/torii/gallery-food-17.jpg",
    alt: "Pecas de sushi finalizadas no Torii",
  },
  // gallery-food-18.jpg - usado apenas na galeria.
  {
    src: "/torii/gallery-food-18.jpg",
    alt: "Comida japonesa do Torii em detalhe",
  },
  // gallery-food-19.jpg - usado apenas na galeria.
  { src: "/torii/gallery-food-19.jpg", alt: "Prato especial da cozinha Torii" },
  // gallery-food-20.jpg - antes hero-chef-preparo.jpg; usado apenas na galeria.
  {
    src: "/torii/gallery-food-20.jpg",
    alt: "Preparo de sushi na cozinha Torii",
  },
] satisfies ToriiMediaAsset[];

export const mainFoodGalleryMedia = [
  foodGalleryMedia[0],
  foodGalleryMedia[1],
  foodGalleryMedia[2],
  foodGalleryMedia[4],
  foodGalleryMedia[5],
  foodGalleryMedia[6],
  foodGalleryMedia[7],
  foodGalleryMedia[9],
  foodGalleryMedia[10],
  foodGalleryMedia[11],
  foodGalleryMedia[12],
  foodGalleryMedia[13],
] satisfies ToriiMediaAsset[];

export const instagramFoodGalleryMedia = [
  foodGalleryMedia[1],
  foodGalleryMedia[2],
  foodGalleryMedia[5],
  foodGalleryMedia[7],
  foodGalleryMedia[10],
  foodGalleryMedia[11],
  foodGalleryMedia[12],
  foodGalleryMedia[13],
] satisfies ToriiMediaAsset[];

export const locationMedia = [
  {
    // fachada-torii.png - uso 2 de 2 da fachada no site.
    src: "/torii/fachada-torii.png",
    alt: "Fachada do Torii para reconhecer a chegada",
  },
] satisfies ToriiMediaAsset[];

export const mediaBySection = {
  hero: [homeHeroImage],
  ambiente: [facadeMedia],
  video: [scrollExperienceMedia.background],
  galeria: mainFoodGalleryMedia,
  localizacao: locationMedia,
  instagram: instagramFoodGalleryMedia,
} as const;

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
