"use client";
import { useState } from "react";

import * as imageCompression from "browser-image-compression";

const CompressionBox = () => {
  const [file, setFile] = useState<File | null>(null);
  const [compressedFile, setCompressedFile] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
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
        const compressedBlob = await imageCompression.default(file, options);
        setCompressedFile(compressedBlob);
      } catch (error) {
        console.error("Compression failed", error);
      }
    } else {
      alert("Video and document compression require server-side handling.");
    }
    setLoading(false);
  };

  return (
    <section className="relative py-16 px-6 bg-white text-gray-900 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10 relative z-10">
        File Compression
      </h2>

      <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-xl shadow-lg text-center relative z-10">
        <input
          type="file"
          accept="image/*,video/*,.pdf,.docx,.zip"
          className="block w-full text-gray-700 border border-gray-300 rounded-lg p-2 mb-4 cursor-pointer"
          onChange={handleFileUpload}
        />

        {file && <p className="text-sm text-gray-600">Selected: {file.name}</p>}

        <button
          onClick={handleCompression}
          disabled={!file || loading}
          className="mt-4 bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? "Compressing..." : "Compress File"}
        </button>

        {compressedFile && (
          <p className="mt-4 text-green-600">Compression successful!</p>
        )}
      </div>
    </section>
  );
};

export default CompressionBox;
