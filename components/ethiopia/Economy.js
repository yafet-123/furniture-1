import Image from "next/image";

export const EconomyEthiopia = () => {
  const EconomyArray = [
  {
    id:1,
    title: "Agriculture",
    description: "Agriculture is the backbone of Ethiopia's economy, employing around 70% of the population. The country is one of the largest producers of coffee, which is often referred to as 'black gold.' In addition to coffee, Ethiopia produces grains, pulses, and livestock, making it a key player in the agricultural sector in Africa."
  },
  {
    id:2,
    title: "Industry",
    description: "Ethiopia's industrial sector is growing rapidly, with investments in manufacturing, textiles, and energy. The construction of the Grand Ethiopian Renaissance Dam (GERD) on the Nile River is one of the country's most ambitious projects, set to become Africa's largest hydroelectric power plant."
  },
  {
    id:3,
    title: "Development",
    description: "Ethiopia has embarked on a series of development plans aimed at transforming the country into a middle-income nation. These include investments in infrastructure, education, and healthcare. The government’s vision, encapsulated in the Growth and Transformation Plan (GTP), is focused on economic diversification and sustainable development."
  }]
  return (
    <section className="mb-10">
      <div className=" inset-0 flex items-center justify-center mx-4 md:mx-20 lg:mx-72">
        <div className="flex flex-col gap-6 text-left md:w-full my-8 md:my-0 md:ml-16 text-[#11665b]">
          <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-left">
            Economy
          </h2>
          { EconomyArray.map((economy,index)=> (
            <li className="md:text-xl text-lg text-left" key={index}>
              <span className="font-bold">{economy.title}:</span> {economy.description}
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};
