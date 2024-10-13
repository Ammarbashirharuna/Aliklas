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
    {
      image: "7.jpg",
      note: "Customer first as always at alikhlas you will find full satisfaction about any kind of product you are looking for",
    },  
  ];

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={product.image}
                alt={product.note}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 text-center">{product.note}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
