import Image from "next/image";
import { useRouter } from "next/router";

export default function Tours({ TourSummaryArray }) {
  const router = useRouter();
  const handleSeeTour = (tourid) => {
    router.push(`/tours/${tourid}`);
  };

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 px-2 lg:px-5 py-10 bg-[#edf2f5]">
      {TourSummaryArray?.map((tour, index) => {
        return (
          <div
            key={index}
            className={`relative flex flex-col ${
              tour.id % 2 == 1 ? "bg-[#11665b] text-white" : "bg-[#E6E6E6]"
            }`}
          >
            <div className="w-full h-72 md:h-[300px] relative">
              <Image
                src={tour.imagePath}
                alt={tour.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="flex flex-col px-4">
              <h1 className="font-bold text-xl md:text-4xl mt-5 mb-5">
                {tour.title}
              </h1>
              <p className="font-normal text-lg md:text-xl text-justify">
                {tour.shortDescription}
              </p>
              <div className="my-10 bg-transparent">
                <button onClick={() => handleSeeTour(tour.id)}>
                  <h5
                    className={`absolute bottom-6 font-bold font-monospace hover:border-black text-xl mt-1 w-40 items-center justify-center hover:scale-105 transition duration-400 p-2 text-white ${
                      tour.id % 2 == 1
                        ? "bg-gradient-to-r from-green-500 to-[#11665b]-500"
                        : "bg-gradient-to-r from-green-800 to-[#11665b]-800"
                    }`}
                  >
                    View More
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
