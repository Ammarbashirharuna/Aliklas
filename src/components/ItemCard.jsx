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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center my-8 text-indigo-950"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Products
          <span className="block w-16 h-1 bg-indigo-950 mt-2 mx-auto rounded-lg"></span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * product.id, duration: 0.5 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-950">
                  {product.name}
                </h3>
                <p className="text-gray-700 mt-2">{product.description}</p>
                <p className="text-lg font-bold text-indigo-600 mt-4">
                  {product.price}
                </p>
                <button className="mt-4 w-full bg-indigo-950 text-white py-2 rounded hover:bg-indigo-800 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemCard;
