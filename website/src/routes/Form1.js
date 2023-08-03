import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Croppredictionimg from "../assets/cropprediction.jpg";
import Footer from "../components/Footer";
import Form1 from "../components/Form1";
function CropForm(){
    return(
        <>
        
        <Navbar />
         <Hero 
         cName="hero-mid"
         heroImg = {Croppredictionimg}
         title= "Crop Prediction"

         />
        <Form1 /> 
      <Footer />
        </>
         
    )
}

export default CropForm;