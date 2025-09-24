"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="relative w-100 h-100 mt-20">
  <Image
    src="/assets/images/logo/logomobile.png"
    alt="My Logo"
    layout="fill"
    objectFit="contain"
  />
</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <div className="text-gray-700 hover:text-indigo-600">Home</div>
            </Link>
            <Link href="/about">
              <div className="text-gray-700 hover:text-indigo-600">About</div>
            </Link>
            <Link href="/services">
              <div className="text-gray-700 hover:text-indigo-600">Services</div>
            </Link>
            <Link href="/contact">
              <div className="text-gray-700 hover:text-indigo-600">Contact</div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 shadow-md">
          <Link href="/">
            <div
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-100"
            >
              Home
            </div>
          </Link>
          <Link href="/about">
            <div
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-100"
            >
              About
            </div>
          </Link>
          <Link href="/services">
            <div
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-100"
            >
              Services
            </div>
          </Link>
          <Link href="/contact">
            <div
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-100"
            >
              Contact
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}
