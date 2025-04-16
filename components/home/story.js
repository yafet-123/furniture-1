import Image from 'next/image'
import Link from "next/link";

export function Story () {
  return(
    <section className="relative flex flex-col lg:flex-row  pt-20 pb-40 px-5 lg:px-40 bg-[#f2f6fa]">
      <div className="flex flex-col w-full mb-20 lg:mb-0 px-2 w-full lg:w-[80%]">
        <p className="text-[#106156] text-xl lg:text-5xl font-bold label-2 text-left mb-5">Discover Ethiopia with Pan Ethiopia Tours</p>
        <Image 
          className="w-[100px] text-[#e3c48f]" 
          src='/separator.svg'
          width="150px"
          height="30%"
          alt="story images"
        />
        <h2 className="text-black text-4xl font-bold text-left my-5">Your Gateway to Authentic Ethiopian Experiences</h2>
        <p className="text-black text-lg lg:text-xl mb-5 text-left">
          {`We are also specialists in custom itineraries, group tours, family holidays, independent vacations, escorted tours, adventure holidays, 
          cultural tours, logistical arrangements for filming, Photographic tours and so much more throughout the land of many wonders – Ethiopia 
          and we are based in the capital city, Addis Ababa. We organise special package and tailor made tours to Axum, Lalibela, Gondar Castles, 
          Bahir Dar & Lake Tana, Tigray Rock-Hewn Churches, the Danakil Depression and Omo valley.`}
        </p>

        <Link href="/about">
          <a className="btn relative flex items-center justify-center text-[#dec08c] text-[1.2rem] font-medium uppercase tracking-[3px] max-w-max border-2 border-[#dec08c] px-[30px] py-[15px] overflow-hidden z-[1]">
            <span className="transition ease-[ease] duration-[250ms] ">Read More</span>
            <span className="text text-2" aria-hidden="true">Read More</span>
          </a>
        </Link>
      </div>

      <div className="relative">
        <Image 
          src="/About/AboutHeroImage.jpg" 
          width="570" 
          height="800" 
          loading="lazy" 
          alt="about banner"
          className="w-100"  
        />
      </div>
    </section>
  )
};