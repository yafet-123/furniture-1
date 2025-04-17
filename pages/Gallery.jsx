import React from "react";
import { MainHeader } from "../components/common/MainHeader";
import Hero from "../components/gallery/Hero.tsx";
import ImageGrid from "../components/gallery/ImageGrid.jsx";

import heroImage1 from '../public/hero/gallery/gallery (1).jpg';
import heroImage2 from '../public/hero/gallery/gallery (25).jpg';
import heroImage3 from '../public/hero/gallery/gallery (5).jpg';
import heroImage4 from '../public/hero/gallery/gallery (2).jpg';
import heroImage5 from '../public/hero/gallery/gallery (6).jpg';

const ImageGallery = () => {
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
    {
      id: 5,
      image: heroImage5,
    },
  ];
  return (
    <React.Fragment>
      <MainHeader title="Pan Ethiopia: Explore Ethiopia's Timeless Beauty with Pan Ethiopia Tours – Your Gateway to Unforgettable Adventures." />
      <div className="bg-[#dedee0]">
        <Hero
          title="Elevate Your Living Space"
          description={`Discover handcrafted furniture that combines comfort with elegance.`}
          style="lg:flex-row"
          HeroImages={HeroImages}
        />
        <ImageGrid />
      </div>
    </React.Fragment>
  );
};

export default ImageGallery;
