"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";
import { FaFileImage, FaFileVideo, FaFileArchive } from "react-icons/fa";
import { motion } from "framer-motion";

const Compress = () => {
  const [file, setFile] = useState<File | null>(null);
  const [compressedFile, setCompressedFile] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);
  const [originalSize, setOriginalSize] = useState<number | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const uploadedFile = event.target.files[0];
      setFile(uploadedFile);
      setOriginalSize(uploadedFile.size);
    }
  };

  const handleCompression = async () => {
    if (!file) return;
    setLoading(true);

    if (file.type.startsWith("image")) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };
      try {
        const compressedBlob = await imageCompression(file, options);
        setCompressedFile(compressedBlob);
        setCompressedSize(compressedBlob.size);
      } catch (error) {
        console.error("Compression failed", error);
      }
    } else {
      alert("Only image compression is supported in this demo.");
    }
    setLoading(false);
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
        File Compression Tool
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-700 text-center max-w-2xl mb-8"
      >
        Reduce file sizes efficiently without losing quality. Our tool uses
        advanced compression techniques for images, videos, and archives.
      </motion.p>

      {/* Compression Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg text-center"
      >
        {/* File Upload */}
        <label className="cursor-pointer flex flex-col items-center space-y-2 border border-gray-300 p-4 rounded-lg hover:bg-gray-50">
          <FaFileImage className="text-4xl text-primary" />
          <span className="text-gray-600 text-sm">Click to Upload Image</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>

        {file && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Selected: {file.name}</p>
            <p className="text-sm text-gray-500">
              Size: {(originalSize! / 1024).toFixed(2)} KB
            </p>
          </div>
        )}

        {/* Compress Button */}
        <button
          onClick={handleCompression}
          disabled={!file || loading}
          className="mt-6 bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? "Compressing..." : "Compress File"}
        </button>

        {/* Compression Results */}
        {compressedFile && (
          <div className="mt-6 p-4 border border-green-400 bg-green-50 rounded-lg">
            <p className="text-green-600 font-bold">Compression Successful!</p>
            <p className="text-sm text-gray-600">
              New Size: {(compressedSize! / 1024).toFixed(2)} KB
            </p>
            <a
              href={URL.createObjectURL(compressedFile)}
              download="compressed-file.jpg"
              className="text-blue-600 text-sm underline mt-2 inline-block"
            >
              Download Compressed File
            </a>
          </div>
        )}
      </motion.div>

      {/* How Compression Works */}
      <div className="max-w-4xl mt-16">
        <h3 className="text-2xl font-bold text-center mb-4">How It Works</h3>
        <p className="text-gray-700 text-center">
          Our file compression tool utilizes advanced algorithms to reduce file
          sizes while maintaining quality. Images are optimized using lossy and
          lossless compression, making them load faster on websites and take up
          less storage space.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-xl shadow-md text-center"
          >
            <FaFileImage className="text-4xl text-primary mx-auto mb-4" />
            <h4 className="font-bold">Upload</h4>
            <p className="text-sm text-gray-600">
              Select an image file to upload.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-white rounded-xl shadow-md text-center"
          >
            <FaFileVideo className="text-4xl text-primary mx-auto mb-4" />
            <h4 className="font-bold">Compress</h4>
            <p className="text-sm text-gray-600">
              Reduce file size while keeping quality.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-white rounded-xl shadow-md text-center"
          >
            <FaFileArchive className="text-4xl text-primary mx-auto mb-4" />
            <h4 className="font-bold">Download</h4>
            <p className="text-sm text-gray-600">
              Save the optimized file to your device.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Compress;
