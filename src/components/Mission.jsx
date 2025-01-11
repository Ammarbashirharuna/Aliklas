import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-indigo-950 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission & Vision
          <span className="block w-20 h-1 bg-indigo-950 mt-2 mx-auto rounded"></span>
        </motion.h2>

        {/* Mission and Vision Content Side by Side */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Mission Text */}
          <motion.div
            className="flex-1 bg-white p-8 shadow-lg rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-indigo-950 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Al Ikhlas Trading Co., we are committed to providing high-quality materials and goods, including original Egyptian and Dubai abayas, gowns, lifayas, veils, and nightwear. Our goal is to offer competitive pricing while ensuring a trustworthy and reliable experience with us.
            </p>
          </motion.div>

          {/* Vision Text */}
          <motion.div
            className="flex-1 bg-white p-8 shadow-lg rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-indigo-950 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Al Ikhlas Trading Co. strives to be the leading distributor of high-quality goods globally, recognized for excellence in both product delivery and customer satisfaction. We aim to be the top choice for partners, consistently exceeding expectations and fostering long-lasting business relationships.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
