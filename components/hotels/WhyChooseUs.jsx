import React from "react";
import { FaBusAlt, FaHotel } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsHeadset, BsPersonBoundingBox } from "react-icons/bs";
import { MdPriceCheck } from "react-icons/md";
import Image from "next/image";

export default function WhyChooseUs() {
  const WhyChooseUsArray = [
    {
      id:1,
      title: "Handpicked Hotels Across Ethiopia",
      description: [
        "Our collection features handpicked hotels across Ethiopia, offering the perfect blend of luxury, comfort, and authentic experiences.",
        "From vibrant city stays to peaceful nature retreats, we ensure each property reflects the unique charm of its destination.",
      ],
    },
    {
      id:2,
      title: "Expert Local Insights",
      description: [
        "With our deep-rooted local knowledge, we recommend hotels that connect you with the heart and soul of your chosen destination.",
        "Our team knows Africa inside-out, ensuring your stay not only meets but exceeds your expectations.",
      ],
    },
    {
      id:3,
      title: "Effortless Booking Experience",
      description: [
        "Our user-friendly platform makes booking your dream hotel quick and simple. Customize your stay with ease—from room options to special requests.",
        "We streamline the entire process, so you can focus on your adventure while we handle the details.",
      ],
    },
    {
      id:4,
      title: "Competitive Rates with No Hidden Fees",
      description: [
        "We believe in transparent pricing, offering you competitive rates with no hidden fees.",
        "Get the best value for your stay without compromising on the quality or experience you deserve.",
      ],
    },
    {
      id:5,
      title: "Sustainable Stays for a Better Tomorrow",
      description: [
        "Choose from eco-conscious hotels that prioritize sustainability, allowing you to travel with a positive impact on local communities and the environment.",
        "We partner with properties committed to responsible tourism, ensuring that your journey leaves a lasting, positive legacy.",
      ],
    },
    {
      id:6,
      title: "24/7 Customer Support",
      description: [
        "Our dedicated support team is available around the clock to assist with any booking inquiries or on-trip needs.",
        "From the moment you book until the end of your stay, we're here to make sure everything runs smoothly.",
      ],
    },
  ];
  return (
    <section className="h-full px-5 md:px-20 pb-10 bg-[#edf2f5]">
      <h1 className="text-center font-bold text-[#11665b] text-3xl md:text-4xl lg:text-5xl my-5">
        Why Choose Us for Hotel Booking
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 my-5 lg:mb-0 ">
        {WhyChooseUsArray.map((choose, index) => {
          return (
            <div
              key={index}
              className={`text-center flex flex-col border-4 shadow-lg gap-2 p-4 items-center drop-shadow-xl 
                ${ choose.id % 8 === 1 || choose.id % 8 === 4 || choose.id % 8 ===5 || choose.id % 8 === 0
                  ? 'bg-[#11665b] text-white border-[#11665b]'  // White background with green text and border for even indices
                  : 'bg-white text-[#11665b] border-[#11665b]' // Green background with white text and green border for odd indices
                }`}
            >
              <h2 className="md:text-2xl text-lg font-semibold md:font-bold text-center">
                {choose.title}
              </h2>
              <ul className="md:text-lg text-md md:px-6 list-disc">
                <li>{choose.description[0]}</li>
                <li>{choose.description[1]}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
