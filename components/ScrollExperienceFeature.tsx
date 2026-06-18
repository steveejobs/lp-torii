"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { images } from "@/lib/site";

export function ScrollExperienceFeature() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc={images.scrollExperienceVideo}
      mobileMediaSrc={images.scrollExperienceVideoMobile}
      posterSrc={images.scrollExperienceBg}
      mobilePosterSrc={images.scrollExperienceMobile01}
      bgImageSrc={images.scrollExperienceBg}
      mobileBgImageSrc={images.scrollExperienceMobile02}
      title="Do salão ao primeiro prato."
      date="Torii à noite"
      scrollToExpand="Role para ver a transição"
      textBlend
    >
      <div className="grid gap-4 md:grid-cols-2">
        <p>
          A luz quente e o contraste preto conduzem a passagem do ambiente para
          a cozinha, sem transformar a seção em uma segunda abertura do site.
        </p>
        <p>
          No celular, o vídeo fica direto e leve; no desktop, a mídia ganha
          presença conforme a seção entra no centro da tela.
        </p>
      </div>
    </ScrollExpandMedia>
  );
}
