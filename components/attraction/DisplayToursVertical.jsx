import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export function DisplayToursVertical({ all_tours }) {
  const router = useRouter();
  const handleSeeTour = (tourid) => {
    router.push(`/tours/${tourid}`);
  };
  return (
    <div className="lg:sticky top-0 bottom-10 flex flex-col w-full lg:w-[28%] h-full lg:h-[90rem] border rounded-lg shadow-2xl shadow-sky-200 scroll_width">
      {all_tours.map((tour, index) => (
        <button onClick={() => handleSeeTour(tour.id)} key={index}>
          <div className="flex flex-col my-3 hover:bg-[#1A3E58] group hover:rounded-lg">
            <div className="w-full !h-72 relative">
              <Image
                src={tour.imagePath}
                alt={tour.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <div className="w-full flex flex-col my-5 text-left px-2">
              <h1 className="text-lg lg:text-xl font-extrabold dark:text-white text-black tracking-wide leading-snug group-hover:text-white">
                {tour.title}
              </h1>
              <p className="font-normal text-md md:text-lg hover:text-white text-justify group-hover:text-white">
                {tour.shortDescription}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
