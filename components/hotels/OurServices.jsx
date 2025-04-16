import Image from "next/image";

export default function OurServices() {
  return (
    <section className="py-10">
      <div className="mx-8 flex flex-col text-[#1A3E58] justify-center md:mx-40 lg:mx-60 text-center gap-4 md:gap-10">
        <h2 className="text-2xl md:text-5xl font-bold mb-4">Our Services</h2>
        <div className="flex flex-col gap-6 text-left md:w-full my-8 md:my-0 md:ml-16">
          <li className="md:text-xl text-lg text-left">
            <span className="font-semibold">Tours and Excursions Extend :</span>
            {`your stay with our diverse range of tours and excursions. Explore Ethiopia's hidden gems, from ancient wonders to natural marvels.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-semibold">
              Photography-Centered Experiences:
            </span>
            {`If you're a photography enthusiast, join our dedicated photography tours to capture Ethiopia's beauty through your lens.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-semibold">Community Service Journeys:</span>
            Engage with local communities and make a meaningful impact with our
            community service journeys.
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-semibold">
              Travel Arrangements and Concierge Services:
            </span>
            Allow us to handle your travel arrangements, from flights and
            transportation to personalized itineraries.
          </li>
        </div>
      </div>
    </section>
  );
}
