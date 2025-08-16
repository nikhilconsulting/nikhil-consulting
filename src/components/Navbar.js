"use client";

import Link from "next/link";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal"; // Import the new component

export default function GlassNavbar() {
  const [open, setOpen] = useState(false); // Mobile nav
  const [showForm, setShowForm] = useState(false); // Modal

  const navItems = [
    { href: "#our-values", label: "Our Values" },
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#clients-testimonials", label: "Clients Testimonials" },
    { href: "#faqs", label: "Faqs" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <nav
          className="relative flex items-center justify-center text-[16px] w-full gap-4 bg-white/5 backdrop-blur-[20px] shadow-lg px-8 py-4"
          aria-label="Main navigation"
        >
          {/* Center Nav Items */}
          <ul className="flex gap-16 list-none m-0 p-[10px] tracking-[2.1px]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-white no-underline transition-colors duration-200 hover:text-gray-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Us Button */}
          <div className="absolute right-50">
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-2 text-white font-semibold cursor-pointer shadow-lg tracking-[1.9px] hover:opacity-90 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
              }}
            >
              Contact Us
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {open && (
          <div className="mt-2 w-full bg-white/5 backdrop-blur-[20px] shadow-lg border-b border-white/20 px-8 py-2">
            <ul className="list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-white no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Popup Form Component */}
      <ContactFormModal showForm={showForm} setShowForm={setShowForm} />
    </>
  );
}
