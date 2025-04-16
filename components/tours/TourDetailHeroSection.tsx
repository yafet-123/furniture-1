import React from "react";

export const TourDetailHero = ({ tour, cssProperty }) => {
  return (
    <React.Fragment>
      <div
        className={`flex justify-center items-center bg-fixed h-screen bg-cover pt-32 tour-${tour.id} ${cssProperty}`}
      >
        <div className="flex flex-col font-bold text-center md:p-5">
          <h1 className="text-white text-center text-2xl font-bold lg:text-6xl mb-5">
            {tour.title}
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
};
