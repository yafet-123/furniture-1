import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { ImLocation } from "react-icons/im";
import ReactStars from "react-rating-stars-component";

export default function Hotels({ hotels }) {
  const router = useRouter();
  const handleSeeHotel = (hotelid) => {
    router.push(`/hotelbooking/${hotelid}`);
  };

  return (
    <div className="flex flex-col py-10 lg:py-10 bg-[#edf2f5]">
      {hotels?.map((hotel, index) => {
        return (
          <div
            key={index}
            className="grid px-5 lg:px-10 lg:grid-cols-2 grid-cols-1 text-white md:justify-center"
          >
            <div
              className={`${
                hotel.id % 2 === 0
                  ? "lg:order-first order-first"
                  : "lg:order-last order-first"
              } w-full h-72 md:h-[500px] relative  mx-auto`} 
            >
              <Image
                src={hotel.image}
                alt={hotel.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <div className="flex flex-col p-6 gap-4 text-black py-5 lg:py-10 px-5 lg:px-10">
              <h1 className="font-bold text-xl md:text-3xl">{hotel.name}</h1>
              <div className="flex flex-row items-center">
                <ReactStars
                  count={Number(hotel.star)}
                  value={Number(hotel.star)}
                  size={24}
                  activeColor="#ffd700"
                />
                <p className="ml-3"> {hotel.star} stars</p>
              </div>
              <Link
                target="_blank"
                className="flex flex-row items-center gap-2 hover:text-gray-300"
                href={`https://goo.gl/maps/Gc6478sG5ZecmfSj6`}
              >
                <span className="flex items-center">
                  <ImLocation />{" "}
                  <p className="pl-2 font-normal text-md md:text-xl">
                    {hotel.location[0]}
                  </p>
                </span>
              </Link>
              <p className="font-normal text-md md:text-xl">
                {hotel.description}
              </p>
              <button
                onClick={() => handleSeeHotel(hotel.id)}
                className="mb-5 w-1/2 font-bold md:text-lg text-md  py-1 md:py-2 px-5 bg-[#11665b] hover:bg-[#00D1BB] text-white hover:text-white border-2 border-white rounded-md"
              >
                Show Room
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
