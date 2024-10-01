import HeaderSection from "./h1";

const Hero = () => {
  return (
    <>
      <div className=" flex md:flex justify-center text-center mt-0 sm:flex-col bg-white pt-20  pb-10 relative bg-blend-darken bg-[url('nbg.jpg')] bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <HeaderSection />
        </div>
      </div>
    </>
  );
};

export default Hero;
