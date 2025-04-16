import React from "react";

export const AttractionDetailHero = ({ attraction }) => {
  return (
    <React.Fragment>
      <div
        className={`flex items-center justify-center bg-fixed h-[600px] bg-cover attraction-${attraction.id}`}
      >
        <div className="flex flex-col font-bold text-center">
          <h1 className="text-white text-center text-2xl font-bold lg:text-6xl mb-5">
            {attraction.title}
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
};
