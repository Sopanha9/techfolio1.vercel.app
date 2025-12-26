import { HeroBackground } from "@/sections/HeroSection/components/HeroBackground";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { HeroGradient } from "@/sections/HeroSection/components/HeroGradient";

export const HeroSection = () => {
  return (
    <section className="relative box-border caret-transparent overflow-hidden">
      <HeroBackground />
      <HeroContent />
      <HeroGradient />
    </section>
  );
};
