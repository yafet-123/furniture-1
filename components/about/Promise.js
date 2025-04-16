import Image from "next/image";

export const OurPromise = () => {
  return (
    <section className="relative">
      <div className="h-screen md:h-[800px] bg-black ">
        <Image
          alt="CommunityServiceCommitment Background CommunityServiceCommitment"
          layout="fill"
          src="/About/Abreha_and_Atsbeha_Church_02.jpg"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center mx-4 md:mx-20 lg:mx-72 ">
        <div className="text-center font-semibold text-white text-2xl md:text-4xl lg:text-5xl bg-[#11665b] bg-opacity-90 p-3 md:p-14">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Our Promise
          </h2>
          <p className="text-base md:text-2xl  mb-8 paragraph-fonts md:px-16">
            {`At Pan Ethiopia Tours, we promise to make every journey an unforgettable adventure. Whether you are exploring the ancient history, 
            vibrant culture, or stunning landscapes of Ethiopia, we are dedicated to providing a transformative travel 
            experience that will leave you with lasting memories and a deep appreciation for this beautiful country.`}
          </p>
        </div>
      </div>
    </section>
  );
};
