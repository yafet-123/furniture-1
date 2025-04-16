import Image from "next/image";

export const MakesUsDifferent = () => {
  return (
    <section className=" md:py-32 py-10">
      <div className="mx-8 flex flex-col text-black justify-center md:mx-40 lg:mx-60 text-center gap-4 md:gap-10">
        <h2 className="text-2xl md:text-5xl font-bold mb-4">What Makes Us Different</h2>
        <div className="flex flex-col gap-6 text-left md:w-full my-8 md:my-0 md:ml-16">
          <h2 className=" font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-left">
            Our core values drive everything we do
          </h2>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Personalized Service:</span> {`We tailor every travel experience to meet the unique preferences and interests 
            of our clients, ensuring that each journey is memorable and meaningful.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Attention to Detail:</span>{" "}
            {`From the moment you start planning your trip to the time you return home, we take care of every detail, allowing you to focus on enjoying the adventure.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Deep Knowledge of Ethiopia:</span> {`Our team of experts has an in-depth understanding of Ethiopia’s hidden gems, enabling 
            us to craft itineraries that explore both well-known landmarks and off-the-beaten-path destinations.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Cultural Immersion:</span>{" "}
            {`We believe that travel is more than just sightseeing; it’s about connecting with the culture, history, and people of the destination. Our tours offer 
            authentic experiences that allow travelers to engage with Ethiopia’s rich heritage.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Adventure and Exploration:</span> {`Whether it’s trekking in the Simien Mountains or exploring the rock-hewn 
            churches of Lalibela, our tours are designed to satisfy the spirit of adventure in every traveler.`}
          </li>
        </div>
      </div>
    </section>
  );
};