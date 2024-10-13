import { motion } from "framer-motion"

const ContactForm = () => {
    return (
        <>
            {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-300 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <form>
              <div className="mb-4 text-black">
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-indigo-950 text-white rounded-lg"
                />
              </div>

              <div className="mb-4 text-black">
                <label className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-indigo-950 text-white rounded-lg"
                />
              </div>

              <div className="mb-4 text-black">
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea className="w-full h-32 px-4 py-2 bg-indigo-950 text-white rounded-lg"></textarea>
              </div>

              <motion.button
                type="submit"
                className="px-6 py-3 bg-indigo-950 text-white rounded-full font-bold hover:bg-black"
                whileHover={{ scale: 1.1 }}
              >
                Send Message
              </motion.button>
            </form>
                </motion.div>
        </div>
        </>
    )
};

export default ContactForm;
