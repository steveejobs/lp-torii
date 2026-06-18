"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { images } from "@/lib/site";

export function ScrollExperienceFeature() {
  return (
    <ScrollExpandMedia
      mediaSrc={images.scrollMainVideo}
      mobileMediaSrc={images.scrollMainVideo}
      posterSrc={images.ambienteInterno}
      mobilePosterSrc={images.ambienteInterno}
      bgImageSrc={images.scrollExperienceBg}
      title="Do salão ao primeiro prato."
      date="TORII À NOITE"
      scrollToExpand="Uma experiência que começa no ambiente e continua à mesa."
    />
  );
}
