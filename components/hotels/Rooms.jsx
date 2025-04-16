import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { ImLocation } from "react-icons/im";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

export default function Hotels({ hotel }) {
  return (
    <div className="flex flex-col py-10 lg:py-10 ">
      {hotel.rooms.map((room, index) => {
        return (
          <div
            key={index}
            className="grid px-2 lg:px-10 lg:grid-cols-2 grid-cols-1 text-white md:justify-center mb-5"
          >
            <div className={`w-full h-72 md:h-[500px] relative  mx-auto`}>
              <Image
                src={room.imagePath}
                alt={room.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-4 text-black py-5 lg:py-10 lg:px-10">
              <h1 className="font-bold text-xl md:text-3xl">{room.name}</h1>

              <div className="flex items-center pr-5">
                <FaBed size={25} />{" "}
                <p className="pl-4 font-normal text-md md:text-xl">
                  {room.bed}
                </p>
              </div>

              <div className="flex flex-row">
                <div className="flex items-center pr-5">
                  <BsFillPersonFill size={25} />{" "}
                  <p className="pl-4 font-normal text-md md:text-xl">
                    {room.person}
                  </p>
                </div>

                <div className="flex items-center pr-5">
                  <FaHotel size={25} />{" "}
                  <p className="pl-4 font-normal text-md md:text-xl">
                    {room.roomsize}
                  </p>
                </div> 
              </div>
              <p className="font-normal text-md md:text-xl">
                {room.description}
              </p>
              <div className="flex gap-10 py-4 bg-white">
                <a
                  href={`https://t.me/panethiopia2024`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:scale-110 transition duration-300"
                  title="Chat on Telegram"
                >
                  <FaTelegram size={40} color="#28a8e8" />
                </a>
                <a
                  href={`https://wa.me/message/IOKHULHNOUXLO1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:scale-105 transition duration-300"
                  title="Chat on Whatsapp"
                >
                  <FaWhatsapp size={40} color="#128c7e" />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
