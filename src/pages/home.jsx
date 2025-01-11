import Hero from "../components/Hero";
import Product from "../components/product";
import Ourservices from "../components/ourservices";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonial";
import BackToTopButton from "../components/BackToTopButton";



const Home = () => {
  return (
    <>
      <Hero />
      <Ourservices />
      <Product />
      <Testimonials/>
      <Footer />
      <BackToTopButton/>
  
    </>
  )
}

export default Home;
