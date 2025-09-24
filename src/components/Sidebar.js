"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import SidebarForm from "./SidebarForm";

export default function SidebarToggle({ isOpen, onClose }) {
  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-full sm:w-[480px] max-w-full h-screen bg-black z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={onClose}
      >
        <div
          className="flex flex-col h-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/20 flex-shrink-0">
            <Link href="/" onClick={onClose}>
              <img
                src="/assets/images/logo/logomobile.png"
                alt="Logo"
                className="h-auto max-h-12 w-auto object-contain"
              />
            </Link>

            <button onClick={onClose}>
              <X className="w-7 h-7 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 text-white overflow-y-auto flex-1">
            <span className="text-4xl font-semibold mb-4 flex justify-center">
              Form
            </span>
            <SidebarForm onClose={onClose} />
          </div>
        </div>
      </aside>
    </>
  );
}
