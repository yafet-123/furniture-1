import { useRouter } from "next/router";
import React from "react";
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link"

const CommonHeroSection = ({ Tagline, Welcome_Message}) => {
  const CardHeo = [
    {
      id: 1,
      image: "hotel-1",
    },
    {
      id: 2,
      image: "hotel-2",
    },
    {
      id: 3,
      image: "hotel-3",
    },
    {
      id: 4,
      image: "hotel-4",
    },
    {
      id: 5,
      image: "hotel-5",
    },
    {
      id: 6,
      image: "hotel-6",
    },
  ];
  var settings = {
    dots: false,
    lazyLoad: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {CardHeo.map((data, index) => (
          <div
            key={index}
            className={`${data.image} w-full h-full lg:h-[600px] bg-fixed pt-16 flex flex-col`}
          >
            <div className="flex flex-col justify-center items-center font-bold md:p-12 px-2">
              <div className="w-full lg:w-3/4">
                <h1 className="font-bold leading-10 text-center text-white text-xl md:text-4xl bg-opacity-30 mb-5 animate-bottomToTop delay-1">
                  {Tagline}
                </h1>
              </div>
              <div className="w-full lg:w-[70%] mb-5">
                <p className="text-white text-center text-lg md:text-2xl bg-opacity-30 px-3 animate-bottomToTop delay-1">
                  {Welcome_Message}
                </p>
              </div>
              <Link href="/hotelbooking/hotels">
                <a className="animate-bottomToTop delay-1 btn relative flex items-center justify-center text-[#dec08c] text-[1.2rem] font-bold uppercase tracking-[3px] max-w-max border-2 border-[#dec08c] px-[30px] py-[15px] overflow-hidden z-[1]">
                  <span className="transition ease-[ease] duration-[250ms] ">Hotel Booking</span>
                  <span className="text text-2" aria-hidden="true">Hotel Booking</span>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommonHeroSection;
