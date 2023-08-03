import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import OurTeam from "./routes/OurTeam";
import CropForm from "./routes/Form1";
import FertilizerForm from "./routes/Form2";
import DiseaseForm from './routes/Form3';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/service" element = {<Service />}/>
        <Route path = "/contact" element = {<Contact />}/>
        <Route path = "/ourteam" element= {<OurTeam />} />
        <Route path = "/croprecommendation" element={<CropForm />} />
        <Route path = "/fertilizerrecommendation" element={<FertilizerForm />} />
        <Route path = "/diseaseprediction" element={<DiseaseForm />} />
      </Routes>
  
     
    

      
    </div>
  );
}

export default App;
