import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommonHeroSection = ({
  background,
  Tagline,
  Welcome_Message,
  photos,
}) => {
  const router = useRouter();
  var settings = {
    dots: false,
    lazyLoad: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
  };
  // console.log(photos);
  const [paddingTop, setPaddingTop] = useState("0");
  return (
    <div
      className={`flex flex-col lg:flex-row h-full pt-28 md:px-10 bg-[#11665b]`}
    >
      <div className="text-white flex flex-col justify-center items-center font-bold text-left w-full lg:w-[50%] mb-5 lg:mb-0 px-5 lg:px-0">
        <h1 className="text-center md:text-left text-2xl md:text-3xl mb-5">
          {Tagline}
        </h1>
        <p className="text-lg text-center md:text-left md:text-xl mb-5">
          {`Ethiopia, located in the Horn of Africa, is a land of ancient civilizations, diverse cultures, and stunning landscapes. Known as 
          the cradle of humanity, Ethiopia is where some of the oldest human fossils were discovered. As the only African country never to 
          be colonized, Ethiopia has a unique history that has shaped its national pride and identity. It is a country of contrasts, from 
          the highlands that give it the nickname "The Roof of Africa" to the vast deserts and the Great Rift Valley.`}
        </p>

        <p className="text-lg text-center md:text-left md:text-xl mb-5">
          {`The Ethiopian flag, with its green, yellow, and red stripes, symbolizes the country's rich heritage and hope for a prosperous future. 
          The green represents the land, yellow stands for peace and hope, and red symbolizes the sacrifices of those who fought for the 
          country's freedom. The central emblem with a star represents unity and the diversity of Ethiopia's people.`}
        </p>
      </div>

      <div className="w-full lg:w-1/2 px-2">
        <Slider {...settings}>
          {photos.map((data, index) => (
            <div key={index} className="relative h-96 lg:h-[500px] ">
              <Image
                layout="fill"
                src={data.image}
                className="border rounded-xl"
                alt={`Gallery image for `}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CommonHeroSection;
