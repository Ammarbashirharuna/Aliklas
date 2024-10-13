import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center my-8 text-indigo-950"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission
          <span className="block w-16 h-1 bg-indigo-950 mt-2 mx-auto rounded-lg"></span>
        </motion.h2>
        <motion.p
          className="text-lg text-center mb-10 leading-relaxed max-w-4xl mx-auto text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          At Al Ikhlas Trading Co., we are committed to providing high-quality
          materials and goods, including original Egyptian and Dubai abayas,
          gowns, lifayas, veils, and nightwear. Our goal is to offer competitive
          pricing while ensuring a trustworthy and reliable experience with us.
        </motion.p>

        <motion.h2
          className="text-3xl font-bold text-center my-8 text-indigo-950"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Vision
          <span className="block w-16 h-1 bg-indigo-950 mt-2 mx-auto rounded-lg"></span>
        </motion.h2>
        <motion.p
          className="text-lg text-center mb-10 leading-relaxed max-w-4xl mx-auto text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Al Ikhlas Trading Co. strives to be the leading distributor of high-quality goods globally, recognized for excellence in both product delivery and customer satisfaction. We aim to be the top choice for partners, consistently exceeding expectations and fostering long-lasting business relationships.
        </motion.p>
      </div>
    </section>
  );
};

export default Mission;
