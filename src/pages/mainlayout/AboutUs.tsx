import { motion } from "framer-motion";
import imgOne from "../../assets/images/aboutpic1.jpg";
import imgTwo from "../../assets/images/aboutpic2.jpg";
import about3 from "../../assets/images/about3.jpg";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-48 md:mt-36 sm:py-22 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Ride With <span className="text-amber-600">Passion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            At Bikelife, we're more than a bike shop - we're a community of
            cycling enthusiasts dedicated to bringing you the finest high-end
            bicycles and accessories. Our curated selection caters to road
            warriors, mountain adventurers, and urban commuters alike.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-amber-100/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={imgOne}
                alt="Road cycling"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={imgTwo}
                alt="Mountain biking"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="bg-gray-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={about3}
                alt="Bikelife team"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-sm font-semibold tracking-wider text-amber-600 uppercase">
                Join Our Team
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Work at <span className="text-amber-600">Bikelife</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join our vibrant team at Bikelife, where we're not just selling
                bikes, but fostering a dynamic community of cycling enthusiasts.
                We nurture growth, inclusivity, and learning in a workplace that
                promotes a healthy, joyful lifestyle through cycling.
              </p>
              <div className="pt-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#000000",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300"
                >
                  View Open Positions
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-amber-600 uppercase">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Passion for Cycling",
                description:
                  "We live and breathe bicycles, and we're committed to sharing that passion with our community.",
                icon: "🚴",
              },
              {
                title: "Quality First",
                description:
                  "Only the finest bikes and components make it to our showroom, rigorously tested for performance.",
                icon: "⭐",
              },
              {
                title: "Community Focus",
                description:
                  "We build relationships, not just transactions, fostering a thriving cycling community.",
                icon: "👥",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
