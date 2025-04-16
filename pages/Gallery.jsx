import React from "react";
import { MainHeader } from "../components/common/MainHeader";
import CommonHeroSection from "../components/tours/CommonHeroSection.jsx";
import ImageGrid from "../components/gallery/ImageGrid.jsx";

import ImageThree from "../public/gallery/gallery 1.jpg";
import ImageFour from "../public/gallery/gallery 2.jpg";
import ImageFive from "../public/gallery/gallery 3.jpg";
import ImageSix from "../public/gallery/gallery 4.jpg";
import ImageSeven from "../public/gallery/gallery 5.jpg";

const ImageGallery = () => {
  const photos = [
    {
      image: ImageThree,
    },
    {
      image: ImageFour,
    },
  ];
  return (
    <React.Fragment>
      <MainHeader title="Pan Ethiopia: Explore Ethiopia's Timeless Beauty with Pan Ethiopia Tours – Your Gateway to Unforgettable Adventures." />
      <CommonHeroSection
        photos={photos}
        Tagline="Explore Ethiopia’s Soul: A Visual Journey Through Its Timeless Beauty"
        Welcome_Message={`Welcome to PanEthiopia Tours, where every image captures the essence of Ethiopia’s rich heritage and 
        stunning landscapes. Our gallery invites you to embark on a journey through the heart of Ethiopia, from the ancient 
        rock-hewn churches of Lalibela to the majestic peaks of the Simien Mountains. Let our collection of images immerse 
        you in the vibrant cultures and hidden treasures that make Ethiopia a land of endless wonder.`}
      />
      <ImageGrid />
    </React.Fragment>
  );
};

export default ImageGallery;
