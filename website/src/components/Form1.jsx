import React, { useState } from "react";
import "./Form1.css";
import axios from "axios";

function Form1() {
  const [n, setN] = useState("");
  const [p, setP] = useState("");
  const [k, setK] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [ph, setPh] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputData = {
      n,
      p,
      k,
      temperature,
      humidity,
      ph,
      rainfall,
   
    };

    try {
      const response = await axios.post("http://localhost:5000/predict", inputData);
      const predictedOutput = response.data.output;
      setOutput(predictedOutput);

      // Clear the form inputs
      setN("");
      setP("");
      setK("");
      setTemperature("");
      setHumidity("");
      setPh("");
      setRainfall("");

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
          placeholder="N"
          value={n}
          onChange={(e) => setN(e.target.value)}
        ></input>
        <input
          placeholder="P"
          value={p}
          onChange={(e) => setP(e.target.value)}
        ></input>
        <input
          placeholder="K"
          value={k}
          onChange={(e) => setK(e.target.value)}
        ></input>
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
          placeholder="pH"
          value={ph}
          onChange={(e) => setPh(e.target.value)}
        ></input>
        <input
          placeholder="Rainfall"
          value={rainfall}
          onChange={(e) => setRainfall(e.target.value)}
        ></input>
       
        <button type="submit">Predict</button>
      </form>
      {output && <p>Predicted Output: {output}</p>}
    </div>
  );
}

export default Form1;
