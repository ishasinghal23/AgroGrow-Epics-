import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Fertilizerpredictionimg from "../assets/fertilizerrecommendation.jpg";
import Footer from "../components/Footer";
import Form3 from "../components/Form3";
function DiseaseForm(){
    return(
        <>
        
        <Navbar />
         <Hero 
         cName="hero-mid"
         heroImg = {Fertilizerpredictionimg}
         title= "Disease Predictionn"

         />
        <Form3 /> 
      <Footer />
        </>
         
    )
}

export default DiseaseForm;