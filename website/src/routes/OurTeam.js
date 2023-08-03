import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurTeamimg from "../assets/ourteam.jpg";
import Footer from "../components/Footer";
import Members from "../components/Members";
function OurTeam(){
    return(
        <>
        
        <Navbar />
         <Hero 
         cName="hero-mid"
         heroImg = {OurTeamimg}
         title= "Our Team"

         />
         <Members />
       <Footer />
        </>
         
    )
}
export default OurTeam;