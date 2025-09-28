"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import SidebarForm from "./SidebarForm";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaGooglePlusG
} from "react-icons/fa";

export default function homeSidebarSection({ isOpen, onClose }) {
  const [formKey, setFormKey] = useState(0);
  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      setFormKey((prev) => prev + 1); // force fresh SidebarForm
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 z-40  backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-full sm:w-[480px] max-w-full h-screen bg-[linear-gradient(125deg,_#000000,_#372935,_#000000)] z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={onClose}
      >
        <div
          className="flex flex-col h-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
       <div className="flex items-center justify-between border-b border-white/20 flex-shrink-0">
  <Link href="/" onClick={onClose}>
    <Image
      src="/assets/images/logo/logo-2.png"
      alt="Logo"
      width={500}
      height={200}
      className="h-24 w-70 object-contain" 
      priority
    />
  </Link>

  <button
    onClick={onClose}
    className="
      absolute top-6 right-6 
      rounded-3xl
      transition-transform transform
      hover:scale-115
      cursor-pointer
      flex items-center justify-center
    "
    aria-label="Close"
  >
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="11" fill="url(#bgGradient)" />
      <g stroke="url(#xGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="7" x2="17" y2="17" />
        <line x1="17" y1="7" x2="7" y2="17" />
      </g>
      <g stroke="url(#shadowGradient)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
        <line x1="8" y1="8" x2="16" y2="16" />
        <line x1="16" y1="8" x2="8" y2="16" />
      </g>
      <defs>
        <radialGradient id="bgGradient" cx="0.4" cy="0.3" r="1">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="70%" stopColor="#b22222" />
          <stop offset="100%" stopColor="#7a1a1a" />
        </radialGradient>
        <linearGradient id="xGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff0f0" />
          <stop offset="50%" stopColor="#ff7a7a" />
          <stop offset="100%" stopColor="#fff0f0" />
          
        </linearGradient>
        <linearGradient id="shadowGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7a1a1a" />
          <stop offset="100%" stopColor="#ff7a7a" />
        </linearGradient>
      </defs>
    </svg>
  </button>
</div>


          {/* Content */}
          <div className="p-4 text-white overflow-y-auto flex-1">
            <span className="text-4xl font-semibold mb-4 flex justify-center">
              Form
            </span>
            <SidebarForm key={formKey} onClose={onClose} />

            <div className="mt-2 text-sm text-center space-y-2">
  {/* <p>📍 1234 Creative Street, New Delhi, India</p>
  <p>📞 +91 9876543210</p>
  <p>✉️ contact@example.com</p> */}

  <div className="flex justify-center items-center gap-4 mt-6 text-4xl">

              <Link href="https://www.linkedin.com/company/rankinventiv/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>
              <Link href="https://www.instagram.com/rankinventiv/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>
              <Link href="https://www.facebook.com/rankinventiv/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>
              <Link href="https://x.com/rankinventiv" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>
               <Link href="https://www.youtube.com/@Rankinventiv" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="cursor-pointer hover:scale-110 transition hover:text-[#8FCDFF]" />
              </Link>
              <Link href="https://maps.app.goo.gl/MNbdJh3Mn9J7joEn6" target="_blank" rel="noopener noreferrer">
                <FaGooglePlusG className="cursor-pointer hover:scale-150 transition scale-[1.4] hover:text-[#8FCDFF]" />
              </Link>
            
  </div>
</div>

          </div>
        </div>
      </aside>
    </>
  );
}
