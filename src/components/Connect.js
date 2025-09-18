"use client";
import Link from 'next/link';
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaGooglePlusG,
} from 'react-icons/fa';

export default function Connect() {
  return (
    <section className="bg-gradient-to-b from-[#382933] via-[#372935] to-[#372831] text-white px-8 pb-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contacts */}
        <div className="bg-gradient-to-t from-[#8FCDFF]/40 via-[#5F69A8]/25 to-transparent p-6 rounded border border-white/20 shadow-md ">
          <h3 className="font-semibold mb-4">Address 1</h3>
          <p>+44-7871234567</p>
          <p>plantsstore@gmail.com</p>
          <p className="mt-4">Our social networks:</p>
          <div className="flex flex-wrap gap-4 mt-3 text-white text-2xl">
            <Link href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <FaLinkedin />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-gray-400">
              <FaYoutube />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter />
            </Link>
            <Link href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebook />
            </Link>
            <Link href="#" aria-label="Google Plus" className="hover:text-gray-400">
              <FaGooglePlusG />
            </Link>
          </div>
        </div>

        {/* Catalog */}
        <div className="bg-gradient-to-t from-[#8FCDFF]/40 via-[#5F69A8]/25 to-transparent p-6 rounded border border-white/20 shadow-md">
          <h3 className="font-semibold mb-4">Address 2</h3>
          <p>+44-7871234567</p>
          <p>plantsstore@gmail.com</p>
          <p className="mt-4">Our social networks:</p>
          <div className="flex flex-wrap gap-4 mt-3 text-white text-2xl">
            <Link href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <FaLinkedin />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-gray-400">
              <FaYoutube />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter />
            </Link>
            <Link href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebook />
            </Link>
            <Link href="#" aria-label="Google Plus" className="hover:text-gray-400">
              <FaGooglePlusG />
            </Link>
          </div>
        </div>

       

      </div>
    </section>
  );
}
