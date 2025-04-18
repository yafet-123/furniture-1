import Image from "next/image";

export const OurPromise = () => {
  return (
    <section className="relative">
      <div className="h-screen md:h-[800px] bg-black ">
        <Image
          alt="CommunityServiceCommitment Background CommunityServiceCommitment"
          layout="fill"
          src="/image/project3.jpg"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center mx-4 md:mx-20 lg:mx-72 ">
        <div className="text-center font-semibold text-white text-2xl md:text-4xl lg:text-5xl bg-[#11665b] bg-opacity-90 p-3 md:p-14">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Our Promise
          </h2>
          <p className="text-base md:text-2xl  mb-8 paragraph-fonts md:px-16">
            {`We promise to create furniture that enhances the way you live, work, and feel in your space. Every piece is 
            thoughtfully designed and carefully crafted to combine beauty, functionality, and lasting quality. With a focus 
            on creativity, comfort, and care, our goal is to bring inspiring designs that make every space truly feel like home.`}
          </p>
        </div>
      </div>
    </section>
  );
};
