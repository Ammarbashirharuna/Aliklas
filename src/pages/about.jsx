import AboutUs from "../components/AboutUs";
import Mission from "../components/Mission";
import Team from "../components/team";


const About = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('patners.jpeg')` }}
    >
      
      <AboutUs />
      <Mission />
      <Team />
    
  
    </div>
  );
};

export default About;
