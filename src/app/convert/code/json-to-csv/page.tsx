"use client";

import { useState } from "react";
import { FaFileCode } from "react-icons/fa";
import { motion } from "framer-motion";
import Papa from "papaparse";

const JsonToCsv = () => {
  const [jsonData, setJsonData] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [csvFile, setCsvFile] = useState<string | null>(null);

  const handleJsonUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setJsonData(e.target.result as string);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleConversion = () => {
    if (!jsonData) return;
    setLoading(true);

    try {
      const json = JSON.parse(jsonData);
      const csv = Papa.unparse(json);
      const blob = new Blob([csv], { type: "text/csv" });
      setCsvFile(URL.createObjectURL(blob));
    } catch (error) {
      let errorMessage = "Invalid JSON format.";

      // Narrowing down the error type
      if (error instanceof Error) {
        errorMessage += ` Error details: ${error.message}`;
      } else if (typeof error === "string") {
        errorMessage += ` Error details: ${error}`;
      } else {
        errorMessage += " An unknown error occurred.";
      }

      alert(errorMessage);
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 text-gray-900 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-primary mb-10"
      >
        JSON to CSV Converter
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-700 text-center max-w-2xl mb-8"
      >
        Convert JSON files to CSV format quickly and easily.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg text-center"
      >
        <label className="cursor-pointer flex flex-col items-center space-y-2 border border-gray-300 p-4 rounded-lg hover:bg-gray-50">
          <FaFileCode className="text-4xl text-primary" />
          <span className="text-gray-600 text-sm">
            Click to Upload JSON File
          </span>
          <input
            type="file"
            className="hidden"
            accept=".json"
            onChange={handleJsonUpload}
          />
        </label>

        {jsonData && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              JSON file uploaded successfully.
            </p>
          </div>
        )}

        <button
          onClick={handleConversion}
          disabled={!jsonData || loading}
          className="mt-6 bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert to CSV"}
        </button>

        {csvFile && (
          <div className="mt-6 p-4 border border-green-400 bg-green-50 rounded-lg">
            <p className="text-green-600 font-bold">Conversion Successful!</p>
            <a
              href={csvFile}
              download="converted-file.csv"
              className="text-blue-600 text-sm underline mt-2 inline-block"
            >
              Download CSV File
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default JsonToCsv;
