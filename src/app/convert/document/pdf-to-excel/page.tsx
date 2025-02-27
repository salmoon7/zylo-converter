"use client";

import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const PdfToExcel = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [convertedFile, setConvertedFile] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type !== "application/pdf") {
        alert("Please upload a valid PDF file.");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleConversion = async () => {
    if (!file) return;
    setLoading(true);

    try {
      // Simulating backend API call
      setTimeout(() => {
        setConvertedFile("https://example.com/converted-file.xlsx"); // Mock URL
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Conversion failed", error);
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 text-gray-900 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-primary mb-10"
      >
        Convert PDF to Excel
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg text-center"
      >
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
          <p className="mt-4 text-sm text-gray-600">Selected: {file.name}</p>
        )}

        <button
          onClick={handleConversion}
          disabled={!file || loading}
          className="mt-6 bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert to Excel"}
        </button>

        {convertedFile && (
          <div className="mt-6 p-4 border border-green-400 bg-green-50 rounded-lg">
            <p className="text-green-600 font-bold">Conversion Successful!</p>
            <a
              href={convertedFile}
              download="converted-file.xlsx"
              className="text-blue-600 text-sm underline mt-2 inline-block"
            >
              Download Excel File
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default PdfToExcel;
