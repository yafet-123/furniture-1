import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CommonHeroSection() {
  const CardHeo = [
    {
      id: 1,
      image: "home-1",
    },
    {
      id: 2,
      image: "home-2",
    },
    {
      id: 3,
      image: "home-3",
    },
    {
      id: 4,
      image: "home-4",
    },
    {
      id: 5,
      image: "home-5",
    },
    {
      id: 6,
      image: "home-6",
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
            className={`${data.image} w-full h-screen bg-fixed pt-24 flex flex-col`}
          >
            <div className="flex flex-col justify-center items-center font-bold md:p-12 px-2">
              <div className="w-full lg:w-3/4">
                <h1 className="font-bold leading-10 text-center text-white text-2xl md:text-5xl bg-opacity-30 mb-5 animate-bottomToTop delay-1">
                  {`Discover Ethiopia’s Hidden Treasures`}
                </h1>
              </div>
              <div className="w-full lg:w-[70%] mb-5">
                <p className="text-white text-center text-lg md:text-3xl bg-opacity-30 px-3 animate-bottomToTop delay-1">
                  {`Experience the beauty and diversity of Ethiopia with tailored travel packages that take you deep into the heart 
                  of this remarkable country. Whether it's exploring ancient historical sites, embarking on nature treks, or immersing 
                  yourself in local culture, PAN Ethiopia Tours is your gateway to unforgettable adventures.`}
                </p>
              </div>
              <Link href="/tours">
                <a className="animate-bottomToTop delay-1 btn relative flex items-center justify-center text-[#dec08c] text-[1.2rem] font-bold uppercase tracking-[3px] max-w-max border-2 border-[#dec08c] px-[30px] py-[15px] overflow-hidden z-[1]">
                  <span className="transition ease-[ease] duration-[250ms] ">Explore Tours</span>
                  <span className="text text-2" aria-hidden="true">Explore Tours</span>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
