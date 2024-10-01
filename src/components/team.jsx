import { motion } from "framer-motion";

const Team = () => {
  return (
    <>
      <motion.h2 className="text-3xl font-bold text-center my-8">
        Meet Our Team
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Team Member Card */}
        <motion.div className="p-6 bg-white bg-opacity-10 shadow-lg rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">John Doe</h3>
          <p className="text-gray-400">CEO</p>
          <p>
            With over 15 years of experience in logistics, John leads our
            operations with expertise and dedication.
          </p>
        </motion.div>
    
        <motion.div className="p-6 bg-white bg-opacity-10 shadow-lg rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">John Doe</h3>
          <p className="text-gray-400">CEO</p>
          <p>
            With over 15 years of experience in logistics, John leads our
            operations with expertise and dedication.
          </p>
        </motion.div>
    
        <motion.div className="p-6 bg-white bg-opacity-10 shadow-lg rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">John Doe</h3>
          <p className="text-gray-400">CEO</p>
          <p>
            With over 15 years of experience in logistics, John leads our
            operations with expertise and dedication.
          </p>
        </motion.div>
    
      </div>
    </>
  );
};

export default Team;
