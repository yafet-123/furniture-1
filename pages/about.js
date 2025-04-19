import { MainHeader } from "../components/common/MainHeader";
import Hero from "../components/about/Hero";
import { OurMission }  from "../components/about/OurMission";
import { OurVision }  from "../components/about/OurVision";
import { MakesUsDifferent }  from "../components/about/MakesUsDifferent";
import { OurValues } from "../components/about/OurValues"
import {OurPromise } from "../components/about/Promise"

import heroImage1 from '../public/hero/about/about (3).jpg';
import heroImage2 from '../public/hero/about/about (1).jpg';
import heroImage3 from '../public/hero/about/about (2).jpg';

export default function Bio() {
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
  ];
  return (
    <main className="w-full h-full bg-white flex flex-col">
      <MainHeader title="Pan Ethiopia: Explore Ethiopia's Timeless Beauty with Pan Ethiopia Tours – Your Gateway to Unforgettable Adventures." />
      <div className="bg-[#dedee0]">
        <Hero
          title="Different People - One Mission"
          description={`Ecotravel Ethiopia was founded to offer environmentally-friendly tours. Our commitment is as reflected in our 
          name offering tours with a softer footprint.`}
          style="lg:flex-row-reverse"
          HeroImages={HeroImages}
        />
        <OurMission />
        <OurVision />
        <OurValues />
        <OurPromise />
        <MakesUsDifferent />
      </div>
    </main>
  );
}
