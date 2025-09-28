"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown, MoreVertical  } from "lucide-react";
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
        className={`fixed  top-0 left-0 right-0 flex items-center gap-4 text-white  px-8 py-4 transition-all duration-500 ease-in-out z-40 ${
          scrolled
            ? "bg-[linear-gradient(15deg,_#000000,_#382933,_#000000)] border-b border-black  slide-in-from-top  "
            : "bg-transparent border-none shadow-none "
        }`}
        aria-label="Main navigation"
      >



<div className="  flex justify-between h-16 items-center">
          {/* Left side (can be logo later) */}
        <Link href={"/"} className="hidden lg:block  relative w-100 h-30 lg:mt-2 ml-10">
          
         <Image
           src="/assets/images/logo/logo-2.png"
           alt="My Logo"
           layout="fill"
           objectFit="contain"
         />
       </Link>


          <ul className="hidden lg:flex flex-1 justify-end xl:ml-40 gap-10 list-none text-lg p-[10px] mt-2 tracking-[1.0px]">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                {!item.children ? (
                  <Link
                    href={item.href}
                    className="relative block py-2 text-white hover:text-[#8FCDFF] font-bold no-underline transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-white after:to-transparent hover:after:bg-gradient-to-r hover:after:from-[#8FCDFF] hover:after:to-transparent after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <Link href={item.href}  className="flex items-center gap-1 py-2 text-white hover:text-[#8FCDFF] transition-colors font-bold  duration-200 cursor-pointer">
                      {item.label}
                      <ChevronDown
                        size={28}
                        className="transition-transform duration-300 group-hover:rotate-180 "
                      />
                    </Link>
                    <ul className="absolute -left-25 opacity-0 cursor-pointer invisible group-hover:visible  font-bold group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex-col gap-2 text-white bg-[linear-gradient(15deg,_#000000,_#382933,_#000000)] backdrop-blur-[15px] rounded-sm mt-7 p-2 shadow-lg z-50 min-w-[340px]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 hover:bg-white/30 hover:text-[#8FCDFF] rounded transition"
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
</div>

 
{/* Hamburger Button for both screen sizes */}
<div className="flex items-start ml-auto gap-4">
  {/* Mobile Logo */}
  <Link href="/" onClick={() => setOpen(false)} className="relative w-12 h-12 block lg:hidden">
    <Image
      src="/assets/images/logo/logo-2.png"
      alt="Logo"
      layout="fill"
      objectFit="contain"
    />
  </Link>

  {/* Hamburger Button for mobile */}
  <button
    className="text-white font-bold transition hover:scale-105 lg:hidden cursor-pointer"
    onClick={() => setOpen(!open)}
  >
    {open ? <X size={34} /> : <Menu size={38} />}
  </button>


</div>



         
{/* Large screen (>= lg): toggle sidebar */}
<button
  className={`transition hover:scale-105 hidden lg:block cursor-pointer lg:mr-20 z-[60] ${
    scrolled
      ? "text-white hover:text-[#8FCDFF]"
      : "text-white hover:text-[#8FCDFF]" // Change to text-black if bg behind is light
  }`}
  onClick={() => setSidebarOpen(true)}
>
  <Menu size={38} />
</button>

        </nav>
 
    
{/* Mobile menu container */}
{open && (
  <div className="block lg:hidden fixed top-22 left-0 w-full bg-white/5 backdrop-blur-[70px] shadow-lg border-b border-white/20 px-8 py-4 z-50">
    {/* Logo with relative + fixed size for Image fill */}
    <Link href="/" onClick={() => setOpen(false)} className="relative w-12 h-12">
      <Image
        src="/assets/images/logo/logo.png"
        alt="Logo"
        layout="fill"
        objectFit="contain"
      />
    </Link>





    {/* Nav Items */}
    <ul className="list-none mt-10 p-0 flex flex-col gap-2">
      {navItems.map((item) => (
        <li key={item.label} className="border-b border-white/20 pb-3">
          {!item.children ? (
            // ✅ Make full row clickable by wrapping it all in <Link>
            <Link
              href={item.href}
              onClick={() => setOpen(false)}
              className="block w-full text-white text-lg font-bold px-2 py-2 rounded hover:bg-white/10 transition"
            >
              {item.label}
            </Link>
          ) : (
            <div>
              {/* Parent with submenu toggle */}
           <div className="flex justify-between items-center w-full px-2 py-2 rounded hover:bg-white/10 transition">
  {/* Label as Link */}
  <Link
    href={item.href}
    onClick={() => setOpen(false)}
    className="text-white text-lg font-medium"
  >
    {item.label}
  </Link>

  {/* Chevron for submenu toggle */}
  <button
    onClick={() => toggleSubmenu(item.label)}
    className="text-white"
  >
    <ChevronDown
      size={30}
      className={`transition-transform duration-300 ${
        openSubmenu === item.label ? "rotate-180" : ""
      }`}
    />
  </button>
</div>


              {/* Submenu */}
              {openSubmenu === item.label && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
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
