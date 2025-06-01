"use client";
import { useState } from "react";
import {
  FaFilePdf,
  FaFileImage,
  FaMusic,
  FaVideo,
  FaArchive,
  FaCode,
  FaChevronDown,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const conversions = [
  {
    title: "Document Conversion",
    description:
      "Convert documents between different formats like PDF, Word, and Excel.",
    icon: <FaFilePdf />,
    bg: "bg-primary",
    path: "/convert/document",
    subcategories: [
      { name: "PDF to Word", path: "/convert/document/pdf-to-word" },
      { name: "Word to PDF", path: "/convert/document/word-to-pdf" },
      { name: "PDF to Excel", path: "/convert/document/pdf-to-excel" },
      { name: "PDF to Image", path: "/convert/document/pdf-to-image" },
      { name: "EBOOK to Pdf", path: "/convert/document/ebook-to-pdf" },
    ],
  },
  {
    title: "Image Conversion",
    description: "Easily convert images between JPG, PNG, and PDF formats.",
    icon: <FaFileImage />,
    bg: "bg-secondary",
    path: "/convert/image",
    subcategories: [
      { name: "JPG to PNG", path: "/convert/image/jpg-to-png" },
      { name: "PNG to JPG", path: "/convert/image/png-to-jpg" },
      { name: "Image to PDF", path: "/convert/image/image-to-pdf" },
    ],
  },
  {
    title: "Audio Conversion",
    description:
      "Convert audio files to different formats or extract audio from video.",
    icon: <FaMusic />,
    bg: "bg-green",
    path: "/convert/audio",
    subcategories: [
      { name: "MP3 to WAV", path: "/convert/audio/mp3-to-wav" },
      { name: "WAV to MP3", path: "/convert/audio/wav-to-mp3" },
      { name: "Audio to Text", path: "/convert/audio/audio-to-text" },
      { name: "MP4 to MP3", path: "/convert/audio/mp4-to-mp3" },
    ],
  },
  {
    title: "Video Conversion",
    description: "Convert videos between different formats or extract audio.",
    icon: <FaVideo />,
    bg: "bg-bay",
    path: "/convert/video",
    subcategories: [
      { name: "MP4 to AVI", path: "/convert/video/mp4-to-avi" },
      { name: "AVI to MP4", path: "/convert/video/avi-to-mp4" },
      { name: "Video to Audio", path: "/convert/video/video-to-audio" },
    ],
  },
  {
    title: "Archive Conversion",
    description:
      "Convert compressed files like ZIP, RAR, and 7z to different formats.",
    icon: <FaArchive />,
    bg: "bg-red",
    path: "/convert/archive",
    subcategories: [
      { name: "ZIP to RAR", path: "/convert/archive/zip-to-rar" },
      { name: "RAR to ZIP", path: "/convert/archive/rar-to-zip" },
      { name: "7z to ZIP", path: "/convert/archive/7z-to-zip" },
    ],
  },
  {
    title: "Code & Data Conversion",
    description: "Convert structured data between JSON, CSV, and XML formats.",
    icon: <FaCode />,
    bg: "bg-primary",
    path: "/convert/code",
    subcategories: [
      { name: "JSON to CSV", path: "/convert/code/json-to-csv" },
      { name: "CSV to JSON", path: "/convert/code/csv-to-json" },
      { name: "XML to JSON", path: "/convert/code/xml-to-json" },
    ],
  },
];

const FileConversion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  return (
    <section className="py-16 px-6 bg-white text-primary">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-header mb-10">
        File Conversion
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {conversions.map((conversion, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl ${conversion.bg} text-white shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-5xl mb-4">{conversion.icon}</span>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              {conversion.title}
              <FaChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </h3>
            <p className="text-sm mt-2">{conversion.description}</p>
            <p className="text-xs mt-1 opacity-80">Click the arrow to expand</p>

            {openIndex === index && (
              <ul className="mt-4 space-y-2 bg-white text-gray-900 p-4 rounded-lg w-full">
                {conversion.subcategories.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-sm bg-gray-200 p-2 rounded-md cursor-pointer hover:bg-gray-300"
                    onClick={() => router.push(sub.path)}
                  >
                    {sub.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FileConversion;
