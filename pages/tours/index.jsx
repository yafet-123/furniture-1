import { MainHeader } from "../../components/common/MainHeader";
import CommonHeroSection from "../../components/tours/CommonHeroSection.jsx";
import Tours from "../../components/tours/Tours";
import { getAllTours } from "../../data/ToursData";
import React from "react";
// import {TourSummaryArray} from '../../data/ToursData'

import ImageOne from "../../public/temp/tana1.jpg";
import ImageTwo from "../../public/temp/tana2.jpg";
import ImageThree from "../../public/Tours/Danakil4.jpg";
import ImageFour from "../../public/Tours/lalibela.jpg";
import ImageFive from "../../public/Tours/Gheralta1.jpg";
import ImageSix from "../../public/Tours/Gheralta2.jpg";
import ImageSeven from "../../public/Tours/coffee 1.jpg";
import ImageEight from "../../public/Tours/coffee 2.jpg";
import ImageNine from "../../public/gallery/gallery 4.jpg";
import ImageTen from "../../public/gallery/gallery 5.jpg";
import ImageEleven from "../../public/gallery/gallery 9.jpg";



export default function ToursPage({ all_tours }) {
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
    {
      image: ImageFive,
    },
    {
      image: ImageSix,
    },
    {
      image: ImageSeven,
    },
    {
      image: ImageEight,
    },
    {
      image: ImageNine,
    },
    {
      image: ImageTen,
    },
    {
      image: ImageEleven,
    },
  ];
  return (
    <div className="">
      <MainHeader title="Pan Ethiopia: Explore Ethiopia's Timeless Beauty with Pan Ethiopia Tours – Your Gateway to Unforgettable Adventures." />
      <div className="flex flex-col">
        <CommonHeroSection
          background="home-background"
          photos={photos}
          Tagline = "Panethopia's Charm: A Journey Through Unseen Wonders"
          Welcome_Message = "Welcome to the heart of adventure with Panethopia Tours! Discover the breathtaking beauty and cultural diversity 
          of this captivating region through our expertly crafted tours designed to reveal its hidden gems."

        />
        <Tours TourSummaryArray={all_tours} />
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const all_tours = getAllTours();
  // console.log(all_tours)

  if (!all_tours) {
    return {
      notFound: true,
    };
  }

  return {
    props: { all_tours: all_tours },
    revalidate: 3600,
  };
};
