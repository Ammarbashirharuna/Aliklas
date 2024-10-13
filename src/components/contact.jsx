import { motion } from "framer-motion"

const ContactTitle = () => {
  return (
    <>
       {/* Title Section */}
       <motion.h1
          className="text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>
    </>
  )
}

export default ContactTitle
