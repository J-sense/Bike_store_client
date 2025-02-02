import React from "react";

const NewsLatter = () => {
  return (
    <div className="bg-[#E2C595] flex flex-col items-center p-6 sm:p-10 md:p-16 space-y-6 sm:space-y-8 md:space-y-10 text-center">
      <h1 className="text-zinc-700 text-sm sm:text-base uppercase tracking-wide">
        NEWSLETTER
      </h1>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-950 max-w-3xl">
        Subscribe to our newsletter
      </h1>
      <div className="w-full sm:w-[80%] md:w-[60%]">
        <p className="text-zinc-700 text-lg sm:text-xl md:text-2xl">
          Stay informed with our newsletter to receive updates on the latest
          products and exclusive deals.
        </p>
        <h4 className="text-zinc-950 font-semibold text-lg sm:text-xl mt-4">
          Plus, get 5% off your first order!
        </h4>
      </div>
    </div>
  );
};

export default NewsLatter;
