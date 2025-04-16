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
        <h1 className="text-center md:text-left text-2xl md:text-4xl mb-5">
          {Tagline}
        </h1>
        <h1 className="text-xl text-center md:text-left md:text-2xl mb-5">
          {Welcome_Message}
        </h1>
      </div>

      <div className="w-full lg:w-1/2 px-2">
        <Slider {...settings}>
          {photos.map((data, index) => (
            <div key={index} className="relative h-96 lg:h-[450px] ">
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
