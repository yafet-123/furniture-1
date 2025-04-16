import { MainHeader } from "../../components/common/MainHeader";
import CommonHeroSection from "../../components/hotels/CommonHeroSection.jsx";
import Hotels from "../../components/hotels/Hotels";
import { getAllHotels } from "../../data/HotelsData";
import React from "react";

export default function HotelBooking({ all_hotels }) {
  return (
    <main className="w-full h-full bg-white flex flex-col">
      <MainHeader 
        title="Pan Ethiopia: Explore Ethiopia's Timeless Beauty with Pan Ethiopia Tours – Your Gateway to Unforgettable Adventures." />
      <CommonHeroSection
        Tagline="Unlock Unforgettable Escapes: Effortlessly Book Your Ethiopian Getaway with Panethopia"
        Welcome_Message="Step into a world of adventure and relaxation with Panethopia, where booking your dream Ethiopian stay is 
        just the beginning. From the rugged landscapes of the Simien Mountains to the cultural heart of Addis Ababa, our handpicked 
        hotels and lodges offer more than just a place to rest—they’re a gateway to the true spirit of Ethiopia. Whether you're 
        seeking modern luxury or authentic local charm, Panethopia ensures your journey is as unforgettable as your destination."
      />
      <Hotels hotels={all_hotels} />
    </main>
  );
}

export const getStaticProps = async (context) => {
  const all_hotels = getAllHotels();
  // console.log(all_hotels)

  if (!all_hotels) {
    return {
      notFound: true,
    };
  }

  return {
    props: { all_hotels: all_hotels },
    revalidate: 3600,
  };
};
