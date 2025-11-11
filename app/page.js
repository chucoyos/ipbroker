import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
