import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Aboutimg from "../assets/about.jpg";
import Footer from "../components/Footer";
import Information from "../components/Information";
function About(){
    return(
        <>
        
        <Navbar />
         <Hero 
         cName="hero-mid"
         heroImg = {Aboutimg}
         title= "About US"

         />
          <Information />
           <Footer />
    
        </>
         
    )
}

export default About;