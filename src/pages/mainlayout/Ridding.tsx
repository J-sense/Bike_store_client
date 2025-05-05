import img from "../../assets/images/riddingimg.jpg";

const Ridding = () => {
  return (
    <div className="relative w-full h-auto group overflow-hidden">
      {/* Image with zoom effect on hover */}
      <img
        src={img}
        alt="riding bike"
        className="w-full h-[70vh] min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Content container with responsive sizing and animations */}
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="w-full max-w-2xl bg-[#101B1F]/90 backdrop-blur-sm p-8 md:p-10 rounded-xl text-center space-y-4 transform transition-all duration-500 group-hover:scale-[1.02] border border-white/10 shadow-2xl">
          <h3 className="uppercase text-xl md:text-2xl text-[#FFD700] mb-2 tracking-widest font-medium">
            Stromer
          </h3>
          <h1 className="text-3xl md:text-5xl text-white font-bold leading-tight">
            Stromer Speed Pedelecs: <br /> Available from Stock
          </h1>

          {/* Added CTA button */}
          <div className="mt-6">
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

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Ridding;
