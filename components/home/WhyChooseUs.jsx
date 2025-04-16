import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import WhychooseImage from "../../public/HomeHero/addis4.jpg";
import WhychooseImage1 from "../../public/HomeHero/Ethiopia-Wildlife-Hero.jpg";
import WhychooseImage2 from "../../public/HomeHero/Simien-Mountains-landscapes.jpg";

export default function WhyChooseUs() {
  const [paddingTop, setPaddingTop] = useState("0");
  return (
    <div className="md:py-28 py-8 gap-10 px-4 flex flex-col lg:flex-row text-black md:justify-center bg-white lg:px-40">
      <div className="z-50 flex flex-col w-full">
        <div className="w-full h-72 md:h-[200px] relative mb-5">
          <Image
            src={WhychooseImage}
            alt="Felipe Pelaquim Image"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="hidden md:flex w-full h-72 md:h-[400px] relative md:mr-2">
            <Image
              src={WhychooseImage1}
              alt="Felipe Pelaquim Image"
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-lg"
            />
          </div>
          <div className="hidden md:flex w-full h-72 md:h-[400px] relative md:ml-2">
            <Image
              src={WhychooseImage2}
              alt="Felipe Pelaquim Image"
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-left w-full lg:w-[45%]">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold headings-fonts md:mb-4 text-[#106156]">
          Why Choose PanEthiopia Tours?
        </h2>

        <Image 
          className="w-[75px] text-[#106156]" 
          src='/separator.svg'
          width="75px"
          height="40%"
          alt="why choose image"
        />
        <li className="md:text-xl text-lg text-left">
          <span className="font-semibold">Personalized Service:</span> {`We tailor every itinerary to meet your interests and needs, 
          ensuring a unique and memorable experience.`}
        </li>
        <li className="md:text-xl text-lg text-left">
          <span className="font-semibold">Expert Local Guides :</span> {`Our knowledgeable guides are passionate about sharing 
          Ethiopia’s hidden gems with you.`}
        </li>
        <li className="md:text-xl text-lg text-left">
          <span className="font-semibold">Commitment to Sustainability:</span>{" "}
          {`We promote responsible tourism that supports local communities and preserves Ethiopia's natural and cultural heritage.`}
        </li>
      </div>
    </div>
  );
}