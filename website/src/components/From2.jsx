import React, { useState } from "react";
import "./Form1.css";
import axios from "axios";

function Form2() {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [moisture, setMoisture] = useState("");
  const [soilType, setSoilType] = useState("");
  const [cropType, setCropType] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [potassium, setPotassium] = useState("");
  const [phosphorous, setPhosphorous] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputData = {
      temperature,
      humidity,
      moisture,
      soilType,
      cropType,
      nitrogen,
      potassium,
      phosphorous,
    };

    try {
      const response = await axios.post("http://localhost:5000/predict/model2", inputData);
      const predictedOutput = response.data.output;
      setOutput(predictedOutput);

      // Clear the form inputs
      setTemperature("");
      setHumidity("");
      setMoisture("");
      setSoilType("");
      setCropType("");
      setNitrogen("");
      setPotassium("");
      setPhosphorous("");
    } catch (error) {
      console.error("Request failed:", error);
      // Handle error
    }
  };

  console.log("Current Output:", output);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Temperature"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        ></input>
        <input
          placeholder="Humidity"
          value={humidity}
          onChange={(e) => setHumidity(e.target.value)}
        ></input>
        <input
          placeholder="Moisture"
          value={moisture}
          onChange={(e) => setMoisture(e.target.value)}
        ></input>
        <input
          placeholder="Soil Type"
          value={soilType}
          onChange={(e) => setSoilType(e.target.value)}
        ></input>
        <input
          placeholder="Crop Type"
          value={cropType}
          onChange={(e) => setCropType(e.target.value)}
        ></input>
        <input
          placeholder="Nitrogen"
          value={nitrogen}
          onChange={(e) => setNitrogen(e.target.value)}
        ></input>
        <input
          placeholder="Potassium"
          value={potassium}
          onChange={(e) => setPotassium(e.target.value)}
        ></input>
        <input
          placeholder="Phosphorous"
          value={phosphorous}
          onChange={(e) => setPhosphorous(e.target.value)}
        ></input>
        <button type="submit">Predict</button>
      </form>
      {output && <p>Predicted Output: {output}</p>}
    </div>
  );
}

export default Form2;
