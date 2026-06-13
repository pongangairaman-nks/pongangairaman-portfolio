import HeroSection from "@/components/sections/HeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PersonalSection from "@/components/sections/PersonalSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="relative mt-1.5">
      {/* Hero — gray card. Rounds at the top (green frame) and bottom (into white). */}
      <div className="relative z-30 rounded-t-[2.5rem] rounded-b-[2.5rem] bg-background">
        <HeroSection />
      </div>

      {/* Logo strip — white band tucked under the hero's rounded bottom,
          rounding at its own bottom into the gray below (stacked cards). */}
      <div className="relative z-20 -mt-10 rounded-b-[2.5rem] bg-card pt-24 pb-16">
        <ClientsSection />
      </div>

      {/* Everything else — gray, tucked under the white band. */}
      <div className="relative z-10 -mt-10 mb-1.5 rounded-b-[2.5rem] bg-background pt-10">
        <ServicesSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <PersonalSection />
        <CTASection />
        <Footer />
      </div>

      <ScrollReveal />
    </main>
  );
}
