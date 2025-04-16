import React from "react";
import Link from "next/link";
import { socialMediaLinks } from "../common/Footer";
import Image from "next/image";
import reachUsImage from "../../public/About/axum2.jpg";
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";

export default function ReachUs() {
  const socialMediaLinks = [
    {
      icon: <FaFacebook size={30} color="white" />,
      path: "https://www.facebook.com/profile.php?id=100075647120196&mibextid=LQQJ4d",
    },
    // { icon: <FaYoutube size={30} color="white" /> ,  path:""},
    {
      icon: <FaYoutube size={30} color="white" />,
      path: "https://www.youtube.com/@UndiscoveredAfrica",
    },
    {
      icon: <FaInstagram size={30} color="white" />,
      path: "https://instagram.com/seya_ethiopia_official?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr",
    },
    {
      icon: <FaTelegram size={30} color="white" />,
      path: "https://t.me/undiscoverdethiopiatour",
    },
  ];
  return (
    <div className="flex flex-col gap-2 md:gap-5">
      <h1 className="font-semibold text-[#11665b] text-4xl md:text-6xl">
        Or Reach Us Here
      </h1>

      <Link target="_blank" href="mailto:panethiopian@gmail.com">
        <p className="flex flex-row gap-2 text-[#11665b] hover:text-[#11665b] cursor-pointer text-xl md:text-2xl">
          panethiopian@gmail.com
        </p>
      </Link>

      <div className="flex gap-3 md:px-8 border-b-2 py-4 border-gray-500 bg-[#11665b] items-center">
        {socialMediaLinks.map((paths, index) => {
          return (
            <Link key={index} href={paths.path} target="_blank">
              <p className="cursor-pointer">{paths.icon}</p>
            </Link>
          );
        })}
      </div>
      <div className="w-full h-72 relative">
        <Image
          src={reachUsImage}
          alt="Reach Us Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
