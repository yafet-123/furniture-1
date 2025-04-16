import Image from "next/image";

export const Cuisine = () => {
  const CuisineArray = [
  {
    id:1,
    title: "Traditional Dishes",
    description: "Ethiopian cuisine is known for its bold flavors and communal dining style. Injera, a spongy flatbread made from teff flour, is a staple of Ethiopian meals and is often served with a variety of stews (wats) such as doro wat (spicy chicken stew) and misir wat (lentil stew). Kitfo, a dish made from minced raw beef, is also popular, especially in the southern regions."
  },
  {
    id:2,
    title: "Coffee Culture",
    description: "Ethiopia is the birthplace of coffee, and the coffee ceremony is an integral part of Ethiopian culture. The ceremony involves roasting green coffee beans, brewing the coffee, and serving it in three rounds, known as 'abol,' 'tona,' and 'baraka.' It's a time-honored tradition that reflects hospitality and social bonding."
  },
  {
    id:3,
    title: "Spices and Ingredients",
    description: "Ethiopian cooking relies heavily on spices, with berbere (a blend of chili peppers, garlic, ginger, and other spices) being the most famous. Niter kibbeh (clarified butter infused with spices) is another essential ingredient that adds depth and flavor to many dishes."
  }];

  return (
    <section className="my-10">
      <div className=" inset-0 flex items-center justify-center mx-4 md:mx-20 lg:mx-72">
        <div className="flex flex-col gap-6 text-left md:w-full my-8 md:my-0 md:ml-16 text-[#11665b]">
          <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-left">
            Cuisine
          </h2>
          { CuisineArray.map((cuisine,index)=> (
            <li className="md:text-xl text-lg text-left" key={index}>
              <span className="font-bold">{cuisine.title}:</span> {cuisine.description}
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};
