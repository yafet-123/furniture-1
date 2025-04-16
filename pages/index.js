import { MainHeader } from "../components/common/MainHeader";
import CommonHeroSection from "../components/home/CommonHeroSection.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs"
import {TestimonialSection} from "../components/home/TestimonialSection"
import ContactInformation from "../components/home/ContactInformation"
import {Story} from "../components/home/story"
import Whatmakeusspecial from "../components/home/Whatmakeusspecial"
import FeaturedTours from "../components/home/FeaturedTours"
import OurServices from "../components/home/OurServices"

export default function Home() {
  return (
    <div className="">
      <MainHeader title="Pan Ethiopia: Explore Ethiopia's Timeless Beauty with Pan Ethiopia Tours – Your Gateway to Unforgettable Adventures." />
      <div className="flex flex-col">
        <CommonHeroSection />
        <FeaturedTours />
        <WhyChooseUs />
        <Whatmakeusspecial />
        <TestimonialSection />
        <Story />
        <OurServices />
        <ContactInformation />
      </div>
    </div>
  );
}
