import { Reveal } from "@/components/Reveal";
import ScrollExpansionHero from "@/components/ui/scroll-expansion-hero";
import { images } from "@/lib/site";

export function ScrollExperienceFeature() {
  return (
    <Reveal threshold={0.42}>
      <ScrollExpansionHero
        eyebrow="A experiência Torii"
        title="Da entrada ao primeiro prato."
        text="Uma noite japonesa com ambiente, atendimento e cozinha pensados para compartilhar."
        bgDesktopSrc={images.scrollExperienceBg}
        bgMobileSrc={images.scrollExperienceMobile01}
        bgMobileAltSrc={images.scrollExperienceMobile02}
        videoDesktopSrc={images.scrollExperienceVideo}
        videoMobileSrc={images.scrollExperienceVideoMobile}
      />
    </Reveal>
  );
}
