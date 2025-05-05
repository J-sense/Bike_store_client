import extraImg from "../../assets/images/extraImg.jpg";

const ExtraSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-[#0a1418] opacity-95"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMTAxYjFmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxYjI2MmIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>

      <div className="relative bg-[#101B1F] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image with frame effect */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-[#D2B78A] rounded-xl transform rotate-1 group-hover:rotate-0 transition duration-500"></div>
              <img
                src={extraImg}
                alt="Cycling experience"
                className="relative w-full h-auto object-cover rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="uppercase tracking-[0.2em] text-[#D2B78A] text-sm font-medium">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Elevate Your <span className="text-[#D2B78A]">Cycling</span>{" "}
                Experience
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to Bikelife Bikestore, your premier destination for
                high-end bicycles and accessories. Discover our curated
                selection of top-quality bike brands and gear for road cycling,
                mountain biking, and urban commuting.
              </p>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We prioritize quality and excellence in every item we offer.
                From renowned bike brands to cutting-edge accessories, our
                collection is designed to cater to your unique needs and style.
              </p>
              <div className="pt-4">
                <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-[#101B1F] bg-[#D2B78A] rounded-lg group">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                  <span className="relative flex items-center gap-2">
                    <span className="uppercase tracking-wider font-bold text-lg">
                      Our Story
                    </span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
