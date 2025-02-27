"use client";

import { useState } from "react";
import { FaFileCsv } from "react-icons/fa";
import { motion } from "framer-motion";
import Papa from "papaparse";

const CsvToJson = () => {
  const [csvInput, setCsvInput] = useState<string>("");
  const [jsonOutput, setJsonOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConversion = () => {
    if (!csvInput.trim()) return;
    setLoading(true);

    try {
      const result = Papa.parse(csvInput, { header: true });
      setJsonOutput(JSON.stringify(result.data, null, 2));
    } catch (error) {
      let errorMessage = "Conversion failed. Ensure your RAR file is valid.";

      if (error instanceof Error) {
        errorMessage += ` Error details: ${error.message}`;
      } else if (typeof error === "string") {
        errorMessage += ` Error details: ${error}`;
      } else {
        errorMessage += " An unknown error occurred.";
      }

      alert(errorMessage);
      setJsonOutput("Invalid CSV format. Please check your input.");
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
        CSV to JSON Converter
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-700 text-center max-w-2xl mb-8"
      >
        Convert your CSV data to structured JSON format easily.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg text-center"
      >
        <label className="flex flex-col items-center space-y-2 border border-gray-300 p-4 rounded-lg">
          <FaFileCsv className="text-4xl text-primary" />
          <textarea
            className="w-full h-40 p-2 border rounded-lg text-sm"
            placeholder="Paste your CSV data here..."
            value={csvInput}
            onChange={(e) => setCsvInput(e.target.value)}
          />
        </label>

        <button
          onClick={handleConversion}
          disabled={!csvInput.trim() || loading}
          className="mt-6 bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert to JSON"}
        </button>

        {jsonOutput && (
          <div className="mt-6 p-4 border border-green-400 bg-green-50 rounded-lg text-left">
            <p className="text-green-600 font-bold">Converted JSON:</p>
            <pre className="mt-2 text-sm overflow-x-auto bg-gray-200 p-2 rounded">
              {jsonOutput}
            </pre>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default CsvToJson;
