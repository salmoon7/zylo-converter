"use client";

import { useState } from "react";
import { FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";

const WavToMp3 = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [convertedFile, setConvertedFile] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const uploadedFile = event.target.files[0];
      if (uploadedFile.type === "audio/wav") {
        setFile(uploadedFile);
      } else {
        alert("Only WAV files are allowed.");
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
        className="text-4xl md:text-5xl font-bold text-center text-primary mb-10"
      >
        WAV to MP3 Converter
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-700 text-center max-w-2xl mb-8"
      >
        Convert WAV audio files to MP3 format quickly and easily.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg text-center"
      >
        <label className="cursor-pointer flex flex-col items-center space-y-2 border border-gray-300 p-4 rounded-lg hover:bg-gray-50">
          <FaMusic className="text-4xl text-primary" />
          <span className="text-gray-600 text-sm">
            Click to Upload WAV File
          </span>
          <input
            type="file"
            className="hidden"
            accept="audio/wav"
            onChange={handleFileUpload}
          />
        </label>

        {file && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Selected: {file.name}</p>
          </div>
        )}

        <button
          onClick={handleConversion}
          disabled={!file || loading}
          className="mt-6 bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert to MP3"}
        </button>

        {convertedFile && (
          <div className="mt-6 p-4 border border-green-400 bg-green-50 rounded-lg">
            <p className="text-green-600 font-bold">Conversion Successful!</p>
            <a
              href={convertedFile}
              download="converted-audio.mp3"
              className="text-blue-600 text-sm underline mt-2 inline-block"
            >
              Download MP3 File
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default WavToMp3;
