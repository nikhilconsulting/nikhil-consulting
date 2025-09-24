"use client";

import Link from "next/link";
import { useState , useEffect } from "react";
import { Menu, X } from "lucide-react";

import ConsultingFormModal from "./ConsultingFormModal";
import ContactFormModal from "./ContactFormModal";

export default function GlassNavbar() {
  const [open, setOpen] = useState(false); // Mobile nav
  const [showForm, setShowForm] = useState(false); // Modal
 const [showContactForm, setShowContactForm] = useState(false); // 👈 New state
// ✅ Define handler function FIRST
const handleContactClick = () => {
  setShowContactForm(true);
  setOpen(false); // Close mobile nav if open
};

// ✅ Now define navItems
const navItems = [
  { href: "/digital-marketing-consultant", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "/", label: "Company" },
  { label: "Contact", onClick: handleContactClick },
];

   // 👇 Auto-open form after 3 seconds on first visit
  useEffect(() => {
      const footer = document.getElementById("book-consulting");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
    const timer = setTimeout(() => {
      setShowForm(true);

    }, 3000); // 3 sec delay

    return () => clearTimeout(timer);
    
  }, []);



// useEffect(() => {
//   const timer = setTimeout(() => {
//     setShowForm(true);

//     // Scroll after form is shown
//     const footer = document.getElementById("book-consulting");
//     if (footer) {
//       footer.scrollIntoView({ behavior: "smooth" });
//     }

//   }, 3000); // Wait 3 seconds before showing form and scrolling

//   return () => clearTimeout(timer); // Clean up
// }, []);



  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <nav
          className="relative flex items-center text-[16px] w-full gap-4 bg-white/5 backdrop-blur-[20px] shadow-lg px-8 py-4"
          aria-label="Main navigation"
        >
  {/* Left side (can be logo later) */}
  {/* <div className="flex-1"></div> */}

          {/* Desktop Nav Items (visible >= md ~ 768px) */}
          <ul className="hidden lg:flex flex-1 justify-end xl:mr-20 gap-16 list-none text-base  p-[10px] tracking-[1.0px]">
          {navItems.map((item) => (
  <li key={item.href || item.label}>
    {item.onClick ? (
      <button
        onClick={() => {
          item.onClick();
          setOpen(false); // Close mobile menu if needed
        }}
        className="relative block py-2 text-white no-underline transition-colors duration-200 hover:text-gray-300
     after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
     after:bg-gradient-to-r after:from-white after:to-transparent 
     after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
      >
        {item.label}
      </button>
    ) : (
      <Link
        href={item.href}
        className="relative block py-2 text-white no-underline transition-colors duration-200 hover:text-gray-300
     after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
     after:bg-gradient-to-r after:from-white after:to-transparent 
     after:transition-all after:duration-300 hover:after:w-full"
      >
        {item.label}
      </Link>
    )}
  </li>
))}

          </ul>

          {/* Book Consulting Us Button (only desktop >= md) */}
          <div className="hidden lg:block mr-20">
            <button
              onClick={() => {
                const footer = document.getElementById("book-consulting");
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" });
                }
                setTimeout(() => {
                  setShowForm(true);
                }, 100);
              }}
              className="px-6 py-2 text-white font-semibold text-base cursor-pointer shadow-lg tracking-[1.0px] hover:opacity-90 transition hover:scale-105"
              style={{
                background:
                  "linear-gradient(90deg, #5F69A8, #616FB4, #657AC9, #6E8EEE, #80B3F6, #8FCDFF)",
              }}
            >
              Book Consulting
            </button>
          </div>

          {/* Hamburger Icon (only < md ~ below 768px) */}
         <div className="flex lg:hidden ml-auto">
    <button
      className="text-white transition hover:scale-105"
      onClick={() => setOpen(!open)}
    >
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>
        </nav>

        {/* Mobile Dropdown (only < md) */}
        {open && (
          <div className="lg:hidden w-full bg-white/5 backdrop-blur-[20px] shadow-lg border-b border-white/20 px-8 py-4">
            <ul className="list-none m-0 p-0 flex flex-col gap-4">
     {navItems.map((item) => (
  <li key={item.label}> {/* label is unique */}
    {item.onClick ? (
      <button
        onClick={() => {
          item.onClick();
          setOpen(false); // close mobile nav
        }}
        className="text-white hover:text-gray-300 cursor-pointer"
      >
        {item.label}
      </button>
    ) : (
      <Link
        href={item.href}
        className="text-white hover:text-gray-300"
        onClick={() => setOpen(false)} // optionally close menu on link click
      >
        {item.label}
      </Link>
    )}
  </li>
))}



              {/* Book Consulting Button in mobile menu */}
              <li>
                <button
                  onClick={() => {
                    const footer = document.getElementById("book-consulting");
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
                  Book Consulting
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Popup Form Component */}
      <ConsultingFormModal showForm={showForm} setShowForm={setShowForm} />
   
  <ContactFormModal
    showForm={showContactForm}
    setShowForm={setShowContactForm}
  />


    </>
  );
}
