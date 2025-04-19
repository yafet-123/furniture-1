import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutVisionOne from "../../public/image/project3.jpg";

export function OurVision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-12 px-3 py-10 md:gap-5 lg:gap-0 px-5 lg:px-32">
      <div className="md:order-first order-first flex justify-center">
        <div className="w-96 md:w-full h-96 md:h-[500px] relative mb-5">
          <Image
            className=""
            alt="why choose us image"
            src={AboutVisionOne}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div
        className={`
          z-10 lg:w-[110%] lg:h-[20rem] flex flex-col lg:px-5 justify-start text-justify 
          gap-4 lg:mt-24 lg:bg-[#11665b] lg:-ml-16 mb-5 lg:mb-0`}
      >
        <h2 className="font-bold text-3xl md:text-4xl lg:my-4 text-left lg:text-white">
          {`Vission`}
        </h2>
        <p className="md:text-xl text-lg text-left lg:text-white font-semibold">
          {`To be recognized as a pioneer in innovative and sustainable furniture design—where form meets function and every 
          piece tells a story. We envision a future where our designs bring warmth, elegance, and personality to living and 
          working spaces across the globe. Through timeless craftsmanship and a commitment to excellence, we aim to inspire 
          lifestyles that value beauty, comfort, and conscious living.`}
        </p>
      </div>
    </div>
  );
}
