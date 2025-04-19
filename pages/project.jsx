import { MainHeader } from '../components/shared/MainHeader';
import Hero from '../components/Project/Hero';

import heroImage1 from '../public/hero/Project/project (1).jpg';
import heroImage2 from '../public/hero/Project/project (2).jpg';
import heroImage3 from '../public/hero/Project/project (3).jpg';
import heroImage4 from '../public/hero/Project/project (4).jpg';

export default function ToursPage() {
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
  ];
  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title="Eco Travel Ethiopia : Our Tours" />
      <div className="bg-[#dedee0]">
        <Hero
          title="CREATE YOUR TOUR"
          description={`Thinking of Trekking? Why not do it with ADVENTURE? Plan your trip Today!`}
          style="lg:flex-row-reverse"
          HeroImages={HeroImages}
        />

      </div>
    </div>
  );
}