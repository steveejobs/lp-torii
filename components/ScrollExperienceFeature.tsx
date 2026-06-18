"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { scrollExperienceMedia } from "@/data/torii-media";

export function ScrollExperienceFeature() {
  return (
    <ScrollExpandMedia
      mediaSrc={scrollExperienceMedia.video}
      mobileMediaSrc={scrollExperienceMedia.mobileVideo}
      posterSrc={scrollExperienceMedia.background.src}
      mobilePosterSrc={scrollExperienceMedia.background.src}
      bgImageSrc={scrollExperienceMedia.background.src}
      title="Do salão ao primeiro prato."
      date="TORII À NOITE"
      scrollToExpand="Uma experiência que começa no ambiente e continua à mesa."
    />
  );
}
