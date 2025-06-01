import type { Metadata } from "next";
import { Montserrat, Roboto, Open_Sans, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import and configure fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap", // ADD this
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "400", "700"], // BETTER: use array for flexibility
  display: "swap", // ADD this
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap", // ADD this
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "400", "700"], // USE ARRAY not just "100"
  display: "swap", // ADD this
});

// Metadata
export const metadata: Metadata = {
  title: "Zylo Convert - Fast & Free File Conversions",
  description:
    "Convert documents, images, audio, videos, archives, and code easily with Zylo Convert.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} ${openSans.variable} ${lato.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
