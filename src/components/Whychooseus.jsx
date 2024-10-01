import { motion } from 'framer-motion';
const Whychooseus = () => {
  return (
      <>

    <div className="bg-cover bg-center py-20" style={{ backgroundImage: `url('patners.jpeg')` }}>
      <div className="bg-black bg-opacity-60 py-12 px-6 md:px-20 text-white">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Why Choose Aliklas?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Feature */}
          <motion.div 
            className="p-6 bg-white bg-opacity-10 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Global Reach</h3>
            <p>
              At Aliklas, we pride ourselves on our extensive global network that ensures seamless import and export from China to Nigeria and beyond.
            </p>
          </motion.div>

          {/* Second Feature */}
          <motion.div 
            className="p-6 bg-white bg-opacity-10 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reliable Services</h3>
            <p>
              We guarantee timely delivery, transparent pricing, and consistent communication at every step of the logistics process.
            </p>
          </motion.div>

          {/* Third Feature */}
          <motion.div 
            className="p-6 bg-white bg-opacity-10 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Experienced Team</h3>
            <p>
              Our experienced team provides expertise in international trade and customs, ensuring a smooth experience from start to finish.
            </p>
          </motion.div>
        </div>
      </div>
    </div>


      
    </>
  )
}

export default Whychooseus
