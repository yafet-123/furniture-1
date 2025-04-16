import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import ImageOne from "../../public/ethiopia/ethiopia 1.jpg";
import ImageTwo from "../../public/ethiopia/ethiopia 2.jpg";
import ImageThree from "../../public/ethiopia/ethiopia 3.avif";
import ImageFour from "../../public/ethiopia/ethiopia 4.jpg";
import ImageFive from "../../public/ethiopia/ethiopia 5.jpg";
import ImageSix from "../../public/ethiopia/ethiopia 6.jpg";

const HistoryArray = [
  {
    id:1,
    title: "Ancient History",
    description: `Ethiopia's history dates back thousands of years, with the Aksumite Empire being one of the great civilizations of the 
    ancient world. The Aksumites were known for their impressive obelisks, some of which still stand today, and their powerful trading 
    network that connected Africa to the Mediterranean and Asia. Legend also ties Ethiopia to the Queen of Sheba, who is said to 
    have visited King Solomon and brought back the Ark of the Covenant.`,
    imagePath: ImageThree,
  },
  {
    id:2,
    title: "Christian Heritage",
    description: `Ethiopia was one of the first countries to adopt Christianity in the 4th century. The Ethiopian Orthodox Church, with 
    its unique traditions and rituals, remains a central part of the country's identity. The rock-hewn churches of Lalibela, a UNESCO 
    World Heritage site, are a testament to Ethiopia's deep Christian roots.`,
    imagePath: ImageOne,
  },
  {
    id:3,
    title: "Modern History",
    description: `In the 20th century, Ethiopia became a symbol of African independence when it successfully resisted Italian colonization 
    under Emperor Menelik II. Later, Emperor Haile Selassie played a key role in the establishment of the African Union. Ethiopia's 
    recent history has seen significant political and social changes, with a focus on development and modernization.`,
    imagePath: ImageTwo,
  }];

const CultureArray = [
  {
    id: 1,
    title: 'Languages',
    description: `Ethiopia is a multilingual nation, with over 80 languages spoken. Amharic is the official language, but Oromo, Tigrigna, and 
    Somali are also widely spoken. Ethiopia's linguistic diversity is a reflection of its rich cultural mosaic.`
  },
  {
    id: 2,
    title: 'Religion',
    description: `Ethiopia is a religiously diverse country, with Christianity (primarily Ethiopian Orthodox) and Islam being the dominant 
    religions. The coexistence of these religions has shaped the cultural and social fabric of the nation. Religious festivals such as Timkat 
    (Epiphany) and Eid al-Fitr are celebrated with great enthusiasm across the country.`
  },
  {
    id: 3,
    title: 'Traditions and Customs',
    description: `Ethiopian culture is deeply rooted in traditions, many of which are passed down through generations. The coffee ceremony 
    is a daily ritual in Ethiopian households, symbolizing hospitality and community. Traditional clothing, such as the white cotton garments 
    called "Habesha kemis" for women and "netela" for men, are worn during special occasions and festivals.`
  },
  {
    id: 4,
    title: 'Music and Dance',
    description: `Ethiopian music is characterized by its unique scales and rhythms. Traditional instruments like the krar (lyre) and masenqo 
    (single-stringed fiddle) are central to Ethiopian music. Each ethnic group has its own dance style, often performed during cultural 
    celebrations and ceremonies.`
  }]

const GeographyArray = [
  {
    id: 1,
    title: 'Landscapes',
    description: `Ethiopia's landscapes are as diverse as its culture. The Ethiopian Highlands, also known as the "Roof of Africa," dominate 
    the central part of the country, offering breathtaking views and home to rare wildlife. The Great Rift Valley, a geological wonder, 
    stretches across Ethiopia, creating a dramatic landscape of lakes, volcanoes, and hot springs.`,
    imagePath: ImageFour,
  },
  {
    id: 2,
    title: 'Climate',
    description: `Ethiopia experiences a range of climates, from the cool highlands to the arid deserts. The country has two main seasons: 
    the rainy season (June to September) and the dry season (October to May). The highlands enjoy a temperate climate, while the lowland 
    areas can be extremely hot.`,
    imagePath: ImageFive,
  },
  {
    id: 3,
    title: 'National Parks',
    description: `Ethiopia is home to numerous national parks that protect its unique flora and fauna. The Simien Mountains National Park, 
    a UNESCO World Heritage site, is famous for its jagged peaks and deep valleys. It is also home to endangered species like the Ethiopian 
    wolf and the Gelada baboon. The Bale Mountains National Park is another gem, known for its diverse ecosystems and abundant wildlife.`,
    imagePath: ImageSix,
  }]

const TourismArray = [
  {
    id:1,
    title: 'Major Attractions',
    description: `Ethiopia offers a wealth of attractions for visitors. Lalibela's rock-hewn churches are a must-see for their architectural and 
    spiritual significance. Gondar, often referred to as the "Camelot of Africa," boasts a collection of royal castles and palaces. The ancient 
    city of Axum is known for its towering obelisks and as the purported resting place of the Ark of the Covenant.`,
  },
  {
    id:2,
    title: 'UNESCO World Heritage Sites',
    description: `Ethiopia is home to several UNESCO World Heritage sites, including the Simien Mountains, the ruins of Aksum, and the Harar 
    Jugol, the old walled city of Harar. Each site offers a glimpse into Ethiopia's rich history and natural beauty.`,
  },
  {
    id:3,
    title: 'Adventure Tourism',
    description: `For adventure seekers, Ethiopia offers trekking in the Simien and Bale Mountains, birdwatching in the Rift Valley, 
    and exploring the Danakil Depression, one of the hottest and most inhospitable places on earth.`,
  },
  {
    id:4,
    title: 'Travel Tips',
    description: `Visitors to Ethiopia should be aware of visa requirements, health precautions, and cultural norms. It's recommended to 
    dress modestly, especially when visiting religious sites, and to respect local customs. Learning a few words of Amharic can also 
    enhance your travel experience.`,
  },]

const PeopleandEthnicGroupsArray = [
  {
    id:1,
    title: "Diversity",
    description: "Ethiopia is a mosaic of over 80 ethnic groups, each with its own language, customs, and traditions. The largest ethnic groups include the Oromo, Amhara, Tigrayans, and Somali. Despite their differences, these groups contribute to Ethiopia's rich cultural tapestry."
  },
  {
    id:2,
    title: "Cultural Practices",
    description: "Each ethnic group in Ethiopia has unique cultural practices, from the Gadaa system of the Oromo, which is a traditional system of governance, to the bull-jumping ceremony of the Hamar people in the Omo Valley. These practices offer a window into the diverse ways of life across the country."
  }]

export const EthiopiaDetail = () => {
  return (
    <div className="flex flex-col gap-8 my-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-center md:text-left text-3xl md:text-6xl mb-10 text-[#11665b]">
          History
        </h1>
        {HistoryArray.map((history, index) => (
          <div
            key={index}
            className="grid px-2 lg:px-10 lg:grid-cols-2 grid-cols-1 text-white md:justify-center mb-5"
          >
            <div 
              className={`${
                  history.id % 2 === 0
                    ? "lg:order-first order-first"
                    : "lg:order-last order-first"
                } w-full h-72 md:h-[350px] relative  mx-auto`}
            >
              <Image
                src={history.imagePath}
                alt={history.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-4 lg:px-5 text-[#11665b]">
              <h1 className="font-bold text-xl md:text-4xl mb-3">
                {history.title}
              </h1>

              <p className="font-normal text-md md:text-lg">
                {history.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-center md:text-left text-3xl md:text-4xl mb-5 text-[#11665b]">
          Culture
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 md:mx-12 justify-center gap-8 text-[#11665b]">
          {CultureArray.map((culture) => (
            <div
              key={culture.id}
              className={`text-center flex flex-col border-4 shadow-lg gap-2 p-4 items-center drop-shadow-xl 
                ${ culture.id % 8 === 1 || culture.id % 8 === 4 || culture.id % 8 ===5 || culture.id % 8 === 0
                  ? 'bg-[#11665b] text-white border-[#11665b]'  // White background with green text and border for even indices
                  : 'bg-white text-[#11665b] border-[#11665b]' // Green background with white text and green border for odd indices
                }`}
            >
              <h1 className="font-bold md:text-3xl text-2xl">
                {culture.title}
              </h1>
              <p className="md:text-xl text-lg">{culture.description}</p>
            </div>
          ))}
        </div>
        <h1 className="font-bold text-center md:text-left text-3xl md:text-4xl my-5 text-[#11665b]">
           People and Ethnic Groups
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 md:mx-12 justify-center gap-8 text-[#11665b]">
          {PeopleandEthnicGroupsArray.map((peopleethnics) => (
            <div
              key={peopleethnics.id}
              className="text-center flex flex-col border-4 border-[#11665b] shadow-lg gap-2 p-4 items-center drop-shadow-xl"
            >
              <h1 className="font-bold md:text-3xl text-2xl">
                {peopleethnics.title}
              </h1>
              <p className="md:text-xl text-lg">{peopleethnics.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-center md:text-left text-3xl md:text-4xl mb-5 text-[#11665b]">
          Geography
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 md:mx-10 lg:mx-20">
          {GeographyArray.map((geography, index) => (
            <div
              key={index}
              className="shadow-md shadow-black h-full flex flex-col bg-white rounded-tr-xl rounded-tl-xl z-10 w-full hover:scale-105 transition duration-300"
            >
              <div className="h-[300px] bg-black rounded-tr-xl rounded-tl-xl relative mb-5">
                <Image
                  alt="Our Values Background Image"
                  layout="fill"
                  src={geography.imagePath}
                  className="rounded-tr-xl rounded-tl-xl"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="mb-5 text-left px-3 font-bold text-lg md:text-xl w-full ">
                  {geography.title}
                </h1>
                <p className="ml-3 md:text-lg text-md text-left mb-3">
                  {geography.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-center md:text-left text-3xl md:text-4xl mb-5 text-[#11665b]">
          Tourism
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 md:mx-12 justify-center gap-8">
          {TourismArray.map((tourism,index) => (
            <div
              key={tourism.id}
              className={`text-center flex flex-col border-4 shadow-lg gap-2 p-4 items-center drop-shadow-xl 
                ${ tourism.id % 8 === 1 || tourism.id % 8 === 4 || tourism.id % 8 ===5 || tourism.id % 8 === 0
                  ? 'bg-[#11665b] text-white border-[#11665b]'  // White background with green text and border for even indices
                  : 'bg-white text-[#11665b] border-[#11665b]' // Green background with white text and green border for odd indices
                }`}
            >
              <h1 className="font-bold md:text-3xl text-2xl">
                {tourism.title}
              </h1>
              <p className="md:text-xl text-lg">{tourism.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};