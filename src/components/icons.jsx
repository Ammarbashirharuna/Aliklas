import { motion } from "framer-motion"
import Footer from "./Footer"

const Icons = () => {
  return (
    <>
       {/* Animated Icons */}
       <div className="mt-10 flex justify-center space-x-8">
          <motion.div
            className="text-4xl bg-white bg-opacity-10 p-2 rounded-full hover:bg-indigo-950 hover:text-black"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            📞
          </motion.div>
          <motion.div
            className="text-4xl bg-white bg-opacity-10 p-2 rounded-full hover:bg-indigo-950 hover:text-black"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            ✉️
          </motion.div>
          <motion.div
            className="text-4xl bg-white bg-opacity-10 p-2 rounded-full hover:bg-indigo-950 hover:text-black"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            📍
          </motion.div>
          </div>
          <Footer />
    </>
  )
}

export default Icons
