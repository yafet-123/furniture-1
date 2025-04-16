import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import AboutHeroImage from "../../public/About/AboutHeroImage.jpg";

export const CommonHeroSection = () => {
  return (
    <div className={`flex justify-center items-center bg-fixed h-[550px] bg-cover top-10 about-us-background`}>
      <div className="flex flex-col gap-8 font-bold text-center md:p-12">
        <div>
          <h1 className="text-white text-3xl md:text-6xl md:m-4">
            Connect with PAN Ethiopia Tours
          </h1>
        </div>
        <div>
          <h1 className="text-white text-xl md:text-3xl md:mx-4">
            At PAN Ethiopia Tours, we’re dedicated to making your travel dreams a reality. Whether you have questions, need 
            assistance with planning your trip, or are ready to embark on an unforgettable journey across Ethiopia, our team
            is here to help. Get in touch with us today, and let us guide you through the rich culture, breathtaking landscapes, 
            and hidden gems of Ethiopia. We look forward to creating an exceptional travel experience just for you.
          </h1>
        </div>
      </div>
    </div>
  );
};

