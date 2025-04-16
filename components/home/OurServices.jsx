import React from "react";
import { FaBusAlt, FaHotel } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsHeadset, BsPersonBoundingBox } from "react-icons/bs";
import { MdPriceCheck } from "react-icons/md";
import Image from "next/image";

export default function OurServices() {
  const ServicesArray = [
  {
    title: "Explore Panethopia's Unique Landscapes",
    icon: <FaBusAlt size={75} color="#00d1bb" />,
    image: "bg-[#106156]",
    text: "text-white",
    description:
      "Journey across Panethopia's stunning and diverse landscapes. From lush forests to dramatic coastlines, our tours are carefully curated to showcase the natural beauty and cultural heritage of this extraordinary region.",
  },
  {
    title: "Unmatched Service and Expertise",
    icon: <AiFillStar size={75} color="#00d1bb" />,
    image: "bg-[#e3c48f]",
    text: "text-black",
    description:
      "Our team of travel experts is passionate about Panethopia. With extensive knowledge of the region, we provide top-notch service to ensure that your experience is seamless, memorable, and tailored to your needs.",
  },
  {
    title: "Support Anytime, Anywhere",
    icon: <BsHeadset size={75} color="#00d1bb" />,
    image: "bg-[#106156]",
    text: "text-white",
    description:
      "We offer 24/7 assistance to make sure you have peace of mind throughout your journey. Whether you're booking, traveling, or simply need advice, our dedicated team is here to help at any time.",
  },
  {
    title: "Tailor-Made Adventures Just for You",
    icon: <BsPersonBoundingBox size={75} color="#00d1bb" />,
    image: "bg-[#e3c48f]",
    text: "text-black",
    description:
      "Our personalized matching system ensures that your adventure is crafted exactly to your preferences. Whether you're seeking adventure or relaxation, we create a one-of-a-kind experience designed just for you.",
  },
  {
    title: "Premium Stays for a Comfortable Journey",
    icon: <FaHotel size={75} color="#00d1bb" />,
    image: "bg-[#106156]",
    text: "text-white",
    description:
      "Enjoy handpicked accommodations that match your preferences and budget. From cozy retreats to luxurious hotels, we ensure your stay in Panethopia is comfortable and enriching.",
  },
  {
    title: "Book with Confidence and Value",
    image: "bg-[#e3c48f]",
    text: "text-black",
    icon: <MdPriceCheck size={75} color="#00d1bb" />,
    description:
      "We offer competitive pricing for our tours. If you find a better price elsewhere, we will match it, ensuring you receive the best value while exploring the wonders of Panethopia.",
  },
];
  return (
    <section className="h-full bg-white py-10 px-5 md:px-20">
      <h1 className="text-center font-bold text-[#106156] text-3xl md:text-4xl lg:text-5xl mb-10">
        {`Uncover Ethiopia's Hidden Gems, waiting to be explored by you.`}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 my-5 lg:mb-0 ">
        {ServicesArray.map((service, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-around items-center w-auto h-auto p-6 lg:p-5 gap-4 ${service.image} ${service.text} rounded-2xl`}
            >
              <h2 className="md:text-2xl text-lg font-semibold md:font-bold text-center">
                {service.title}
              </h2>

              <p className="md:text-lg text-md md:px-6 text-center ">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
