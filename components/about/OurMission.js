import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutMissionOne from "../../public/image/project3.jpg";

export function OurMission() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-12 px-3 bg-[#EDF1F4] py-10 lg:px-32 md:gap-5 lg:gap-0 px-5">
      <div
        className={`
          z-10 lg:w-[110%] lg:h-[20rem] flex flex-col lg:px-10 justify-start text-justify 
          gap-4 lg:mt-24 lg:bg-[#11665b]`}
      >
        <h2 className="font-bold text-3xl md:text-4xl lg:my-4 text-left lg:text-white">
          Mission
        </h2>
        <p className="md:text-xl text-lg text-left lg:text-white font-semibold">
          Our mission is to design and craft high-quality, functional furniture that blends style with durability. We are 
          committed to sustainability, creativity, and customer satisfaction—transforming ideas into beautifully curated 
          spaces, one piece at a time.
        </p>
      </div>
      <div className="md:order-last order-first flex justify-center">
        <div className="w-96 md:w-full h-96 md:h-[500px] relative mb-5">
          <Image
            className=""
            alt="why choose us image"
            src={AboutMissionOne}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
