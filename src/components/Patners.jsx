const Patners = () => {
  return (
    <>
    <h2 className="text-center text-4xl font-bold mb-8 animate-fadeIn mt-5 animate-pulse">
        About us 
        <span className="block w-16 h-1 bg-indigo-950 mt-2 mx-auto"></span>
      </h2>
      
    <div
      className="relative bg-cover bg-center bg-no-repeat p-10 text-white"
      style={{ backgroundImage: "url('patners.jpeg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="md:flex flex-row justify-around items-center text-white p-6 space-y-4 sm:space-y-0 sm:flex">
          <div className="text-2xl font-light transform transition duration-500 hover:scale-105 cursor-pointer">
            1000+ Customers
          </div>
          <div className="text-2xl font-light transform transition duration-500 hover:scale-105 cursor-pointer">
            10+ Partners
          </div>
          <div className="text-2xl font-light transform transition duration-500 hover:scale-105 cursor-pointer">
            3+ Branches
          </div>
          <div className="text-2xl font-light transform transition duration-500 hover:scale-105">
            100+ Shares
          </div>
        </div>
      </div>
      </div>
      </>
  );
};

export default Patners;
