import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className="bg-cover bg-center bg-gray-800 py-20 min-h-screen">
    <div className="container mx-auto px-6 md:px-20 text-white">

      {/* Title Section */}
      <motion.h1
        className="text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h1>

      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div
          className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea className="w-full h-32 px-4 py-2 bg-gray-700 text-white rounded-lg"></textarea>
            </div>

            <motion.button
              type="submit"
              className="px-6 py-3 bg-yellow-500 text-black rounded-full font-bold hover:bg-yellow-600"
              whileHover={{ scale: 1.1 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-2">Our Address</h3>
            <p>Aliklas, 123 Export Road, Lagos, Nigeria</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-2">Phone</h3>
            <p>+234 800 123 4567</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-2">Email</h3>
            <p>info@aliklas.com</p>
          </div>
        </motion.div>
      </div>

      {/* Animated Icons */}
      <div className="mt-10 flex justify-center space-x-8">
        <motion.div
          className="text-4xl bg-white bg-opacity-10 p-4 rounded-full hover:bg-yellow-500 hover:text-black"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          📞
        </motion.div>
        <motion.div
          className="text-4xl bg-white bg-opacity-10 p-4 rounded-full hover:bg-yellow-500 hover:text-black"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          ✉️
        </motion.div>
        <motion.div
          className="text-4xl bg-white bg-opacity-10 p-4 rounded-full hover:bg-yellow-500 hover:text-black"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          📍
        </motion.div>
      </div>
    </div>
  </section>
  );

}

export default Contact
