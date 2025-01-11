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
    <div className="container mx-auto p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
        >
          <img
            src={product.image}
            alt={product.note}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-lg font-medium text-center text-indigo-950 hover:text-indigo-700 transition-colors duration-300">
            {product.note}
          </p>
        </div>
      ))}
    </div>
  </div>

    </>
  );
};

export default Product;
