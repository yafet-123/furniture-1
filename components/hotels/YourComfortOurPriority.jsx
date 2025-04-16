import Image from "next/image";
import Link from "next/link";

export default function YourComfortOurPriority() {
  return (
    <section className="relative">
      <div className="h-screen md:h-[700px] bg-black">
        <Image
          alt="Our Values Background Image"
          layout="fill"
          src="/Tours/coffee 13.jpg"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center mx-4 md:mx-20 lg:mx-32">
        <div className="text-center font-semibold text-white text-2xl md:text-4xl lg:text-5xl bg-[#11665b] p-3 md:p-14">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            {`Your Comfort, Our Commitment`}
          </h2>
          <p className="text-base md:text-2xl  mb-8 paragraph-fonts md:px-16">
            {`At PanEthopia, we believe that where you stay defines your journey. Whether you're marveling at the ancient wonders of Lalibela, 
            hiking the breathtaking Simien Mountains, or soaking in the rich cultures of the Omo Valley, our tailored hotel booking service ensures 
            that your Ethiopian adventure is matched with unparalleled comfort.`}
          </p>
          <p className="text-base md:text-2xl  mb-8 paragraph-fonts md:px-16">
            {`Seamlessly book your ideal getaway with PanEthopia and transform each stay into a memorable experience, crafted to make your journey 
            as extraordinary as the destinations you explore.`}
          </p>
        </div>
      </div>
    </section>
  );
}
