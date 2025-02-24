"use client";

import { useState } from "react";

export default function PdfToWord() {
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [converted, setConverted] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setFile(event.target.files[0]);
      setConverted(false);
    }
  };

  const handleConvert = () => {
    if (!file) return alert("Please upload a file first!");

    setIsConverting(true);

    setTimeout(() => {
      setIsConverting(false);
      setConverted(true);
    }, 3000); // Simulate conversion time
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <h1 className="text-3xl font-bold mb-6">PDF to Word Converter</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg text-center">
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 w-full p-2 bg-gray-700 rounded-md"
        />

        <button
          className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={handleConvert}
          disabled={!file || isConverting}
        >
          {isConverting ? "Converting..." : "Convert File"}
        </button>

        {converted && (
          <p className="mt-4 text-green-400">
            Conversion Successful!{" "}
            <a href="#" className="underline">
              Download File
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
