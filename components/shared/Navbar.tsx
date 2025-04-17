import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import navbarImage from '../../public/logo-02.png';
import navbarImage1 from '../../public/logo2.png';
import { IoIosArrowDown } from 'react-icons/io';

import useNavbarColorChange from '../../hooks/useNavbarColorChange';
import useScrollDirection from '../../hooks/useScrollDirection';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const NavLinks = [
    { path: '/', name: 'HOME' },
    { path: '/tours', name: 'TOURS' },
    { path: '/car_rental', name: 'CAR RENTAL' },
    {
      path: '/explore',
      name: 'EXPLORE',
      dropdown: [
        { path: '/ethiopia', name: 'ETHIOPIA' },
        { path: '/destinations', name: 'DESTINATIONS' },
        { path: '/travel_tips', name: 'TRAVEL TIPS' },
      ],
    },
    { path: '/gallery', name: 'GALLERY' },
    { path: '/about', name: 'ABOUT' },
    { path: '/sustainability', name: 'SUSTAINABILITY' },
    { path: '/contactus', name: 'CONTACT US' },
  ];

  const scrollDirection = useScrollDirection();
  const colorChange = useNavbarColorChange(80);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false); // Close the dropdown when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`${
        colorChange ? 'md:bg-primaryColor ' : 'md:bg-transparent'
      } bg-primaryColor w-full lg:h-[100px] top-0 fixed z-40 ${
        scrollDirection === 'down' ? 'md:-top-28 -top-24' : 'top-0'
      }`}
    >
      <div className="lg:justify-between justify-around lg:px-4 mx-4 lg:items-center lg:flex lg:py-2">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="">
            {colorChange ? (
              <Image
                src={navbarImage}
                className="w-[150px] h-[60px]"
                alt="Navbar"
              />
            ) : (
              <Image
                src={navbarImage1}
                className="w-[150px] h-[60px]"
                alt="Navbar"
              />
            )}
          </Link>
          <div className="lg:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <AiOutlineClose color="white" size={30} />
              ) : (
                <AiOutlineMenu color="white" size={30} />
              )}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 lg:justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              open ? 'flex' : 'hidden'
            }`}
          >
            <ul className="items-center justify-between space-y-8 lg:flex lg:space-x-8 lg:space-y-0">
              {NavLinks.map((link) => (
                <li
                  key={link.name}
                  className={`relative md:ml-6 font-bold md:my-0 my-7 group`}
                >
                  {link.dropdown ? (
                    <div ref={dropdownRef} className="z-50">
                      <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className={`text-md font-bold ${
                          router.pathname === link.path
                            ? `text-secondaryColor border-b-4 border-secondaryColor ${
                                colorChange
                                  ? `text-secondaryColor border-secondaryColor`
                                  : `text-primaryColor border-primaryColor`
                              }`
                            : `text-md font-bold ${
                                router.pathname === '/sustainablity' ||
                                !colorChange
                                  ? 'text-white lg:text-black'
                                  : 'text-white'
                              } hover:border-b-4 hover:border-secondaryColor hover:text-secondaryColor`
                        }`}
                      >
                        {link.name}
                        {link.name === 'EXPLORE' && (
                          <IoIosArrowDown className="text-2xl ml-2 inline" />
                        )}
                      </button>
                      {isMenuOpen && (
                        <ul
                          className={`absolute left-0 mt-2 w-48 bg-[#1A654F] z-50`}
                        >
                          {link.dropdown.map((sublink) => (
                            <li
                              className={`text-md font-bold hover:bg-gray-200 px-4 py-2 ${
                                router.pathname === sublink.path
                                  ? `text-secondaryColor border-b-4 border-secondaryColor ${
                                      colorChange
                                        ? `text-secondaryColor border-secondaryColor`
                                        : `text-primaryColor border-primaryColor`
                                    }`
                                  : `text-md font-bold ${
                                      router.pathname === '/sustainablity' ||
                                      !colorChange
                                        ? 'text-white lg:text-black'
                                        : 'text-white'
                                    } hover:border-b-4 hover:border-secondaryColor hover:text-secondaryColor`
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                              key={sublink.name}
                            >
                              <Link href={sublink.path}>{sublink.name}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      className={`text-md font-bold ${
                        router.pathname === link.path
                          ? `text-secondaryColor border-b-4 border-secondaryColor ${
                              colorChange
                                ? `text-secondaryColor border-secondaryColor`
                                : `text-primaryColor border-primaryColor`
                            }`
                          : `text-md font-bold ${
                              router.pathname === '/sustainablity' ||
                              !colorChange
                                ? 'text-white lg:text-black'
                                : 'text-white'
                            } hover:border-b-4 hover:border-secondaryColor hover:text-secondaryColor`
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
