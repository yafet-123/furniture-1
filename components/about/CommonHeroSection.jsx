import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import AboutHeroImage from "../../public/About/AboutHeroImage.jpg";

export const CommonHeroSection = () => {
  return (
    <div className={`flex justify-center items-center bg-fixed h-[600px] bg-cover top-10 about-us-background`}>
      <div className="flex flex-col gap-8 font-bold text-center md:p-12">
        <div>
          <h1 className="text-white text-3xl md:text-6xl md:m-4">
            Welcome to PAN Ethiopia Tours
          </h1>
        </div>
        <div>
          <h1 className="text-white text-xl md:text-3xl md:m-4">
            Discover the beauty and culture of Ethiopia with a trusted local tour company dedicated to crafting unforgettable travel 
            experiences. Since 2019, PAN Ethiopia Tours has been your gateway to exploring the diverse landscapes, ancient history, 
            and vibrant traditions of this remarkable country. Let us guide you on a journey that’s more than just a trip—it’s a transformative 
            adventure that connects you deeply with Ethiopia’s heart and soul.
          </h1>
        </div>
      </div>
    </div>
  );
};

