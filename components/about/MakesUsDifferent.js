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
            <span className="font-bold">Personalized Design Solutions:</span> {`We work closely with each client to understand their vision, lifestyle, and preferences, delivering furniture and interiors that feel uniquely theirs.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Attention to Detail:</span>{" "}
            {`From the initial concept to the final finish, we obsess over every element—materials, textures, proportions—to ensure impeccable results.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Expert Craftsmanship:</span> {`With deep knowledge of design principles and furniture-making techniques, our team brings years of expertise to each project, blending artistry with precision.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Timeless Aesthetic:</span>{" "}
            {`We go beyond trends to create designs that feel fresh yet enduring—pieces that hold their charm and function for years to come.`}
          </li>
          <li className="md:text-xl text-lg text-left">
            <span className="font-bold">Creative Exploration:</span> {`We embrace innovation and experimentation, offering custom designs that reflect individuality, push boundaries, and elevate everyday living.`}
          </li>
        </div>
      </div>
    </section>
  );
};