import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ContactSection } from "@/sections/ContactSection";

export const Main = () => {
  return (
    <main className="box-border caret-transparent grow pt-16">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
};
