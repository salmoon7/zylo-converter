"use client";

import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const PdfToWord = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [convertedFile, setConvertedFile] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const uploadedFile = event.target.files[0];
      if (uploadedFile.type === "application/pdf") {
        setFile(uploadedFile);
      } else {
        alert("Please upload a valid PDF file.");
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
      {/* Header Section */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-primary mb-10"
      >
        PDF to Word Converter
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-700 text-center max-w-2xl mb-8"
      >
        Easily convert your PDF documents to editable Word files in just a few
        clicks.
      </motion.p>

      {/* Conversion Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg text-center"
      >
        {/* File Upload */}
        <label className="cursor-pointer flex flex-col items-center space-y-2 border border-gray-300 p-4 rounded-lg hover:bg-gray-50">
          <FaFilePdf className="text-4xl text-primary" />
          <span className="text-gray-600 text-sm">Click to Upload PDF</span>
          <input
            type="file"
            className="hidden"
            accept="application/pdf"
            onChange={handleFileUpload}
          />
        </label>

        {file && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Selected: {file.name}</p>
          </div>
        )}

        {/* Convert Button */}
        <button
          onClick={handleConversion}
          disabled={!file || loading}
          className="mt-6 bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert to Word"}
        </button>

        {/* Conversion Results */}
        {convertedFile && (
          <div className="mt-6 p-4 border border-green-400 bg-green-50 rounded-lg">
            <p className="text-green-600 font-bold">Conversion Successful!</p>
            <a
              href={convertedFile}
              download="converted-file.docx"
              className="text-blue-600 text-sm underline mt-2 inline-block"
            >
              Download Word File
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default PdfToWord;
