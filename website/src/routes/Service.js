import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Serviceimg from "../assets/service.jpg";
import Footer from "../components/Footer";
import Services from "../components/Services";
function Service(){
    return(
        <>
        
        <Navbar />
         <Hero 
         cName="hero-mid"
         heroImg = {Serviceimg}
         title= "Services"

         />
        <Services />
      <Footer />
        </>
         
    )
}
export default Service;