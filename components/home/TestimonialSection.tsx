import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import ReactStars from "react-rating-stars-component";

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Visions Of a Traveler",
      date:"2020-04-18",
      image: "/Ming Xiang.jpg",
      star: 5,
      description:
        `OMO Valley experience For years I envisioned discovering the people of the Omo Valley. I was a bit nervous as a solo traveler and 
        finally got myself together and booked a trip . It takes an experienced guide to navigate that region, thanks to Daniel I was safe , 
        visited and learned a lot and had an amazing experience . I highly recommend traveling with his company .`,
    },
    {
      name: "believR7",
      date: "2020-04-08",
      image: "/maleone.jpg",
      star: 5,
      description:
        `Daniel as a tour guide We met Daniel through a tour we did to the Erta Ale. He was the most genuine and nice guide we met on our 
        three weeks holiday. He gave us a very welcome feeling during our trip and hosted us perfectly. He was well informed and took care 
        for us beyond our expectations. I highly recommend hiring him as a guide.`,
    },
    {
      name: "weltsjunge",
      date: "2020-03-22",
      image: "/maletwo.jpg",
      star: 5,
      description:
        `THE BEST DRIVER & GUIDE IN ETHIOPIA So many things to see and places to go and not knowing where to start we were lucky enough to 
        have Daniel drive us and not only get us there safely but become our friend and guide. He knows everything about the people, places and 
        customs. We drove north to Baha Dar, Lalibela and Gonder amongst other places. Stayed in beautiful locations and walked our way through 
        historical villages. Let Daniel take the lead and show you his country and you can’t go wrong. His driving skills and sense of fun are 
        impeccable also. I have recommended him to everyone that travels to this stunning country.`,
    },
    {
      name: "Shazleic",
      date: "2020-03-15",
      image: "/maletwo.jpg",
      star: 5,
      description:
      `Great Value, Awesome Experience I had the sincerest pleasure of having Daniel as my driver while visiting the Tigray Churches in 
      Mekele, Ethiopia. I travel solo frequently and as such, I highly value promptness, patience and safety when looking for a guide and driver. As 
      for PROMPTNESS, he was already waiting at the airport when my plane arrived so I did not have to wait at all for pickup. As a matter of fact, 
      I never had to wait for him during my 3-day tour. Every morning he arrived before stated time to collect me from my lodging. I’m a bit of 
      a nature lover who takes full advantage of any and all photo opportunities. As such, I spent more than the average time hiking the Tigray 
      mountains. Daniel was the ever-ready, ever-PATIENT company. Never once did he show any sign of irritation when I took a little longer than 
      I should have snapping photos. Lastly, he’s a SAFE, RELIABLE driver who knows the entire Mekele and Tigray region “like the back of his hands”. 
      The region is vast, with very little road signage. Never did he stop to ask for directions or double back for a missed turn! If you’re 
      looking for these same qualities that I look for in a guide and driver then you should book your tour with DANIEL of Pan Ethiopia Tours. 
      I recommend his services without hesitation.`
    }
  ];
  return (
    <div className="text-center py-20 bg-white">
      <div className="flex flex-col flex-grow justify-between mx-8">
        <div className="">
          <h1 className="text-3xl md:text-5xl text-[#106156] font-bold my-4">
            Our Travelers’ Stories
          </h1>

          <Image 
            className="w-[100px] text-[#e3c48f]" 
            src='/separator.svg'
            width="200px"
            height="25%"
            alt="testimonials image"
          />

          <p className="text-2xl md:text-3xl text-gray-700 font-bold my-4">
            {`Discover how PAN Ethiopia Tours has touched the lives of travelers from around the world. Their stories reflect the unique and 
            memorable experiences we strive to create for each journey.`}
          </p>
        </div>

        <Carousel
          className="md:mx-28 z-10"
          showArrows={true}
          animationHandler="fade"
          swipeable={false}
          showThumbs={false}
          autoPlay={true}
        >
          {testimonials.map((person, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-around items-center w-full md:my-8 my-8 h-auto p-6 gap-4 bg-[#f2f6fa]
               text-black hover:bg-primaryColor hover:text-white transition duration-300 border-primaryColor shadow-md shadow-slate-500"
              >
                <div>
                  <p className="  md:text-lg px-2 text-justify">
                    {' '}
                    <span className="font-extrabold "> &#10077;</span>{' '}
                    {person.description}
                    <span className="font-extrabold"> &#10078;</span>
                  </p>
                </div>

                <div>
                  <Image
                    src={person.image}
                    alt="Testimony image"
                    height={100}
                    width={100}
                    priority
                    className="w-28 h-28 rounded-full"
                  />

                  <h2 className="md:text-xl text-md font-bold">
                    {person.name}
                  </h2>

                  <div className="flex justify-center items-center">
                    <ReactStars
                      count={5}
                      value={5}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
