import Image from "next/image";

export const Diplomacy = () => {
  return (
    <section className="relative">
      <div className="h-screen md:h-[800px] bg-black ">
        <Image
          alt="CommunityServiceCommitment Background CommunityServiceCommitment"
          layout="fill"
          src="/ethiopia/ethiopia 7.jpg"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center mx-4 md:mx-20 lg:mx-72 ">
        <div className="text-center font-semibold text-white text-2xl md:text-4xl lg:text-5xl bg-[#11665b] bg-opacity-70 p-3 md:p-14">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Ethiopia in the World
          </h2>
          <p className="text-base md:text-2xl  mb-8 paragraph-fonts md:px-16">
            {`Ethiopia plays a significant role in regional and international diplomacy. It is the headquarters of the African 
            Union (AU) and has been a key player in peacekeeping missions across Africa. Ethiopia's diplomatic efforts are 
            focused on promoting peace, security, and development in the region.`}
          </p>
        </div>
      </div>
    </section>
  );
};
