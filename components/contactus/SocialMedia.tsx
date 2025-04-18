import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaTripadvisor,
} from 'react-icons/fa';
import Link from 'next/link';

type SocialMediaLink = {
  id: number;
  link: string;
  icon: React.ReactNode;
};

export const SocialMedia: React.FC = () => {
  const socialMediaLinks: SocialMediaLink[] = [
    {
      id: 1,
      icon: <FaFacebook size={30} color="white" />,
      path: 'https://www.facebook.com/share/15WrEGojk1/?mibextid=LQQJ4d',
    },
    {
      id: 2,
      icon: <FaLinkedin size={30} color="white" />,
      path: 'https://www.linkedin.com/company/ecotravel-ethiopia/',
    },
    {
      id: 3,
      icon: <FaInstagram size={30} color="white" />,
      path: 'https://www.instagram.com/ecotravel_ethiopia?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
    },
    {
      id: 4,
      icon: <FaTelegram size={30} color="white" />,
      path: 'https://t.me/ecotravel_ethiopia',
    },
    {
      id: 5,
      icon: <FaTiktok size={30} color="white" />,
      path: 'https://www.tiktok.com/@ecotravel_ethiopia',
    },
    {
      id: 6,
      icon: <FaTripadvisor size={30} color="white" />,
      path: 'https://www.tripadvisor.com/Attraction_Review-g293791-d25213637-Reviews-Ecotravel_Ethiopia-Addis_Ababa.html',
    },
  ];

  return (
    <div className="w-full lg:w-[40%] h-full px-20 py-52 lg:py-0">
      <div className="relative flex items-center justify-center h-full w-full">
        {socialMediaLinks.map((links, index) => (
          <div 
            className={`absolute rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              p-1 hover:scale-110 transition-transform duration-300 ease-in-out animate-spin-circle-${index}`}
            style={{
              width: '75px',
              height: '75px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Link
              key={index}
              href={links.path}
              target="_blank"       
            >
              <div
                className="rounded-full bg-primaryColor flex items-center justify-center"
                style={{ width: '100%', height: '100%' }}
              >
                {links.icon}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
