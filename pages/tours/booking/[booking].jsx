import { MainHeader } from "../../../components/common/MainHeader";
import { getAllTours, getTourById } from "../../../data/ToursData";
import Booking from "../../../components/tours/booking";
import { TourDetailHero } from "../../../components/tours/TourDetailHeroSection";
import { DisplayToursVertical } from "../../../components/tours/DisplayToursVertical";
import { useRouter } from "next/router";

export default function BookingTour() {
  const router = useRouter();
  const booking = router.query.booking;
  // console.log(router.query)
  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title={`Pan Ethiopia ${booking}`} />
      <Booking booking={booking} />
    </div>
  );
}
