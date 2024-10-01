import { motion } from 'framer-motion';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a brief description of Product 1.',
      price: '$100',
      image: 'https://via.placeholder.com/300', // Placeholder image
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is a brief description of Product 2.',
      price: '$150',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is a brief description of Product 3.',
      price: '$200',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is a brief description of Product 4.',
      price: '$250',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <section className="bg-gray-100 min-h-screen py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-yellow-500">{product.price}</p>
              <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded transition duration-300">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
