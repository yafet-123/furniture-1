import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "BEDROOM SETUP",
            title: "Cossy Bedroom Setup",
            image: "/image/badroom.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
            bgimage:"/image/kitchen1.jpg"
        },
        {
            id: "02",
            catagory: "KITCHING SETUP",
            title: "Neat & Clean Kitchen",
            image: "/image/kitchen1.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
            bgimage:"/image/kitchen1.jpg"
        },
        {
            id: "03",
            catagory: "DROWING SETUP",
            title: "Family Drowing Room",
            image: "/image/drowing.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
            bgimage:"/image/kitchen1.jpg"
        },
        {
            id: "04",
            catagory: "LIVING SETUP",
            title: "Clean Family Room",
            image: "/image/living.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
            bgimage:"/image/kitchen1.jpg"

        },
    ]

    return (
        <div className="grid gap-10 divide-gray-300 md:grid-cols-2 px-5 lg:px-20">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group h-[500px]">
                    <div className="h-[500px] bg-black rounded-tr-xl rounded-tl-xl relative mb-2">
                        <Image
                            alt="Our Values Background Image"
                            layout="fill"
                            src={item.image}
                            className="rounded-tr-xl rounded-tl-xl"
                        />
                    </div>

                    <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-50 backdrop-blur">
                        
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm">{item.catagory}</p>
                            <span className="text-sm ">{item.id}</span>
                        </div>
                        <a className="block text-2xl font-bold" href="">{item.title}</a>
                        <p className="py-4 text-black">{item.description}</p>
                        <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a>
                    </div>
                </div>
            ))}
        </div>
    )
}