"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Menu, X, ChevronDown  } from "lucide-react";
import ContactFormModal from "./ContactFormModal";
import { usePathname } from "next/navigation";
import HomeSidebarSection from "./HomeSidebarSection";

export default function GlassNavbar2() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // for large screen sidebar

    const [open, setOpen] = useState(false); 
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const [showForm, setShowForm] = useState(false); 
  const [showContactForm, setShowContactForm] = useState(false); 
  const pathname = usePathname();





  const [scrolled, setScrolled] = useState(false);


 const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
 
  {
    href: "/services",
    label: "Services",
    children: [
        { href: "/services/search-engine-optimisation-page", label: "Search Engine Optimisation (SEO)" },
     
    
      { href: "/services/local-seo-page", label: "Local SEO" },
      { href: "/services/google-ads-page", label: "Google Ads" },
     
        { href: "/services/meta-ads-page", label: "Meta Ads" },
         { href: "/services/website-development-page", label: "Website Development" },
         { href: "/services/social-media-marketing-page", label: "Social Media Marketing" },
    ],
  },
  { href: "/digital-marketing-consultant", label: "Consultancy" },
  // { href: "/career", label: "Career" },
  { href: "/contact-us", label: "Contact Us" },
];

 // Submenu toggle handler
  const toggleSubmenu = (label) => {
    if (openSubmenu === label) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(label);
    }
  };

useEffect(() => {
const timer = setTimeout(() => {

         if (pathname === "/contact-us") {
      setSidebarOpen(true);
    }
    }, 7000);

  // Scroll handling (only on home page)
  if (pathname !== "/") {
    setScrolled(true); // Always solid navbar on non-home pages
  } else {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll(); // Run once on mount
    window.addEventListener("scroll", handleScroll);

    // Clean up scroll listener
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }

  // Cleanup timer on unmount (non-home pages)
  return () => {
    clearTimeout(timer);
  };
}, [pathname]);


  return (
    <>
    


    
<header className="fixed top-0 left-0 right-0 z-50 w-full">
<nav
  // 👇 px-6 को बदलकर px-4 sm:px-8 lg:px-16 किया गया 👇
  className={`fixed top-0 left-0 right-0 flex items-center gap-3 text-white px-4 sm:px-8 lg:px-10 xl:px-28 py-4 transition-all duration-500 ease-in-out z-40 ${
    scrolled
      ? "bg-[linear-gradient(15deg,_#000000,_#382933,_#000000)] border-b border-black slide-in-from-top"
      : "bg-transparent border-none shadow-none"
  }`}
>
  <div className="flex items-center flex-shrink-0 -ml-14 lg:-ml-14">
    {/* -ml-8 means ~2rem left shift */}
    <Link href="/">
      <Image
        src="/assets/images/logo/logo.png"
        alt="Logo"
        width={200}
        height={100}
        className="h-auto w-auto"
        priority
      />
    </Link>
  </div>

  {/* इस ul को पहले ही center align किया जा चुका है (justify-center से) */}
  <ul className="hidden lg:flex flex-1 justify-center gap-6 whitespace-nowrap list-none text-base tracking-[1.0px] min-w-0 mr-8 mt-1">
    {navItems.map((item) => (
      <li key={item.label} className="relative group">
        {!item.children ? (
          <Link
            href={item.href}
            className="relative block py-2 text-white hover:text-[#8FCDFF] no-underline transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-white after:to-transparent hover:after:bg-gradient-to-r hover:after:from-[#8FCDFF] hover:after:to-transparent after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.label}
          </Link>
        ) : (
          <>
            <Link
              href={item.href}
              className="flex items-center gap-1 py-2 text-white hover:text-[#8FCDFF] transition-colors duration-200 cursor-pointer"
            >
              {item.label}
              <ChevronDown
                size={24}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </Link>
            <ul className="absolute left-[-80px] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex-col gap-2 text-white bg-[linear-gradient(15deg,_#000000,_#382933,_#000000)] backdrop-blur-[15px] rounded-sm mt-7 p-2 shadow-lg z-50 min-w-[300px]">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-white/30 hover:text-[#8FCDFF] rounded transition"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </li>
    ))}
  </ul>

  {/* Controls container for Hamburger + Book Meeting button */}
  <div className="flex items-center gap-4 ml-auto">
    {/* Hamburger Button for mobile */}
    <button
      className="text-white font-bold transition hover:scale-105 lg:hidden cursor-pointer"
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
    >
      {/* ... icons (Menu/X) ... */}
      {open ? <X size={34} /> : <Menu size={38} />}
    </button>

    {/* Book Meeting button for desktop */}
    <button
      className={`group hidden lg:flex items-center cursor-pointer px-4 py-2 font-semibold text-white relative overflow-hidden text-lg z-[60] ${
        scrolled ? "hover:text-[#8FCDFF]" : "hover:text-[#8FCDFF]"
      }`}
      onClick={() => setSidebarOpen(true)}
    >
      <span className="relative z-10 flex items-center gap-2">
        Book Meeting <FaArrowRight />
      </span>

      <span
        className="absolute inset-0 bg-gradient-to-r from-[#372935] via-black to-[#372935] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out"
        aria-hidden="true"
      ></span>

      <span
        className="absolute inset-0 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] z-[-1]"
        aria-hidden="true"
      ></span>
    </button>
  </div>
</nav>

  {/* Mobile dropdown menu */}
  {open && (
    <div className="block lg:hidden fixed top-[64px] left-0 w-full bg-white/5 backdrop-blur-[70px] shadow-lg border-b border-white/20 px-8 py-4 z-50">
      <ul className="list-none mt-10 p-0 flex flex-col gap-2">
        {navItems.map((item) => (
          <li key={item.label} className="border-b border-white/20 pb-3">
            {!item.children ? (
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block w-full text-white text-lg font-bold px-2 py-2 rounded hover:bg-white/10 transition"
              >
                {item.label}
              </Link>
            ) : (
              <div>
                <div className="flex justify-between items-center w-full px-2 py-2 rounded hover:bg-white/10 transition">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-white text-lg font-medium"
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="text-white"
                    aria-expanded={openSubmenu === item.label}
                    aria-controls={`${item.label}-submenu`}
                  >
                    <ChevronDown
                      size={30}
                      className={`transition-transform duration-300 ${
                        openSubmenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {openSubmenu === item.label && (
                  <ul
                    id={`${item.label}-submenu`}
                    className="ml-4 mt-2 flex flex-col gap-2"
                  >
                    {item.children.map((child) => (
                      <li key={child.href} className="border-b border-white/20 pb-2">
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block text-white font-medium text-lg px-2 py-2 rounded hover:bg-white/10 transition"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
        <div className="flex justify-center w-full my-6"> 
        {/* Book Meeting button for desktop */}
      <button
        className={`group lg:hidden block items-center cursor-pointer mt-4 px-4 py-2 font-semibold text-white relative overflow-hidden text-lg z-[60] ${
          scrolled ? "hover:text-[#8FCDFF]" : "hover:text-[#8FCDFF]"
        }`}
        onClick={() => setSidebarOpen(true)}
      >
        <span className="relative z-10 flex items-center gap-2">
          Book Meeting <FaArrowRight />
        </span>

        <span
          className="absolute inset-0 bg-gradient-to-r from-[#372935] via-black to-[#372935] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out"
          aria-hidden="true"
        ></span>

        <span
          className="absolute inset-0 bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] z-[-1]"
          aria-hidden="true"
        ></span>
      </button>
      </div>
    </div>
  )}

  <HomeSidebarSection isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
</header>


      {/* Popup Form Component */}

      <ContactFormModal
        showForm={showContactForm}
        setShowForm={setShowContactForm}
      />
  
 <style>{`
        .slide-in-from-top {
          animation: slideInFromTop 0.5s ease forwards;
        }
        @keyframes slideInFromTop {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

    </>
  );
}
