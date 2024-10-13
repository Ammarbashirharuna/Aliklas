import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url('patners.jpeg')` }} // Add your background image path here
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 h-full w-full"></div>

      <div className="relative z-10 py-12 px-6 md:px-20 text-white">
        {/* Header Section */}
        <motion.h1
          className="text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Aliklas
        </motion.h1>

        {/* Description Section */}
        <motion.p
          className="text-lg text-center mb-10 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          At Aliklas, we specialize in providing top-notch export and import
          services, helping businesses connect with global markets. Whether you
          are looking to ship goods from China or other parts of the world, we
          ensure safe, reliable, and timely delivery to Nigeria and beyond.
        </motion.p>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Value */}
          <motion.div
            className="p-6 bg-white bg-opacity-10 shadow-lg rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              Global Network
            </h3>
            <p>
              Our extensive global network guarantees smooth logistics and
              shipping processes across borders.
            </p>
          </motion.div>

          {/* Second Value */}
          <motion.div
            className="p-6 bg-white bg-opacity-10 shadow-lg rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              Customer-Centric Approach
            </h3>
            <p>
              We put our clients first, ensuring transparent communication and
              on-time delivery every step of the way.
            </p>
          </motion.div>

          {/* Third Value */}
          <motion.div
            className="p-6 bg-white bg-opacity-10 shadow-lg rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              Expert Team
            </h3>
            <p>
              Our team of logistics experts brings years of experience, ensuring
              smooth operations across international trade.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
