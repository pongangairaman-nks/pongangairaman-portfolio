import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PersonalSection from "@/components/sections/PersonalSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e3e3e3] py-8 px-6">
      <div className="max-w-3xl mx-auto flex flex-col">
        <HeroSection />
        <div className="h-3" />
        <AboutSection />
        <div className="h-3" />
        <SkillsSection />
        <div className="h-3" />
        <ExperienceSection />
        <div className="h-3" />
        <ProjectsSection />
        <div className="h-3" />
        <PersonalSection />
        <div className="h-3" />
        <CTASection />
        <div className="h-4" />
        <Footer />
      </div>
    </div>
  );
}
