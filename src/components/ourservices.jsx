import { motion } from "framer-motion";

const OurServices = () => {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center text-indigo-950">
        Our Services
        <span className="block w-20 h-1 bg-indigo-950 mt-2 mx-auto rounded"></span>
      </h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <motion.div
          className="bg-indigo-950 text-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:shadow-xl hover:scale-105 p-6"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-bold text-2xl mb-2">Shipping</h3>
          <p className="text-gray-200">
            Reliable shipping solutions from China to Nigeria. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum totam hic quia aut accusantium voluptas repellat ad expedita sint perspiciatis.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:shadow-xl hover:scale-105 p-6 border-l-4 border-indigo-950"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-bold text-2xl mb-2 text-indigo-950">Importing</h3>
          <p>
            Hassle-free customs clearance services for smooth delivery. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis est officiis praesentium vero aliquid tempora ipsa quos iusto, molestiae asperiores laboriosam eaque repudiandae.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:shadow-xl hover:scale-105 p-6 border-l-4 border-indigo-950"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-bold text-2xl mb-2 text-indigo-950">Distributing</h3>
          <p>
            Secure warehousing options for your goods in transit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, minus fugiat. Exercitationem nemo quae quo, nobis amet in ullam voluptatum!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
