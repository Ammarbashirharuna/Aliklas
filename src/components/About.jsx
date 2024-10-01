import Product from "./product";

const About = () => {
  return (
    <>
      <h2 className="text-center text-3xl mt-3 font-bold">Product
      <span className="block w-16 h-1 bg-indigo-950 mt-2 mx-auto"></span>
      </h2>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4 lg:-mt-96">
            <h2 className="text-3xl font-bold mb-4 ">Our Amazing Product</h2>
            <p className="text-lg text-gray-700 mb-4">
              This is a detailed note about the product, highlighting its
              features and why its the best choice for customers.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>High quality materials</li>
              <li>Available in multiple colors</li>
              <li>Affordable price</li>
              <li>2-year warranty included</li>
            </ul>
          </div>
          <Product />
        </div>
      </div>
    </>
  );
};

export default About;
