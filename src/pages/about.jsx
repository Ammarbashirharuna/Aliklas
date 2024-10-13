import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import Patners from "../components/Patners";



const About = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('patners.jpeg')` }}
    >

      <AboutUs />
      <Patners />
      <Mission />
      <Footer />
   



    </div>
  );
};

export default About;
