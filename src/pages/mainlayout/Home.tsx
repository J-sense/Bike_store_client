import { useState } from "react";
// import img from "../../assets/images/main5.jpeg";
import img1 from "../../assets/images/main6.jpg";
import img2 from "../../assets/images/carusel.jpeg";
import img3 from "../../assets/images/carusel1.jpeg";

// import img1 from "../../assets/images/main6.jpeg";
// import img2 from "../../assets/images/main5.jpeg";
import ExtraSection from "../../components/ui/ExtraSection";

import HomepageSectionOne from "../../components/ui/HomepageSectionOne";
import NewsLatter from "../../components/ui/NewsLatter";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
const images: string[] = [img1, img2, img3];
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="bg-[#FFFFFF]">
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <button
          className="absolute left-4 p-2 bg-gray-800/50 text-white rounded-full"
          onClick={prevSlide}
        >
          <BiChevronLeft size={32} />
        </button>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-base font-medium uppercase text-zinc-200 mb-4">
            Welcome to Bike Life
          </h1>
          <h1 className="text-6xl font-bold font-serif text-white my-8">
            Colnago
          </h1>
          <button className="uppercase bg-[#D2B78B] text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-200 transition">
            Explore More Collection
          </button>
        </div>
        <button
          className="absolute right-4 p-2 bg-gray-800/50 text-white rounded-full"
          onClick={nextSlide}
        >
          <BiChevronRight size={32} />
        </button>
      </div>
      <HomepageSectionOne />
      <ExtraSection />
      <NewsLatter />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
