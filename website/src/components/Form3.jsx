import React, { useState } from "react";
import "./Form1.css";
import axios from "axios";

function Form3() {
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/predict/dlmodel", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const predictedOutput = response.data.output;
      setOutput(predictedOutput);

      // Clear the image input
      setImage(null);
    } catch (error) {
      console.error("Request failed:", error);
      // Handle error
    }
  };

  console.log("Current Output:", output);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Predict</button>
      </form>
      {output && <p>Predicted Output: {output}</p>}
    </div>
  );
}

export default Form3;
