import { MainHeader } from "../components/common/MainHeader";
import { CommonHeroSection } from "../components/about/CommonHeroSection";
import { OurMission }  from "../components/about/OurMission";
import { OurVision }  from "../components/about/OurVision";
import { MakesUsDifferent }  from "../components/about/MakesUsDifferent";
import { OurValues } from "../components/about/OurValues"
import {OurPromise } from "../components/about/Promise"

export default function Bio() {
  
  return (
    <main className="w-full h-full bg-white flex flex-col">
      <MainHeader title="Pan Ethiopia: Explore Ethiopia's Timeless Beauty with Pan Ethiopia Tours – Your Gateway to Unforgettable Adventures." />
      <div className="flex flex-col">
        <CommonHeroSection />
        <OurMission />
        <OurVision />
        <OurValues />
        <OurPromise />
        <MakesUsDifferent />
      </div>
    </main>
  );
}
