import { MainHeader } from "../components/common/MainHeader";
import {CommonHeroSection} from "../components/contact/CommonHeroSection.jsx";
import ContactForm from "../components/contact/ContactForm";
import ReachUs from "../components/contact/ReachUs";

export default function Contact() {
  return (
    <main className="w-full h-full bg-white flex flex-col">
      <MainHeader title="Pan Ethiopia: Explore Ethiopia's Timeless Beauty with Pan Ethiopia Tours – Your Gateway to Unforgettable Adventures." />
      <div className="flex flex-col">
        <CommonHeroSection />
        <div className="flex flex-col md:flex-row md:justify-around  gap-10 px-10 py-10 bg-greenbay-white text-white">
          <ContactForm />
          <ReachUs />
        </div>
      </div>
    </main>
  );
}
