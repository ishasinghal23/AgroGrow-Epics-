import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Contactimg from "../assets/contact.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact(){
    return(
        <>
        
        <Navbar />
         <Hero 
         cName="hero-mid"
         heroImg = {Contactimg}
         title= "Contact Us"

         />
        <ContactForm /> 
      <Footer />
        </>
         
    )
}

export default Contact;