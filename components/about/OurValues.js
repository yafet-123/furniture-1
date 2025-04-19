import Image from "next/image";

export const OurValues = () => {
  return (
    <section className="bg-[#edf2f5] md:py-32 py-10">
      <div className="mx-8 flex flex-col text-black justify-center md:mx-40 lg:mx-60 text-center gap-4 md:gap-10">
        <h2 className="text-2xl md:text-5xl font-bold mb-4">Our Values</h2>
        <div className="flex flex-col gap-6 text-left md:w-full my-8 md:my-0 md:ml-16">
          <h2 className=" font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-left">
            Our core values drive everything we do
          </h2>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Excellence:</span> {`We are dedicated to delivering exceptional design 
            and quality in every piece of furniture we create.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Integrity:</span>{" "}
            {`We believe in honest craftsmanship, transparent practices, and genuine relationships with our clients and partners.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Sustainability:</span> {`We embrace environmentally responsible materials and processes to ensure our work respects the planet and future generations.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Passion:</span>{" "}
            {`Our deep love for design and detail drives us to create inspiring, functional, and timeless furniture that enriches everyday living.`}
          </li>
        </div>
      </div>
    </section>
  );
};