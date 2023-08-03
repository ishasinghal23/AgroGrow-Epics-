import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Fertilizerpredictionimg from "../assets/fertilizerrecommendation.jpg";
import Footer from "../components/Footer";
import Form2 from "../components/From2";
function FertilizerForm(){
    return(
        <>
        
        <Navbar />
         <Hero 
         cName="hero-mid"
         heroImg = {Fertilizerpredictionimg}
         title= "Fertilizer Recommendation"

         />
        <Form2 /> 
      <Footer />
        </>
         
    )
}

export default FertilizerForm;