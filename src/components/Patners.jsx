const Partners = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our Partners
        </h2>

        {/* Partner Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {/* First Partner */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
            <img
              src="md.jpg" // Replace with your partner logo URL
              alt="Partner 1"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Second Partner */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
            <img
              src="el.jpg" // Replace with your partner logo URL
              alt="Partner 2"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Third Partner */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
            <img
              src="ng.jpg" // Replace with your partner logo URL
              alt="Partner 3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Fourth Partner */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
            <img
              src="abs.jpg" // Replace with your partner logo URL
              alt="Partner 4"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
