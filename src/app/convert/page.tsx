"use client";

import { useState } from "react";
import {
  FaFileAlt,
  FaFileImage,
  FaFileAudio,
  FaFileVideo,
  FaFilePdf,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Convert = () => {
  const [file, setFile] = useState<File | null>(null);
  const [conversionFormat, setConversionFormat] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [convertedFile, setConvertedFile] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleConversion = async () => {
    if (!file || !conversionFormat) return;
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
        File Conversion Tool
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-700 text-center max-w-2xl mb-8"
      >
        Convert files seamlessly between different formats, including images,
        PDFs, audio, and video.
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
          <FaFileAlt className="text-4xl text-primary" />
          <span className="text-gray-600 text-sm">Click to Upload File</span>
          <input type="file" className="hidden" onChange={handleFileUpload} />
        </label>

        {file && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Selected: {file.name}</p>
          </div>
        )}

        {/* Select Format */}
        <div className="mt-6">
          <p className="text-sm text-gray-600">Select Conversion Format:</p>
          <div className="flex justify-center space-x-4 mt-3">
            <button
              onClick={() => setConversionFormat("jpg")}
              className={`p-2 rounded-lg shadow-md ${
                conversionFormat === "jpg"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              } transition`}
            >
              <FaFileImage className="text-xl" /> JPG
            </button>
            <button
              onClick={() => setConversionFormat("pdf")}
              className={`p-2 rounded-lg shadow-md ${
                conversionFormat === "pdf"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              } transition`}
            >
              <FaFilePdf className="text-xl" /> PDF
            </button>
            <button
              onClick={() => setConversionFormat("mp3")}
              className={`p-2 rounded-lg shadow-md ${
                conversionFormat === "mp3"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              } transition`}
            >
              <FaFileAudio className="text-xl" /> MP3
            </button>
            <button
              onClick={() => setConversionFormat("mp4")}
              className={`p-2 rounded-lg shadow-md ${
                conversionFormat === "mp4"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              } transition`}
            >
              <FaFileVideo className="text-xl" /> MP4
            </button>
          </div>
        </div>

        {/* Convert Button */}
        <button
          onClick={handleConversion}
          disabled={!file || !conversionFormat || loading}
          className="mt-6 bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert File"}
        </button>

        {/* Conversion Results */}
        {convertedFile && (
          <div className="mt-6 p-4 border border-green-400 bg-green-50 rounded-lg">
            <p className="text-green-600 font-bold">Conversion Successful!</p>
            <a
              href={convertedFile}
              download={`converted-file.${conversionFormat}`}
              className="text-blue-600 text-sm underline mt-2 inline-block"
            >
              Download Converted File
            </a>
          </div>
        )}
      </motion.div>

      {/* How Conversion Works */}
      <div className="max-w-4xl mt-16">
        <h3 className="text-2xl font-bold text-center mb-4">How It Works</h3>
        <p className="text-gray-700 text-center">
          Our file conversion tool allows you to seamlessly transform files into
          different formats. Whether you need to convert an image to PDF, an
          audio file to MP3, or a video to MP4, our system ensures high-quality
          conversion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-xl shadow-md text-center"
          >
            <FaFileAlt className="text-4xl text-primary mx-auto mb-4" />
            <h4 className="font-bold">Upload</h4>
            <p className="text-sm text-gray-600">
              Select any file you want to convert.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-white rounded-xl shadow-md text-center"
          >
            <FaFilePdf className="text-4xl text-primary mx-auto mb-4" />
            <h4 className="font-bold">Choose Format</h4>
            <p className="text-sm text-gray-600">Pick the format you need.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-white rounded-xl shadow-md text-center"
          >
            <FaFileAudio className="text-4xl text-primary mx-auto mb-4" />
            <h4 className="font-bold">Download</h4>
            <p className="text-sm text-gray-600">
              Get your newly formatted file instantly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Convert;
