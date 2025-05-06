import bannerImage from "../../assets/images/latest prodcut.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0c1a1d] via-[#122a30] to-[#0c1a1d] text-white py-20 px-4 md:px-10 overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">Trending Now</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
              Fat-Tire Bike 2025
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
              Conquer any terrain with our{" "}
              <span className="text-white font-medium">limited edition</span>{" "}
              fat-tire bike. Engineered for thrill-seekers with premium
              components and cutting-edge design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to={`details/67547b7fea27d3fc373fb7e2`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r bg-[#D2B78A] text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300"
                >
                  Shop Now <ArrowRight size={18} />
                </motion.button>
              </Link>

              <button className="flex items-center gap-2 py-4 px-6 text-white/80 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>4.9 (2.4k Reviews)</span>
              </button>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-green-500/30 to-cyan-500/30 rounded-2xl blur-xl opacity-70"></div>
            <img
              src={bannerImage}
              alt="2025 Premium Fat-Tire Bike"
              className="relative z-10 w-full max-w-xl rounded-2xl shadow-2xl hover:rotate-1 transition-transform duration-500"
              loading="lazy"
            />

            {/* Floating price tag */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -top-4 bg-white text-gray-900 font-bold py-3 px-5 rounded-lg shadow-xl z-20"
            >
              <div className="text-xs font-medium text-gray-500">
                Starting at
              </div>
              <div className="text-2xl">
                $1,299<span className="text-sm">.99</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
