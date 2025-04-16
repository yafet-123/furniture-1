import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ContactInformation() {
  const router = useRouter();
  const handleContact = () => {
    router.push(`/contact`);
  }; 
  return (
    <section className="py-5 bg-[#edf2f5]">
      <div className="text-left text-black px-5 lg:px-32">
        <div className="flex flex-col justify-center items-center text-center font-semibold text-black text-2xl md:text-4xl lg:text-5xl p-3 md:p-14">
          <span className="font-bold text-[#106156]">
            Get in Touch
          </span>
          <ul className="text-center my-5">
            <p className="md:text-2xl text-lg font-bold">{`Embark on Your Ethiopian Adventure!`}</p>
            <p className="md:text-xl text-base font-bold">{`Reach out today and let’s craft a personalized Ethiopian journey that you'll cherish forever`}</p>
          </ul>
          <ul className="flex flex-col md:flex-row items-center justify-center md:text-xl text-base text-center my-1">
            <span className="font-bold">Phone : </span>
            <Link
              target="_blank"
              className="flex flex-row items-center gap-2 hover:text-gray-300"
              href={`tel:${+251913701838}`}
            >
              <p className="ml-3">+251913701838</p>
            </Link>

            <Link
              target="_blank"
              className="flex flex-row items-center gap-2 hover:text-gray-300"
              href={`tel:${+251911591959}`}
            >
              <p className="ml-3">+251911591959</p>
            </Link>
          </ul>

          <ul className="flex flex-col md:flex-row items-center justify-center md:text-xl text-base text-center mt-1 mb-5">
            <span className="font-bold">Email : </span>
            <Link
              target="_blank"
              className="flex flex-row items-center gap-2 hover:text-gray-300"
              href="mailto:panethiopian@gmail.com"
            >
              <p className="ml-3">panethiopian@gmail.com</p>
            </Link>
          </ul>

          <Link href="/contact" className="">
            <a className="animate-bottomToTop delay-1 btn relative flex items-center justify-center text-[#dec08c] text-[1.2rem] font-bold uppercase tracking-[3px] max-w-max border-2 border-[#dec08c] px-[30px] py-[15px] overflow-hidden z-[1]">
              <span className="transition ease-[ease] duration-[250ms] ">Chat With Us</span>
              <span className="text text-2" aria-hidden="true">Chat With Us</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
