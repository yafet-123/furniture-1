import { MainHeader } from "../../components/common/MainHeader";
import { getAllTours, getTourById } from "../../data/ToursData";
import { AboutTheTour } from "../../components/tours/AboutTheTour";
import { TourDetailHero } from "../../components/tours/TourDetailHeroSection";
import { DisplayToursVertical } from "../../components/tours/DisplayToursVertical";

export default function TourDetail({ tour, all_tours }) {
  tour = tour[0];
  // console.log(all_tours);
  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title={`Pan Ethiopia ${tour.title}`} />
      <TourDetailHero tour={tour} cssProperty="contact-background" />
      <div className="flex flex-col lg:flex-row w-full h-full px-1 lg:pl-5 lg:pr-20 pt-10">
        <AboutTheTour tour={tour} />
        <DisplayToursVertical all_tours={all_tours} />
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const tourID = context.params.tourID;
  const tour = getTourById(tourID);
  const all_tours = getAllTours();

  if (!all_tours) {
    return {
      notFound: true,
    };
  }

  if (!tour) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tour: tour, all_tours: all_tours },
    revalidate: 3600,
  };
};

export const getStaticPaths = async (context) => {
  const tours = getAllTours();
  //   console.log(context)

  // Get the paths we want to pre-render based on tours
  const paths = tours.map((tour) => ({
    params: { tourID: tour.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: paths, fallback: false };
};
