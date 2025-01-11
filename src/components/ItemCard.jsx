import { motion } from "framer-motion";

const ItemCard = () => {
  const products = [
    {
      id: 1,
      name: "Egyptian Abaya",
      description: "Luxurious and elegant abaya made from premium fabric.",
      price: "$99.99",
      image: "3.jpg", // Replace with actual image path
    },
    {
      id: 2,
      name: "Dubai Gown",
      description: "Stylish gown perfect for special occasions.",
      price: "$149.99",
      image: "5.jpg", // Replace with actual image path
    },
    {
      id: 3,
      name: "Lifaya Set",
      description: "Comfortable lifaya set for daily wear.",
      price: "$89.99",
      image: "6.jpg", // Replace with actual image path
    },
    {
      id: 3,
      name: "Lifaya Set",
      description: "Comfortable lifaya set for daily wear.",
      price: "$89.99",
      image: "6.jpg", // Replace with actual image path
    },
    {
      id: 3,
      name: "Lifaya Set",
      description: "Comfortable lifaya set for daily wear.",
      price: "$89.99",
      image: "6.jpg", // Replace with actual image path
    },
    {
      id: 3,
      name: "Lifaya Set",
      description: "Comfortable lifaya set for daily wear.",
      price: "$89.99",
      image: "6.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-white">
  <div className="container mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-indigo-950">
        Discover Our Products
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Explore our range of high-quality products tailored to meet your needs.
      </p>
      <span className="block w-16 h-1 bg-indigo-950 mt-4 mx-auto rounded-lg"></span>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="relative group bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * product.id, duration: 0.5 }}
        >
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
          />

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Product Details */}
          <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold text-white">{product.name}</h3>
            <p className="text-sm text-gray-300 mt-2 leading-snug">
              {product.description}
            </p>
            <p className="text-lg font-bold text-indigo-300 mt-4">
              {product.price}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ItemCard;
