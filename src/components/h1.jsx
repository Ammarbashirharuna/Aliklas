import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <div className="text-center py-10">
      <motion.h2
        className="text-5xl p-7 font-bold text-white"
        initial={{ opacity: 0, y: 50 }} // Start off-screen with opacity 0
        animate={{ opacity: 1, y: 0 }}  // Animate to fully visible
        transition={{ delay: 0.3, duration: 1 }}  // Add delay and duration
      >
        Welcome to{" "}
        <motion.span
          className="text-blue-950 font-extrabold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }} // Slightly more delay for a staggered effect
        >
          AlIkhlahs
        </motion.span>
        <br />
        Trading Co. <br />
        <motion.span
          className="font-light text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          The Home of Trust
        </motion.span>
      </motion.h2>
    </div>
  );
};

export default HeaderSection;
