"use client";

import { useState } from "react";
import { FaFileWord, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const WordToPdf = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [convertedFile, setConvertedFile] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      const allowedTypes = [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(selectedFile.type)) {
        setError("Only Word files (.doc, .docx) are allowed.");
        setFile(null);
        return;
      }

      setError(null);
      setFile(selectedFile);
    }
  };

  const handleConversion = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/convert/word-to-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to convert file");
      }

      const data = await response.json();
      setConvertedFile(data.downloadUrl);
    } catch (error) {
      setError("Conversion failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 text-gray-900 flex flex-col items-center">
      <motion.h2 className="text-4xl font-bold text-center text-primary mb-10">
        Word to PDF Converter
      </motion.h2>
      <motion.p className="text-lg text-gray-700 text-center max-w-2xl mb-8">
        Upload your Word file (.doc, .docx) and convert it into a high-quality
        PDF.
      </motion.p>

      <motion.div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg text-center">
        <label className="cursor-pointer flex flex-col items-center space-y-2 border border-gray-300 p-4 rounded-lg hover:bg-gray-50">
          <FaFileWord className="text-4xl text-primary" />
          <span className="text-gray-600 text-sm">
            Click to Upload Word File
          </span>
          <input
            type="file"
            className="hidden"
            accept=".doc,.docx"
            onChange={handleFileUpload}
          />
        </label>
        {file && (
          <p className="mt-4 text-sm text-gray-600">Selected: {file.name}</p>
        )}
        {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}

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
              download
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

export default WordToPdf;
