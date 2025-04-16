import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Whatmakeusspecial() {
  const router = useRouter();
  const handleSeeTour = () => {
    router.push(`/about`);
  }; 
  const tours = [
    {
      id: "1",
      tour: "Guide",
      image: "/HomeHero/Ethiopia-Wildlife-Hero.jpg",
      description:
        "It’s an honor to introduce visitors to Ethiopia and I take it very seriously. I want to show you everything (of course!) but I try to tailor my tours to your expectations.",
    },
    {
      id: "3",
      tour: "Organize",
      image: "/HomeHero/home4.avif",
      description:
        "My years of experience have given me a solid network of contacts on the ground. Not just for the big attractions but off-the-beaten-track as well.",
    },
    {
      id: "4",
      tour: "Listen",
      image: "/HomeHero/home7.jpeg",
      description:
        "I try to understand a bit about your tastes and goals so that I can zoom-in on the options that will make your visit to my beautiful country unforgettable.",
    },
  ];
  return (
    <section className="flex flex-col bg-[#edf1f4] py-10">
      <h1 className="text-center font-bold text-[#106156] text-3xl md:text-4xl lg:text-5xl mb-10">
        What make us special?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 md:mx-10 lg:mx-20">
        {tours.map((data, index) => (
          <div
            key={index}
            className="shadow-md shadow-black h-full flex flex-col justify-between bg-white rounded-tr-xl rounded-tl-xl z-10 w-full hover:scale-105 transition duration-300"
          >
            <div className="h-[300px] bg-black rounded-tr-xl rounded-tl-xl relative mb-5">
              <Image
                alt="Our Values Background Image"
                layout="fill"
                src={data.image}
                className="rounded-tr-xl rounded-tl-xl"
              />
            </div>
            <div className="flex flex-col justify-center items-center ">
              <h1 className="mb-5 text-left px-3 font-bold text-xl md:text-2xl w-full ">
                {data.tour}
              </h1>
              <p className="ml-3 md:text-xl text-lg text-left mb-3">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={() => handleSeeTour()}
          className={`my-5  mx-5 lg:mx-10 font-bold md:text-lg text-md py-1 md:py-2 px-5 bg-[#106156] text-white hover:text-[#1a3e58] border-2 border-white rounded-md`}
        >
          Read More
        </button>
      </div>
    </section>
  );
}
