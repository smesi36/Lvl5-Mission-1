import ImgAnalyserButton from "./components/ImgAnalyserButton";
import ImgUploader from "./components/ImgUploader";
import styles from "./ImgAnalyserPage.module.css";
import defaultImg from "../../src/assets/default-img-preview.png";

import axios from "axios";

import { useState } from "react";

export default function ImgAnalyserPage() {
  const [image, setImage] = useState(defaultImg); // default preview
  const [file, setFile] = useState(null); // for uploading
  const [typeResult, setTypeResult] = useState(""); // for displaying the vehicle type
  const [brandResult, setBrandResult] = useState(""); // for displaying the vehicle brand
  const [errorMessage, setErrorMessage] = useState(""); //for displaying error message

  async function handleAnalyze() {
    if (!file) {
      console.warn("No file selected!");
      return;
    }
    // Sending uploaded 'file' to the backend
    // FormData object for sending the file to backend
    const formData = new FormData();
    formData.append("image", file); //image matches the fieldname in multer

    try {
      const response = await axios.post(
        "http://localhost:4000/analyze",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const predictions = response.data.predictions;
      console.log("🔎 Object Detection predictions:");

      //If no predictions:

      if (!predictions || predictions.length === 0) {
        setBrandResult("No predictions found");
        setTypeResult("No predictions found");
        return;
      }

      // defining the known tags and the acceptable threshold of prediction
      const brandTags = ["Toyota", "Mercedes", "Other brand"];
      const typeTags = ["Sedan", "SUV", "Truck"];
      const threshold = 0.7;

      // Filtering brand predictions and sorting by descending values
      // .? optional chaining returns array item if it exists, if not returns 'undefined. Prevents crashing - safe.

      const topBrandPrediction = predictions
        .filter(
          (p) => brandTags.includes(p.tagName) && p.probability >= threshold
        )
        .sort((a, b) => b.probability - a.probability)[0]?.tagName;

      // Filtering vehicle type predictions and sorting by descending values

      const topTypePrediction = predictions
        .filter(
          (p) => typeTags.includes(p.tagName) && p.probability >= threshold
        )
        .sort((a, b) => b.probability - a.probability)[0]?.tagName;

      // Getting the most probable brand and type

      const brand = topBrandPrediction || "Unknown brand";
      const type = topTypePrediction || "Unknown type";

      console.log(`Detected brand: ${brand}`);
      console.log(`Detected vehicle type: ${type}`);

      setBrandResult(brand);
      setTypeResult(type);
      setErrorMessage(""); //clear old error
    } catch (error) {
      console.error("❌ Failed to analyze image", error);
      setTypeResult("");
      setBrandResult("");
      setErrorMessage("Something went wrong during analysis");
    }
  }

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.pageTitle}>Image Analysis Page</h1>
      <img
        className={styles.imgPreview}
        src={image}
        alt="image to be analysed"
      />
      {/* conditional rendering */}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <p className={styles.displayedResult}>
        {typeResult || brandResult ? (
          <>
            Vehicle type: {typeResult} <br />Brand: {brandResult}
          </>
        ) : ("Click Analyse Image")
        }
      </p>
      <div className={styles.buttonContainer}>
        <ImgUploader
          setImage={setImage}
          setFile={setFile}
          setTypeResult={setTypeResult}
          setBrandResult={setBrandResult}
        />
        <ImgAnalyserButton onAnalyze={handleAnalyze} />
      </div>
    </div>
  );
}
