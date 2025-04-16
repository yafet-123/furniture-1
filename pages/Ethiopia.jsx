import { MainHeader } from "../components/common/MainHeader";
import CommonHeroSection from "../components/ethiopia/CommonHeroSection.jsx";
import {EthiopiaDetail} from "../components/ethiopia/EthiopiaDetail.jsx";
import {EconomyEthiopia} from "../components/ethiopia/Economy.js";
import {Diplomacy} from "../components/ethiopia/Diplomacy.js";
import {Cuisine} from "../components/ethiopia/Cuisine.js";

import ImageThree from "../public/ethiopia/ethiopia 10.jpg";
import ImageFour from "../public/ethiopia/ethiopia 11.jpg";
import ImageFive from "../public/ethiopia/ethiopia 12.jpg";
import ImageSix from "../public/ethiopia/ethiopia 13.jpg";
import ImageSeven from "../public/ethiopia/ethiopia 14.jpg";

export default function Ethiopia() {
  const photos = [
    {
      image: ImageThree,
    },
    {
      image: ImageFour,
    },
    {
      image: ImageFive,
    },
    {
      image: ImageSix,
    },
    {
      image: ImageSeven,
    },
  ];
  return (
    <div className="">
      <MainHeader 
        title="Pan Ethiopia: Explore Ethiopia's Timeless Beauty with Pan Ethiopia Tours – Your Gateway to Unforgettable Adventures." 
      />
      <div 
        className="flex flex-col"
      >
        <CommonHeroSection
          background="home-background"
          photos={photos}
          Tagline="Ethiopian Elegance: A Visual Symphony of Undiscovered Marvels"
        />
        <EthiopiaDetail />
        <EconomyEthiopia />
        <Diplomacy />
        <Cuisine />
      </div>
    </div>
  );
}