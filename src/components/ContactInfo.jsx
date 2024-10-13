import { motion } from "framer-motion"

const ContactInfo = () => {
  return (
    <div>
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
  )
}

export default ContactInfo
