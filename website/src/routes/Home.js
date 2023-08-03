import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import background from "../assets/background.jpg"
import Information from "../components/Information";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home(){
    return(
        <>

         <Navbar />
         <Hero 
         cName="hero"
         heroImg = {background}
         title= "Welcome to AgroGrow"
         text  =" Growing together Sustainably with AgroGrow."
         url = "/"
         btnClass = "show"
         />
        <Information />
        <Services />
        <Footer />
        </>
    );
}

export default Home;