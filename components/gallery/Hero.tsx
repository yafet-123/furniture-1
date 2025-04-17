import Image from 'next/image';
import { TextGenerateEffect } from '../shared/TextGenerateEffect';

interface HeroImage {
  image: {
    src: string;
  };
}

interface HeroProps {
  title: string;
  description: string;
  style?: string;
  HeroImages: HeroImage[];
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  style,
  HeroImages,
}) => {
  return (
    <div
      className={`text-white flex flex-col ${style} items-center justify-between w-full h-full lg:h-[45rem] pt-24`}
    >
      <div className="w-full lg:w-1/2 px-5 lg:px-10">
        <TextGenerateEffect
          words={title}
          className="text-left text-[40px] md:text-5xl lg:text-6xl"
        />
        <p className="text-black font-semibold text-left md:tracking-wider mb-4 text-lg md:text-xl lg:text-3xl">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full lg:w-3/4 px-5 lg:px-10 h-full">
        <div className="pr-10 hidden lg:flex flex-col">
          <div className="w-full h-full lg:h-[25rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5">
            <Image
              className=""
              alt="why choose us image"
              src={HeroImages[0].image.src}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full h-full lg:h-[10rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5">
            <Image
              className=""
              alt="why choose us image"
              src={HeroImages[1].image.src}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="pr-10 hidden lg:flex flex-col">
          <div className="w-full h-[10rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5">
            <Image
              className=""
              alt="why choose us image"
              src={HeroImages[2].image.src}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full h-[25rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5">
            <Image
              className=""
              alt="why choose us image"
              src={HeroImages[3].image.src}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full h-[25rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5">
            <Image
              className=""
              alt="why choose us image"
              src={HeroImages[4].image.src}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
