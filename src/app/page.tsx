import HeroSection from "@/components/sections/HeroSection";
import BrandsSection from "@/components/sections/BrandsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e3e3e3] py-8 px-6">
      <div className="max-w-3xl mx-auto flex flex-col">
        <HeroSection />
        <div className="h-3" />
        <BrandsSection />
        <div className="h-8" />
        <ServicesSection />
        <div className="h-3" />
        <CTASection />
        <div className="h-4" />
        <Footer />
      </div>
    </div>
  );
}
