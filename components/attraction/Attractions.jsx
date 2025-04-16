import Image from "next/image";
import { useRouter } from "next/router";

export function Attractions({ AttractionsummaryArray }) {
  const router = useRouter();
  const handleSeeAttraction = (attractionid) => {
    router.push(`/attraction/${attractionid}`);
  };
  return (
    <div className="flex flex-col py-10">
      {AttractionsummaryArray?.map((place, index) => {
        return (
          <div 
            key={index}
            className="grid px-2 lg:px-10 lg:grid-cols-2 grid-cols-1 text-white md:justify-center mb-5 lg:mb-0"
          >
            <div
              className={`${
                place.id % 2 === 0
                  ? "lg:order-first order-first"
                  : "lg:order-last order-first"
              } w-full h-72 md:h-[500px] relative  mx-auto`}
            >
              <Image
                src={place.imagePath}
                alt={place.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-2 text-black lg:px-5 py-0 lg:py-3">
              <h1 className="font-bold text-xl md:text-3xl">
                {place.title}
              </h1>

              <p className="font-normal text-md md:text-lg">
                {place.Description[0]}
              </p>

              <div className="my-2">
                <button onClick={() => handleSeeAttraction(place.id)}>
                  <h5
                    className={`text-white bg-[#106156] font-bold rounded-lg font-monospace hover:border-black text-xl w-40
                   hover:scale-105 transition duration-400 p-2`}
                  >
                    Detail
                  </h5>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
