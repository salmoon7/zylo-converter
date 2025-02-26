"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaFileImage,
  FaMusic,
  FaVideo,
  FaArchive,
  FaCode,
} from "react-icons/fa";

const conversions = [
  {
    title: "Document Conversion",
    description: "Convert PDFs, Word, and Excel files into various formats.",
    icon: <FaFilePdf className="text-red" />,
    subcategories: [
      "PDF to Word",
      "Word to PDF",
      "PDF to Excel",
      "PDF to Image",
    ],
  },
  {
    title: "Image Conversion",
    description: "Convert images between JPG, PNG, and other formats.",
    icon: <FaFileImage className="text-green" />,
    subcategories: ["JPG to PNG", "PNG to JPG", "Image to PDF"],
  },
  {
    title: "Audio Conversion",
    description: "Transform audio files and extract sound from videos.",
    icon: <FaMusic className="text-bay" />,
    subcategories: ["MP3 to WAV", "WAV to MP3", "Audio to Text", "MP4 to MP3"],
  },
  {
    title: "Video Conversion",
    description: "Convert video formats and extract audio easily.",
    icon: <FaVideo className="text-secondary" />,
    subcategories: ["MP4 to AVI", "AVI to MP4", "Video to Audio"],
  },
  {
    title: "Archive Conversion",
    description: "Convert compressed files between ZIP, RAR, and 7z.",
    icon: <FaArchive className="text-primary" />,
    subcategories: ["ZIP to RAR", "RAR to ZIP", "7z to ZIP"],
  },
  {
    title: "Code & Data Conversion",
    description: "Easily convert JSON, CSV, and XML files.",
    icon: <FaCode className="text-bay" />,
    subcategories: ["JSON to CSV", "CSV to JSON", "XML to JSON"],
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 bg-white text-primary font-body">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-header mb-6">
        Information & Supported Conversions
      </h2>

      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
        Convert your media effortlessly with our free online file converter. We
        support a wide range of formats—just select your target format and start
        converting. If you don’t see the conversion you need, reach out to us
        via email—we’re happy to help!
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {conversions.map((conversion, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-xl shadow-md border border-gray-200"
          >
            <button
              className="w-full flex justify-between items-center p-4 rounded-lg text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{conversion.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold">{conversion.title}</h3>
                  <p className="text-sm text-gray-600">
                    {conversion.description}
                  </p>
                </div>
              </div>
              <span
                className={`transition-transform text-primary text-2xl ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>

            {openIndex === index && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden bg-white p-4 rounded-lg border-l-4 border-primary"
              >
                {conversion.subcategories.map((sub, subIndex) => (
                  <li key={subIndex} className="text-gray-700 py-1">
                    - {sub}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
