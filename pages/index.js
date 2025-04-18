import { MainHeader } from "../components/common/MainHeader";
import AboutComponent from "../components/home/AboutComponent";
import CatalogueSection from "../components/home/CatalogueSection";
import CompanySection from "../components/home/CompanySection";
import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";

export default function Home() {
  return (
    <div className="">
      <MainHeader title="Pan Ethiopia: Explore Ethiopia's Timeless Beauty with Pan Ethiopia Tours – Your Gateway to Unforgettable Adventures." />
      <div className="flex flex-col">
        <HeroSection />
        <CompanySection />
        <AboutComponent />
        <CatalogueSection />
      
        <ContactSection />
      </div>
    </div>
  );
}
