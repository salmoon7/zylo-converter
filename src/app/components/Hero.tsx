"use client";
import { motion } from "framer-motion";
import { Montserrat, Roboto, Open_Sans, Lato } from "next/font/google";

// Import and configure fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "100",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "100",
});

const Hero = () => {
  return (
    <section
      className={`relative bg-white text-primary py-20 text-center overflow-hidden ${montserrat.variable} ${roboto.variable} ${openSans.variable} ${lato.variable}`}
    >
      {/* Animated Blur Effect */}
      <motion.div
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute w-40 h-40 bg-primary opacity-30 blur-3xl rounded-full top-10 left-20"
      ></motion.div>
      <motion.div
        animate={{ x: [0, -100, 100, 0], y: [0, 50, -50, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute w-40 h-40 bg-primary opacity-30 blur-3xl rounded-full top-40 right-20"
      ></motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold">Zylo Convert</h1>
        <p className="mt-4 text-lg md:text-xl">
          Fast & Free File Conversions for documents, images, audio, videos, and
          more.
        </p>
      </div>
    </section>
  );
};

export default Hero;
