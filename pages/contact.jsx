import Hero from '../components/contactus/Hero';
import { MainHeader } from '../components/shared/MainHeader';
import ContactForm from '../components/contactus/ContactForm';
import { SocialMedia } from '../components/contactus/SocialMedia';
import { ContactUsSeciton } from '../components/contactus/ContactUsSection';
import Map from '../components/contactus/Map';

import heroImage1 from '../public/hero/contact/contact (1).jpg';
import heroImage2 from '../public/hero/contact/contact (2).jpg';
import heroImage3 from '../public/hero/contact/contact (3).jpg';
import heroImage4 from '../public/hero/contact/contact (4).jpg';
import heroImage5 from '../public/hero/contact/contact (5).jpg';

import { StaticImageData } from 'next/image';

export default function ContactUs() {
  const HeroImages = [
    {
      id: 1,
      image: heroImage1,
    },
    {
      id: 2,
      image: heroImage2,
    },
    {
      id: 3,
      image: heroImage3,
    },
    {
      id: 4,
      image: heroImage4,
    },
    {
      id: 5,
      image: heroImage5,
    },
  ];
  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title="Eco Travel Ethiopia Tours and Car Rental : Contact Us" />
      <div className="bg-[#dedee0]">
        <Hero
          title="WE LOVE TO HEAR FROM YOU"
          description={`Contact us today to see how we can help you with your travel management needs.`}
          style="lg:flex-row-reverse"
          HeroImages={HeroImages}
        />
        <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-around items-center py-10">
          <SocialMedia />
          <ContactForm />
        </div>
        <ContactUsSeciton />
        <Map />
      </div>
    </div>
  );
}
