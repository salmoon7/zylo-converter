"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Zylo Converter.
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/compress" className="hover:text-blue-500">
            Compress
          </Link>
          <Link href="/convert" className="hover:text-blue-500">
            Convert
          </Link>
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} color="#3c096c" />
          ) : (
            <Menu size={28} color="#3c096c" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white py-4 space-y-2 shadow-md">
          <Link href="/compress" className="block px-6 py-2 hover:bg-gray-100">
            Compress
          </Link>
          <Link href="/convert" className="block px-6 py-2 hover:bg-gray-100">
            Convert
          </Link>
          <Link href="/about" className="block px-6 py-2 hover:bg-gray-100">
            About
          </Link>
          <Link href="/contact" className="block px-6 py-2 hover:bg-gray-100">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
