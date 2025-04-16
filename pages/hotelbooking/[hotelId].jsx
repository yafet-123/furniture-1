import { MainHeader } from "../../components/common/MainHeader";
import { getAllHotels, getHotelsById } from "../../data/HotelsData";
import Rooms from "../../components/hotels/Rooms";
import CommonHeroSection from "../../components/hotels/CommonHeroSection.jsx";

import ImageOne from "../../public/temp/Bale-Sanetti-Plateau.avif";
import ImageTwo from "../../public/temp/das1.jpg";
import ImageThree from "../../public/temp/konso2.jpg";
import ImageFour from "../../public/temp/lalibela1.jpg";

export default function HotelDetail({ hotel, all_hotels }) {
  hotel = hotel[0];
  // console.log(all_hotels);
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
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title={`Pan Ethiopia ${hotel.name}`} />
      <CommonHeroSection
        background="hotel-background"
        Tagline="Discover Tranquil Retreats: Seamlessly Book Your Ethiopian Escape with Undiscovered Hospitality"
        photos={photos}
        Welcome_Message="Embark on a seamless journey of comfort and discovery with Undiscovered Ethiopia's hotel booking experience. Our 
        carefully curated selection of accommodations invites you to indulge in tranquil retreats, ensuring a harmonious blend of 
        modern comfort and authentic Ethiopian charm."
      />
      <div className="flex flex-col lg:flex-row w-full h-full px-1 lg:pl-5 lg:pr-20 pt-10">
        <Rooms hotel={hotel} />
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const hotelId = context.params.hotelId;
  const hotel = getHotelsById(hotelId);
  const all_hotels = getAllHotels();

  if (!all_hotels) {
    return {
      notFound: true,
    };
  }

  if (!hotel) {
    return {
      notFound: true,
    };
  }

  return {
    props: { hotel: hotel, all_hotels: all_hotels },
    revalidate: 3600,
  };
};

export const getStaticPaths = async (context) => {
  const hotels = getAllHotels();
  //   console.log(context)

  // Get the paths we want to pre-render based on hotels
  const paths = hotels.map((hotel) => ({
    params: { hotelId: hotel.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: paths, fallback: false };
};
