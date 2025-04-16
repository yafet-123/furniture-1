import { MainHeader } from "../../components/common/MainHeader";
import CommonHeroSection from "../../components/tours/CommonHeroSection.jsx";
import { Attractions } from "../../components/attraction/Attractions";
import { getAllAttractions } from "../../data/AttractionsData";
import React from "react";
import ImageOne from "../../public/Tours/Danakil2.jpg";
import ImageTwo from "../../public/Tours/coffee 4.jpg";
import ImageThree from "../../public/Tours/Gheralta7.jpg";
import ImageFour from "../../public/Tours/simien 8.jpg";

export default function AttractionsPage({ all_attractions }) {
  const photos = [
    {
      image: ImageOne,
    },
    {
      image: ImageTwo,
    },
    {
      image: ImageThree,
    },
    {
      image: ImageFour,
    },
  ];
  return (
    <main className="w-full h-full bg-white flex flex-col">
      <MainHeader title="Pan Ethiopia: Explore Ethiopia's Timeless Beauty with Pan Ethiopia Tours – Your Gateway to Unforgettable Adventures." />
      <div className="flex flex-col">
        <CommonHeroSection
          background="contact-background"
          Tagline="PanEthiopia: Unveiling Hidden Wonders in Every Click"
          photos={photos}
          Welcome_Message="Welcome to PanEthiopia, where each click reveals a tapestry of hidden wonders waiting to be explored. 
          Embark on a journey into the heart of this extraordinary land, where rich cultures, breathtaking landscapes, and untold stories 
          come together."
        />
        <div className="flex flex-col md:flex-row md:justify-around gap-10 px-10 bg-greenbay-white text-white">
          <Attractions AttractionsummaryArray={all_attractions} />
        </div>
      </div>
    </main>
  );
}

export const getStaticProps = async (context) => {
  const all_attractions = getAllAttractions();
  // console.log(all_attractions)

  if (!all_attractions) {
    return {
      notFound: true,
    };
  }

  return {
    props: { all_attractions: all_attractions },
    revalidate: 3600,
  };
};
