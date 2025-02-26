"use client";

import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import xml2js from "xml2js";

const XmlToJson = () => {
  const [xmlInput, setXmlInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConversion = () => {
    if (!xmlInput.trim()) return;
    setLoading(true);
    const parser = new xml2js.Parser();

    parser.parseString(xmlInput, (err, result) => {
      if (err) {
        alert("Invalid XML format");
        setLoading(false);
        return;
      }
      setJsonOutput(JSON.stringify(result, null, 2)); // ✅ Now TypeScript won't complain
      setLoading(false);
    });
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 text-gray-900 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-primary mb-10"
      >
        XML to JSON Converter
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-700 text-center max-w-2xl mb-8"
      >
        Easily convert XML data into JSON format for better readability and
        processing.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg text-center"
      >
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Paste your XML here..."
          value={xmlInput}
          onChange={(e) => setXmlInput(e.target.value)}
        />

        <button
          onClick={handleConversion}
          disabled={loading || !xmlInput.trim()}
          className="mt-6 bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary-dark transition disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert to JSON"}
        </button>

        {jsonOutput && (
          <div className="mt-6 p-4 border border-green-400 bg-green-50 rounded-lg text-left">
            <p className="text-green-600 font-bold">Conversion Successful!</p>
            <pre className="text-sm text-gray-800 overflow-x-auto p-2 bg-gray-200 rounded">
              {jsonOutput}
            </pre>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default XmlToJson;
