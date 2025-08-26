"use client";

import Link from "next/link";
import { useState , useEffect } from "react";
import { Menu, X } from "lucide-react";

import ContactFormModal from "./ContactFormModal";

export default function GlassNavbar() {
  const [open, setOpen] = useState(false); // Mobile nav
  const [showForm, setShowForm] = useState(false); // Modal

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/company", label: "Company" },
  { href: "/#contact-us", label: "Contact" },
];

   // 👇 Auto-open form after 3 seconds on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 3000); // 3 sec delay

    return () => clearTimeout(timer); // cleanup
  }, []);
useEffect(() => {
  const footer = document.getElementById("contact-us");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
}, []);


  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <nav
          className="relative flex items-center justify-between text-[16px] w-full gap-4 bg-white/5 backdrop-blur-[20px] shadow-lg px-8 py-4"
          aria-label="Main navigation"
        >

          {/* Desktop Nav Items (visible >= md ~ 768px) */}
          <ul className="hidden lg:flex flex-1 justify-end xl:mr-20 gap-16 list-none  p-[10px] tracking-[2.1px]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative block py-2 text-white no-underline transition-colors duration-200 hover:text-gray-300
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
             after:bg-gradient-to-r after:from-white after:to-transparent 
             after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Us Button (only desktop >= md) */}
          <div className="hidden lg:block mr-20">
            <button
              onClick={() => {
                const footer = document.getElementById("contact-us");
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" });
                }
                setTimeout(() => {
                  setShowForm(true);
                }, 100);
              }}
              className="px-6 py-2 text-white font-semibold cursor-pointer shadow-lg tracking-[1.9px] hover:opacity-90 transition hover:scale-105"
              style={{
                background:
                  "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
              }}
            >
              Book Consulting
            </button>
          </div>

          {/* Hamburger Icon (only < md ~ below 768px) */}
          <button
            className="lg:hidden text-white transition hover:scale-105"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Dropdown (only < md) */}
        {open && (
          <div className="lg:hidden w-full bg-white/5 backdrop-blur-[20px] shadow-lg border-b border-white/20 px-8 py-4">
            <ul className="list-none m-0 p-0 flex flex-col gap-4">
              {navItems.map((item) => (
  <li key={item.href || item.label}>
    <Link href={item.href}>{item.label}</Link>
  </li>
))}


              {/* Contact Button in mobile menu */}
              <li>
                <button
                  onClick={() => {
                    const footer = document.getElementById("contact-us");
                    if (footer) {
                      footer.scrollIntoView({ behavior: "smooth" });
                    }
                    setTimeout(() => {
                      setShowForm(true);
                    }, 100);
                    setOpen(false);
                  }}
                  className="w-full transition hover:scale-105 px-6 py-2 text-white font-semibold cursor-pointer tracking-[1.9px] "
                  style={{
                    background:
                      "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
                  }}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Popup Form Component */}
      <ContactFormModal showForm={showForm} setShowForm={setShowForm} />
    </>
  );
}
