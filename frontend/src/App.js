import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(file ? URL.createObjectURL(file) : null);
    setPrediction(null);
    setError(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file first");
      return;
    }
    setLoading(true);
    setError(null);
    setPrediction(null);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.statusText}`);
      }

      const result = await res.json();
      setPrediction(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://img.freepik.com/premium-photo/shiny-sunlight-natural-green-bokeh-abstract-blur_93675-30166.jpg?ga=GA1.1.449698023.1742705515&semt=ais_hybrid&w=740')] bg-cover bg-center flex items-center justify-center p-4">
      <div className="rounded-2xl shadow-xl p-8 w-full max-w-xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">
          Potato Age Predictor 
        </h1>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-xsm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-600 transition mb-4"
        />

        {previewUrl && (
          <div className="mb-4">
            <img
              src={previewUrl}
              alt="Preview"
              className="mx-auto max-h-64 rounded-lg shadow-md"
            />
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={loading || !selectedFile}
          className={`px-6 py-2 rounded-lg font-semibold text-white transition ${
            loading || !selectedFile
              ? "bg-green-300 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>

        {error && (
          <div className="text-red-600 mt-4 text-sm font-medium">{error}</div>
        )}

        {prediction && (
          <div className="mt-6 text-lg font-medium text-gray-800">
            <p>
              <span className="font-bold">Prediction:</span>{" "}
              <span className="text-green-700">{prediction.class}</span>
            </p>
            <p>
              <span className="font-bold">Confidence:</span>{" "}
              <span className="text-blue-700">
                {(prediction.confidence * 100).toFixed(2)}%
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
