import { motion } from "framer-motion";
const Product = () => {
  const products = [
    {
      image: "1.jpg",
      note: "We specialize in importing high quality Abaya from Best countries tha will satisfied Customers need",
    },
    {
      image: "2.jpg",
      note: "At Alikhlas You can find any high quality product that all the customers are looking for",
    },
    {
      image: "1.jpg",
      note: "We can Deliver any type of Less to your shop any where you are",
    },
  
  ];

  return (
    <>
      <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-indigo-950">
            Explore Our Products
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Browse through our carefully curated selection of top-quality products designed to meet your needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt="Product"
                className="w-full h-64 object-cover"
              />

              {/* Product Details */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>

  );
};

export default Product;
