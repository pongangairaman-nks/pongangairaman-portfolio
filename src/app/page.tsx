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
import Panel from "@/components/ui/Panel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="relative mt-1.5">
      <Panel surface="gray" z={90} first>
        <HeroSection />
      </Panel>

      <Panel surface="white" z={80}>
        <ClientsSection />
      </Panel>

      <Panel surface="gray" z={70}>
        <ServicesSection />
      </Panel>

      <Panel surface="white" z={60}>
        <AboutSection />
      </Panel>

      <Panel surface="gray" z={50}>
        <SkillsSection />
      </Panel>

      <Panel surface="white" z={40}>
        <ExperienceSection />
      </Panel>

      <Panel surface="gray" z={30}>
        <ProjectsSection />
      </Panel>

      <Panel surface="white" z={20}>
        <PersonalSection />
      </Panel>

      <Panel surface="gray" z={10} last>
        <CTASection />
        <Footer />
      </Panel>

      <ScrollReveal />
    </main>
  );
}
