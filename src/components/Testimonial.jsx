import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "This company exceeded my expectations! Their importing services were smooth, and the delivery was right on time.",
      name: "Jane Doe",
      position: "CEO, Global Trade Inc.",
      image: "ceo.jpeg", // Replace with actual image URLs
    },
    {
      id: 2,
      quote:
        "I’ve been using their services for years. The team is professional, and the quality of products is top-notch.",
      name: "John Smith",
      position: "Manager, Logistics Co.",
      image: "ceo.jpeg", // Replace with actual image URLs
    },
    {
      id: 3,
      quote:
        "Reliable, efficient, and cost-effective. I highly recommend them for importing and logistics solutions.",
      name: "Sarah Johnson",
      position: "Director, Supply Chain Ltd.",
      image: "ceo.jpeg", // Replace with actual image URLs
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-indigo-950 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-700 mb-10">
          Hear from some of our satisfied clients who trust us with their importing needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * testimonial.id }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <h3 className="text-lg font-semibold text-indigo-950">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
