import { MainHeader } from "../components/common/MainHeader";
import AboutComponent from "../components/home/AboutComponent";
import CatalogueSection from "../components/home/CatalogueSection";
import CompanySection from "../components/home/CompanySection";
import ContactSection from "../components/home/ContactSection";
import Hero from "../components/home/HeroSection";

import heroImage1 from '../public/hero/home/home (1).jpg';
import heroImage2 from '../public/hero/home/home (5).jpg';
import heroImage3 from '../public/hero/home/home (3).jpg';
import heroImage4 from '../public/hero/home/home (4).jpg';

export default function Home() {
  const HeroImages = [
    {
      id: 1,
      image: heroImage1,
    },
    {
      id: 2,
      image: heroImage2,
    },
    {
      id: 3,
      image: heroImage3,
    },
    {
      id: 4,
      image: heroImage4,
    },
  ];
  return (
    <div className="">
      <MainHeader title="Pan Ethiopia: Explore Ethiopia's Timeless Beauty with Pan Ethiopia Tours – Your Gateway to Unforgettable Adventures." />
      <div className="bg-[#dedee0]">
        <Hero
          title="TRUST OUR CRAFTSMANSHIP"
          description={`We bring you timeless, high-quality furniture crafted with precision, creativity, and sustainable materials to elevate your space.`}
          style="lg:flex-row"
          HeroImages={HeroImages}
        />
        <CompanySection />
        <AboutComponent />
        <CatalogueSection />
      
        <ContactSection />
      </div>
    </div>
  );
}
