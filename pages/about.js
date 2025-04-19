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
          title="Crafting Spaces, Creating Comfort"
          description={`Experience the perfect blend of form and function with our thoughtfully designed furniture pieces 
          that transform your living spaces into havens of comfort and style.`}
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
