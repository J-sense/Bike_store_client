import React from "react";
import extraImg from "../../assets/images/extraImg.jpg";
const ExtraSection = () => {
  return (
    <div>
      <div className="bg-[#101B1F] p-8 sm:p-12 md:p-16 md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src={extraImg}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="uppercase text-white text-lg sm:text-xl">
              about us
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold text-center">
              Elevate your cycling experience.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto text-white">
              Welcome to Bikelife Bikestore, your premier destination for
              high-end bicycles and accessories. Discover our curated selection
              of top-quality bike brands and gear for road cycling, mountain
              biking, and urban commuting. We prioritize quality and excellence
              in every item we offer. From renowned bike brands to cutting-edge
              accessories, our collection is designed to cater to your unique
              needs and style.
            </p>
            <button className="bg-[#D2B78A] uppercase text-white px-6 sm:px-7 py-3 text-lg sm:text-xl rounded-xl">
              our story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
