import brand1 from "../../assets/images/brand1.jpg";
import brand2 from "../../assets/images/brand2.jpg";
import brand3 from "../../assets/images/brand3.jpg";
import brand4 from "../../assets/images/brand4.jpg";

const BrandSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Trusted By Leading Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with the most innovative and reliable brands in the
            industry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center h-40">
            <img
              src={brand1}
              alt="Brand 1"
              className="max-h-20 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center h-40">
            <img
              src={brand2}
              alt="Brand 2"
              className="max-h-20 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center h-40">
            <img
              src={brand3}
              alt="Brand 3"
              className="max-h-20 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center h-40">
            <img
              src={brand4}
              alt="Brand 4"
              className="max-h-20 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
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
    </section>
  );
};

export default BrandSection;
