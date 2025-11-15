import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
