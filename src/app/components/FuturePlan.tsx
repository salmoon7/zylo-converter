"use client";
// components/WhatsComing.js
import { motion } from "framer-motion";
import {
  FaRobot,
  FaPenFancy,
  FaChartLine,
  FaMicrophone,
  FaImage,
  FaFileAlt,
} from "react-icons/fa";

const features = [
  {
    title: "AI-Powered Chatbot",
    description:
      "An intelligent chatbot to assist with inquiries, provide personalized recommendations, and guide you through our services.",
    icon: <FaRobot className="text-primary" />,
  },
  {
    title: "Personalized Content Generation",
    description:
      "Dynamically generated content tailored to your preferences, offering customized service offerings and relevant information.",
    icon: <FaPenFancy className="text-primary" />,
  },
  {
    title: "Predictive Analytics Tools",
    description:
      "AI-driven analytics to anticipate your needs, allowing us to offer proactive solutions and optimize our services.",
    icon: <FaChartLine className="text-primary" />,
  },
  {
    title: "Voice Search Functionality",
    description:
      "Navigate and find information using voice commands for enhanced accessibility and convenience.",
    icon: <FaMicrophone className="text-primary" />,
  },
  {
    title: "AI-Enhanced Image Recognition",
    description:
      "Search for services using images, providing a more interactive and intuitive experience.",
    icon: <FaImage className="text-primary" />,
  },
  {
    title: "AI-Powered Document Reader",
    description:
      "Interact with your documents intelligently, receiving summaries, contextual explanations, and more for an enhanced reading experience.",
    icon: <FaFileAlt className="text-primary" />,
  },
];

const WhatsComing = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 text-gray-900 font-body">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What's Coming</h2>
        <p className="text-lg text-gray-700">
          Explore the upcoming AI-powered features we're developing to enhance
          your experience with Zylo Convert.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
            <a
              href="#"
              className="text-primary hover:underline mt-4 inline-block"
            >
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatsComing;
