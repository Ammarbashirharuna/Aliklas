const Product = () => {
  const products = [
    {
      image: "3.jpg",
      note: "Product 1 description",
    },
    {
      image: "2.jpg",
      note: "Product 2 description",
    },
    {
      image: "1.jpg",
      note: "Product 3 description",
    },
    {
      image: "7.jpg",
      note: "Product 4 description",
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
