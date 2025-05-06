/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import img1 from "../../assets/images/main6.jpg";
import img2 from "../../assets/images/carusel.jpeg";
import img3 from "../../assets/images/carusel1.jpeg";
import ExtraSection from "../../components/ui/ExtraSection";
import HomepageSectionOne from "../../components/ui/HomepageSectionOne";
import NewsLatter from "../../components/ui/NewsLatter";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Ridding from "./Ridding";
import BrandSection from "./Brand";
import ProductBanner from "../../components/ui/Tranding";

const images: string[] = [img1, img2, img3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="bg-white">
      {/* Hero Carousel */}
      <div className="relative w-full h-screen max-h-[90vh] overflow-hidden">
        {/* Background images with transition */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>

        {/* Navigation buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 text-white rounded-full hover:bg-black/60 transition-all z-10"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <BiChevronLeft size={40} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 text-white rounded-full hover:bg-black/60 transition-all z-10"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <BiChevronRight size={40} />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#D2B78B] w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-1 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-lg font-medium uppercase text-[#D2B78B] tracking-widest mb-4 animate-fade-in">
            Welcome to Bike Life
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-serif text-white my-4 md:my-8 animate-fade-in-up">
            Colnago
          </h1>
          <button className="uppercase bg-[#D2B78B] hover:bg-[#c0a57a] text-white px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-delay">
            Explore More Collection
          </button>
        </div>
      </div>

      {/* Page sections */}
      <HomepageSectionOne />
      <ExtraSection />
      <ProductBanner />
      <BrandSection />
      <Ridding />
      <NewsLatter />
    </div>
  );
};

export default Home;
