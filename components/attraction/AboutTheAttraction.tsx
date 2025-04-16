import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBusAlt, FaPlane, FaHotel, FaClock } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

export const AboutTheAttraction = ({ attraction }) => {
  var settings: Settings = {
    dots: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 5000,
  };
  const [paddingTop, setPaddingTop] = useState("0");
  const aboutphotos = attraction.heroimage;
  console.log(attraction.attractions)
  return (
    <section className="flex flex-col w-full lg:px-20">
      {attraction.Description.map((short, index) => (
        <p key={index} className="text-[#106156] text-justify text-xl md:text-2xl bg-opacity-30 mb-5">
          {short}
        </p>
      ))}
      <div className="w-full text-[#1A3E58] md:text-[#1A3E58] bg-opacity-90 md:mb-8 mb-4 p-4">
        <Slider {...settings}>
          {aboutphotos.map((data, index) => (
            <div key={index} className="h-[600px] ">
              <Image
                src={data}
                alt={attraction.title}
                layout="fill"
                objectFit="contain"
                onLoad={({ target }) => {
                  const { naturalWidth, naturalHeight } = target;
                  setPaddingTop(
                    `calc(100% / (${naturalWidth} / ${naturalHeight})`,
                  );
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      { attraction.attractions.length != [] ?
        <h1 className="text-[#106156] text-left font-bold md:text-5xl text-2xl mt-5">
          About {attraction.title}
        </h1>
        :
        <h1></h1>
      }

      <div className="grid md:grid-cols-2 grid-cols-1 justify-around gap-5 md:my-10">
        {attraction.attractions.map((detail, index) => {
          return (
            <div
              key={index}
              className="border-4 m-2 border-[#106156] text-[#106156] p-4 md:p-8 border rounded-lg"
            >
              { detail.title != "" ? 
                <h2 className="font-bold text-2xl md:text-3xl mb-5">{detail.title}</h2> 
                : 
                <h2></h2>
              }
              { detail.subtitle != "" ? 
                <h2 className="font-bold text-lg md:text-xl mb-5">{detail.subtitle}</h2> 
                : 
                <h2></h2>
              }
          
              {detail.detail.map((det, index) => (
                <p key={index} className="md:font-semibold md:text-lg text-md text-justify mb-3">
                  {det}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};
