import imgOne from "../../assets/images/aboutpic1.jpg";
import imgTwo from "../../assets/images/aboutpic2.jpg";
import about3 from "../../assets/images/about3.jpg";
const AboutUs = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="text-center flex flex-col items-center my-16 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-black">
          About us
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl w-full sm:w-[80%] md:w-[75%] text-center mx-auto">
          At Bikelife, we are passionate about cycling and committed to
          providing you with the best high-end bicycles and accessories in the
          market. with a curated selection of top-quality bike brands and gear,
          we cater to the needs of road cyclists, mountain biking enthusiasts,
          and urban commuters.
        </p>
      </div>
      <div className="bg-[#E2C595] p-8 sm:p-12 md:p-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img src={imgOne} alt="" className="rounded-xl w-full" />
          <img src={imgTwo} alt="" className="rounded-xl w-full" />
        </div>
      </div>
      <div className="bg-[#DDD9D5] p-8 sm:p-12 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src={about3}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="uppercase text-[#323232] text-lg sm:text-xl">
              Subheading
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#323232] font-extrabold text-center">
              Work at Bikelife
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto">
              Join our vibrant team at Bikelife Bikestore, where we're not just
              selling bikes, but fostering a dynamic community of cycling
              enthusiasts united in their passion for the open road. Working
              with us means being a vital part of a workplace that nurtures
              growth, inclusivity, and learning. It's not just a job — it's a
              commitment to promoting a healthy and joyful lifestyle through
              cycling. We're on the lookout for dedicated professionals ready to
              help others find their dream bikes and to create a space where
              every idea can turn into a reality.
            </p>
            <button className="bg-[#252525] uppercase text-white px-6 sm:px-7 py-3 text-lg sm:text-xl rounded-xl">
              See the vacancies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
