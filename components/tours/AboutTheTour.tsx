import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBusAlt, FaPlane, FaHotel, FaClock } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import BookingForm from "./BookingForm";

export const AboutTheTour = ({ tour }) => {
  var settings: Settings = {
    dots: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 5000,
  };
  const aboutphotos = tour.heroimage;
  return (
    <section className="flex flex-col w-full lg:w-3/4 lg:pr-10">
      <div className="w-full text-[#11665b] md:text-[#11665b] bg-opacity-90 md:mb-8 mb-4 p-4">
        <Slider {...settings}>
          {aboutphotos.map((data, index) => (
            <div
              key={index}
              className="w-full h-72 md:h-[500px] relative  mx-auto"
            >
              <Image
                src={data}
                alt={tour.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          ))}
        </Slider>
        <h1 className="text-left font-bold md:text-5xl text-2xl my-5">
          About : {tour.title}
        </h1>
        <div className="flex flex-col">
          {tour.description.map((short, index) => (
            <p key={index} className="text-[#106156] text-left text-xl md:text-2xl bg-opacity-30 mb-5">
              {short}
            </p>
          ))}

          { tour.detailedItinerary.length != [] ?
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
              <div className="flex flex-col items-center gap-5 justify-around">
                <div className="flex flex-row gap-6 justify-evenly">
                  <FaBusAlt color="#11665b" size={40} />{" "}
                  <FaPlane color="#11665b" size={40} />
                </div>
                <h1 className="text-md text-center lg:text-xl font-bold text-[#11665b]">
                  {tour.transportation}
                </h1>
              </div>
              <div className="flex flex-col items-center gap-5 justify-around">
                <div className="flex flex-row gap-6 justify-evenly">
                  <FaHotel color="#11665b" size={40} />{" "}
                </div>
                <h1 className="text-md text-center lg:text-xl font-bold text-[#11665b]">
                  {tour.accommodation}
                </h1>
              </div>
              <div className="flex flex-col items-center gap-5 justify-around">
                <div className="flex flex-row gap-6 justify-evenly">
                  <FaClock color="#11665b" size={40} />{" "}
                </div>
                <h1 className="text-md text-center lg:text-xl font-bold text-[#11665b]">
                  {tour.duration}
                </h1>
              </div>
              <div className="flex flex-col items-center gap-5 justify-around">
                <div className="flex flex-row gap-6 justify-evenly">
                  <BsPeopleFill color="#11665b" size={40} />{" "}
                </div>
                <h1 className="text-md text-center lg:text-xl font-bold text-[#11665b]">
                  {tour.groupsize} Group Size
                </h1>
              </div>
            </div> : <div></div>
          }
        </div>
      </div>
      
      { tour.detailedItinerary.length != [] ?
        <div className="text-center font-bold text-[#11665b]">
          <h1 className="md:text-5xl text-4xl">Detail Itinerary</h1>
        </div> : <div></div>
      }

      <div className="grid md:grid-cols-2 grid-cols-1 justify-around gap-5 md:my-10">
        {tour.detailedItinerary.map((detail, index) => {
          return (
            <div
              key={index}
              className="border-b-4 m-2 border-[#11665b] bg-[#11665b] text-white p-4 md:p-8 border rounded-lg"
            >

              { detail.subtitle != "" ? 
                <p className="md:font-semibold md:text-xl text-md text-left mb-5">
                  {detail.subtitle}
                </p> : <p></p>
              }

              <h2 className="font-bold md:text-xl mb-5 capitalize">Day {detail.day} : {detail.title}</h2>

              <p className="md:font-semibold md:text-lg text-md text-left">
                {detail.detail}
              </p>

              { detail.posttitle != "" ? 
                <p className="md:font-semibold md:text-lg text-md text-left">
                  {detail.posttitle}
                </p> : <p></p>
              }

              { detail.overnight != "" ?
                <h2 className="font-bold md:text-xl my-5">
                  Overnight: {detail.overnight}
                </h2> : <h2></h2>
              }
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 justify-around gap-5 md:my-10">
        <ul className="flex flex-col list-none border-b-4 m-2 border-[#11665b] bg-[#11665b] text-white p-4 md:p-8 border rounded-lg">
          <h2 className="font-bold text-lg md:text-2xl mb-5 capitalize text-center">Include</h2>
          {tour.included.map((include, index) => {
            return (
              <div key={index} className="md:font-semibold md:text-lg text-md text-justify">
                {include}
              </div>
            );
          })}
        </ul>

        <ul className="flex flex-col list-none border-b-4 m-2 border-[#11665b] bg-[#11665b] text-white p-4 md:p-8 border rounded-lg">
          <h2 className="font-bold text-lg md:text-2xl mb-5 capitalize text-center">Not Include</h2>
          {tour.notincluded.map((include, index) => {
            return (
              <div key={index} className="md:font-semibold md:text-lg text-md text-justify">
                {include}
              </div>
            );
          })}
        </ul>
      </div>
      <BookingForm tour_title={tour.title} />
    </section>
  );
};
