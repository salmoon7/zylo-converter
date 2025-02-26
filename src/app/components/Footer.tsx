"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6 font-body">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Solutions</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/education" className="hover:underline">
                Education
              </Link>
            </li>
            <li>
              <Link href="/online-convert" className="hover:underline">
                Online Convert
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:underline">
                Help
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="hover:underline">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/security" className="hover:underline">
                Security
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Product</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/developers" className="hover:underline">
                Developers
              </Link>
            </li>
            <li>
              <Link href="/file-formats" className="hover:underline">
                File Formats
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms-of-use" className="hover:underline">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/imprint" className="hover:underline">
                Imprint
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-400 pt-4">
        <p className="text-sm">
          &copy; 2024 Zylo Convert. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
