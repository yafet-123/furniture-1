import { MainHeader } from "../../components/common/MainHeader";
import {
  getAllAttractions,
  getAttractionById,
} from "../../data/AttractionsData";
import { AboutTheAttraction } from "../../components/attraction/AboutTheAttraction";
import { AttractionDetailHero } from "../../components/attraction/AttractionDetailHero";
import { DisplayToursVertical } from "../../components/tours/DisplayToursVertical";

export default function TourDetail({ attraction, all_attractions }) {
  attraction = attraction[0];
  // console.log(all_attractions);
  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title={`Pan Ethiopia : ${attraction.title}`} />
      <AttractionDetailHero attraction={attraction} />
      <div className="flex flex-col md:flex-row md:justify-around gap-10 px-10 bg-greenbay-white text-white mt-5">
        <AboutTheAttraction attraction={attraction} />
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const attractionid = context.params.attractionid;
  // console.log(attractionid);
  const attraction = getAttractionById(attractionid);
  const all_attractions = getAllAttractions();

  if (!all_attractions) {
    return {
      notFound: true,
    };
  }

  if (!attraction) {
    return {
      notFound: true,
    };
  }

  return {
    props: { attraction: attraction, all_attractions: all_attractions },
    revalidate: 3600,
  };
};

export const getStaticPaths = async (context) => {
  const attractions = getAllAttractions();
  //   console.log(context)

  // Get the paths we want to pre-render based on all_attractions
  const paths = attractions.map((attraction) => ({
    params: { attractionid: attraction.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: paths, fallback: false };
};
