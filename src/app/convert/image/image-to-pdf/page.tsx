"use client";

import { useState } from "react";
import { FaFileImage, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const ImageToPDF = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [convertedFile, setConvertedFile] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const uploadedFile = event.target.files[0];
      if (
        uploadedFile.type === "image/jpeg" ||
        uploadedFile.type === "image/png"
      ) {
        setFile(uploadedFile);
      } else {
        alert("Please upload a JPG or PNG image file.");
      }
    }
  };

  const handleConversion = async () => {
    if (!file) return;
    setLoading(true);

    // Placeholder for backend API request
    setTimeout(() => {
      setConvertedFile(URL.createObjectURL(file)); // Mock converted file
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 text-gray-900 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-primary mb-10"
      >
        Convert Image to PDF
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg text-center"
      >
        <label className="cursor-pointer flex flex-col items-center space-y-2 border border-gray-300 p-4 rounded-lg hover:bg-gray-50">
          <FaFileImage className="text-4xl text-primary" />
          <span className="text-gray-600 text-sm">
            Click to Upload Image (JPG, PNG)
          </span>
          <input
            type="file"
            className="hidden"
            accept="image/jpeg, image/png"
            onChange={handleFileUpload}
          />
        </label>

        {file && (
          <p className="mt-4 text-sm text-gray-600">Selected: {file.name}</p>
        )}

        <button
          onClick={handleConversion}
          disabled={!file || loading}
          className="mt-6 bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert to PDF"}
        </button>

        {convertedFile && (
          <div className="mt-6 p-4 border border-green-400 bg-green-50 rounded-lg">
            <p className="text-green-600 font-bold">Conversion Successful!</p>
            <a
              href={convertedFile}
              download="converted-file.pdf"
              className="text-blue-600 text-sm underline mt-2 inline-block"
            >
              Download PDF
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ImageToPDF;
